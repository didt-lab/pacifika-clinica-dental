import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import perFachada from '../../imagenes/instalaciones/FACHADA GARO.webp';
import per2 from '../../imagenes/instalaciones/2.webp';
import per1p from '../../imagenes/instalaciones/1-p.jpg';
import per3p from '../../imagenes/instalaciones/3-p.webp';
import imgConsulta from '../../imagenes/consulta_periodontal.webp';
import imgLimpieza from '../../imagenes/limpieza_profunda.webp';
import imgGingivectomia from '../../imagenes/gingivectomia2.webp';
import imgRecubrimiento from '../../imagenes/recubrimiento_radicular2.webp';
import imgImplantes from '../../imagenes/implantes_dentales.webp';
import imgRegeneracion from '../../imagenes/cirugia-regeneracion-osea.jpeg';

export default function Periodoncia() {
  // Parallax scroll effect for hero background
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  // State for accordion
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Galería Periodoncia
  const galleryPer = [
    { image: perFachada, alt: 'Fachada Pacifika' },
    { image: per2, alt: 'Instalaciones 2' },
    { image: per1p, alt: 'Instalaciones 1-p' },
    { image: per3p, alt: 'Instalaciones 3-p' },
  ];
  const [galleryIndex, setGalleryIndex] = useState(0);
  const nextGallery = () => setGalleryIndex((p) => (p + 1) % galleryPer.length);
  const prevGallery = () => setGalleryIndex((p) => (p - 1 + galleryPer.length) % galleryPer.length);

  return (
    <Layout currentPage="periodoncia">
      <main>
        {/* Hero Section */}
        <section id="portada_periodoncia" className="relative text-white py-20 overflow-hidden">
          {/* Background with parallax */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: backgroundY, willChange: 'transform' }}
          >
            <div
              className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/imagenes/Periodoncia.jpg)',
              }}
            />
            <div className="absolute inset-0 w-full h-[120%] bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
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
                  Periodoncia en Mazatlán: <span className="text-primary-500"><span className="block">Tratamientos para</span><span className="block">cuidar tus encías y dientes</span>
                  </span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed text-gray-300">
                  Especialista en salud periodontal. Tratamientos modernos como <span className="block"><b>limpieza profunda, raspado y alisado radicular, gingivectomías,</b></span> recubrimientos radiculares, implantes dentales y regeneración ósea.
                </p>
                <div className="flex justify-start">
                  <a
                    href="https://wa.me/526699928700?text=Hola%2C%20necesito%20una%20consulta%20de%20periodoncia"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
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
                    src="/imagenes/mario-cristerna.jpeg"
                    alt="Dr. Mario Cristerna - Periodoncista en Mazatlán"
                    className="w-full h-full min-h-[400px] lg:min-h-[600px] object-cover"
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
                        Tu periodoncista en Mazatlán
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
                        El <b>Dr. Mario Cristerna</b> es especialista en Periodoncia con 14 años de experiencia clínica. Egresado de la Universidad Autónoma de Sinaloa (UAS) y con especialidad en la Universidad Quetzalcóatl de Irapuato, cuenta con <b>certificación vigente ante el Colegio Mexicano de Periodoncia (CMP)</b> y es miembro activo de la <b>Asociación Mexicana de Periodoncia (AMP)</b>. Su práctica se centra en el diagnóstico y tratamiento integral de enfermedades de las <b>encías, limpieza profunda, cirugías periodontales, recubrimientos radiculares, regeneración ósea e implantes dentales</b>, ofreciendo atención personalizada y de alto nivel profesional.
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
                        href="https://wa.me/526699928700?text=Hola%2C%20necesito%20agendar%20una%20cita%20con%20el%20Dr.%20Lizárraga%20para%20periodoncia"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                        </svg>
                        Agendar cita con el Dr. Cristena
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
            {/* What is Periodoncia */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué es la periodoncia y cuándo la necesitas?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                La periodoncia es la especialidad dental que se encarga del diagnóstico, prevención y tratamiento de las enfermedades que afectan los tejidos que soportan los dientes (encías, hueso alveolar y ligamento periodontal).
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
                Beneficios de la periodoncia
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
                  Previene la pérdida de dientes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tratamientos especializados para mantener tus dientes naturales fuertes y saludables.
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
                  Mejora la salud bucal general
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tratamientos preventivos y correctivos para mantener encías sanas y una sonrisa radiante.
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
                  Elimina infecciones y reduce inflamación
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tratamientos especializados para combatir enfermedades periodontales de forma efectiva.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Especialidades Periodoncia Section */}
        <div id="especialidades_periodoncia" className="absolute -mt-12"></div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tratamientos de periodoncia disponibles
              </h2>
            </motion.div>
            {/* Cards Grid - estilo Ortodoncia */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Consulta periodontal */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={imgConsulta} alt="Consulta periodontal" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Consulta periodontal</h3>
                  <p className="text-gray-600 mb-4">Valoración clínica y radiográfica para emitir un diagnóstico.</p>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20de%20periodoncia" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Limpieza profunda dental */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={imgLimpieza} alt="Limpieza profunda dental" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Limpieza profunda dental</h3>
                  <p className="text-gray-600 mb-4">Conocida como raspado y alisado radicular, elimina sarro y bacterias debajo de la encía para frenar la gingivitis y periodontitis.</p>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20de%20limpieza%20profunda" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Gingivectomía */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={imgGingivectomia} alt="Gingivectomía" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gingivectomía</h3>
                  <p className="text-gray-600 mb-4">Cirugía de encías para recortar y dar forma a los tejidos inflamados o excesivos.</p>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20gingivectom%C3%ADa" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Cirugía de recubrimiento radicular (Injerto de encía) */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={imgRecubrimiento} alt="Cirugía de recubrimiento radicular (Injerto de encía)" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cirugía de recubrimiento radicular (Injerto de encía)</h3>
                  <p className="text-gray-600 mb-4">Tratamiento para encías retraídas que expone la raíz del diente, devolviendo estética y protección.</p>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20injerto%20de%20enc%C3%ADa" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Implantes dentales */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={imgImplantes} alt="Implantes dentales" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Implantes dentales</h3>
                  <p className="text-gray-600 mb-4">Solución segura y duradera para reemplazar dientes perdidos.</p>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20implantes%20dentales" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Cirugía de regeneración ósea */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={imgRegeneracion} alt="Cirugía de regeneración ósea" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cirugía de regeneración ósea</h3>
                  <p className="text-gray-600 mb-4">Procedimiento para recuperar el hueso perdido y poder colocar implantes.</p>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20regeneraci%C3%B3n%20%C3%B3sea" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Beneficios de tratar a tiempo tus encías */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              {/* Images Left */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    src={imgImplantes}
                    alt="Imagen A"
                    className="w-full h-60 sm:h-72 lg:h-[420px] object-cover rounded-2xl shadow-lg"
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    viewport={{ once: true }}
                    src={imgConsulta}
                    alt="Imagen B"
                    className="w-full h-60 sm:h-72 lg:h-[420px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Content Right */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Beneficios de tratar a tiempo tus encías</h2>
                <ul className="space-y-3 text-lg text-gray-700 mb-8">
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-primary-500"></span> Prevención de pérdida dental</li>
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-primary-500"></span> Eliminación del dolor y sangrado</li>
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-primary-500"></span> Sonrisa más estética y saludable</li>
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-primary-500"></span> Mejora de la función al masticar</li>
                </ul>
                <a
                  href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20de%20periodoncia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-semibold shadow-lg transition-all"
                >
                  Agendar valoración
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Galería de Fotos */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-[18px] overflow-hidden shadow-lg border border-gray-100">
              {/* Panel Izquierdo */}
              <div className="lg:col-span-1 bg-primary-50 p-8 sm:p-10 flex flex-col justify-center">
                <motion.div
                  key={`galeria-panel-per-${galleryIndex}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-700 mb-2">Galería</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Nuestras instalaciones</h2>
                  <p className="mt-3 text-gray-700 text-lg">Explora recepción, consultorios y áreas clínicas.</p>
                  <div className="mt-6 flex items-center gap-3">
                    <button aria-label="Anterior" onClick={prevGallery} className="p-2.5 rounded-full bg-white border border-primary-200 text-gray-800 hover:bg-primary-100 transition">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="15,6 9,12 15,18" stroke="currentColor" strokeWidth="2" /></svg>
                    </button>
                    <button aria-label="Siguiente" onClick={nextGallery} className="p-2.5 rounded-full bg-white border border-primary-200 text-gray-800 hover:bg-primary-100 transition">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="9,6 15,12 9,18" stroke="currentColor" strokeWidth="2" /></svg>
                    </button>
                    <div className="ml-2 flex gap-2">
                      {galleryPer.map((_, i) => (
                        <span key={i} className={`w-2 h-2 rounded-full ${i === galleryIndex ? 'bg-primary-600' : 'bg-primary-200'}`}></span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Imagen Derecha */}
              <div className="lg:col-span-1 bg-white">
                <motion.div
                  key={`galeria-img-per-${galleryIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="h-[380px] md:h-[480px] w-full"
                >
                  <img
                    src={galleryPer[galleryIndex].image}
                    alt={galleryPer[galleryIndex].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div id="preguntas_periodoncia" className="absolute -mt-12"></div>
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
                Preguntas frecuentes sobre la periodoncia
              </h2>
            </motion.div>

            {/* FAQ Items - Accordion */}
            <div className="space-y-4">
              {[
                {
                  question: "¿Qué es la enfermedad periodontal?",
                  answer: "Es una infección bacteriana que afecta los tejidos que soportan los dientes, incluyendo encías, hueso alveolar y ligamento periodontal."
                },
                {
                  question: "¿Cuáles son los signos de la enfermedad periodontal?",
                  answer: "Encías inflamadas, sangrado al cepillarse, mal aliento persistente, dientes flojos o movilidad dental, y retracción de las encías."
                },
                {
                  question: "¿La enfermedad periodontal se puede prevenir?",
                  answer: "Sí, con una buena higiene bucal diaria, visitas regulares al dentista y limpiezas profesionales periódicas."
                },
                {
                  question: "¿Cómo se trata la enfermedad periodontal?",
                  answer: "Mediante limpieza profunda (raspado y alisado radicular), cirugía periodontal en casos avanzados, y mantenimiento periodontal regular."
                },
                {
                  question: "¿Cuánto tiempo toma el tratamiento periodontal?",
                  answer: "Depende de la gravedad, pero generalmente requiere varias visitas para completar el tratamiento inicial y luego visitas de mantenimiento."
                },
                {
                  question: "¿El tratamiento periodontal duele?",
                  answer: "Se realiza con anestesia local, por lo que es indoloro durante el procedimiento. Puede haber sensibilidad posterior que se maneja con medicación."
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
        <div id="contacto_periodoncia" className="absolute -mt-12"></div>
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Pacifika Clínica Dental: el espacio moderno que espera por ti</h2>
            <p className="mt-2 text-gray-700">Déjanos tus datos para ponernos en contacto contigo.</p>
            <div className="grid lg:grid-cols-5 gap-12">
              <ContactInfo />
              <ContactForm defaultTratamiento="Periodoncia" />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
