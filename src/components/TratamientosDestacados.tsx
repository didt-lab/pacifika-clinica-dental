import { useState } from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5216691581164&text=Hola%2C%20vengo%20del%20sitio%20web%20y%20quiero%20agendar%20una%20consulta";

const especialidades = [
  {
    id: 'integral',
    nombre: 'Odontología Integral',
    href: '/odontologia-integral',
    imagen: '/imagenes/tratamientos/integral.webp',
    tratamientos: ['Blanqueamiento dental', 'Limpieza dental', 'Resina dental'],
  },
  {
    id: 'restauradora',
    nombre: 'Restauradora Avanzada',
    href: '/restauradora-avanzada',
    imagen: '/imagenes/tratamientos/restauradora.webp',
    tratamientos: ['Diseño de sonrisa', 'Carillas dentales', 'Corona zirconia', 'Prótesis dentales', 'Prótesis total sobre implantes', 'All on four y All on six', 'Bruxismo'],
  },
  {
    id: 'periodoncia',
    nombre: 'Periodoncia e Implantes',
    href: '/periodoncia',
    imagen: '/imagenes/tratamientos/periodoncia.webp',
    tratamientos: ['Implantes dentales', 'Limpieza profunda dental', 'Gingivectomía', 'Injerto de encía', 'Regeneración ósea'],
  },
  {
    id: 'ortodoncia',
    nombre: 'Ortodoncia',
    href: '/ortodoncia',
    imagen: '/imagenes/tratamientos/ortodoncia.webp',
    tratamientos: ['Brackets estéticos', 'Brackets metálicos', 'Brackets zafiro', 'Alineadores invisibles', 'Retenedores dentales'],
  },
  {
    id: 'endodoncia',
    nombre: 'Endodoncia',
    href: '/endodoncia',
    imagen: '/imagenes/tratamientos/endodoncia.webp',
    tratamientos: ['Endodoncia en anteriores, premolares y molares', 'Retratamientos de endodoncia', 'Endoposte estético y metálico', 'Colocación de MTA'],
  },
  {
    id: 'odontopediatria',
    nombre: 'Odontopediatría',
    href: '/odontopediatria',
    imagen: '/imagenes/tratamientos/odontopediatria.webp',
    tratamientos: ['Profilaxis y aplicación de flúor', 'Resinas dentales infantiles', 'Selladores dentales', 'Pulpotomía y pulpectomía'],
    isNew: true,
  },
];

export default function TratamientosDestacados() {
  const [activo, setActivo] = useState(0);
  const actual = especialidades[activo];

  return (
    <section id="tratamientos" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tratamientos Destacados</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[300px_minmax(0,1fr)] gap-6 lg:gap-8">
          {/* Pestañas: fila deslizable en celular/tablet, columna en escritorio */}
          <div
            role="tablist"
            aria-label="Especialidades"
            className="flex lg:flex-col gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 lg:pb-0"
          >
            {especialidades.map((esp, i) => (
              <button
                key={esp.id}
                type="button"
                role="tab"
                id={`tab-${esp.id}`}
                aria-selected={i === activo}
                aria-controls="panel-tratamientos"
                onClick={() => setActivo(i)}
                className={`flex-shrink-0 flex items-center justify-between gap-3 whitespace-nowrap px-4 lg:px-5 py-3 lg:py-4 rounded-xl border text-sm lg:text-base font-semibold text-left transition-colors ${i === activo
                  ? 'bg-slate-900 border-slate-900 text-white'
                  : 'bg-white border-gray-200 text-gray-900 hover:border-primary-500'
                  }`}
              >
                <span className="flex items-center gap-2">
                  {esp.nombre}
                  {esp.isNew && (
                    <span className="px-2 py-0.5 rounded-full bg-primary-500 text-slate-900 text-[10px] font-bold uppercase tracking-wide">Nuevo</span>
                  )}
                </span>
                <svg className="hidden lg:block w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

          {/* Panel de la especialidad activa */}
          <motion.div
            key={actual.id}
            id="panel-tratamientos"
            role="tabpanel"
            aria-labelledby={`tab-${actual.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <img
              src={actual.imagen}
              alt={actual.nombre}
              className="w-full h-56 sm:h-72 md:h-full md:min-h-[420px] object-cover md:order-last"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6 lg:p-10 flex flex-col">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-5">{actual.nombre}</h3>
              <ul className="space-y-3 mb-8">
                {actual.tratamientos.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-gray-700 lg:text-lg">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col sm:flex-row md:flex-col xl:flex-row gap-3">
                <a
                  href={actual.href}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 font-semibold shadow-lg transition-all"
                >
                  Ver especialidad
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3 rounded-lg border border-gray-300 text-gray-900 hover:border-primary-500 hover:text-primary-700 font-semibold transition-colors"
                >
                  Agendar valoración
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
