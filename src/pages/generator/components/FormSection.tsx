import { Dispatch, SetStateAction } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  objective: string;
  experience: Array<{ company: string; position: string; period: string; description: string }>;
  education: Array<{ institution: string; degree: string; period: string }>;
  skills: string;
  jobOffer: string;
}

interface FormSectionProps {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  template: 'ats' | 'modern' | 'creative' | 'professional' | 'executive' | 'minimalist' | 'elegant' | 'tech' | 'corporate';
  setTemplate: Dispatch<SetStateAction<'ats' | 'modern' | 'creative' | 'professional' | 'executive' | 'minimalist' | 'elegant' | 'tech' | 'corporate'>>;
}

export default function FormSection({ formData, setFormData, template, setTemplate }: FormSectionProps) {
  const templates = [
    { id: 'ats' as const, name: 'ATS', icon: 'ri-file-list-3-line', color: 'from-blue-600 to-blue-700', desc: 'Optimizado para sistemas' },
    { id: 'modern' as const, name: 'Moderno', icon: 'ri-layout-4-line', color: 'from-purple-600 to-purple-700', desc: 'Diseño contemporáneo' },
    { id: 'creative' as const, name: 'Creativo', icon: 'ri-palette-line', color: 'from-pink-600 to-pink-700', desc: 'Colorido y vibrante' },
    { id: 'professional' as const, name: 'Profesional', icon: 'ri-briefcase-4-line', color: 'from-blue-700 to-indigo-700', desc: 'Clásico y elegante' },
    { id: 'executive' as const, name: 'Ejecutivo', icon: 'ri-vip-crown-line', color: 'from-amber-600 to-orange-700', desc: 'Premium y sofisticado' },
    { id: 'minimalist' as const, name: 'Minimalista', icon: 'ri-subtract-line', color: 'from-gray-600 to-gray-700', desc: 'Simple y limpio' },
    { id: 'elegant' as const, name: 'Elegante', icon: 'ri-award-line', color: 'from-rose-600 to-pink-700', desc: 'Refinado y distinguido' },
    { id: 'tech' as const, name: 'Tech', icon: 'ri-code-s-slash-line', color: 'from-green-600 to-emerald-700', desc: 'Estilo desarrollador' },
    { id: 'corporate' as const, name: 'Corporativo', icon: 'ri-building-line', color: 'from-slate-700 to-slate-800', desc: 'Formal y empresarial' }
  ];

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', position: '', period: '', description: '' }]
    }));
  };

  const removeExperience = (index: number) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const updateExperience = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { institution: '', degree: '', period: '' }]
    }));
  };

  const removeEducation = (index: number) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  return (
    <div className="space-y-6">
      {/* Selector de Plantilla Mejorado */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <i className="ri-layout-grid-line text-white"></i>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Selecciona tu Plantilla</h3>
            <p className="text-sm text-gray-600">9 diseños profesionales para elegir</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`relative p-3 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                template === t.id
                  ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-500/20'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                <i className={`${t.icon} text-white text-lg`}></i>
              </div>
              <div className="text-center">
                <p className={`text-xs font-semibold mb-0.5 ${
                  template === t.id ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {t.name}
                </p>
                <p className="text-[10px] text-gray-500 leading-tight">{t.desc}</p>
              </div>
              {template === t.id && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Información Personal Mejorada */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
            <i className="ri-user-line text-white"></i>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Información Personal</h3>
            <p className="text-sm text-gray-600">Datos básicos de contacto</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre Completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              placeholder="Ej: María García López"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="tu@email.com"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+34 600 000 000"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ubicación</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              placeholder="Madrid, España"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* Objetivo Profesional con IA */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
            <i className="ri-target-line text-white"></i>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">Objetivo Profesional</h3>
            <p className="text-sm text-gray-600">La IA lo optimizará automáticamente</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
            <i className="ri-sparkling-2-fill"></i>
            <span className="font-medium">IA</span>
          </div>
        </div>

        <textarea
          value={formData.objective}
          onChange={(e) => setFormData(prev => ({ ...prev, objective: e.target.value }))}
          placeholder="Describe brevemente tus objetivos profesionales... La IA lo mejorará por ti"
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:ring-4 focus:ring-purple-100 transition-all outline-none resize-none text-sm"
        />
      </div>

      {/* Experiencia Laboral Mejorada */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
              <i className="ri-briefcase-line text-white"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Experiencia Laboral</h3>
              <p className="text-sm text-gray-600">La IA mejorará las descripciones</p>
            </div>
          </div>
          <button
            onClick={addExperience}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full hover:shadow-lg transition-all text-sm font-medium whitespace-nowrap cursor-pointer"
          >
            <i className="ri-add-line"></i>
            Añadir
          </button>
        </div>

        <div className="space-y-4">
          {formData.experience.map((exp, index) => (
            <div key={index} className="p-5 bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-xl border-2 border-gray-200 relative">
              {formData.experience.length > 1 && (
                <button
                  onClick={() => removeExperience(index)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line"></i>
                </button>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Empresa</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                    placeholder="Nombre de la empresa"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Puesto</label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => updateExperience(index, 'position', e.target.value)}
                    placeholder="Tu cargo"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-sm bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Período</label>
                  <input
                    type="text"
                    value={exp.period}
                    onChange={(e) => updateExperience(index, 'period', e.target.value)}
                    placeholder="Ej: Enero 2020 - Presente"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-sm bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  Descripción
                  <span className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <i className="ri-sparkling-2-fill"></i>
                    IA mejorará esto
                  </span>
                </label>
                <textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(index, 'description', e.target.value)}
                  placeholder="Describe tus logros y responsabilidades... La IA lo optimizará"
                  rows={3}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:ring-4 focus:ring-orange-100 transition-all outline-none resize-none text-sm bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educación Mejorada */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
              <i className="ri-graduation-cap-line text-white"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Educación</h3>
              <p className="text-sm text-gray-600">Formación académica</p>
            </div>
          </div>
          <button
            onClick={addEducation}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:shadow-lg transition-all text-sm font-medium whitespace-nowrap cursor-pointer"
          >
            <i className="ri-add-line"></i>
            Añadir
          </button>
        </div>

        <div className="space-y-4">
          {formData.education.map((edu, index) => (
            <div key={index} className="p-5 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl border-2 border-gray-200 relative">
              {formData.education.length > 1 && (
                <button
                  onClick={() => removeEducation(index)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line"></i>
                </button>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Institución</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                    placeholder="Universidad o centro educativo"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Título</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                    placeholder="Grado, Máster, etc."
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Período</label>
                  <input
                    type="text"
                    value={edu.period}
                    onChange={(e) => updateEducation(index, 'period', e.target.value)}
                    placeholder="2018 - 2022"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm bg-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Habilidades con IA */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-green-600 rounded-xl flex items-center justify-center">
            <i className="ri-lightbulb-line text-white"></i>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">Habilidades</h3>
            <p className="text-sm text-gray-600">La IA sugerirá habilidades relevantes</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
            <i className="ri-sparkling-2-fill"></i>
            <span className="font-medium">IA</span>
          </div>
        </div>

        <textarea
          value={formData.skills}
          onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
          placeholder="Separa tus habilidades con comas: JavaScript, React, Node.js..."
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:ring-4 focus:ring-teal-100 transition-all outline-none resize-none text-sm"
        />
      </div>

      {/* Oferta de Trabajo (Opcional) */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg border-2 border-purple-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
            <i className="ri-sparkling-2-fill text-white"></i>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">Optimización Inteligente</h3>
            <p className="text-sm text-gray-600">Pega la oferta de trabajo para personalizar tu CV</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-purple-600 bg-white px-3 py-1 rounded-full font-medium">
            <i className="ri-magic-line"></i>
            Opcional
          </div>
        </div>

        <textarea
          value={formData.jobOffer}
          onChange={(e) => setFormData(prev => ({ ...prev, jobOffer: e.target.value }))}
          placeholder="Pega aquí la descripción de la oferta de trabajo. La IA adaptará tu CV para maximizar tus posibilidades..."
          rows={5}
          className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-600 focus:ring-4 focus:ring-purple-100 transition-all outline-none resize-none text-sm bg-white"
        />
        
        <div className="mt-4 flex items-start gap-3 p-4 bg-white rounded-xl border border-purple-200">
          <i className="ri-information-line text-purple-600 text-xl flex-shrink-0 mt-0.5"></i>
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-purple-900 mb-1">💡 Consejo Pro</p>
            <p>Al incluir la oferta de trabajo, nuestra IA optimizará tu CV con palabras clave relevantes, aumentando tus posibilidades de pasar los filtros ATS y destacar ante los reclutadores.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
