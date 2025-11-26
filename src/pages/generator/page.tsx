import { useState } from 'react';
import FormSection from './components/FormSection';
import CVPreview from './components/CVPreview';
import AIGenerationModal from './components/AIGenerationModal';
import AuthButton from '../../components/feature/AuthButton';
import CreditCounter from '../../components/feature/CreditCounter';
import GuestBanner from '../../components/feature/GuestBanner';
import { createClient } from '@supabase/supabase-js';
import { SEO, generateWebPageSchema, generateBreadcrumbSchema } from '../../utils/seo';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export default function GeneratorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(
        'Generador de CV con IA - CV Maker AI',
        'Crea tu currículum profesional con inteligencia artificial. Elige entre múltiples plantillas, completa tus datos y genera un CV optimizado para ATS en minutos.',
        '/generator'
      ),
      generateBreadcrumbSchema([
        { name: 'Inicio', url: '/' },
        { name: 'Generador de CV', url: '/generator' }
      ])
    ]
  };

  const [template, setTemplate] = useState<'ats' | 'modern' | 'creative' | 'professional' | 'executive' | 'minimalist' | 'elegant' | 'tech' | 'corporate'>('modern');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [cvCount, setCvCount] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    objective: '',
    experience: [{ company: '', position: '', period: '', description: '' }],
    education: [{ institution: '', degree: '', period: '' }],
    skills: '',
    jobOffer: ''
  });
  const [remainingCredits, setRemainingCredits] = useState<number>(3);
  const [showQuotaModal, setShowQuotaModal] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);

  // Cargar contador de CVs del día
  useEffect(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('cvCounterDate');
    const savedCount = localStorage.getItem('cvCounter');

    if (savedDate === today && savedCount) {
      setCvCount(parseInt(savedCount));
    } else {
      // Nuevo día, resetear contador
      localStorage.setItem('cvCounterDate', today);
      localStorage.setItem('cvCounter', '0');
      setCvCount(0);
    }
  }, []);

  const incrementCvCount = () => {
    const newCount = cvCount + 1;
    setCvCount(newCount);
    localStorage.setItem('cvCounter', newCount.toString());
  };

  const checkDailyLimit = () => {
    return cvCount >= 3;
  };

  const templates = [
    { id: 'ats', name: 'ATS Optimizado', description: 'Limpio y profesional' },
    { id: 'modern', name: 'Moderno', description: 'Con gradientes elegantes' },
    { id: 'creative', name: 'Creativo', description: 'Colorido y vibrante' },
    { id: 'professional', name: 'Profesional', description: 'Clásico con línea lateral' },
    { id: 'executive', name: 'Ejecutivo', description: 'Premium y sofisticado' },
    { id: 'minimalist', name: 'Minimalista', description: 'Simple y centrado' },
    { id: 'elegant', name: 'Elegante', description: 'Refinado con avatar' },
    { id: 'tech', name: 'Tech', description: 'Estilo desarrollador' },
    { id: 'corporate', name: 'Corporativo', description: 'Formal y empresarial' },
    { id: 'bold', name: 'Audaz', description: 'Impactante y moderno' },
    { id: 'classic', name: 'Clásico', description: 'Tradicional y elegante' },
    { id: 'artistic', name: 'Artístico', description: 'Creativo con degradados' },
    { id: 'simple', name: 'Simple', description: 'Minimalista y directo' },
    { id: 'premium', name: 'Premium', description: 'Ejecutivo de lujo' },
    { id: 'dynamic', name: 'Dinámico', description: 'Energético y moderno' },
    { id: 'clean', name: 'Limpio', description: 'Ordenado y claro' },
    { id: 'vibrant', name: 'Vibrante', description: 'Colorido y llamativo' },
    { id: 'sophisticated', name: 'Sofisticado', description: 'Elegante y refinado' },
    { id: 'fresh', name: 'Fresco', description: 'Moderno y amigable' },
    { id: 'compact', name: 'Compacto', description: 'Eficiente y conciso' },
  ];

  const exampleCVs = [
    {
      name: 'Marketing Manager',
      template: 'modern' as const,
      data: {
        fullName: 'Ana Martínez García',
        email: 'ana.martinez@email.com',
        phone: '+34 612 345 678',
        location: 'Madrid, España',
        objective: 'Marketing Manager con más de 8 años de experiencia liderando estrategias digitales innovadoras. Especializada en crecimiento de marca, análisis de datos y gestión de equipos multidisciplinarios. Busco impulsar el crecimiento empresarial mediante campañas creativas y orientadas a resultados medibles.',
        experience: [
          {
            company: 'Tech Solutions SL',
            position: 'Marketing Manager',
            period: 'Enero 2020 - Presente',
            description: 'Lideré el equipo de marketing digital aumentando el ROI en un 150%. Implementé estrategias de contenido que generaron 2M+ de impresiones mensuales. Gestioné presupuestos de €500K+ en campañas multicanal.'
          },
          {
            company: 'Digital Agency Pro',
            position: 'Senior Marketing Specialist',
            period: 'Marzo 2017 - Diciembre 2019',
            description: 'Desarrollé campañas de email marketing con tasas de conversión del 25%. Coordiné lanzamientos de productos que superaron objetivos de ventas en un 40%. Analicé métricas clave para optimizar estrategias.'
          }
        ],
        education: [
          {
            institution: 'Universidad Complutense de Madrid',
            degree: 'Máster en Marketing Digital',
            period: '2015 - 2017'
          },
          {
            institution: 'Universidad Autónoma de Madrid',
            degree: 'Grado en Administración de Empresas',
            period: '2011 - 2015'
          }
        ],
        skills: 'Google Analytics, SEO/SEM, Marketing Automation, Social Media Strategy, Content Marketing, Email Marketing, Adobe Creative Suite, Data Analysis',
        jobOffer: ''
      }
    },
    {
      name: 'Software Developer',
      template: 'tech' as const,
      data: {
        fullName: 'Carlos Rodríguez López',
        email: 'carlos.dev@email.com',
        phone: '+34 623 456 789',
        location: 'Barcelona, España',
        objective: 'Full Stack Developer apasionado por crear soluciones tecnológicas escalables y eficientes. Con 6 años de experiencia en desarrollo web y móvil, especializado en React, Node.js y arquitecturas cloud. Comprometido con las mejores prácticas de código y metodologías ágiles.',
        experience: [
          {
            company: 'StartupTech Inc',
            position: 'Senior Full Stack Developer',
            period: 'Junio 2021 - Presente',
            description: 'Arquitecté y desarrollé aplicaciones web de alto rendimiento utilizando React y Node.js. Reduje tiempos de carga en un 60% mediante optimizaciones avanzadas. Lideré la migración a microservicios en AWS, mejorando la escalabilidad del sistema.'
          },
          {
            company: 'WebDev Solutions',
            position: 'Full Stack Developer',
            period: 'Enero 2018 - Mayo 2021',
            description: 'Implementé APIs RESTful y GraphQL para aplicaciones móviles con más de 100K usuarios. Colaboré en equipos ágiles utilizando Scrum. Desarrollé features que aumentaron la retención de usuarios en un 35%.'
          }
        ],
        education: [
          {
            institution: 'Universidad Politécnica de Cataluña',
            degree: 'Grado en Ingeniería Informática',
            period: '2014 - 2018'
          }
        ],
        skills: 'JavaScript, TypeScript, React, Node.js, Python, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, Git, CI/CD, Agile/Scrum',
        jobOffer: ''
      }
    },
    {
      name: 'Executive Director',
      template: 'executive' as const,
      data: {
        fullName: 'María Isabel Fernández',
        email: 'mi.fernandez@executive.com',
        phone: '+34 634 567 890',
        location: 'Valencia, España',
        objective: 'Directora Ejecutiva con 15+ años de experiencia transformando organizaciones y liderando equipos de alto rendimiento. Historial comprobado en crecimiento empresarial, expansión internacional y optimización operativa. Especializada en estrategia corporativa, fusiones y adquisiciones, y desarrollo de talento.',
        experience: [
          {
            company: 'Global Enterprises SA',
            position: 'Chief Operating Officer',
            period: 'Enero 2018 - Presente',
            description: 'Dirigí operaciones globales con presupuesto de €50M+ y equipos de 200+ personas en 5 países. Implementé transformación digital que aumentó eficiencia operativa en 45%. Lideré 3 adquisiciones estratégicas que expandieron cuota de mercado en 30%.'
          },
          {
            company: 'Innovation Corp',
            position: 'VP of Operations',
            period: 'Marzo 2013 - Diciembre 2017',
            description: 'Optimicé procesos operativos reduciendo costos en €5M anuales. Desarrollé estrategias de expansión que abrieron 4 nuevos mercados internacionales. Construí cultura organizacional de alto rendimiento con índice de satisfacción del 92%.'
          }
        ],
        education: [
          {
            institution: 'IESE Business School',
            degree: 'Executive MBA',
            period: '2011 - 2013'
          },
          {
            institution: 'Universidad de Valencia',
            degree: 'Licenciatura en Economía',
            period: '2003 - 2008'
          }
        ],
        skills: 'Strategic Planning, P&L Management, M&A, Change Management, Team Leadership, Business Development, International Expansion, Financial Analysis',
        jobOffer: ''
      }
    },
    {
      name: 'Graphic Designer',
      template: 'creative' as const,
      data: {
        fullName: 'Laura Sánchez Ruiz',
        email: 'laura.design@email.com',
        phone: '+34 645 678 901',
        location: 'Sevilla, España',
        objective: 'Diseñadora Gráfica creativa con 7 años de experiencia creando identidades visuales memorables y campañas de impacto. Especializada en branding, diseño editorial y motion graphics. Apasionada por transformar ideas en experiencias visuales que conectan con las audiencias.',
        experience: [
          {
            company: 'Creative Studio Plus',
            position: 'Senior Graphic Designer',
            period: 'Abril 2019 - Presente',
            description: 'Diseñé identidades corporativas completas para 30+ clientes, incluyendo logos, guías de estilo y materiales de marketing. Lideré proyectos de rebranding que aumentaron reconocimiento de marca en 70%. Creé campañas visuales premiadas en festivales internacionales.'
          },
          {
            company: 'Design Agency Pro',
            position: 'Graphic Designer',
            period: 'Junio 2016 - Marzo 2019',
            description: 'Desarrollé piezas gráficas para redes sociales con engagement superior al 15%. Colaboré con equipos de marketing en campañas integradas. Diseñé packaging de productos que incrementaron ventas en un 25%.'
          }
        ],
        education: [
          {
            institution: 'Escuela de Arte de Sevilla',
            degree: 'Grado Superior en Diseño Gráfico',
            period: '2013 - 2016'
          }
        ],
        skills: 'Adobe Creative Suite, Figma, Sketch, Branding, Typography, Illustration, Motion Graphics, UI/UX Design, Photography, Print Design',
        jobOffer: ''
      }
    },
    {
      name: 'Financial Analyst',
      template: 'corporate' as const,
      data: {
        fullName: 'Javier Moreno Torres',
        email: 'j.moreno@finance.com',
        phone: '+34 656 789 012',
        location: 'Bilbao, España',
        objective: 'Analista Financiero con sólida experiencia en modelado financiero, análisis de inversiones y planificación estratégica. 5 años optimizando rentabilidad empresarial mediante análisis riguroso de datos y recomendaciones estratégicas. Certificado CFA Level II.',
        experience: [
          {
            company: 'Investment Bank SA',
            position: 'Senior Financial Analyst',
            period: 'Septiembre 2020 - Presente',
            description: 'Realicé análisis de valoración de empresas para operaciones de M&A por valor de €200M+. Desarrollé modelos financieros complejos que mejoraron precisión de forecasting en 30%. Asesoré a clientes en decisiones de inversión estratégicas.'
          },
          {
            company: 'Corporate Finance Ltd',
            position: 'Financial Analyst',
            period: 'Enero 2018 - Agosto 2020',
            description: 'Elaboré informes financieros mensuales para la alta dirección. Identifiqué oportunidades de ahorro que redujeron costos operativos en €2M anuales. Participé en due diligence de 5 adquisiciones corporativas.'
          }
        ],
        education: [
          {
            institution: 'Universidad de Deusto',
            degree: 'Máster en Finanzas Corporativas',
            period: '2016 - 2018'
          },
          {
            institution: 'Universidad del País Vasco',
            degree: 'Grado en Economía',
            period: '2012 - 2016'
          }
        ],
        skills: 'Financial Modeling, Excel Avanzado, Bloomberg Terminal, Valuation, M&A Analysis, Financial Reporting, SAP, Power BI, Risk Management, CFA Level II',
        jobOffer: ''
      }
    },
    {
      name: 'HR Manager',
      template: 'professional' as const,
      data: {
        fullName: 'Patricia González Martín',
        email: 'patricia.hr@email.com',
        phone: '+34 667 890 123',
        location: 'Zaragoza, España',
        objective: 'HR Manager estratégica con 10 años de experiencia transformando culturas organizacionales y desarrollando talento. Especializada en gestión del cambio, employer branding y diseño de programas de desarrollo. Comprometida con crear entornos laborales inclusivos y de alto rendimiento.',
        experience: [
          {
            company: 'Tech Corporation SL',
            position: 'HR Manager',
            period: 'Febrero 2019 - Presente',
            description: 'Lideré estrategia de talento para organización de 500+ empleados. Reduje rotación de personal en 40% mediante programas de engagement y desarrollo. Implementé sistema de evaluación de desempeño que mejoró productividad en 25%.'
          },
          {
            company: 'Business Solutions SA',
            position: 'HR Business Partner',
            period: 'Mayo 2015 - Enero 2019',
            description: 'Gestioné procesos de reclutamiento que redujeron tiempo de contratación en 50%. Diseñé programas de formación que aumentaron satisfacción laboral al 88%. Asesoré a managers en gestión de equipos y resolución de conflictos.'
          }
        ],
        education: [
          {
            institution: 'Universidad de Zaragoza',
            degree: 'Máster en Dirección de Recursos Humanos',
            period: '2013 - 2015'
          },
          {
            institution: 'Universidad de Zaragoza',
            degree: 'Grado en Psicología',
            period: '2009 - 2013'
          }
        ],
        skills: 'Talent Management, Recruitment, Employee Engagement, Performance Management, Change Management, Compensation & Benefits, HR Analytics, Labor Law, Coaching',
        jobOffer: ''
      }
    }
  ];

  const loadExample = (example: typeof exampleCVs[0]) => {
    setFormData(example.data);
    setTemplate(example.template);
    setShowExamples(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGenerateWithAI = async () => {
    if (!supabase) {
      alert('Por favor, conecta Supabase para usar esta funcionalidad');
      return;
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.user) {
        // Usuario no logueado - mostrar modal de login
        const shouldLogin = confirm('Necesitas iniciar sesión con Google para generar CVs.\n\n¿Deseas iniciar sesión ahora?');
        if (shouldLogin) {
          await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
              redirectTo: `${window.location.origin}/generator`,
            },
          });
        }
        return;
      }

      // Verificar créditos antes de generar
      const { data: creditsData, error: creditsError } = await supabase.functions.invoke('check-credits', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (creditsError) throw creditsError;

      if (creditsData?.remaining <= 0) {
        setShowQuotaModal(true);
        return;
      }

      // Abrir modal de generación con IA
      setShowAIModal(true);

    } catch (error) {
      console.error('Error al verificar créditos:', error);
      alert('Error al verificar créditos. Por favor, intenta de nuevo.');
    }
  };

  const handleAIGenerate = async (prompt: string) => {
    if (!supabase) return;

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) return;

      // Llamar a la función edge para generar CV
      const { data, error } = await supabase.functions.invoke('generate-cv', {
        body: { prompt, formData },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        if (error.message?.includes('quota_exhausted')) {
          setShowQuotaModal(true);
          setShowAIModal(false);
          return;
        }
        throw error;
      }

      // Actualizar formulario con datos generados
      if (data?.cvData) {
        setFormData(data.cvData);
      }

      // Refrescar contador de créditos
      if ((window as any).refreshCredits) {
        (window as any).refreshCredits();
      }

      setShowAIModal(false);

    } catch (error) {
      console.error('Error al generar CV:', error);
      alert('Error al generar CV. Por favor, intenta de nuevo.');
    }
  };

  const handleExportPDF = () => {
    if (checkDailyLimit()) {
      setShowLimitModal(true);
      return;
    }

    if (!formData.fullName) {
      alert('Por favor, completa al menos tu nombre antes de exportar.');
      return;
    }

    // Incrementar contador al exportar
    incrementCvCount();

    // Aquí se integraría con una librería de generación de PDF
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${formData.fullName} - CV</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
              @media print { body { margin: 0; } }
            </style>
          </head>
          <body>
            <div id="cv-content"></div>
            <script>
              setTimeout(() => {
                window.print();
                window.close();
              }, 500);
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const remainingCvs = Math.max(0, 3 - cvCount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <SEO
        title="Generador de CV con IA - Crea tu currículum profesional | CV Maker AI"
        description="Crea tu currículum profesional con inteligencia artificial. Elige entre múltiples plantillas, completa tus datos y genera un CV optimizado para ATS en minutos. 3 CVs gratis al día."
        keywords="generador cv, crear curriculum, plantillas cv, cv con ia, curriculum profesional, cv ats, generador curriculum"
        schema={schema}
      />

      <GuestBanner />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <i className="ri-file-text-line text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CVGenius
            </span>
          </a>

          <div className="flex items-center gap-4">
            <CreditCounter onCreditsUpdate={setRemainingCredits} />
            <AuthButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* Template Selector */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-layout-grid-line text-blue-600"></i>
                Selecciona tu Plantilla
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-96 overflow-y-auto pr-2">
                {templates.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTemplate(t.id as any)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-md cursor-pointer ${
                      template === t.id
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <div className="font-semibold text-sm text-gray-900 mb-1">{t.name}</div>
                    <div className="text-xs text-gray-600">{t.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Section */}
            <FormSection formData={formData} setFormData={setFormData} />
          </div>

          {/* Right Column - Preview */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <i className="ri-eye-line text-purple-600"></i>
                Vista Previa en Tiempo Real
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Tu CV se actualiza automáticamente mientras escribes
              </p>
            </div>
            <CVPreview formData={formData} template={template} />
          </div>
        </div>
      </div>

      {/* Botón Generar con IA - actualizado */}
      <div className="text-center mb-8">
        <button
          onClick={handleGenerateWithAI}
          disabled={remainingCredits <= 0}
          className={`px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center gap-3 mx-auto whitespace-nowrap ${
            remainingCredits <= 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-2xl hover:scale-105 cursor-pointer'
          }`}
        >
          <i className="ri-sparkling-line text-2xl"></i>
          {remainingCredits <= 0 ? 'Límite alcanzado' : 'Generar con IA'}
        </button>
        {remainingCredits <= 0 && (
          <p className="text-sm text-red-600 mt-3 font-medium">
            Has usado los 3 CVs gratis de hoy. Vuelve mañana o actualiza para más.
          </p>
        )}
      </div>

      {/* Daily Limit Modal */}
      {showLimitModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
            {/* Header con gradiente */}
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-vip-crown-fill text-white text-4xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Límite Diario Alcanzado</h2>
                <p className="text-white/90 text-lg">Has usado tus 3 CVs gratuitos de hoy</p>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-8">
              <div className="text-center mb-8">
                <p className="text-gray-700 text-lg mb-6">
                  ¡Genial! Has aprovechado al máximo tu plan gratuito. Para seguir creando CVs profesionales sin límites, actualiza a nuestro plan Premium.
                </p>

                {/* Beneficios Premium */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 mb-6 border-2 border-amber-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                    <i className="ri-star-fill text-amber-500"></i>
                    Beneficios Premium
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-white"></i>
                      </div>
                      <span className="text-gray-700 font-medium">CVs ilimitados por día</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-white"></i>
                      </div>
                      <span className="text-gray-700 font-medium">Acceso a todas las plantillas premium</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-white"></i>
                      </div>
                      <span className="text-gray-700 font-medium">IA avanzada con mejores resultados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-white"></i>
                      </div>
                      <span className="text-gray-700 font-medium">Exportación en múltiples formatos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-white"></i>
                      </div>
                      <span className="text-gray-700 font-medium">Soporte prioritario 24/7</span>
                    </div>
                  </div>
                </div>

                {/* Precio */}
                <div className="mb-6">
                  <div className="inline-flex items-baseline gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full">
                    <span className="text-4xl font-bold">€9.99</span>
                    <span className="text-lg">/mes</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Cancela cuando quieras</p>
                </div>
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowLimitModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap"
                >
                  Volver Mañana
                </button>
                <button
                  onClick={() => {
                    // Aquí iría la integración con el sistema de pagos
                    alert('Próximamente: Sistema de pagos integrado');
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white rounded-xl font-bold hover:shadow-xl transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <i className="ri-vip-crown-fill"></i>
                  Actualizar a Premium
                </button>
              </div>

              {/* Nota */}
              <p className="text-center text-sm text-gray-500 mt-4">
                💡 Tu límite se restablecerá mañana a las 00:00
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Examples Modal */}
      {showExamples && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">Ejemplos de CV Profesionales</h2>
                <p className="text-sm text-purple-100">Haz clic en cualquier ejemplo para cargarlo y personalizarlo</p>
              </div>
              <button
                onClick={() => setShowExamples(false)}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exampleCVs.map((example, index) => (
                  <div
                    key={index}
                    onClick={() => loadExample(example)}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                        {example.data.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">{example.data.fullName}</h3>
                        <p className="text-sm text-blue-600 font-medium">{example.data.experience[0]?.position}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <i className="ri-mail-line text-gray-500"></i>
                        <span className="truncate">{example.data.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-map-pin-line text-gray-500"></i>
                        <span>{example.data.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-briefcase-line text-gray-500"></i>
                        <span>{example.data.experience.length} experiencias</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-graduation-cap-line text-gray-500"></i>
                        <span>{example.data.education.length} títulos</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Haz clic para cargar</span>
                        <i className="ri-arrow-right-line text-blue-600 group-hover:translate-x-1 transition-transform"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de cuota excedida */}
      {showQuotaModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-slideUp">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-error-warning-line text-4xl text-red-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Límite diario alcanzado
              </h3>
              <p className="text-gray-600">
                Has usado los <span className="font-bold">3 CVs gratuitos</span> de hoy
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <i className="ri-vip-crown-line text-yellow-600"></i>
                Plan Premium
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-600 mt-0.5"></i>
                  <span><strong>CVs ilimitados</strong> por día</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-600 mt-0.5"></i>
                  <span>Todas las plantillas premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-600 mt-0.5"></i>
                  <span>IA avanzada con mejores resultados</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-600 mt-0.5"></i>
                  <span>Múltiples formatos de exportación</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-600 mt-0.5"></i>
                  <span>Soporte prioritario 24/7</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-2xl font-bold text-gray-900">
                  €9.99<span className="text-sm font-normal text-gray-600">/mes</span>
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => alert('Integración de pagos próximamente')}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all cursor-pointer whitespace-nowrap"
              >
                Actualizar a Premium
              </button>
              <button
                onClick={() => setShowQuotaModal(false)}
                className="w-full px-6 py-3.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all cursor-pointer whitespace-nowrap"
              >
                Volver mañana
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Tus créditos se renuevan automáticamente cada día a las 00:00 UTC
            </p>
          </div>
        </div>
      )}

      {/* Modal de generación con IA - actualizado */}
      {showAIModal && (
        <AIGenerationModal
          onClose={() => setShowAIModal(false)}
          onGenerate={handleAIGenerate}
        />
      )}
    </div>
  );
}

// Funciones de IA simuladas (aquí se integraría con APIs reales)
async function enhanceObjective(objective: string, jobOffer: string, experience: any[]): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const hasExperience = experience.some(exp => exp.company && exp.position);
  const yearsExp = hasExperience ? '5+' : '2';
  
  if (jobOffer) {
    return `Profesional altamente motivado con ${yearsExp} años de experiencia, especializado en impulsar resultados excepcionales. Busco aplicar mis habilidades técnicas y de liderazgo para contribuir al éxito de la organización, aportando soluciones innovadoras y un enfoque orientado a resultados que genere impacto medible.`;
  }
  
  return objective || `Profesional dinámico con ${yearsExp} años de experiencia comprobada en entornos desafiantes. Comprometido con la excelencia operativa y el desarrollo continuo, busco oportunidades para aplicar mi experiencia y contribuir al crecimiento organizacional mediante soluciones estratégicas y trabajo colaborativo.`;
}

async function enhanceExperienceDescription(position: string, company: string, description: string, jobOffer: string): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (description && description.length > 50) {
    return description;
  }
  
  const achievements = [
    `Lideré iniciativas estratégicas que resultaron en mejoras significativas en eficiencia operativa y satisfacción del cliente.`,
    `Implementé soluciones innovadoras que optimizaron procesos clave, reduciendo tiempos de ejecución en un 30%.`,
    `Colaboré con equipos multifuncionales para desarrollar e implementar estrategias que superaron los objetivos establecidos.`,
    `Gestioné proyectos complejos desde la conceptualización hasta la entrega, asegurando cumplimiento de plazos y presupuestos.`
  ];
  
  return description || achievements[Math.floor(Math.random() * achievements.length)];
}

async function suggestSkills(jobOffer: string, experience: any[]): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const commonSkills = [
    'Liderazgo de Equipos',
    'Gestión de Proyectos',
    'Comunicación Efectiva',
    'Resolución de Problemas',
    'Pensamiento Analítico',
    'Trabajo en Equipo',
    'Adaptabilidad',
    'Orientación a Resultados'
  ];
  
  return commonSkills.slice(0, 6).join(', ');
}
