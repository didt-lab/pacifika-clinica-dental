import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5216691581164&text=%C2%A1Hola!%20Vengo%20del%20sitio%20web%20de%20Pacifika%20y%20quiero%20agendar%20una%20cita%20de%20odontopediatr%C3%ADa";

const IMG = "/imagenes/odontopediatria";
const HERO_IMAGE = `${IMG}/hero.webp`;
const DOCTORA_IMAGE = `${IMG}/doctora-garza.webp`;
const BENEFICIOS_IMAGES = [`${IMG}/beneficios-a.webp`, `${IMG}/beneficios-b.webp`];

const tratamientos = [
  {
    title: "Profilaxis y aplicación de flúor",
    image: `${IMG}/profilaxis-fluor.webp`,
    description: "Limpieza profesional que ayuda a eliminar placa bacteriana y manchas, seguida de la aplicación de flúor para fortalecer el esmalte y prevenir caries."
  },
  {
    title: "Resinas dentales infantiles",
    image: `${IMG}/resinas-infantiles.webp`,
    description: "Restauraciones del color del diente para reparar piezas afectadas por caries o pequeñas fracturas, conservando una apariencia natural."
  },
  {
    title: "Selladores dentales",
    image: `${IMG}/selladores-dentales.webp`,
    description: "Capa protectora que se coloca en las fosetas y fisuras de los dientes, principalmente molares, para ayudar a prevenir la aparición de caries."
  },
  {
    title: "Pulpotomía",
    image: `${IMG}/pulpotomia.webp`,
    description: "Tratamiento para dientes temporales con caries profunda que afecta la pulpa. Se retira la parte afectada y se coloca un material para ayudar a conservar el diente hasta su recambio natural."
  },
  {
    title: "Pulpectomía",
    image: `${IMG}/pulpectomia.webp`,
    description: "Tratamiento para dientes temporales con afectación extensa o infección de la pulpa. Se elimina el tejido afectado, se limpian los conductos y se coloca un material de obturación."
  },
  {
    title: "Corona de acero",
    image: `${IMG}/corona-acero.webp`,
    description: "Restauración de apariencia natural utilizada principalmente en dientes anteriores con pérdida importante de estructura. Permite recuperar su forma, función y estética."
  },
  {
    title: "Extracción dental infantil",
    image: `${IMG}/extraccion-infantil.webp`,
    description: "Retiro de un diente que no puede conservarse o cuya extracción está indicada por razones de salud, infección, movilidad excesiva u otras necesidades específicas."
  },
];

const beneficios = [
  "Prevención de caries",
  "Cuidado de los dientes temporales",
  "Atención adaptada a cada niño",
];

const preguntas = [
  {
    question: "¿Cómo sé qué tratamiento necesita mi hijo?",
    answer: "Agenda una valoración con la Dra. Daniela. La revisión permite identificar las necesidades de atención y explicar a la familia las opciones para su caso."
  },
  {
    question: "¿Se pueden tratar las caries en los dientes de leche?",
    answer: "Sí. Según el diagnóstico, las opciones pueden incluir resinas, tratamientos de la pulpa o coronas. La doctora determinará cuál es adecuada."
  },
  {
    question: "¿Cuánto cuesta una consulta o tratamiento?",
    answer: "El costo se confirma con la clínica de acuerdo con el servicio y la valoración. Contáctanos para conocer el precio vigente y qué incluye."
  },
];

const gallery = [
  { image: `${IMG}/galeria-1.webp`, alt: 'Consultorio de odontopediatría Pacifika' },
  { image: `${IMG}/galeria-2.webp`, alt: 'Instalaciones de odontopediatría Pacifika' },
  { image: `${IMG}/galeria-3.webp`, alt: 'Área de atención infantil Pacifika' },
  { image: `${IMG}/galeria-4.webp`, alt: 'Consultorio infantil Pacifika' },
  { image: `${IMG}/galeria-5.webp`, alt: 'Instalaciones Pacifika' },
];

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
  </svg>
);

export default function Odontopediatria() {
  // Parallax scroll effect for hero background
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  // State for accordion
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Galería Odontopediatría
  const [galleryIndex, setGalleryIndex] = useState(0);
  const nextGallery = () => setGalleryIndex((p) => (p + 1) % gallery.length);
  const prevGallery = () => setGalleryIndex((p) => (p - 1 + gallery.length) % gallery.length);

  return (
    <Layout currentPage="odontopediatria">
      <main>
        {/* Hero Section */}
        <section id="portada_odontopediatria" className="relative text-white py-20 overflow-hidden bg-slate-900 min-h-[calc(100vh-6rem)] flex items-end lg:items-start">
          {/* Background with parallax */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: backgroundY, willChange: 'transform' }}
          >
            <div
              className="w-full h-[62%] lg:h-[120%] bg-cover bg-[position:59%_top] lg:bg-[position:75%_center] bg-no-repeat"
              style={{
                backgroundImage: `url(${HERO_IMAGE})`,
              }}
            />
            <div className="absolute inset-x-0 top-0 w-full h-[62%] lg:h-[120%] bg-gradient-to-b from-slate-900/10 via-slate-900/30 to-slate-900 lg:bg-gradient-to-r lg:from-slate-900/80 lg:via-slate-900/60 lg:to-transparent"></div>
          </motion.div>
          <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl"
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Odontopediatra en <span className="text-primary-500">Mazatlán</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed text-gray-300">
                  Atención dental infantil con la Dra. Daniela Garza Osuna. Prevención y tratamientos personalizados para acompañar la salud bucal de tu hijo en un entorno cercano y profesional.
                </p>
                <div className="flex justify-start">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <WhatsAppIcon />
                    Agendar consulta
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Doctor Section */}
        <div id="especialista" className="absolute -mt-12"></div>
        <section className="py-20 bg-gray-50 overflow-hidden">
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
                    src={DOCTORA_IMAGE}
                    alt="Dra. Daniela Garza Osuna - Odontopediatra en Mazatlán"
                    className="w-full h-full min-h-[400px] lg:min-h-[600px] object-cover object-[30%_center]"
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
                        Tu Dentista Pediatra
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
                        La <b>Dra. Daniela Garza Osuna</b> es especialista en odontopediatría. Realizó su licenciatura y especialidad en la <b>Universidad Autónoma de Guadalajara</b> y cuenta con <b>dos años de formación profesional en Teletón Guadalajara</b>. En Pacifika, su atención se enfoca en la prevención y el cuidado de la salud dental infantil, con tratamientos adaptados a las necesidades de cada paciente.
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
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                      >
                        <WhatsAppIcon />
                        Agendar cita con la Dra. Osuna
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ¿Qué es la odontopediatría? */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué es la odontopediatría?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                La odontopediatría se enfoca en la salud bucal de los niños. A través de la prevención, la valoración y los tratamientos indicados para cada caso, acompaña el cuidado de sus dientes y la formación de hábitos de higiene oral.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tratamientos */}
        <div id="tratamientos_odontopediatria" className="absolute -mt-12"></div>
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
                Tratamientos de odontopediatría
              </h2>
            </motion.div>
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tratamientos.map((t, index) => (
                <motion.article
                  key={t.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * (index + 1) }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img src={t.image} alt={t.title} className="w-full h-44 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.title}</h3>
                    <p className="text-gray-600 mb-4">{t.description}</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-medium transition-all">Agendar valoración</a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios de la atención dental infantil */}
        <div id="beneficios" className="absolute -mt-12"></div>
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              {/* Images Left */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  {BENEFICIOS_IMAGES.map((src, i) => (
                    <motion.img
                      key={src}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.15 }}
                      viewport={{ once: true }}
                      src={src}
                      alt={`Atención dental infantil en Pacifika ${i + 1}`}
                      className="w-full h-60 sm:h-72 lg:h-[420px] object-cover rounded-2xl shadow-lg"
                    />
                  ))}
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Beneficios de la atención dental infantil</h2>
                <ul className="space-y-3 text-lg text-gray-700 mb-8">
                  {beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-primary-500"></span> {b}</li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
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

        {/* FAQ Section */}
        <div id="preguntas_odontopediatria" className="absolute -mt-12"></div>
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
                Preguntas frecuentes sobre odontopediatría
              </h2>
            </motion.div>

            {/* FAQ Items - Accordion */}
            <div className="space-y-4">
              {preguntas.map((faq, index) => (
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
                  href="https://maps.app.goo.gl/Y2vLTJGJ7Ugbj5vN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 shadow-lg transition"
                >
                  Ver en Google Maps
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" /><polyline points="12,5 19,12 12,19" stroke="currentColor" strokeWidth="2" /></svg>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1830136833637!2d-106.42998159999999!3d23.2381026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1407af06ab3ad4b5%3A0x975adb40f7b9938!2sPacifika%20M%C3%A9dica%20Dental.!5e1!3m2!1ses!2smx!4v1773847455704!5m2!1ses!2smx"
                    className="w-full h-full"
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

        {/* Galería de Fotos */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-[18px] overflow-hidden shadow-lg border border-gray-100">
              {/* Panel Izquierdo */}
              <div className="lg:col-span-1 bg-primary-50 p-8 sm:p-10 flex flex-col justify-center">
                <motion.div
                  key={`galeria-panel-odp-${galleryIndex}`}
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
                      {gallery.map((_, i) => (
                        <span key={i} className={`w-2 h-2 rounded-full ${i === galleryIndex ? 'bg-primary-600' : 'bg-primary-200'}`}></span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Imagen Derecha */}
              <div className="lg:col-span-1 bg-white">
                <motion.div
                  key={`galeria-img-odp-${galleryIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="h-[380px] md:h-[480px] w-full"
                >
                  <img
                    src={gallery[galleryIndex].image}
                    alt={gallery[galleryIndex].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contacto_odontopediatria" className="absolute -mt-12"></div>
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Pacifika Clínica Dental: el espacio moderno que espera por ti</h2>
            <p className="mt-2 text-gray-700">Déjanos tus datos para ponernos en contacto contigo.</p>
            <div className="grid lg:grid-cols-5 gap-12">
              <ContactInfo />
              <ContactForm defaultTratamiento="Odontopediatría" />
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
};
