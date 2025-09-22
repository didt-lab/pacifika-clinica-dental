import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';

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

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    telefono: '',
    tratamiento: '',
    mensaje: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  // Instalaciones slider state
  const slidesInstalaciones = [
    {
      title: 'Instalaciones modernas y seguras',
      text: 'Un ambiente cómodo y con la última tecnología.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Instalaciones modernas y seguras',
      text: 'Sala de espera climatizada y confortable',
      image: 'https://images.unsplash.com/photo-1581594693700-89e65d6d6b53?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Instalaciones modernas y seguras',
      text: 'Estacionamiento privado para pacientes',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Instalaciones modernas y seguras',
      text: 'Consultorios particulares con tecnología avanzada',
      image: 'https://images.unsplash.com/photo-1581594693700-89e65d6d6b53?q=80&w=1600&auto=format&fit=crop'
    }
  ];

  // Old instalaciones slider state removed (replaced by panel slider)

  // Segundo slider estilo panel
  const slidesInstalacionesB = slidesInstalaciones;
  const [currentSlideB, setCurrentSlideB] = useState(0);
  const nextSlideB = () => setCurrentSlideB((p) => (p + 1) % slidesInstalacionesB.length);
  const prevSlideB = () => setCurrentSlideB((p) => (p - 1 + slidesInstalacionesB.length) % slidesInstalacionesB.length);
  useEffect(() => {
    const id = setInterval(() => nextSlideB(), 6000);
    return () => clearInterval(id);
  }, []);

  // Valoración (reseñas) slider
  const reviews = [
    { name: 'Pablo Galán', date: '30 Mayo, 2023', rating: 5, text: 'Una maravilla de atención. Muy recomendado.' },
    { name: 'Charo Gómez', date: '29 Mayo, 2023', rating: 5, text: 'Muy profesionales y atentos. Todo el personal súper amable.' },
    { name: 'Jorge Esperón', date: '28 Mayo, 2023', rating: 5, text: 'Atención y profesionalidad excelente.' },
    { name: 'María Rivera', date: '15 Junio, 2023', rating: 5, text: 'Instalaciones impecables y tecnología moderna.' },
    { name: 'Luis Torres', date: '02 Julio, 2023', rating: 5, text: 'Me explicaron todo con detalle. Gran experiencia.' }
  ];
  const [reviewsIndex, setReviewsIndex] = useState(0);
  const [reviewsVisible, setReviewsVisible] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 768) setReviewsVisible(1);
      else if (w < 1024) setReviewsVisible(2);
      else setReviewsVisible(3);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);
  const nextReview = () => setReviewsIndex((p) => (p + 1) % reviews.length);
  const prevReview = () => setReviewsIndex((p) => (p - 1 + reviews.length) % reviews.length);
  useEffect(() => {
    const id = setInterval(() => nextReview(), 5500);
    return () => clearInterval(id);
  }, []);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

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
        setFormData({
          nombre: '',
          correo: '',
          telefono: '',
          tratamiento: '',
          mensaje: ''
        });
        setFormErrors({});
      } else {
        const response = await fetch('https://formspree.io/f/xdkogkgk', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            _cc: 'pacifikaclinicadental@hotmail.com'
          }),
        });
        
        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            nombre: '',
            correo: '',
            telefono: '',
            tratamiento: '',
            mensaje: ''
          });
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

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <Layout currentPage="inicio">
      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative text-white min-h-screen flex items-start justify-start overflow-hidden">
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{ y: backgroundY }}
          >
            <img
              src="/imagenes/background-inicio.jpg"
              alt="Pacifika Clínica Dental"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"
            style={{ y: backgroundY }}
          />

          <div className="relative z-20 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6" style={{ paddingTop: '5vh' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-[70%] ml-0 md:ml-0 -ml-6 sm:-ml-8 lg:-ml-12 xl:-ml-16 2xl:-ml-20"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-left">
                Clínica Dental en Mazatlán:
                <span className="block text-primary-500">tu sonrisa en las mejores manos</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl leading-relaxed text-left">
                Atención personalizada, tratamientos integrales, instalaciones de primer nivel y tecnología avanzada para la salud de tu sonrisa.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-start items-start max-w-md"
              >
                <a
                  href="https://wa.me/526699928700?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  Agendar consulta
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        

        {/* Información Section */}
        <section id="información" className="py-12 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="col-span-2 aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/imagenes/dentista-1.jpg" 
                    alt="Clínica dental Pacifika - Atención profesional"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/imagenes/dentista-2.jpg" 
                    alt="Especialistas en odontología"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/imagenes/dentista-3.jpg" 
                    alt="Tratamientos dentales avanzados"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
                style={{ willChange: 'transform, opacity' }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Atención dental de alta calidad en Mazatlán
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Con más de 13 años de experiencia, nuestra clínica dental en Mazatlán cuenta con especialistas en ortodoncia, endodoncia, odontología general, restauradora avanzada y periodoncia, dedicados a ofrecerte tratamientos de alta calidad y resultados que transforman sonrisas.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <button
                    onClick={() => scrollToId('contacto')}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    Más información
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="12,5 19,12 12,19" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tratamientos Destacados Section */}
        <section id="tratamientos" className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tratamientos Destacados</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[ 
                { name: 'Blanqueamiento Dental', icon: '/imagenes/iconos/blanqueamiento.png' },
                { name: 'Limpieza Dental', icon: '/imagenes/iconos/Limpieza.png' },
                { name: 'Brackets Estéticos', icon: '/imagenes/iconos/brackets.png' },
                { name: 'Implantes Dentales', icon: '/imagenes/iconos/implante.png' },
                { name: 'Endodoncia', icon: '/imagenes/iconos/endodoncia.png' },
                { name: 'Diseño de Sonrisa', icon: null },
                { name: 'Carillas Dentales', icon: '/imagenes/iconos/carilla-dental.png' },
                { name: 'Prótesis Dentales', icon: '/imagenes/iconos/protesis_dentales.png' },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-500 rounded-full flex items-center justify-center relative">
                    {/* Fallback SVG visible by default */}
                    <svg className="w-10 h-10 text-white absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 20c4.418 0 8-3.582 8-8V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v5c0 4.418 3.582 8 8 8Z"/>
                      <path d="M8 13s1.5 2 4 2 4-2 4-2"/>
                      <path d="M9 9h.01M15 9h.01"/>
                    </svg>
                    {/* Image overlay; on load hides the fallback */}
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-10 h-10 object-contain relative"
                        onLoad={(e) => {
                          const svg = (e.target as HTMLImageElement).previousElementSibling as HTMLElement | null;
                          if (svg) svg.style.display = 'none';
                        }}
                        onError={(e) => {
                          // Keep fallback visible and hide the broken image
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Especialistas Section */}
        <section id="especialistas" className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conoce a nuestros especialistas</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { nombre: 'Dr. Juan Lizarraga', especialidad: 'Endodoncia' },
                { nombre: 'Dra. Krizia Zamudio', especialidad: 'Odontología General' },
                { nombre: 'Dr. Mario Díaz', especialidad: 'Periodoncia e Implantología General' },
                { nombre: 'Dr. Luis Osuna', especialidad: 'Odontología Restauradora Avanzada' },
                { nombre: 'Dra. Erika Bernal', especialidad: 'Ortodoncia' },
              ].map((doc, index) => (
                <motion.div
                  key={doc.nombre}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-[15px] overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full border-2 border-primary-500 bg-primary-50 overflow-hidden">
                      <img
                        src={`https://i.pravatar.cc/192?u=${encodeURIComponent(doc.nombre)}`}
                        alt={doc.nombre}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.nombre)}&background=2E7D32&color=ffffff&size=192&bold=true`;
                        }}
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">{doc.nombre}</h3>
                    <p className="text-sm text-gray-600">{doc.especialidad}</p>
                    <span className="inline-flex mt-3 px-2.5 py-1 rounded-full bg-primary-100 text-primary-700 text-[10px] font-medium">English Spoken</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Instalaciones Section */}
        <section id="instalaciones" className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-[18px] overflow-hidden shadow-lg border border-gray-100">
              {/* Left Panel */}
              <div className="lg:col-span-1 bg-primary-50 p-8 sm:p-10 flex flex-col justify-center">
                <motion.div
                  key={`panel-${currentSlideB}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-700 mb-2">Nuestras instalaciones</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{slidesInstalacionesB[currentSlideB].title}</h2>
                  <p className="mt-3 text-gray-700 text-lg">{slidesInstalacionesB[currentSlideB].text}</p>

                  <div className="mt-6 flex items-center gap-3">
                    <button aria-label="Anterior" onClick={prevSlideB} className="p-2.5 rounded-full bg-white border border-primary-200 text-gray-800 hover:bg-primary-100 transition">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="15,6 9,12 15,18" stroke="currentColor" strokeWidth="2"/></svg>
                    </button>
                    <button aria-label="Siguiente" onClick={nextSlideB} className="p-2.5 rounded-full bg-white border border-primary-200 text-gray-800 hover:bg-primary-100 transition">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="9,6 15,12 9,18" stroke="currentColor" strokeWidth="2"/></svg>
                    </button>
                    <div className="ml-2 flex gap-2">
                      {slidesInstalacionesB.map((_, i) => (
                        <span key={i} className={`w-2 h-2 rounded-full ${i === currentSlideB ? 'bg-primary-600' : 'bg-primary-200'}`}></span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-1 bg-white">
                <motion.div
                  key={`imgB-${currentSlideB}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="h-[380px] md:h-[480px] w-full"
                >
                  <img
                    src={slidesInstalacionesB[currentSlideB].image}
                    alt={slidesInstalacionesB[currentSlideB].text}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop';
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Ubicación Section */}
        <section id="Ubicación" className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ubicados en la Zona más Céntrica de Mazatlán</h2>
                <p className="text-lg text-gray-700 mb-6">Nos encontramos en Av. Insurgentes 912 a 2 minutos del Estadio Teodoro Mariscal, entre Av. Ejército México y Av. Revolución.</p>
                <a
                  href="https://www.google.com/maps?q=Av.+Insurgentes+912,+Mazatl%C3%A1n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 shadow-lg transition"
                >
                  Ver en Google Maps
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2"/><polyline points="12,5 19,12 12,19" stroke="currentColor" strokeWidth="2"/></svg>
                </a>
              </motion.div>

              {/* Right: Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-[15px] overflow-hidden shadow-lg bg-white"
              >
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="Ubicación Pacifika Clínica Dental"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.157938225813!2d-106.409!3d23.249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd13d2b6c7ff9%3A0x0!2sAv.%20Insurgentes%20912%2C%20Mazatl%C3%A1n!5e0!3m2!1ses-419!2smx!4v1700000000000"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valoración (Reseñas) Section */}
        <section id="valoración" className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¿Qué dicen de nosotros?</h2>
              <div className="mt-4 flex items-center justify-center gap-2 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <div className="mt-2 text-sm text-gray-600">Basado en reseñas de Google</div>
              <a
                href="https://www.google.com/maps?q=Pacifika+Cl%C3%ADnica+Dental+Mazatl%C3%A1n&hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 text-sm font-medium"
              >
                Ver todas en Google
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2"/><polyline points="12,5 19,12 12,19" stroke="currentColor" strokeWidth="2"/></svg>
              </a>
            </div>

            <div className="relative">
              {/* Controls */}
              <button onClick={prevReview} aria-label="Anterior" className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-gray-300 bg-white shadow hover:bg-gray-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="15,6 9,12 15,18" stroke="currentColor" strokeWidth="2"/></svg>
              </button>
              <button onClick={nextReview} aria-label="Siguiente" className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-gray-300 bg-white shadow hover:bg-gray-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="9,6 15,12 9,18" stroke="currentColor" strokeWidth="2"/></svg>
              </button>

              <div className="overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {Array.from({ length: reviewsVisible }).map((_, idx) => {
                    const i = (reviewsIndex + idx) % reviews.length;
                    const r = reviews[i];
                    return (
                      <motion.div
                        key={`${r.name}-${i}`}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-gray-900">{r.name}</p>
                          <svg className="w-5 h-5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1h-9.18v2.96h5.28c-.23 1.5-1.6 4.4-5.28 4.4-3.18 0-5.78-2.63-5.78-5.87s2.6-5.87 5.78-5.87c1.81 0 3.03.77 3.72 1.43l2.54-2.45C17 4.14 15 3.2 12.17 3.2 6.99 3.2 2.8 7.39 2.8 12.59s4.19 9.39 9.37 9.39c5.41 0 8.96-3.8 8.96-9.16 0-.62-.07-1.05-.18-1.72z"/></svg>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500 mb-1">
                          {Array.from({ length: r.rating }).map((_, s) => (
                            <svg key={s} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{r.date}</p>
                        <p className="text-gray-700">{r.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-2">
                {reviews.map((_, i) => (
                  <span key={i} className={`h-1.5 rounded-full transition-all ${i === reviewsIndex ? 'w-6 bg-primary-600' : 'w-2 bg-gray-300'}`}></span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 mt-8">
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
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Horarios</p>
                      <p className="text-gray-600">Lunes - Viernes 08:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
