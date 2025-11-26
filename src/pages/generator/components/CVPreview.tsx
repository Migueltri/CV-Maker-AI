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

interface CVPreviewProps {
  formData: FormData;
  template: 'ats' | 'modern' | 'creative' | 'professional' | 'executive' | 'minimalist' | 'elegant' | 'tech' | 'corporate' | 'bold' | 'classic' | 'artistic' | 'simple' | 'premium' | 'dynamic' | 'clean' | 'vibrant' | 'sophisticated' | 'fresh' | 'compact';
}

export default function CVPreview({ formData, template }: CVPreviewProps) {
  const renderATSTemplate = () => (
    <div className="bg-white p-8 space-y-6 text-gray-900">
      {/* Header */}
      <div className="border-b-2 border-gray-900 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          {formData.email && (
            <div className="flex items-center gap-1">
              <i className="ri-mail-line"></i>
              <span>{formData.email}</span>
            </div>
          )}
          {formData.phone && (
            <div className="flex items-center gap-1">
              <i className="ri-phone-line"></i>
              <span>{formData.phone}</span>
            </div>
          )}
          {formData.location && (
            <div className="flex items-center gap-1">
              <i className="ri-map-pin-line"></i>
              <span>{formData.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Objective */}
      {formData.objective && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">Perfil Profesional</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Experiencia Laboral</h2>
          <div className="space-y-4">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">{exp.position || 'Puesto'}</h3>
                    <span className="text-sm text-gray-600">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium mb-2">{exp.company}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Educación</h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{edu.degree || 'Título'}</h3>
                      <p className="text-sm text-gray-700">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-600">{edu.period}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {formData.skills && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">Habilidades</h2>
          <p className="text-sm text-gray-700">{formData.skills}</p>
        </div>
      )}
    </div>
  );

  const renderModernTemplate = () => (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 space-y-6">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-3">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm">
          {formData.email && (
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <i className="ri-mail-line"></i>
              <span>{formData.email}</span>
            </div>
          )}
          {formData.phone && (
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <i className="ri-phone-line"></i>
              <span>{formData.phone}</span>
            </div>
          )}
          {formData.location && (
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <i className="ri-map-pin-line"></i>
              <span>{formData.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Objective */}
      {formData.objective && (
        <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <i className="ri-user-star-line text-white text-sm"></i>
            </div>
            <h2 className="text-lg font-bold text-gray-900">Perfil Profesional</h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience.some(exp => exp.company || exp.position) && (
        <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <i className="ri-briefcase-line text-white text-sm"></i>
            </div>
            <h2 className="text-lg font-bold text-gray-900">Experiencia Laboral</h2>
          </div>
          <div className="space-y-4">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">{exp.position || 'Puesto'}</h3>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="text-sm text-blue-600 font-semibold mb-2">{exp.company}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center">
              <i className="ri-graduation-cap-line text-white text-sm"></i>
            </div>
            <h2 className="text-lg font-bold text-gray-900">Educación</h2>
          </div>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="border-l-4 border-green-600 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{edu.degree || 'Título'}</h3>
                      <p className="text-sm text-green-600 font-semibold">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">{edu.period}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {formData.skills && (
        <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <i className="ri-lightbulb-line text-white text-sm"></i>
            </div>
            <h2 className="text-lg font-bold text-gray-900">Habilidades</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderCreativeTemplate = () => (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-8 space-y-6">
      {/* Creative Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl blur-xl opacity-30"></div>
        <div className="relative bg-white p-6 rounded-3xl shadow-xl border-2 border-purple-200">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              {(formData.fullName || 'TN').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {formData.fullName || 'Tu Nombre Completo'}
              </h1>
              <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                {formData.email && (
                  <div className="flex items-center gap-1">
                    <i className="ri-mail-line text-purple-600"></i>
                    <span>{formData.email}</span>
                  </div>
                )}
                {formData.phone && (
                  <div className="flex items-center gap-1">
                    <i className="ri-phone-line text-pink-600"></i>
                    <span>{formData.phone}</span>
                  </div>
                )}
                {formData.location && (
                  <div className="flex items-center gap-1">
                    <i className="ri-map-pin-line text-orange-600"></i>
                    <span>{formData.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Objective */}
      {formData.objective && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <i className="ri-user-star-line text-white"></i>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Perfil Profesional
            </h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed pl-13">{formData.objective}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience.some(exp => exp.company || exp.position) && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-orange-600 rounded-xl flex items-center justify-center">
              <i className="ri-briefcase-line text-white"></i>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Experiencia Laboral
            </h2>
          </div>
          <div className="space-y-4 pl-13">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index} className="relative pl-6 border-l-4 border-gradient-to-b from-pink-600 to-orange-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-600 rounded-full"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{exp.position || 'Puesto'}</h3>
                    <span className="text-xs text-white bg-gradient-to-r from-pink-600 to-orange-600 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-pink-600 mb-2">{exp.company}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center">
              <i className="ri-graduation-cap-line text-white"></i>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Educación
            </h2>
          </div>
          <div className="space-y-3 pl-13">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="relative pl-6 border-l-4 border-orange-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{edu.degree || 'Título'}</h3>
                      <p className="text-sm font-semibold text-orange-600">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-white bg-gradient-to-r from-orange-600 to-yellow-600 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {formData.skills && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <i className="ri-lightbulb-line text-white"></i>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Habilidades
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 pl-13">
            {formData.skills.split(',').map((skill, index) => {
              const colors = [
                'from-purple-600 to-pink-600',
                'from-pink-600 to-orange-600',
                'from-orange-600 to-yellow-600',
                'from-blue-600 to-purple-600'
              ];
              return (
                <span 
                  key={index} 
                  className={`px-4 py-2 bg-gradient-to-r ${colors[index % colors.length]} text-white text-sm font-medium rounded-full shadow-md`}
                >
                  {skill.trim()}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  const renderProfessionalTemplate = () => (
    <div className="bg-white p-8 space-y-6">
      {/* Header con línea lateral */}
      <div className="flex gap-6">
        <div className="w-1.5 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {formData.fullName || 'Tu Nombre Completo'}
          </h1>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            {formData.email && (
              <div className="flex items-center gap-2">
                <i className="ri-mail-line text-blue-600"></i>
                <span>{formData.email}</span>
              </div>
            )}
            {formData.phone && (
              <div className="flex items-center gap-2">
                <i className="ri-phone-line text-blue-600"></i>
                <span>{formData.phone}</span>
              </div>
            )}
            {formData.location && (
              <div className="flex items-center gap-2 col-span-2">
                <i className="ri-map-pin-line text-blue-600"></i>
                <span>{formData.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Objective */}
      {formData.objective && (
        <div className="border-l-4 border-blue-600 pl-4">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Perfil Profesional</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">Experiencia Laboral</h2>
          <div className="space-y-5">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{exp.position || 'Puesto'}</h3>
                    <span className="text-sm text-gray-600 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-sm text-blue-600 font-semibold mb-2">{exp.company}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">Educación</h2>
          <div className="space-y-4">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{edu.degree || 'Título'}</h3>
                      <p className="text-sm text-gray-700">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{edu.period}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {formData.skills && (
        <div>
          <h2 className="text-xl font-bold text-blue-900 mb-3 pb-2 border-b-2 border-blue-600">Habilidades</h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderExecutiveTemplate = () => (
    <div className="bg-gray-900 text-white p-8 space-y-6">
      {/* Header ejecutivo */}
      <div className="border-b-2 border-amber-500 pb-6">
        <h1 className="text-4xl font-bold mb-3">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          {formData.email && (
            <div className="flex items-center gap-2">
              <i className="ri-mail-line text-amber-500"></i>
              <span>{formData.email}</span>
            </div>
          )}
          {formData.phone && (
            <div className="flex items-center gap-2">
              <i className="ri-phone-line text-amber-500"></i>
              <span>{formData.phone}</span>
            </div>
          )}
          {formData.location && (
            <div className="flex items-center gap-2">
              <i className="ri-map-pin-line text-amber-500"></i>
              <span>{formData.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Objective */}
      {formData.objective && (
        <div>
          <h2 className="text-lg font-bold text-amber-500 mb-3 uppercase tracking-wider">Perfil Ejecutivo</h2>
          <p className="text-sm text-gray-300 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 className="text-lg font-bold text-amber-500 mb-4 uppercase tracking-wider">Trayectoria Profesional</h2>
          <div className="space-y-5">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index} className="border-l-2 border-amber-500 pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-white text-base">{exp.position || 'Puesto'}</h3>
                    <span className="text-xs text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-sm text-amber-400 font-semibold mb-2">{exp.company}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 className="text-lg font-bold text-amber-500 mb-4 uppercase tracking-wider">Formación Académica</h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-white">{edu.degree || 'Título'}</h3>
                      <p className="text-sm text-gray-300">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-gray-400">{edu.period}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {formData.skills && (
        <div>
          <h2 className="text-lg font-bold text-amber-500 mb-3 uppercase tracking-wider">Competencias Clave</h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="px-3 py-1.5 bg-amber-500 text-gray-900 text-xs font-bold rounded">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderMinimalistTemplate = () => (
    <div className="bg-white p-8 space-y-8">
      {/* Header minimalista */}
      <div className="text-center pb-6 border-b border-gray-300">
        <h1 className="text-3xl font-light text-gray-900 mb-2 tracking-wide">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="flex justify-center flex-wrap gap-4 text-xs text-gray-600">
          {formData.email && <span>{formData.email}</span>}
          {formData.phone && <span>•</span>}
          {formData.phone && <span>{formData.phone}</span>}
          {formData.location && <span>•</span>}
          {formData.location && <span>{formData.location}</span>}
        </div>
      </div>

      {/* Objective */}
      {formData.objective && (
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-widest">Perfil</h2>
          <p className="text-sm text-gray-700 leading-relaxed font-light">{formData.objective}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-widest">Experiencia</h2>
          <div className="space-y-5">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-medium text-gray-900">{exp.position || 'Puesto'}</h3>
                    <span className="text-xs text-gray-500 font-light">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 font-light italic">{exp.company}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed font-light">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-widest">Educación</h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index}>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="font-medium text-gray-900">{edu.degree || 'Título'}</h3>
                      <p className="text-sm text-gray-600 font-light">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-gray-500 font-light">{edu.period}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {formData.skills && (
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-widest">Habilidades</h2>
          <p className="text-sm text-gray-700 font-light">{formData.skills}</p>
        </div>
      )}
    </div>
  );

  const renderElegantTemplate = () => (
    <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 space-y-6">
      {/* Header elegante */}
      <div className="text-center pb-6">
        <div className="inline-block mb-4">
          <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full flex items-center justify-center text-white text-3xl font-serif">
            {(formData.fullName || 'TN').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
          </div>
        </div>
        <h1 className="text-4xl font-serif text-gray-900 mb-3">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-700">
          {formData.email && (
            <div className="flex items-center gap-2">
              <i className="ri-mail-line text-rose-600"></i>
              <span>{formData.email}</span>
            </div>
          )}
          {formData.phone && (
            <div className="flex items-center gap-2">
              <i className="ri-phone-line text-rose-600"></i>
              <span>{formData.phone}</span>
            </div>
          )}
          {formData.location && (
            <div className="flex items-center gap-2">
              <i className="ri-map-pin-line text-rose-600"></i>
              <span>{formData.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Objective */}
      {formData.objective && (
        <div className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-md">
          <h2 className="text-lg font-serif text-rose-900 mb-3 text-center">Perfil Profesional</h2>
          <p className="text-sm text-gray-700 leading-relaxed text-center">{formData.objective}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience.some(exp => exp.company || exp.position) && (
        <div className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-md">
          <h2 className="text-lg font-serif text-rose-900 mb-4 text-center">Experiencia Laboral</h2>
          <div className="space-y-4">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index} className="text-center">
                  <h3 className="font-semibold text-gray-900">{exp.position || 'Puesto'}</h3>
                  <p className="text-sm text-rose-600 font-medium mb-1">{exp.company}</p>
                  <p className="text-xs text-gray-600 mb-2">{exp.period}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-md">
          <h2 className="text-lg font-serif text-rose-900 mb-4 text-center">Educación</h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="text-center">
                  <h3 className="font-semibold text-gray-900">{edu.degree || 'Título'}</h3>
                  <p className="text-sm text-gray-700">{edu.institution}</p>
                  <p className="text-xs text-gray-600">{edu.period}</p>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {formData.skills && (
        <div className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-md">
          <h2 className="text-lg font-serif text-rose-900 mb-3 text-center">Habilidades</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="px-3 py-1.5 bg-gradient-to-r from-rose-400 to-amber-400 text-white text-xs font-medium rounded-full">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderTechTemplate = () => (
    <div className="bg-gray-950 text-gray-100 p-8 space-y-6 font-mono">
      {/* Header tech */}
      <div className="border-2 border-green-500 p-6 rounded-lg bg-gray-900/50">
        <div className="flex items-center gap-2 text-green-500 text-xs mb-3">
          <span>&gt;</span>
          <span className="animate-pulse">_</span>
        </div>
        <h1 className="text-3xl font-bold text-green-400 mb-3">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="space-y-1 text-sm text-gray-400">
          {formData.email && (
            <div className="flex items-center gap-2">
              <span className="text-green-500">email:</span>
              <span>{formData.email}</span>
            </div>
          )}
          {formData.phone && (
            <div className="flex items-center gap-2">
              <span className="text-green-500">phone:</span>
              <span>{formData.phone}</span>
            </div>
          )}
          {formData.location && (
            <div className="flex items-center gap-2">
              <span className="text-green-500">location:</span>
              <span>{formData.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Objective */}
      {formData.objective && (
        <div>
          <h2 className="text-sm font-bold text-green-400 mb-3 flex items-center gap-2">
            <span className="text-green-500">//</span>
            PERFIL_PROFESIONAL
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed pl-4 border-l-2 border-green-500">{formData.objective}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 className="text-sm font-bold text-green-400 mb-4 flex items-center gap-2">
            <span className="text-green-500">//</span>
            EXPERIENCIA_LABORAL
          </h2>
          <div className="space-y-4">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index} className="pl-4 border-l-2 border-green-500">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-green-300">{exp.position || 'Puesto'}</h3>
                    <span className="text-xs text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 className="text-sm font-bold text-green-400 mb-4 flex items-center gap-2">
            <span className="text-green-500">//</span>
            EDUCACION
          </h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="pl-4 border-l-2 border-green-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-green-300">{edu.degree || 'Título'}</h3>
                      <p className="text-sm text-gray-400">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-gray-500">{edu.period}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {formData.skills && (
        <div>
          <h2 className="text-sm font-bold text-green-400 mb-3 flex items-center gap-2">
            <span className="text-green-500">//</span>
            HABILIDADES
          </h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-green-500/20 text-green-400 text-xs border border-green-500 rounded">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderCorporateTemplate = () => (
    <div className="bg-white p-8 space-y-6">
      {/* Header corporativo */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 -m-8 mb-6">
        <h1 className="text-3xl font-bold mb-3">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="grid grid-cols-3 gap-4 text-sm">
          {formData.email && (
            <div className="flex items-center gap-2">
              <i className="ri-mail-line"></i>
              <span>{formData.email}</span>
            </div>
          )}
          {formData.phone && (
            <div className="flex items-center gap-2">
              <i className="ri-phone-line"></i>
              <span>{formData.phone}</span>
            </div>
          )}
          {formData.location && (
            <div className="flex items-center gap-2">
              <i className="ri-map-pin-line"></i>
              <span>{formData.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Objective */}
      {formData.objective && (
        <div className="bg-slate-50 p-5 rounded-lg">
          <h2 className="text-lg font-bold text-slate-900 mb-3 uppercase">Resumen Profesional</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4 uppercase pb-2 border-b-2 border-slate-800">Experiencia Profesional</h2>
          <div className="space-y-5">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index} className="bg-slate-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900 text-base">{exp.position || 'Puesto'}</h3>
                    <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="text-sm text-slate-700 font-semibold mb-2">{exp.company}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4 uppercase pb-2 border-b-2 border-slate-800">Formación Académica</h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="bg-slate-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-900">{edu.degree || 'Título'}</h3>
                      <p className="text-sm text-gray-700">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded">{edu.period}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {formData.skills && (
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-3 uppercase pb-2 border-b-2 border-slate-800">Competencias</h2>
          <div className="grid grid-cols-2 gap-2">
            {formData.skills.split(',').map((skill, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                <span className="text-gray-700">{skill.trim()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderBoldTemplate = () => (
    <div className="bg-white p-8 space-y-6">
      {/* Bold Header */}
      <div className="bg-black text-white p-8 -m-8 mb-6">
        <h1 className="text-5xl font-black mb-4 tracking-tight">
          {formData.fullName || 'TU NOMBRE'}
        </h1>
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          {formData.email && <span>{formData.email}</span>}
          {formData.phone && <span>{formData.phone}</span>}
          {formData.location && <span>{formData.location}</span>}
        </div>
      </div>

      {formData.objective && (
        <div>
          <h2 className="text-2xl font-black text-black mb-3">PERFIL</h2>
          <p className="text-sm text-gray-800 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {formData.experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 className="text-2xl font-black text-black mb-4">EXPERIENCIA</h2>
          <div className="space-y-5">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index}>
                  <h3 className="text-lg font-bold text-black">{exp.position || 'Puesto'}</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-1">{exp.company} • {exp.period}</p>
                  {exp.description && <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 className="text-2xl font-black text-black mb-4">EDUCACIÓN</h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index}>
                  <h3 className="font-bold text-black">{edu.degree || 'Título'}</h3>
                  <p className="text-sm text-gray-700">{edu.institution} • {edu.period}</p>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.skills && (
        <div>
          <h2 className="text-2xl font-black text-black mb-3">HABILIDADES</h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-black text-white text-xs font-bold uppercase">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderClassicTemplate = () => (
    <div className="bg-white p-8 space-y-6">
      <div className="text-center border-b-4 border-double border-gray-800 pb-6">
        <h1 className="text-4xl font-serif text-gray-900 mb-3">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-700">
          {formData.email && <span>{formData.email}</span>}
          {formData.phone && <span>|</span>}
          {formData.phone && <span>{formData.phone}</span>}
          {formData.location && <span>|</span>}
          {formData.location && <span>{formData.location}</span>}
        </div>
      </div>

      {formData.objective && (
        <div>
          <h2 className="text-xl font-serif text-gray-900 mb-3 text-center border-b border-gray-300 pb-2">Resumen Profesional</h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">{formData.objective}</p>
        </div>
      )}

      {formData.experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 className="text-xl font-serif text-gray-900 mb-4 text-center border-b border-gray-300 pb-2">Experiencia Profesional</h2>
          <div className="space-y-4">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-900">{exp.position || 'Puesto'}</h3>
                    <span className="text-sm text-gray-600 italic">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-700 italic mb-2">{exp.company}</p>
                  {exp.description && <p className="text-sm text-gray-700 leading-relaxed text-justify">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 className="text-xl font-serif text-gray-900 mb-4 text-center border-b border-gray-300 pb-2">Formación Académica</h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree || 'Título'}</h3>
                    <p className="text-sm text-gray-700 italic">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-600 italic">{edu.period}</span>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.skills && (
        <div>
          <h2 className="text-xl font-serif text-gray-900 mb-3 text-center border-b border-gray-300 pb-2">Competencias</h2>
          <p className="text-sm text-gray-700 text-center">{formData.skills}</p>
        </div>
      )}
    </div>
  );

  const renderArtisticTemplate = () => (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 space-y-6">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-20 blur-2xl"></div>
        <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            {formData.fullName || 'Tu Nombre Completo'}
          </h1>
          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            {formData.email && (
              <div className="flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full">
                <i className="ri-mail-line text-indigo-600"></i>
                <span>{formData.email}</span>
              </div>
            )}
            {formData.phone && (
              <div className="flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-full">
                <i className="ri-phone-line text-purple-600"></i>
                <span>{formData.phone}</span>
              </div>
            )}
            {formData.location && (
              <div className="flex items-center gap-2 bg-pink-100 px-3 py-1 rounded-full">
                <i className="ri-map-pin-line text-pink-600"></i>
                <span>{formData.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {formData.objective && (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
            ✨ Sobre Mí
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {formData.experience.some(exp => exp.company || exp.position) && (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            💼 Mi Trayectoria
          </h2>
          <div className="space-y-4">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gradient-to-b from-purple-300 to-transparent"></div>
                  <h3 className="font-bold text-gray-900">{exp.position || 'Puesto'}</h3>
                  <p className="text-sm text-purple-600 font-semibold mb-1">{exp.company} • {exp.period}</p>
                  {exp.description && <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            🎓 Formación
          </h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index}>
                  <h3 className="font-bold text-gray-900">{edu.degree || 'Título'}</h3>
                  <p className="text-sm text-gray-700">{edu.institution} • {edu.period}</p>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.skills && (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
            ⚡ Habilidades
          </h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.split(',').map((skill, index) => {
              const colors = [
                'from-indigo-500 to-purple-500',
                'from-purple-500 to-pink-500',
                'from-pink-500 to-rose-500',
                'from-indigo-500 to-blue-500'
              ];
              return (
                <span key={index} className={`px-4 py-2 bg-gradient-to-r ${colors[index % colors.length]} text-white text-xs font-medium rounded-full shadow-md`}>
                  {skill.trim()}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  const renderSimpleTemplate = () => (
    <div className="bg-white p-8 space-y-7">
      <div className="pb-5 border-b-2 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="text-sm text-gray-600 space-y-1">
          {formData.email && <div>{formData.email}</div>}
          {formData.phone && <div>{formData.phone}</div>}
          {formData.location && <div>{formData.location}</div>}
        </div>
      </div>

      {formData.objective && (
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-2">PERFIL PROFESIONAL</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {formData.experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3">EXPERIENCIA LABORAL</h2>
          <div className="space-y-4">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-900">{exp.position || 'Puesto'}</h3>
                    <span className="text-xs text-gray-600">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{exp.company}</p>
                  {exp.description && <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3">EDUCACIÓN</h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index}>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="font-semibold text-gray-900">{edu.degree || 'Título'}</h3>
                      <p className="text-sm text-gray-700">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-gray-600">{edu.period}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.skills && (
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-2">HABILIDADES</h2>
          <p className="text-sm text-gray-700">{formData.skills}</p>
        </div>
      )}
    </div>
  );

  const renderPremiumTemplate = () => (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 space-y-6">
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl font-bold">
            {(formData.fullName || 'TN').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">
              {formData.fullName || 'Tu Nombre Completo'}
            </h1>
            <div className="flex flex-wrap gap-3 text-sm">
              {formData.email && <span className="bg-white/20 px-3 py-1 rounded-full">{formData.email}</span>}
              {formData.phone && <span className="bg-white/20 px-3 py-1 rounded-full">{formData.phone}</span>}
              {formData.location && <span className="bg-white/20 px-3 py-1 rounded-full">{formData.location}</span>}
            </div>
          </div>
        </div>
      </div>

      {formData.objective && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-amber-600">
          <h2 className="text-lg font-bold text-amber-900 mb-3">Perfil Ejecutivo</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {formData.experience.some(exp => exp.company || exp.position) && (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <i className="ri-briefcase-fill text-white text-sm"></i>
            </div>
            Experiencia Profesional
          </h2>
          <div className="space-y-5">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index} className="border-l-4 border-amber-600 pl-4">
                  <h3 className="text-base font-bold text-gray-900">{exp.position || 'Puesto'}</h3>
                  <p className="text-sm text-amber-700 font-semibold mb-1">{exp.company} • {exp.period}</p>
                  {exp.description && <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <i className="ri-graduation-cap-fill text-white text-sm"></i>
            </div>
            Formación Académica
          </h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index}>
                  <h3 className="font-bold text-gray-900">{edu.degree || 'Título'}</h3>
                  <p className="text-sm text-gray-700">{edu.institution} • {edu.period}</p>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.skills && (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-bold text-orange-900 mb-3">Competencias Clave</h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold rounded-lg shadow-md">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderDynamicTemplate = () => (
    <div className="bg-white p-8 space-y-6">
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 p-8 rounded-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold mb-3">
            {formData.fullName || 'Tu Nombre Completo'}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            {formData.email && (
              <div className="flex items-center gap-2">
                <i className="ri-mail-fill"></i>
                <span>{formData.email}</span>
              </div>
            )}
            {formData.phone && (
              <div className="flex items-center gap-2">
                <i className="ri-phone-fill"></i>
                <span>{formData.phone}</span>
              </div>
            )}
            {formData.location && (
              <div className="flex items-center gap-2">
                <i className="ri-map-pin-fill"></i>
                <span>{formData.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {formData.objective && (
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-5 rounded-xl border-l-4 border-cyan-500">
          <h2 className="text-lg font-bold text-cyan-900 mb-2">Perfil Profesional</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {formData.experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            Experiencia Laboral
          </h2>
          <div className="space-y-4">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{exp.position || 'Puesto'}</h3>
                    <span className="text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <p className="text-sm text-cyan-700 font-semibold mb-2">{exp.company}</p>
                  {exp.description && <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
            Educación
          </h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{edu.degree || 'Título'}</h3>
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{edu.period}</span>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.skills && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
            Habilidades
          </h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-lg">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderCleanTemplate = () => (
    <div className="bg-gray-50 p-8 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {formData.email && <span className="flex items-center gap-1"><i className="ri-mail-line"></i>{formData.email}</span>}
          {formData.phone && <span className="flex items-center gap-1"><i className="ri-phone-line"></i>{formData.phone}</span>}
          {formData.location && <span className="flex items-center gap-1"><i className="ri-map-pin-line"></i>{formData.location}</span>}
        </div>
      </div>

      {formData.objective && (
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="text-base font-semibold text-gray-900 mb-2 uppercase tracking-wide">Perfil</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {formData.experience.some(exp => exp.company || exp.position) && (
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="text-base font-semibold text-gray-900 mb-3 uppercase tracking-wide">Experiencia</h2>
          <div className="space-y-4">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-medium text-gray-900">{exp.position || 'Puesto'}</h3>
                    <span className="text-xs text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{exp.company}</p>
                  {exp.description && <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="text-base font-semibold text-gray-900 mb-3 uppercase tracking-wide">Educación</h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-medium text-gray-900">{edu.degree || 'Título'}</h3>
                    <p className="text-sm text-gray-600">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-gray-500">{edu.period}</span>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.skills && (
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="text-base font-semibold text-gray-900 mb-2 uppercase tracking-wide">Habilidades</h2>
          <p className="text-sm text-gray-700">{formData.skills}</p>
        </div>
      )}
    </div>
  );

  const renderVibrantTemplate = () => (
    <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 space-y-6">
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white p-6 rounded-3xl shadow-2xl transform hover:scale-[1.01] transition-transform">
        <h1 className="text-4xl font-black mb-3">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          {formData.email && (
            <div className="bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
              <i className="ri-mail-fill"></i>
              <span>{formData.email}</span>
            </div>
          )}
          {formData.phone && (
            <div className="bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
              <i className="ri-phone-fill"></i>
              <span>{formData.phone}</span>
            </div>
          )}
          {formData.location && (
            <div className="bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
              <i className="ri-map-pin-fill"></i>
              <span>{formData.location}</span>
            </div>
          )}
        </div>
      </div>

      {formData.objective && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-orange-500">
          <h2 className="text-lg font-bold text-orange-900 mb-3 flex items-center gap-2">
            <i className="ri-user-star-fill text-orange-500"></i>
            Perfil Profesional
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {formData.experience.some(exp => exp.company || exp.position) && (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
            <i className="ri-briefcase-fill text-red-500"></i>
            Experiencia Laboral
          </h2>
          <div className="space-y-4">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border-l-4 border-orange-500">
                  <h3 className="font-bold text-gray-900 text-base">{exp.position || 'Puesto'}</h3>
                  <p className="text-sm text-orange-700 font-semibold mb-1">{exp.company} • {exp.period}</p>
                  {exp.description && <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
            <i className="ri-graduation-cap-fill text-red-500"></i>
            Educación
          </h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg">
                  <h3 className="font-bold text-gray-900">{edu.degree || 'Título'}</h3>
                  <p className="text-sm text-gray-700">{edu.institution} • {edu.period}</p>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.skills && (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
            <i className="ri-lightbulb-fill text-red-500"></i>
            Habilidades
          </h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.split(',').map((skill, index) => {
              const colors = [
                'from-yellow-500 to-orange-500',
                'from-orange-500 to-red-500',
                'from-red-500 to-pink-500',
                'from-yellow-400 to-red-500'
              ];
              return (
                <span key={index} className={`px-4 py-2 bg-gradient-to-r ${colors[index % colors.length]} text-white text-xs font-bold rounded-full shadow-md`}>
                  {skill.trim()}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  const renderSophisticatedTemplate = () => (
    <div className="bg-gradient-to-br from-slate-100 to-gray-100 p-8 space-y-6">
      <div className="bg-gradient-to-r from-slate-800 to-gray-900 text-white p-8 rounded-2xl shadow-2xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl font-bold border-2 border-white/20">
            {(formData.fullName || 'TN').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1">
              {formData.fullName || 'Tu Nombre Completo'}
            </h1>
            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              {formData.email && <span>{formData.email}</span>}
              {formData.phone && <span>•</span>}
              {formData.phone && <span>{formData.phone}</span>}
              {formData.location && <span>•</span>}
              {formData.location && <span>{formData.location}</span>}
            </div>
          </div>
        </div>
      </div>

      {formData.objective && (
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-slate-700">
          <h2 className="text-base font-bold text-slate-900 mb-3 uppercase tracking-wider">Resumen Ejecutivo</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {formData.experience.some(exp => exp.company || exp.position) && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-wider border-b-2 border-slate-700 pb-2">Trayectoria Profesional</h2>
          <div className="space-y-5">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{exp.position || 'Puesto'}</h3>
                    <span className="text-xs text-gray-600 bg-slate-100 px-3 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="text-sm text-slate-700 font-semibold mb-2">{exp.company}</p>
                  {exp.description && <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-wider border-b-2 border-slate-700 pb-2">Formación Académica</h2>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{edu.degree || 'Título'}</h3>
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-gray-600 bg-slate-100 px-3 py-1 rounded">{edu.period}</span>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.skills && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-base font-bold text-slate-900 mb-3 uppercase tracking-wider border-b-2 border-slate-700 pb-2">Competencias Profesionales</h2>
          <div className="grid grid-cols-2 gap-2">
            {formData.skills.split(',').map((skill, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
                <span>{skill.trim()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderFreshTemplate = () => (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 space-y-6">
      <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-emerald-400">
        <h1 className="text-4xl font-bold text-emerald-900 mb-3">
          {formData.fullName || 'Tu Nombre Completo'}
        </h1>
        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          {formData.email && (
            <div className="flex items-center gap-2 bg-emerald-100 px-3 py-1 rounded-full">
              <i className="ri-mail-line text-emerald-700"></i>
              <span>{formData.email}</span>
            </div>
          )}
          {formData.phone && (
            <div className="flex items-center gap-2 bg-teal-100 px-3 py-1 rounded-full">
              <i className="ri-phone-line text-teal-700"></i>
              <span>{formData.phone}</span>
            </div>
          )}
          {formData.location && (
            <div className="flex items-center gap-2 bg-cyan-100 px-3 py-1 rounded-full">
              <i className="ri-map-pin-line text-cyan-700"></i>
              <span>{formData.location}</span>
            </div>
          )}
        </div>
      </div>

      {formData.objective && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-emerald-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
              <i className="ri-user-smile-line text-white"></i>
            </div>
            <h2 className="text-lg font-bold text-emerald-900">Sobre Mí</h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {formData.experience.some(exp => exp.company || exp.position) && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-teal-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <i className="ri-briefcase-line text-white"></i>
            </div>
            <h2 className="text-lg font-bold text-teal-900">Mi Experiencia</h2>
          </div>
          <div className="space-y-4">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-xl">
                  <h3 className="font-bold text-gray-900 text-base">{exp.position || 'Puesto'}</h3>
                  <p className="text-sm text-teal-700 font-semibold mb-1">{exp.company} • {exp.period}</p>
                  {exp.description && <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-cyan-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
              <i className="ri-book-open-line text-white"></i>
            </div>
            <h2 className="text-lg font-bold text-cyan-900">Estudios</h2>
          </div>
          <div className="space-y-3">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 p-3 rounded-lg">
                  <h3 className="font-bold text-gray-900">{edu.degree || 'Título'}</h3>
                  <p className="text-sm text-gray-700">{edu.institution} • {edu.period}</p>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.skills && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-emerald-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
              <i className="ri-star-line text-white"></i>
            </div>
            <h2 className="text-lg font-bold text-emerald-900">Mis Habilidades</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-medium rounded-full shadow-md">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderCompactTemplate = () => (
    <div className="bg-white p-6 space-y-5 text-sm">
      <div className="flex items-start gap-4 pb-4 border-b-2 border-gray-300">
        <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
          {(formData.fullName || 'TN').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {formData.fullName || 'Tu Nombre Completo'}
          </h1>
          <div className="text-xs text-gray-600 space-y-0.5">
            {formData.email && <div className="flex items-center gap-1"><i className="ri-mail-line"></i>{formData.email}</div>}
            {formData.phone && <div className="flex items-center gap-1"><i className="ri-phone-line"></i>{formData.phone}</div>}
            {formData.location && <div className="flex items-center gap-1"><i className="ri-map-pin-line"></i>{formData.location}</div>}
          </div>
        </div>
      </div>

      {formData.objective && (
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
            <div className="w-1 h-4 bg-gray-800"></div>
            PERFIL
          </h2>
          <p className="text-xs text-gray-700 leading-relaxed">{formData.objective}</p>
        </div>
      )}

      {formData.experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <div className="w-1 h-4 bg-gray-800"></div>
            EXPERIENCIA
          </h2>
          <div className="space-y-3">
            {formData.experience.map((exp, index) => (
              (exp.company || exp.position) && (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="font-bold text-gray-900 text-sm">{exp.position || 'Puesto'}</h3>
                    <span className="text-xs text-gray-600">{exp.period}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-medium mb-1">{exp.company}</p>
                  {exp.description && <p className="text-xs text-gray-700 leading-relaxed">{exp.description}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <div className="w-1 h-4 bg-gray-800"></div>
            EDUCACIÓN
          </h2>
          <div className="space-y-2">
            {formData.education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{edu.degree || 'Título'}</h3>
                    <p className="text-xs text-gray-700">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-gray-600">{edu.period}</span>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {formData.skills && (
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
            <div className="w-1 h-4 bg-gray-800"></div>
            HABILIDADES
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-gray-800 text-white text-xs rounded">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="h-[calc(100vh-200px)] overflow-y-auto">
        {template === 'ats' && renderATSTemplate()}
        {template === 'modern' && renderModernTemplate()}
        {template === 'creative' && renderCreativeTemplate()}
        {template === 'professional' && renderProfessionalTemplate()}
        {template === 'executive' && renderExecutiveTemplate()}
        {template === 'minimalist' && renderMinimalistTemplate()}
        {template === 'elegant' && renderElegantTemplate()}
        {template === 'tech' && renderTechTemplate()}
        {template === 'corporate' && renderCorporateTemplate()}
        {template === 'bold' && renderBoldTemplate()}
        {template === 'classic' && renderClassicTemplate()}
        {template === 'artistic' && renderArtisticTemplate()}
        {template === 'simple' && renderSimpleTemplate()}
        {template === 'premium' && renderPremiumTemplate()}
        {template === 'dynamic' && renderDynamicTemplate()}
        {template === 'clean' && renderCleanTemplate()}
        {template === 'vibrant' && renderVibrantTemplate()}
        {template === 'sophisticated' && renderSophisticatedTemplate()}
        {template === 'fresh' && renderFreshTemplate()}
        {template === 'compact' && renderCompactTemplate()}
      </div>
    </div>
  );
}
