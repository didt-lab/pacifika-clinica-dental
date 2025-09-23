import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';

export default function Endodoncia() {
  // Parallax scroll effect for hero background
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  
  // State for accordion
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Form state
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    tratamiento: 'Endodoncia',
    mensaje: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Form validation and submission functions
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es obligatorio';
    }
    
    if (!formData.correo.trim()) {
      errors.correo = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      errors.correo = 'El correo no tiene un formato válido';
    }
    
    if (!formData.telefono.trim()) {
      errors.telefono = 'El teléfono es obligatorio';
    }
    
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setFormData({
        nombre: '',
        correo: '',
        telefono: '',
        tratamiento: 'Endodoncia',
        mensaje: ''
      });
      setFormErrors({});
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      setFormErrors({ general: 'Error al enviar el formulario. Por favor intenta de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout currentPage="endodoncia">
      <main>
        {/* Hero Section */}
        <section id="portada_endodoncia" className="relative text-white py-20 overflow-hidden">
          {/* Background with parallax */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: backgroundY, willChange: 'transform' }}
          >
            <div
              className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/imagenes/Endodoncia.jpg)',
              }}
            />
            <div className="absolute inset-0 w-full h-[120%] bg-slate-900/70"></div>
          </motion.div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Endodoncia en Mazatlán: <span className="text-primary-500">tratamiento para dolor de muela sin dolor</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed text-gray-300">
                  Contamos con más de 13 años de experiencia en endodoncia, tecnología de vanguardia y atención personalizada para cuidar tu salud bucal en un ambiente seguro y moderno.
                </p>
                <div className="flex justify-start">
                  <a
                    href="https://wa.me/526699928700?text=Hola%2C%20necesito%20una%20consulta%20de%20endodoncia"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                    </svg>
                    Agendar consulta
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Doctor Section */}
        <div id="especialista" className="absolute -mt-12"></div>
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Doctor Image */}
                <motion.div 
                  className="lg:col-span-2 relative"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
                    alt="Dr. Juan Manuel Lizárraga - Endodoncista en Mazatlán"
                    className="w-full h-full min-h-[600px] object-cover"
                  />
                  <motion.div 
                    className="absolute top-6 right-6"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "backOut" }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      English Spoken
                    </span>
                  </motion.div>
                </motion.div>

                {/* Doctor Info */}
                <motion.div 
                  className="lg:col-span-3 p-8 lg:p-12"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="space-y-8">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        Tu endodoncista en Mazatlán
                      </h2>
                    </motion.div>

                    {/* Doctor Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">
                        El <b>Dr. Juan Manuel Lizárraga</b> es especialista en endodoncia con formación en la Universidad Autónoma de Sinaloa y la Universidad Autónoma de Baja California. Con más de 15 años de experiencia, ofrece tratamientos indoloros para conservar tus dientes y aliviar el dolor de muela.
                      </p>
                    </motion.div>

                    {/* CTA */}
                    <motion.div 
                      className="pt-4"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href="https://wa.me/526699928700?text=Hola%2C%20necesito%20agendar%20una%20cita%20con%20el%20Dr.%20Lizárraga%20para%20endodoncia"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                        </svg>
                        Agendar cita con el Dr. Lizárraga
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Beneficios Section */}
        <div id="beneficios" className="absolute -mt-12"></div>
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* What is Endodoncia */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué es la endodoncia y cuándo la necesitas?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                La endodoncia, también conocida como tratamiento de conducto, se utiliza para eliminar la infección dentro del diente y aliviar el dolor de muela de forma definitiva.
              </p>
              <motion.a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contacto');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all duration-300 hover:shadow-lg"
              >
                Más información
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Benefits Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Beneficios de una endodoncia
              </h2>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Evita la pérdida de dientes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Conserva tu diente natural gracias al tratamiento de conducto.
                </p>
              </motion.div>

              {/* Benefit 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Alarga la vida de tu sonrisa
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Una endodoncia a tiempo mantiene tus piezas dentales fuertes y funcionales.
                </p>
              </motion.div>

              {/* Benefit 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Elimina el dolor de muela de raíz
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tratamientos sin dolor para recuperar tu calidad de vida de inmediato.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Especialidades Endodoncia Section */}
        <div id="especialidades_endodoncia" className="absolute -mt-12"></div>
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Especialidades en Endodoncia
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ofrecemos tratamientos especializados con tecnología de vanguardia para cada tipo de procedimiento endodóntico.
              </p>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-200 transition-colors">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3 6l3 8 3-8c1.5-1.5 3-3.5 3-6 0-3.5-2.5-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Endodoncia en dientes anteriores, premolares y molares
                </h3>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-200 transition-colors">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3 6l3 8 3-8c1.5-1.5 3-3.5 3-6 0-3.5-2.5-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Endoposte estético y endoposte metálico
                </h3>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-200 transition-colors">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3 6l3 8 3-8c1.5-1.5 3-3.5 3-6 0-3.5-2.5-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Retratamientos de endodoncia
                </h3>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-200 transition-colors">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3 6l3 8 3-8c1.5-1.5 3-3.5 3-6 0-3.5-2.5-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Colocación de MTA
                </h3>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-200 transition-colors">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3 6l3 8 3-8c1.5-1.5 3-3.5 3-6 0-3.5-2.5-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Retiro de endoposte
                </h3>
              </motion.div>

              {/* Card 6 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-200 transition-colors">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3 6l3 8 3-8c1.5-1.5 3-3.5 3-6 0-3.5-2.5-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Retiro de corona dental
                </h3>
              </motion.div>
            </div>
          </div>
        </section>




        {/* FAQ Section */}
        <div id="preguntas_endodoncia" className="absolute -mt-12"></div>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Preguntas frecuentes sobre la endodoncia
              </h2>
            </motion.div>

            {/* FAQ Items - Accordion */}
            <div className="space-y-4">
              {[
                {
                  question: "¿Siempre necesito endodoncia si tengo dolor de muela o sensibilidad?",
                  answer: "No siempre. El diagnóstico lo hace el endodoncista mediante pruebas clínicas y radiográficas."
                },
                {
                  question: "¿La endodoncia duele?",
                  answer: "No. Con la tecnología actual y realizada por un especialista, la endodoncia es un tratamiento indoloro que elimina el dolor de muela de forma segura."
                },
                {
                  question: "¿Cuánto tiempo tarda una endodoncia?",
                  answer: "Aproximadamente 50 minutos por pieza dental."
                },
                {
                  question: "¿En cuántas citas se realiza la endodoncia?",
                  answer: "Generalmente en una sola cita. Solo en casos especiales puede requerir dos o más."
                },
                {
                  question: "¿Qué cuidados debo seguir después?",
                  answer: "Evita comer o tomar durante una hora y no mastiques con el diente tratado hasta que esté totalmente rehabilitado."
                },
                {
                  question: "¿Cuánto cuesta una endodoncia en Mazatlán?",
                  answer: "El costo de la endodoncia depende del diagnóstico y del tipo de diente a tratar. Lo ideal es agendar una consulta con el especialista para determinar el tratamiento adecuado para tu caso."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 lg:px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openAccordion === index ? "auto" : 0,
                      opacity: openAccordion === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 lg:px-8 pb-6 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contacto_endodoncia" className="absolute -mt-12"></div>
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Pacifika Clínica Dental: el espacio moderno que espera por ti</h2>
            <p className="mt-2 text-gray-700">Déjanos tus datos para ponernos en contacto contigo.</p>
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center pt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Ubicación de la Clínica</p>
                      <p className="text-gray-600">Av. Insurgentes 912, Fracc. María Fernanda, Mazatlán</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center pt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Llama</p>
                      <p className="text-gray-600">+52 (669) 992 87 00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center pt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Envía un mensaje</p>
                      <p className="text-gray-600">pacifikaclinicadental@hotmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center pt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Horarios</p>
                      <p className="text-gray-600">Lunes - Viernes 08:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center pt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <a href="https://www.facebook.com/PacifikaMedicaDental/" target="_blank" rel="noreferrer" className="font-semibold text-gray-900 text-lg hover:text-primary-500 transition-colors">
                        Facebook
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center pt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                        <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <a href="https://www.instagram.com/pacifika.medica.dental/" target="_blank" rel="noreferrer" className="font-semibold text-gray-900 text-lg hover:text-primary-500 transition-colors">
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 p-6 rounded-[15px] flex flex-col" style={{backgroundColor: '#FBFCF5'}}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitar Cita para Endodoncia</h3>
                  <p className="text-gray-600">Completa el formulario y nos pondremos en contacto contigo</p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Success/Error Messages */}
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
                  
                  {submitStatus === 'error' && Object.keys(formErrors).length > 0 && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-red-700 font-medium">Por favor completa los campos obligatorios:</p>
                      </div>
                      <ul className="text-red-600 text-sm space-y-1">
                        {Object.values(formErrors).map((error, index) => (
                          <li key={index}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}

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
                        <option value="Endodoncia">Endodoncia</option>
                        <option value="Tratamiento de Conducto">Tratamiento de Conducto</option>
                        <option value="Retratamiento de Endodoncia">Retratamiento de Endodoncia</option>
                        <option value="Endoposte">Endoposte</option>
                        <option value="Colocación de MTA">Colocación de MTA</option>
                        <option value="Retiro de Corona">Retiro de Corona</option>
                      </select>
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
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        'Enviar Solicitud'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
};
