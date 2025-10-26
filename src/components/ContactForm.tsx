import React, { useState } from 'react';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface Props {
  defaultTratamiento?: string;
}

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  tratamiento: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  correo?: string;
  telefono?: string;
  tratamiento?: string;
}

export default function ContactForm({ defaultTratamiento = '' }: Props) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    telefono: '',
    tratamiento: defaultTratamiento,
    mensaje: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.nombre.trim()) errors.nombre = 'El nombre es requerido';
    if (!formData.correo.trim()) errors.correo = 'El correo es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.correo)) errors.correo = 'El correo no es válido';
    if (!formData.telefono.trim()) errors.telefono = 'El teléfono es requerido';
    if (!formData.tratamiento.trim()) errors.tratamiento = 'Selecciona un tratamiento';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('submitting');

    try {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form data (development):', formData);
        setSubmitStatus('success');
        setFormData({ nombre: '', correo: '', telefono: '', tratamiento: defaultTratamiento, mensaje: '' });
        setFormErrors({});
      } else {
        const response = await fetch('https://formspree.io/f/xdkogkgk', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, _cc: 'pacifikaclinicadental@hotmail.com' }),
        });
        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ nombre: '', correo: '', telefono: '', tratamiento: defaultTratamiento, mensaje: '' });
          setFormErrors({});
        } else {
          throw new Error('Error en el envío');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-3 p-6 rounded-[15px] flex flex-col" style={{backgroundColor: '#FBFCF5'}}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitar Cita</h3>
        <p className="text-gray-600">Completa el formulario y nos pondremos en contacto contigo</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
            <input 
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className={`w-full pl-2.5 pr-0 py-1 border-0 border-b-2 ${formErrors.nombre ? 'border-red-500' : 'border-gray-200'} focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 transition-colors duration-300`}
              placeholder=""
              required 
            />
            {formErrors.nombre && <p className="text-red-500 text-xs mt-1">{formErrors.nombre}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo *</label>
            <input 
              name="correo"
              type="email"
              value={formData.correo}
              onChange={handleInputChange}
              className={`w-full pl-2.5 pr-0 py-1 border-0 border-b-2 ${formErrors.correo ? 'border-red-500' : 'border-gray-200'} focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 transition-colors duration-300`}
              placeholder=""
              required 
            />
            {formErrors.correo && <p className="text-red-500 text-xs mt-1">{formErrors.correo}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
            <input 
              name="telefono"
              type="tel"
              value={formData.telefono}
              onChange={handleInputChange}
              className={`w-full pl-2.5 pr-0 py-1 border-0 border-b-2 ${formErrors.telefono ? 'border-red-500' : 'border-gray-200'} focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 transition-colors duration-300`}
              placeholder=""
              required 
            />
            {formErrors.telefono && <p className="text-red-500 text-xs mt-1">{formErrors.telefono}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tratamiento de interés</label>
            <select 
              name="tratamiento"
              value={formData.tratamiento}
              onChange={handleInputChange}
              className="w-full pl-2.5 pr-0 py-1 border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 appearance-none cursor-pointer transition-colors duration-300"
            >
              <option value="">Selecciona una opción</option>
              <option value="Blanqueamiento Dental">Blanqueamiento Dental</option>
              <option value="Limpieza Dental">Limpieza Dental</option>
              <option value="Brackets Estéticos">Brackets Estéticos</option>
              <option value="Implantes Dentales">Implantes Dentales</option>
              <option value="Endodoncia">Endodoncia</option>
              <option value="Diseño de Sonrisa">Diseño de Sonrisa</option>
              <option value="Carillas Dentales">Carillas Dentales</option>
              <option value="Prótesis Dentales">Prótesis Dentales</option>
              <option value="Resina dental">Resina dental</option>
              <option value="Corona zirconia">Corona zirconia</option>
              <option value="Prótesis sobre implantes">Prótesis sobre implantes</option>
              <option value="All in four">All in four</option>
              <option value="All on six">All on six</option>
            </select>
            {formErrors.tratamiento && <p className="text-red-500 text-xs mt-1">{formErrors.tratamiento}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
          <textarea 
            name="mensaje"
            value={formData.mensaje}
            onChange={handleInputChange}
            rows={2} 
            className="w-full pl-2.5 pr-0 py-1 border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 resize-none transition-colors duration-300" 
            placeholder=""
          />
        </div>
        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-xl'
            }`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-green-700 font-medium">¡Mensaje enviado exitosamente!</p>
            </div>
            <p className="text-green-600 text-sm mt-1">Nos pondremos en contacto contigo pronto.</p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-red-700 font-medium">Hubo un error al enviar el mensaje. Por favor intenta nuevamente.</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
