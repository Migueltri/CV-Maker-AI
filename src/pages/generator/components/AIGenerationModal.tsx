interface AIGenerationModalProps {
  isGenerating: boolean;
}

export default function AIGenerationModal({ isGenerating }: AIGenerationModalProps) {
  const steps = [
    { icon: 'ri-file-text-line', text: 'Analizando tu información', delay: 0 },
    { icon: 'ri-brain-line', text: 'Optimizando con IA avanzada', delay: 1000 },
    { icon: 'ri-sparkling-2-fill', text: 'Generando contenido profesional', delay: 2000 },
    { icon: 'ri-check-line', text: '¡CV mejorado con éxito!', delay: 3000 }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform animate-scaleIn">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <i className="ri-sparkling-2-fill text-white text-3xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {isGenerating ? 'Generando tu CV...' : '¡Completado!'}
          </h3>
          <p className="text-gray-600">
            {isGenerating ? 'Nuestra IA está optimizando tu currículum' : 'Tu CV ha sido mejorado exitosamente'}
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                !isGenerating && index === steps.length - 1
                  ? 'bg-green-50 border-2 border-green-500'
                  : 'bg-gray-50'
              }`}
              style={{
                animation: `slideInLeft 0.5s ease-out ${index * 0.15}s both`
              }}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                !isGenerating && index === steps.length - 1
                  ? 'bg-green-500'
                  : 'bg-gradient-to-br from-blue-600 to-purple-600'
              }`}>
                <i className={`${step.icon} text-white text-lg ${
                  isGenerating && index < steps.length - 1 ? 'animate-pulse' : ''
                }`}></i>
              </div>
              <span className={`font-medium ${
                !isGenerating && index === steps.length - 1
                  ? 'text-green-700'
                  : 'text-gray-700'
              }`}>
                {step.text}
              </span>
            </div>
          ))}
        </div>

        {!isGenerating && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-green-600 font-medium">
              <i className="ri-check-double-line text-lg"></i>
              Tu CV ahora es más profesional y optimizado para ATS
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
