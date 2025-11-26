import { Link, useNavigate } from 'react-router-dom';
import AuthButton from '../../components/feature/AuthButton';
import { SEO, generateWebPageSchema, generateSoftwareApplicationSchema } from '../../utils/seo';

export default function HomePage() {
  const navigate = useNavigate();

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(
        'CV Maker AI - Generador de Currículum con IA',
        'Crea currículums profesionales en segundos con inteligencia artificial. Plantillas ATS optimizadas, diseño moderno y resultados listos para enviar.',
        '/'
      ),
      generateSoftwareApplicationSchema()
    ]
  };

  const features = [
    {
      icon: 'ri-file-list-3-line',
      title: 'Plantillas ATS Optimizadas',
      description: 'Plantillas diseñadas para superar los sistemas de seguimiento de candidatos y llegar a los reclutadores.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-sparkling-2-line',
      title: 'Generación con IA',
      description: 'Tecnología de inteligencia artificial que redacta y optimiza tu experiencia profesional automáticamente.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-download-cloud-line',
      title: 'Exportación PDF Profesional',
      description: 'Descarga tu CV en PDF de alta calidad, listo para enviar a cualquier empresa.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-magic-line',
      title: 'Personalización Inteligente',
      description: 'Adapta automáticamente tu CV según la oferta de trabajo para maximizar tus posibilidades.',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const handleFeatureClick = () => {
    navigate('/generator');
  };

  const templates = [
    {
      name: 'ATS Optimizado',
      description: 'Diseño limpio y profesional que supera los filtros automáticos',
      image: 'https://readdy.ai/api/search-image?query=Professional%20minimalist%20resume%20template%20with%20clean%20layout%2C%20black%20and%20white%20color%20scheme%2C%20organized%20sections%20for%20work%20experience%20and%20education%2C%20modern%20typography%2C%20ATS-friendly%20design%2C%20simple%20elegant%20format%20on%20white%20background&width=400&height=500&seq=ats-template-001&orientation=portrait',
      badge: 'Más Popular'
    },
    {
      name: 'Moderno',
      description: 'Diseño contemporáneo con toques de color y estructura visual atractiva',
      image: 'https://readdy.ai/api/search-image?query=Modern%20professional%20resume%20template%20with%20blue%20gradient%20accents%2C%20contemporary%20layout%2C%20clean%20sections%2C%20stylish%20typography%2C%20professional%20business%20document%20design%2C%20structured%20format%20on%20light%20background&width=400&height=500&seq=modern-template-002&orientation=portrait',
      badge: 'Recomendado'
    },
    {
      name: 'Creativo',
      description: 'Diseño único y llamativo para destacar en industrias creativas',
      image: 'https://readdy.ai/api/search-image?query=Creative%20colorful%20resume%20template%20with%20purple%20and%20pink%20gradients%2C%20unique%20artistic%20layout%2C%20modern%20design%20elements%2C%20professional%20creative%20document%2C%20eye-catching%20format%20on%20light%20background&width=400&height=500&seq=creative-template-003&orientation=portrait',
      badge: 'Destacado'
    }
  ];

  const steps = [
    {
      number: '01',
      icon: 'ri-edit-line',
      title: 'Completa tus datos',
      description: 'Introduce tu información personal, experiencia laboral y educación en nuestro formulario intuitivo.'
    },
    {
      number: '02',
      icon: 'ri-sparkling-2-fill',
      title: 'La IA genera tu CV',
      description: 'Nuestra inteligencia artificial optimiza y mejora automáticamente todo el contenido de tu currículum.'
    },
    {
      number: '03',
      icon: 'ri-download-line',
      title: 'Descarga y envía',
      description: 'Obtén tu CV profesional en PDF de alta calidad, listo para impresionar a los reclutadores.'
    }
  ];

  const testimonials = [
    {
      name: 'Laura Martínez',
      role: 'Ingeniera de Software',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20hispanic%20woman%20software%20engineer%20headshot%2C%20confident%20smile%2C%20business%20casual%20attire%2C%20modern%20office%20background%2C%20professional%20portrait%20photography&width=100&height=100&seq=avatar-laura-001&orientation=squarish',
      text: 'Conseguí 3 entrevistas en una semana después de usar CV Maker AI. La optimización con IA realmente marca la diferencia.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Gerente de Marketing',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20hispanic%20man%20marketing%20manager%20headshot%2C%20friendly%20expression%2C%20business%20suit%2C%20modern%20corporate%20background%2C%20professional%20portrait%20photography&width=100&height=100&seq=avatar-carlos-002&orientation=squarish',
      text: 'La mejor herramienta para crear CVs que he usado. Profesional, rápida y los resultados son impresionantes.',
      rating: 5
    },
    {
      name: 'Ana Silva',
      role: 'Diseñadora UX',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20hispanic%20woman%20UX%20designer%20headshot%2C%20creative%20professional%2C%20modern%20casual%20attire%2C%20bright%20office%20background%2C%20professional%20portrait%20photography&width=100&height=100&seq=avatar-ana-003&orientation=squarish',
      text: 'Las plantillas son hermosas y la IA me ayudó a expresar mi experiencia de forma mucho más profesional.',
      rating: 5
    }
  ];

  const pricing = [
    {
      name: 'Gratis',
      price: '0€',
      period: 'siempre',
      features: [
        'Plantilla ATS básica',
        'Generación con IA limitada',
        'Exportación PDF',
        'Vista previa en tiempo real'
      ],
      cta: 'Comenzar Gratis',
      popular: false
    },
    {
      name: 'Pro',
      price: '9.99€',
      period: '/mes',
      features: [
        'Todas las plantillas premium',
        'IA avanzada ilimitada',
        'Exportación PDF de alta calidad',
        'Personalización por oferta',
        'Soporte prioritario',
        'Actualizaciones ilimitadas'
      ],
      cta: 'Comenzar Prueba Gratis',
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="CV Maker AI - Crea tu currículum profesional con IA en segundos"
        description="Genera currículums profesionales en segundos con inteligencia artificial. Plantillas ATS optimizadas, diseño moderno y resultados listos para enviar. 3 CVs gratis al día."
        keywords="cv maker, curriculum vitae, generador cv, cv con ia, plantillas cv, cv profesional, crear curriculum, cv gratis"
        schema={schema}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-11 h-11 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/5110ce3ba25b092cb363e0b1bb235016/4a84e9e5f432a6b61f9c942d84dc27b8.png" 
                alt="CV Maker AI Logo" 
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <span className="text-xl font-bold gradient-text">
              CV Maker AI
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer text-[15px]">
              Características
            </a>
            <a href="#templates" className="text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer text-[15px]">
              Plantillas
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer text-[15px]">
              Precios
            </a>
          </div>

          <div className="flex items-center gap-4">
            <AuthButton />
            <a
              href="/generator"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
            >
              Crear mi CV
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Premium Minimal */}
      <section className="relative pt-40 pb-32 px-6 lg:px-8 overflow-hidden bg-gradient-soft">
        {/* Subtle Background Effects */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-semibold mb-8 animate-fadeIn shadow-premium">
              <i className="ri-sparkling-2-fill text-blue-600"></i>
              <span className="text-gray-700">Potenciado por Inteligencia Artificial Avanzada</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] animate-fadeIn tracking-tight">
              Crea tu currículum profesional en{' '}
              <span className="gradient-text">
                segundos con IA
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed animate-fadeIn animation-delay-200 font-normal">
              CV Maker AI genera el mejor CV posible con tecnología avanzada. Optimizado para ATS, diseño moderno y resultados listos para enviar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn animation-delay-400">
              <Link
                to="/generator"
                className="btn-premium w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-primary text-white rounded-2xl text-lg font-semibold whitespace-nowrap cursor-pointer shadow-premium-lg"
              >
                <i className="ri-sparkling-2-fill text-xl"></i>
                Crear mi CV ahora
                <i className="ri-arrow-right-line text-xl"></i>
              </Link>
              
              <a
                href="#templates"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all text-lg font-semibold whitespace-nowrap cursor-pointer shadow-premium"
              >
                Ver plantillas
                <i className="ri-arrow-down-line"></i>
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 animate-fadeIn animation-delay-600">
              <div className="flex items-center gap-2">
                <i className="ri-check-line text-green-600 text-lg"></i>
                <span className="font-medium">Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-check-line text-green-600 text-lg"></i>
                <span className="font-medium">Gratis para siempre</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-check-line text-green-600 text-lg"></i>
                <span className="font-medium">Resultados en segundos</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup - Clean */}
          <div className="relative max-w-5xl mx-auto animate-fadeIn animation-delay-800">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-10"></div>
            <div className="relative glass rounded-3xl shadow-premium-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-sm text-gray-600 font-medium">
                  CV Maker AI - Generador Profesional
                </div>
              </div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20professional%20CV%20maker%20application%20interface%20screenshot%2C%20clean%20user%20interface%20with%20form%20fields%20on%20left%20side%20and%20resume%20preview%20on%20right%20side%2C%20gradient%20blue%20and%20purple%20accents%2C%20contemporary%20web%20application%20design%2C%20professional%20SaaS%20interface%2C%20light%20background&width=1200&height=700&seq=hero-mockup-001&orientation=landscape"
                alt="CV Maker AI Interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Minimal & Clean */}
      <section id="features" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Características Poderosas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
              Todo lo que necesitas para crear un currículum profesional que destaque
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={handleFeatureClick}
                className="card-premium group p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-premium`}>
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Gallery - Premium */}
      <section id="templates" className="py-32 px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Plantillas diseñadas por{' '}
              <span className="gradient-text">
                expertos
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              Elige entre nuestras plantillas profesionales optimizadas para cada industria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="card-premium group relative bg-white rounded-2xl shadow-premium overflow-hidden border border-gray-200 cursor-pointer"
              >
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-4 py-1.5 bg-gradient-primary text-white text-xs font-bold rounded-full shadow-premium">
                    {template.badge}
                  </span>
                </div>
                
                <div className="aspect-[4/5] overflow-hidden bg-gray-50">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-gray-600 text-[15px]">{template.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/generator"
              className="btn-premium inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-2xl text-lg font-semibold whitespace-nowrap cursor-pointer shadow-premium-lg"
            >
              Probar todas las plantillas
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works - Modern Minimal */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Crea tu CV en{' '}
              <span className="gradient-text">
                3 simples pasos
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              Un proceso intuitivo que te lleva del formulario al CV perfecto en minutos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Subtle Connection Line */}
            <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative inline-block mb-8">
                  <div className="relative w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300 shadow-premium">
                    <i className={`${step.icon} text-white text-3xl`}></i>
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600 text-sm shadow-premium">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Clean Cards */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Lo que dicen nuestros{' '}
              <span className="gradient-text">
                usuarios
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              Miles de profesionales ya han conseguido el trabajo de sus sueños
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-premium bg-white p-8 rounded-2xl shadow-premium border border-gray-200"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-[15px]">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-[15px]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Premium Glassmorphism */}
      <section id="pricing" className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Precios simples y{' '}
              <span className="gradient-text">
                transparentes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              Comienza gratis y actualiza cuando estés listo para más funciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`card-premium relative p-10 rounded-3xl border-2 ${
                  plan.popular
                    ? 'glass-dark border-gray-800 shadow-premium-xl scale-105 bg-gradient-to-br from-gray-900 to-gray-800'
                    : 'bg-white border-gray-200 shadow-premium'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-6 py-2 bg-gradient-primary text-white text-sm font-bold rounded-full shadow-premium">
                      ⭐ Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-10">
                  <h3 className={`text-2xl font-bold mb-6 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className={`text-6xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-xl mb-3 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-white/20' : 'bg-blue-50'
                      }`}>
                        <i className={`ri-check-line text-sm ${plan.popular ? 'text-white' : 'text-blue-600'}`}></i>
                      </div>
                      <span className={`text-[15px] ${plan.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/generator"
                  className={`btn-premium block w-full py-4 rounded-2xl text-center font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer text-[15px] ${
                    plan.popular
                      ? 'bg-white text-gray-900 shadow-premium-lg'
                      : 'bg-gradient-primary text-white shadow-premium'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Soft Gradient */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            ¿Listo para conseguir el trabajo de tus sueños?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-normal">
            Únete a miles de profesionales que ya han transformado sus carreras con CV Maker AI
          </p>
          <Link
            to="/generator"
            className="btn-premium inline-flex items-center gap-3 px-10 py-5 bg-gradient-primary text-white rounded-2xl text-xl font-semibold whitespace-nowrap cursor-pointer shadow-premium-xl"
          >
            <i className="ri-sparkling-2-fill text-2xl"></i>
            Crear mi CV gratis ahora
            <i className="ri-arrow-right-line text-2xl"></i>
          </Link>
          <p className="mt-8 text-gray-600 text-sm font-medium">
            No se requiere tarjeta de crédito • Resultados en menos de 2 minutos
          </p>
        </div>
      </section>

      {/* Footer - Minimal Dark */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img 
                    src="https://static.readdy.ai/image/5110ce3ba25b092cb363e0b1bb235016/4a84e9e5f432a6b61f9c942d84dc27b8.png" 
                    alt="CV Maker AI Logo" 
                    className="w-full h-full object-contain"
                    style={{ mixBlendMode: 'multiply', filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <span className="text-xl font-bold text-white">
                  CV Maker AI
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-[15px] leading-relaxed max-w-md">
                La herramienta más avanzada para crear currículums profesionales con inteligencia artificial.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-[15px]">Producto</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="hover:text-white transition-colors cursor-pointer text-[15px]">Características</a></li>
                <li><a href="#templates" className="hover:text-white transition-colors cursor-pointer text-[15px]">Plantillas</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors cursor-pointer text-[15px]">Precios</a></li>
                <li><Link to="/generator" className="hover:text-white transition-colors cursor-pointer text-[15px]">Generador</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-[15px]">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer text-[15px]">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer text-[15px]">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer text-[15px]">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 CV Maker AI. Todos los derechos reservados.
            </p>
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
