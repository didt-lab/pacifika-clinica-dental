import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const equipo = [
  { nombre: 'Dra. Krizia Zamudio', especialidad: 'Odontología Integral', imagen: '/imagenes/equipo/krizia-zamudio.webp', href: '/odontologia-integral' },
  { nombre: 'Dr. Luis Osuna', especialidad: 'Odontología Restauradora Avanzada', imagen: '/imagenes/equipo/luis-osuna.webp', href: '/restauradora-avanzada' },
  { nombre: 'Dr. Juan Manuel Lizárraga', especialidad: 'Endodoncia', imagen: '/imagenes/equipo/juan-manuel-lizarraga.webp', href: '/endodoncia' },
  { nombre: 'Dr. Mario Cristerna', especialidad: 'Periodoncia e Implantología General', imagen: '/imagenes/equipo/mario-cristerna.webp', href: '/periodoncia' },
  { nombre: 'Dra. Erika Bernal', especialidad: 'Ortodoncia', imagen: '/imagenes/equipo/erika-bernal.webp', href: '/ortodoncia' },
  { nombre: 'Dra. Daniela Garza Osuna', especialidad: 'Odontopediatría', imagen: '/imagenes/equipo/daniela-garza.webp', href: '/odontopediatria' },
];

export default function NuestroEquipo() {
  return (
    <Layout currentPage="nuestro-equipo">
      <main>
        {/* Equipo Section */}
        <section id="equipo" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-700 mb-3">Nuestro equipo</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Especialistas comprometidos con tu sonrisa
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cada área de tu tratamiento está en manos de un especialista, para que recibas atención completa en un solo lugar.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {equipo.map((doc, index) => (
                <motion.a
                  key={doc.nombre}
                  href={doc.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative block aspect-[3/4] rounded-2xl overflow-hidden bg-primary-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={doc.imagen}
                    alt={`${doc.nombre} - ${doc.especialidad} en Mazatlán`}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-x-4 bottom-4 bg-white rounded-xl px-4 py-4 text-center shadow-md">
                    <h2 className="text-lg font-semibold text-gray-900">{doc.nombre}</h2>
                    <p className="text-sm text-gray-600">{doc.especialidad}</p>
                    <span className="inline-flex mt-2 px-2.5 py-1 rounded-full bg-primary-100 text-primary-700 text-[10px] font-medium">English Spoken</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contacto_equipo" className="absolute -mt-12"></div>
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Pacifika Clínica Dental: el espacio moderno que espera por ti</h2>
            <p className="mt-2 text-gray-700">Déjanos tus datos para ponernos en contacto contigo.</p>
            <div className="grid lg:grid-cols-5 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
