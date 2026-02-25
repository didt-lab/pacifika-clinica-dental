import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import resFachada from '../../imagenes/instalaciones/FACHADA GARO.webp';
import res2 from '../../imagenes/instalaciones/2.webp';
import res1r from '../../imagenes/instalaciones/1-r.jpg';
import res2rr from '../../imagenes/instalaciones/2-rr.webp';
import res3r from '../../imagenes/instalaciones/3-r.webp';

export default function RestauradoraAvanzada() {
  // Parallax scroll effect for hero background
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  // State for accordion
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Galería Restauradora
  const galleryRes = [
    { image: resFachada, alt: 'Fachada Pacifika' },
    { image: res2, alt: 'Instalaciones 2' },
    { image: res1r, alt: 'Área clínica 1-r' },
    { image: res2rr, alt: 'Área clínica 2-rr' },
    { image: res3r, alt: 'Área clínica 3-r' },
  ];
  const [galleryIndex, setGalleryIndex] = useState(0);
  const nextGallery = () => setGalleryIndex((p) => (p + 1) % galleryRes.length);
  const prevGallery = () => setGalleryIndex((p) => (p - 1 + galleryRes.length) % galleryRes.length);

  return (
    <Layout currentPage="restauradora-avanzada">
      <main>
        {/* Hero Section */}
        <section id="portada_periodoncia" className="relative text-white py-20 overflow-hidden">
          {/* Background with parallax */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: backgroundY, willChange: 'transform' }}
          >
            <div
              className="w-full h-[100%] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/imagenes/restauradora_avanzada.jpg)',
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
                  Odontología Restauradora  <span className="text-primary-500">Recupera la función y estética de tu sonrisa
                  </span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed text-gray-300">
                  Tratamientos modernos para reparar dientes dañados, colocar coronas, carillas, resinas y prótesis que te devuelven la confianza al sonreír y al masticar.
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
                    src="/imagenes/Luis-Osuna.jpg"
                    alt="Dr. Luis Arturo Osuna Orpinela- restauradora avanzada en Mazatlán"
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
                        Tu especialista en Odontología Restauradora Avanzada
                      </h2>
                    </motion.div>

                    {/* Doctor Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        El Dr. Luis Arturo Osuna Orpinela, formado en la Universidad La Salle Bajío y la UNAM, ofrece soluciones de alta complejidad en resinas, carillas e implantes. Su práctica integra tecnología de punta para garantizar resultados estéticos y funcionales bajo un enfoque personalizado.
                        <br /><br />
                        Respaldado por la especialidad en Odontología Restauradora Avanzada de la UNAM, el Dr. Osuna aplica un modelo multidisciplinario que combina endodoncia, periodoncia e implantología. Esto permite ejecutar tratamientos integrales más ágiles, predecibles y con costos optimizados para el paciente.
                      </p>
                      <a
                        href="https://www.instagram.com/p/DMb3SbcArku/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 text-gray-800 hover:text-primary-500 transition-colors group"
                      >
                        <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary-50 transition-colors">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                        <span className="font-semibold text-lg">Seguir en Instagram</span>
                      </a>
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
                        Agendar cita con el Dr. Osuna
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Qué es la odontología restauradora y cuándo la necesito?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              La odontología restauradora se encarga de reparar dientes dañados por caries, fracturas o desgaste y reemplazar las piezas que se han perdido. Si tienes dolor, dificultad para masticar o notas desgaste en tus dientes, este tratamiento es para ti.
            </p>
          </div>
        </section>

        {/* Tratamientos Section */}
        <div id="tratamientos_periodoncia" className="absolute -mt-12"></div>
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tratamientos disponibles en restauradora dental</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Resinas y restauraciones */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src="/imagenes/resinas_restauraciones.webp" alt="Resinas y restauraciones" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Resinas y restauraciones directas</h3>
                  <p className="text-gray-600 mb-4">Tratamientos para reparar dientes con caries pequeñas o fracturas leves, devolviendo su forma y función de manera estética.</p>
                  <ul className="text-sm text-gray-700 mb-4 space-y-1">
                    <li>• Resina dental</li>
                    <li>• Carilla de resina</li>
                    <li>• Núcleo de resina</li>
                    <li>• Resina con férula de fibra de vidrio</li>
                  </ul>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20resinas" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Coronas y carillas de alta estética */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src="/imagenes/coronas_carillas.webp" alt="Coronas y carillas de alta estética" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Coronas y carillas de alta estética</h3>
                  <p className="text-gray-600 mb-4">Cuando un diente está debilitado o muy dañado, las coronas y carillas ofrecen protección y estética. Se fabrican con materiales de última generación como porcelana, zirconio o disilicato de litio.</p>
                  <ul className="text-sm text-gray-700 mb-4 space-y-1">
                    <li>• Corona disilicato de litio</li>
                    <li>• Corona de zirconio</li>
                    <li>• Corona telescópica</li>
                    <li>• Carilla de porcelana</li>
                    <li>• Provisional PMMA</li>
                  </ul>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20coronas" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Implantes y prótesis */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src="/imagenes/protesis_dental.webp" alt="Implantes y prótesis" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Prótesis sobre implante</h3>
                  <p className="text-gray-600 mb-4">Si has perdido uno o varios dientes, los implantes y prótesis son la mejor opción para recuperar la función al masticar y mejorar la sonrisa. Existen soluciones removibles y fijas según tus necesidades.</p>
                  <ul className="text-sm text-gray-700 mb-4 space-y-1">
                    <li>• Corona sobre implante</li>
                    <li>• Prótesis removible (unilateral, bilateral, total)</li>
                    <li>• Prótesis All-on-4</li>
                    <li>• Prótesis All-on-6</li>
                  </ul>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20implantes" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>

              {/* Tratamientos complementarios */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src="/imagenes/blanqueamiento_dental.webp" alt="Tratamientos complementarios" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tratamiento complementarios y control de bruxismo</h3>
                  <p className="text-gray-600 mb-4">Además de las restauraciones, ofrecemos tratamientos que ayudan a mantener tu salud bucal y estética, como limpiezas, blanqueamientos y guardas para proteger tus dientes.</p>
                  <ul className="text-sm text-gray-700 mb-4 space-y-1">
                    <li>• Limpieza dental</li>
                    <li>• Guarda de acetato</li>
                    <li>• Guarda acrílico</li>
                    <li>• Blanqueamiento dental en consultorio</li>
                  </ul>
                  <a href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20tratamientos%20complementarios" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                </div>
              </motion.article>
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
                  key={`galeria-panel-res-${galleryIndex}`}
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
                      {galleryRes.map((_, i) => (
                        <span key={i} className={`w-2 h-2 rounded-full ${i === galleryIndex ? 'bg-primary-600' : 'bg-primary-200'}`}></span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Imagen Derecha */}
              <div className="lg:col-span-1 bg-white">
                <motion.div
                  key={`galeria-img-res-${galleryIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="h-[380px] md:h-[480px] w-full"
                >
                  <img
                    src={galleryRes[galleryIndex].image}
                    alt={galleryRes[galleryIndex].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Alineadores Dentales Section (reemplazado por Beneficios) */}
        <div id="alineadores_periodoncia" className="absolute -mt-12"></div>
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              {/* Images Left (restauradas) */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    src="/imagenes/smiles.webp"
                    alt="Imagen clínica periodontal A"
                    className="w-full h-60 sm:h-72 lg:h-[420px] object-cover rounded-2xl shadow-lg"
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    viewport={{ once: true }}
                    src="/imagenes/smiles2.webp"
                    alt="Imagen clínica periodontal B"
                    className="w-full h-60 sm:h-72 lg:h-[420px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Content Right (beneficios) */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Beneficios de la odontología restauradora</h2>
                <ul className="space-y-3 text-lg text-gray-700 mb-8">
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-primary-500"></span> Recuperas la función al masticar</li>
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-primary-500"></span> Prevención de pérdida dental</li>
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-primary-500"></span> Mejora estética y confianza</li>
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-primary-500"></span> Tratamientos duraderos y personalizados</li>
                </ul>
                <a
                  href="https://wa.me/526699928700?text=Hola%2C%20quiero%20agendar%20valoraci%C3%B3n%20para%20odontolog%C3%ADa%20restauradora"
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
                  key={`galeria-panel-res-${galleryIndex}`}
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
                      {galleryRes.map((_, i) => (
                        <span key={i} className={`w-2 h-2 rounded-full ${i === galleryIndex ? 'bg-primary-600' : 'bg-primary-200'}`}></span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Imagen Derecha */}
              <div className="lg:col-span-1 bg-white">
                <motion.div
                  key={`galeria-img-res-${galleryIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="h-[380px] md:h-[480px] w-full"
                >
                  <img
                    src={galleryRes[galleryIndex].image}
                    alt={galleryRes[galleryIndex].alt}
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
                Preguntas frecuentes sobre odontología restauradora
              </h2>
            </motion.div>

            {/* FAQ Items - Accordion */}
            <div className="space-y-4">
              {[
                {
                  question: "¿Cómo es una corona dental?",
                  answer: "Una corona es una funda que cubre un diente dañado para devolverle fuerza y estética. Puede ser de zirconio, porcelana o disilicato de litio."
                },
                {
                  question: "¿Después de la endodoncia qué sigue?",
                  answer: "Generalmente, el diente necesita una corona o núcleo de resina para protegerlo y evitar fracturas."
                },
                {
                  question: "¿Qué diferencia hay entre una carilla de cerámica y una de resina?",
                  answer: "Las de resina son más económicas y rápidas, mientras que las de cerámica tienen mayor durabilidad y estética."
                },
                {
                  question: "¿Qué es una prótesis sobre implante?",
                  answer: "Es una estructura fija o removible que se coloca sobre implantes dentales, sustituyendo varias piezas a la vez."
                },
                {
                  question: "¿Cuál es la diferencia entre una prótesis total y una sobre implantes?",
                  answer: "La prótesis total es removible, mientras que la sobre implantes es fija y más estable, evitando movimientos al comer o hablar."
                },
                {
                  question: "¿En cuánto tiempo se coloca una corona?",
                  answer: "El proceso suele durar entre 1 y 2 citas, dependiendo de la técnica y del material elegido."
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
              <ContactForm defaultTratamiento="Odontología Restauradora" />
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
};
