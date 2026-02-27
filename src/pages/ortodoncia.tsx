import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import ortFachada from '../../imagenes/instalaciones/FACHADA GARO.webp';
import ort2 from '../../imagenes/instalaciones/2.webp';
import ort6860 from '../../imagenes/instalaciones/DSC_6860.webp';
import ort6903 from '../../imagenes/instalaciones/DSC_6903.webp';
import ort6878 from '../../imagenes/instalaciones/DSC_6878.webp';

export default function Ortodoncia() {
  // Parallax scroll effect for hero background
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  // State for accordion
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Galería Ortodoncia
  const galleryOrto = [
    { image: ortFachada, alt: 'Fachada Pacifika' },
    { image: ort2, alt: 'Instalaciones 2' },
    { image: ort6860, alt: 'Área clínica DSC_6860' },
    { image: ort6903, alt: 'Área clínica DSC_6903' },
    { image: ort6878, alt: 'Área clínica DSC_6878' },
  ];
  const [galleryIndex, setGalleryIndex] = useState(0);
  const nextGallery = () => setGalleryIndex((p) => (p + 1) % galleryOrto.length);
  const prevGallery = () => setGalleryIndex((p) => (p - 1 + galleryOrto.length) % galleryOrto.length);

  return (
    <Layout currentPage="ortodoncia">
      <main>
        {/* Hero Section */}
        <section id="portada_ortodoncia" className="relative text-white py-20 overflow-hidden">
          {/* Background with parallax */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: backgroundY, willChange: 'transform' }}
          >
            <div
              className="w-full h-[120%] bg-cover bg-no-repeat"
              style={{
                backgroundImage: 'url(/imagenes/ortodoncia.jpg)',
                backgroundPosition: '60% center',
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
                className="max-w-3xl md:max-w-2xl"
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Ortodoncia en Mazatlán: <span className="text-primary-500">para transformar tu <p>sonrisa</p></span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed text-gray-300">
                  Con brackets estéticos, autoligables y alineadores invisibles, transforma tu sonrisa con tratamientos modernos y personalizados
                </p>
                <div className="flex justify-start">
                  <a
                    href="https://wa.me/526699928700?text=Hola%2C%20necesito%20una%20consulta%20de%20ortodoncia"
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
                    src="/imagenes/erika-bernal.jpg"
                    alt="Dra. Erika Bernal - Ortodoncista en Mazatlán"
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
                        Tu ortodoncista en Mazatlán
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
                        La <b>Dra. Erika Bernal</b> es especialista en <b>Ortodoncia</b>, formada como Cirujano Dentista y con posgrado en la <b>Universidad Nacional Autónoma de México (UNAM).</b>  Ofrece tratamientos personalizados con <b>brackets metálicos, estéticos, de zafiro y alineadores invisibles</b>, adaptados a las necesidades de cada paciente. Atiende en español e inglés, brindando confianza y acompañamiento en cada etapa del tratamiento para lograr sonrisas funcionales y estéticas.
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
                        href="https://wa.me/526699928700?text=Hola%2C%20necesito%20agendar%20una%20cita%20con%20la%20Dra.%20Bernal%20para%20ortodoncia"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                        </svg>
                        Agendar cita con la Dra. Bernal
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tratamientos Section */}
        <div id="tratamientos_ortodoncia" className="absolute -mt-12"></div>
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tratamientos de ortodoncia disponibles</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Brackets Metálicos */}
              <motion.article
                id="brackets_metalicos"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src="/imagenes/brackets-metalicos.webp" alt="Brackets metálicos" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Brackets Metálicos</h3>
                  <p className="text-gray-600 mb-4">La opción más usada y efectiva para corregir mordida y alinear dientes. Resistentes, confiables y accesibles.</p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-5">
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Económicos</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Efectivos en casos complejos</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Recomendados para adolescentes y adultos</li>
                  </ul>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20Brackets%20Met%C3%A1licos" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Brackets Estéticos */}
              <motion.article
                id="brackets_esteticos"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src="/imagenes/brackets_ceramica.webp" alt="Brackets estéticos" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Brackets Estéticos</h3>
                  <p className="text-gray-600 mb-4">Hechos con materiales de zafiro y cerámica que se mimetizan con el color del diente, ideales para quienes buscan un tratamiento más discreto.</p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-5">
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Apariencia estética</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Funcionalidad similar a los metálicos</li>
                  </ul>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20Brackets%20Est%C3%A9ticos" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Brackets Zafiro */}
              <motion.article
                id="brackets_zafiro"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src="/imagenes/brackets-zafiro.webp" alt="Brackets de zafiro" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Brackets zafiro</h3>
                  <p className="text-gray-600 mb-4">Brackets transparentes casi invisibles, que mantienen la estética durante todo el tratamiento.</p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-5">
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Alta estética</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Resistentes</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Confortables</li>
                  </ul>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20Brackets%20de%20Zafiro" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Alineadores Invisibles */}
              <motion.article
                id="alineadores_invisibles"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src="/imagenes/alineadores-invisibles.webp" alt="Alineadores Invisibles" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Alineadores Invisibles</h3>
                  <p className="text-gray-600 mb-4">Disfruta de una ortodoncia avanzada, discreta y removible.</p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-5">
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> 100% Estéticos</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Removibles</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Planificación Digital</li>
                  </ul>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20Alineadores%20Invisibles" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Ortodoncia de Autoligado Estético */}
              <motion.article
                id="autoligado_estetico"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src="/imagenes/autoligado.jpg" alt="Ortodoncia de Autoligado Estético" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ortodoncia de Autoligado Estético</h3>
                  <p className="text-gray-600 mb-4">Tecnología ortodóntica de alta precisión que optimiza los tiempos de tratamiento mediante un sistema de baja fricción.</p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-5">
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Eficiencia Clínica</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Higiene Avanzada</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Discreción Total</li>
                  </ul>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20Autoligado%20Est%C3%A9tico" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Aparatología Ortopédica */}
              <motion.article
                id="aparatologia_ortopedica"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src="/imagenes/ortopedia.webp" alt="Aparatología Ortopédica" className="w-full h-44 object-cover object-bottom" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Aparatología Ortopédica</h3>
                  <p className="text-gray-600 mb-4">Diseñada para niños y adolescentes en crecimiento, ayudando a guiar el desarrollo de los huesos maxilares y prevenir problemas de mordida.</p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-5">
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Guía de crecimiento maxilar</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Corrección temprana de hábitos</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Mejora la función de la mordida y la respiración</li>
                  </ul>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20Aparatolog%C3%ADa%20Ortop%C3%A9dica" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Retenedores Dentales */}
              <motion.article
                id="retenedores_dentales"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src="/imagenes/retenedores-dentales.webp" alt="Retenedores Dentales" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Retenedores Dentales</h3>
                  <p className="text-gray-600 mb-4">Sistemas de contención para preservar la alineación lograda tras la ortodoncia y prevenir recidivas o movimientos dentales no deseados.</p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-5">
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Estabilidad Post-Tratamiento</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Alta Precisión</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span> Opciones Versátiles</li>
                  </ul>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20Retenedores%20Dentales" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Alineadores Dentales Section */}
        <div id="alineadores_ortodoncia" className="absolute -mt-12"></div>
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
                    src="/imagenes/aprato_ortodoncia.webp"
                    alt="Paciente usando alineadores - imagen A"
                    className="w-full h-60 sm:h-72 lg:h-[420px] object-cover rounded-2xl shadow-lg"
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    viewport={{ once: true }}
                    src="/imagenes/invisible.jpg"
                    alt="Alineadores transparentes - imagen B"
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
                <p className="text-sm font-semibold text-primary-600 mb-2">Ortodoncia Invisible</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Alineadores Dentales Invisalign en Mazatlán
                </h2>
                <img
                  src="/imagenes/Invisalign-Doctor-Color.png"
                  alt="Invisalign Doctor - Proveedor certificado"
                  className="h-16 md:h-20 object-contain mb-6"
                />
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Los alineadores dentales son férulas transparentes y removibles diseñadas digitalmente para alinear tus dientes de forma discreta.
                  Perfectos si buscas comodidad, estética y poder seguir tu vida diaria sin los inconvenientes de los brackets tradicionales.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700"><span className="w-2 h-2 bg-primary-500 rounded-full"></span> Invisibilidad total</li>
                  <li className="flex items-center gap-2 text-gray-700"><span className="w-2 h-2 bg-primary-500 rounded-full"></span> Removibles</li>
                  <li className="flex items-center gap-2 text-gray-700"><span className="w-2 h-2 bg-primary-500 rounded-full"></span> Mayor comodidad</li>
                  <li className="flex items-center gap-2 text-gray-700"><span className="w-2 h-2 bg-primary-500 rounded-full"></span> Mejora la higiene bucal</li>
                  <li className="flex items-center gap-2 text-gray-700 sm:col-span-2"><span className="w-2 h-2 bg-primary-500 rounded-full"></span> Estética y confianza</li>
                </ul>
                <p className="text-gray-700 mb-6">Conoce si eres candidato a este tipo de tratamiento.</p>
                <a
                  href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20alineadores%20dentales"
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
                  key={`galeria-panel-orto-${galleryIndex}`}
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
                      {galleryOrto.map((_, i) => (
                        <span key={i} className={`w-2 h-2 rounded-full ${i === galleryIndex ? 'bg-primary-600' : 'bg-primary-200'}`}></span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Imagen Derecha */}
              <div className="lg:col-span-1 bg-white">
                <motion.div
                  key={`galeria-img-orto-${galleryIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="h-[380px] md:h-[480px] w-full"
                >
                  <img
                    src={galleryOrto[galleryIndex].image}
                    alt={galleryOrto[galleryIndex].alt}
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
        <div id="preguntas_ortodoncia" className="absolute -mt-12"></div>
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
                Preguntas frecuentes sobre la ortodoncia
              </h2>
            </motion.div>

            {/* FAQ Items - Accordion */}
            <div className="space-y-4">
              {[
                {
                  question: "¿A qué edad se puede comenzar con el tratamiento de brackets?",
                  answer: "Se recomienda que los niños tengan una evaluación ortodóntica alrededor de los 7 años, para detectar posibles problemas tempranos. Muchos tratamientos con brackets se inician entre los 10 y 14 años, cuando ya han salido la mayoría de los dientes permanentes."
                },
                {
                  question: "¿Duele un tratamiento de ortodoncia?",
                  answer: "Colocar los brackets no debería doler. Puede haber molestias leves o presión los primeros días o después de algún ajuste, pero son temporales y manejables."
                },
                {
                  question: "¿Cuánto tiempo dura el tratamiento de brackets?",
                  answer: "Depende del caso, pero en general los tratamientos duran entre 18 y 24 meses. En casos leves podrían ser un año, y en casos más complejos hasta 3 años."
                },
                {
                  question: "¿Cómo se usan los alineadores dentales?",
                  answer: "Los alineadores deben usarse cerca de 20-22 horas al día, solo quitarlos para comer y para cepillarse. Se cambian de forma periódica según plan digital, y requieren disciplina para que funcionen bien."
                },
                {
                  question: "¿Me tengo que quitar las muelas del juicio para comenzar mi tratamiento?",
                  answer: "No siempre. La extracción solo se recomienda si las muelas del juicio están impactadas o causan problemas, o si dificultan el movimiento de los dientes. Tu ortodoncista hará radiografías para evaluar si es necesario en tu caso."
                },
                {
                  question: "¿Se puede hacer la limpieza dental con brackets?",
                  answer: "Sí, y es muy importante. La limpieza profesional debe hacerse regularmente incluso durante el tratamiento con brackets. Mantener buena higiene (cepillado, hilo dental) ayuda a evitar caries, manchas y problemas en las encías."
                },
                {
                  question: "¿Qué puedo comer durante el tratamiento de ortodoncia?",
                  answer: "Evita alimentos muy duros o pegajosos que puedan dañar brackets o alambres (por ejemplo, nueces, palomitas, caramelos gomosos). Prefiere alimentos blandos especialmente tras ajustes, y corta los alimentos en trozos pequeños."
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
        <div id="contacto_ortodoncia" className="absolute -mt-12"></div>
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Pacifika Clínica Dental: el espacio moderno que espera por ti</h2>
            <p className="mt-2 text-gray-700">Déjanos tus datos para ponernos en contacto contigo.</p>
            <div className="grid lg:grid-cols-5 gap-12">
              <ContactInfo />
              <ContactForm defaultTratamiento="Ortodoncia" />
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
};
