import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5216691581164&text=Hola%2C%20vengo%20del%20sitio%20web%20y%20quiero%20agendar%20una%20consulta";

const specialties = [
  {
    id: "odontologia-integral",
    label: "Odontología Integral",
    href: "/odontologia-integral"
  },
  {
    id: "restauradora-avanzada",
    label: "Restauradora Avanzada",
    href: "/restauradora-avanzada"
  },
  {
    id: "endodoncia",
    label: "Endodoncia",
    href: "/endodoncia"
  },
  {
    id: "periodoncia",
    label: "Periodoncia e Implantes",
    href: "/periodoncia"
  },
  {
    id: "ortodoncia",
    label: "Ortodoncia",
    href: "/ortodoncia"
  },
  {
    id: "odontopediatria",
    label: "Odontopediatría",
    href: "/odontopediatria",
    isNew: true
  },
];

const navLinkClass = (active: boolean) =>
  `px-4 py-2 rounded-lg text-sm font-medium transition ${active
    ? "bg-primary-500 text-slate-900"
    : "hover:bg-slate-800 text-slate-300 hover:text-white"
  }`;

const mobileLinkClass = (active: boolean) =>
  `w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition ${active
    ? "bg-primary-500 text-slate-900"
    : "hover:bg-slate-800 text-slate-300 hover:text-white"
  }`;

const NewBadge = () => (
  <span className="px-2 py-0.5 rounded-full bg-primary-500 text-slate-900 text-[11px] font-bold uppercase tracking-wide">
    Nuevo
  </span>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function Layout({ children, currentPage = "inicio" }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isMobileSpecialtiesOpen, setIsMobileSpecialtiesOpen] = useState(false);
  const specialtiesRef = useRef<HTMLDivElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isContactModalOpen]);

  useEffect(() => {
    const openModal = () => setIsContactModalOpen(true);
    window.addEventListener('open-contact-modal', openModal);
    return () => window.removeEventListener('open-contact-modal', openModal);
  }, []);

  useEffect(() => {
    if (!isSpecialtiesOpen) return;
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSpecialtiesOpen(false);
    };
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (!specialtiesRef.current?.contains(e.target as Node)) setIsSpecialtiesOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('mousedown', closeOnOutsideClick);
    };
  }, [isSpecialtiesOpen]);

  const isSpecialtyPage = specialties.some((s) => s.id === currentPage);

  const openContactModal = () => {
    setIsContactModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Header / Sticky Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/95 border-b border-slate-700 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <a href="/">
              <img
                src="/logo.png"
                alt="Pacifika Clínica Dental"
                width="160"
                height="80"
                className="w-40 h-20 object-contain"
                style={{ aspectRatio: '2/1' }}
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-2 mx-2.5 self-stretch whitespace-nowrap" aria-label="Principal">
            <a href="/" className={navLinkClass(currentPage === "inicio")}>
              Inicio
            </a>

            {/* Especialidades: panel desplegable */}
            <div ref={specialtiesRef} className="h-full flex items-center">
              <button
                type="button"
                aria-expanded={isSpecialtiesOpen}
                aria-controls="menu-especialidades"
                onClick={() => setIsSpecialtiesOpen((open) => !open)}
                className={`${navLinkClass(isSpecialtyPage || isSpecialtiesOpen)} inline-flex items-center gap-2`}
              >
                Especialidades
                <ChevronIcon open={isSpecialtiesOpen} />
              </button>

              {isSpecialtiesOpen && (
                <div id="menu-especialidades" className="absolute top-full inset-x-0 px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-7xl bg-slate-800 border border-slate-700 border-t-0 rounded-b-2xl shadow-2xl p-6">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                      {specialties.map((s) => (
                        <a
                          key={s.id}
                          href={s.href}
                          className={`flex items-center gap-3 rounded-xl border px-5 py-4 text-base font-semibold text-white hover:text-primary-400 transition-colors ${currentPage === s.id
                            ? "border-primary-500 bg-slate-900"
                            : "border-slate-700 hover:bg-slate-900"
                            }`}
                        >
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A5C83E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M7 3c-2.5 0-4 2-4 4.5 0 3 1.5 5 2 8 .4 2.5 1 5.5 2.5 5.5s1.6-3 2.2-5c.3-1 .8-1.5 2.3-1.5s2 .5 2.3 1.5c.6 2 .7 5 2.2 5s2.1-3 2.5-5.5c.5-3 2-5 2-8C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3z" />
                          </svg>
                          {s.label}
                          {s.isNew && <span className="ml-auto"><NewBadge /></span>}
                        </a>
                      ))}
                    </div>
                    <div className="mt-5 pt-5 border-t border-slate-700 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-sm text-slate-300">
                        ¿No sabes qué especialidad necesitas? Agenda una valoración y te orientamos.
                      </p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-slate-900 text-sm font-semibold transition-colors"
                      >
                        Escríbenos por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/nuestro-equipo" className={navLinkClass(currentPage === "nuestro-equipo")}>
              Nuestro equipo
            </a>

            <button type="button" onClick={openContactModal} className={navLinkClass(false)}>
              Contacto
            </button>
          </nav>

          <div className="flex items-center gap-4">
            {/* Call button (mobile hidden) */}
            <a
              href="tel:+526699928700"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Llamar
            </a>
            {/* WhatsApp CTA */}
            <a
              href="https://api.whatsapp.com/send?phone=5216691581164&text=Hola%2C%20vengo%20del%20sitio%20web%20y%20quiero%20agendar%20una%20consulta"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 text-sm font-medium shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
              </svg>
              Agendar
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur border-b border-slate-700 shadow-lg z-40"
          >
            <div className="px-4 py-4 space-y-2">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)} className={`block ${mobileLinkClass(currentPage === "inicio")}`}>
                Inicio
              </a>

              <div>
                <button
                  type="button"
                  aria-expanded={isMobileSpecialtiesOpen}
                  onClick={() => setIsMobileSpecialtiesOpen((open) => !open)}
                  className={`${mobileLinkClass(isSpecialtyPage)} flex items-center justify-between`}
                >
                  Especialidades
                  <ChevronIcon open={isMobileSpecialtiesOpen} />
                </button>

                {isMobileSpecialtiesOpen && (
                  <div className="ml-4 mt-2 pl-3 border-l-2 border-slate-700 space-y-1">
                    {specialties.map((s) => (
                      <a
                        key={s.id}
                        href={s.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded text-sm transition-colors ${currentPage === s.id
                          ? "text-white font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                          }`}
                      >
                        {s.label}
                        {s.isNew && <NewBadge />}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/nuestro-equipo" onClick={() => setIsMobileMenuOpen(false)} className={`block ${mobileLinkClass(currentPage === "nuestro-equipo")}`}>
                Nuestro equipo
              </a>

              <button type="button" onClick={openContactModal} className={mobileLinkClass(false)}>
                Contacto
              </button>

              {/* Mobile CTAs */}
              <div className="pt-4 space-y-2 border-t border-slate-700">
                <a
                  href="tel:+526699928700"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-600 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-medium transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Llamar
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5216691581164&text=Hola%2C%20vengo%20del%20sitio%20web%20y%20quiero%20agendar%20una%20consulta"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 text-sm font-medium shadow-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Agendar
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {children}
      </main>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsContactModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl z-10"
          >
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Cerrar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <ContactForm />
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <a href="/">
                  <img
                    src="/logo.png"
                    alt="Pacifika Clínica Dental"
                    width="176"
                    height="88"
                    style={{
                      width: '11rem',
                      height: '5.5rem',
                      objectFit: 'contain',
                      margin: '0 0 1rem 0',
                      padding: 0,
                      display: 'block',
                      aspectRatio: '2/1',
                    }}
                  />
                </a>
                <p className="text-gray-300 text-sm mb-4">
                  Clínica dental especializada en Mazatlán. Más de 13 años transformando sonrisas con tecnología de vanguardia.
                </p>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/pacifika.medica.dental/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/PacifikaMedicaDental/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=5216691581164&text=%C2%A1Hola!%20Vengo%20del%20sitio%20web%20de%20Pacifika%20y%20quiero%20agendar%20una%20cita%20" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-3">Nuestros Servicios</h3>
              <ul className="space-y-1 text-gray-300">
                <li><a href="/odontologia-integral" className="hover:text-white transition-colors">Odontología Integral</a></li>
                <li><a href="/restauradora-avanzada" className="hover:text-white transition-colors">Restauradora Avanzada</a></li>
                <li><a href="/endodoncia" className="hover:text-white transition-colors">Endodoncia</a></li>
                <li><a href="/periodoncia" className="hover:text-white transition-colors">Periodoncia e Implantes</a></li>
                <li><a href="/ortodoncia" className="hover:text-white transition-colors">Ortodoncia</a></li>
                <li><a href="/odontopediatria" className="hover:text-white transition-colors">Odontopediatría</a></li>
                <li><a href="/#servicios" className="hover:text-white transition-colors">Ver Todos</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-3">Contacto</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span>📍</span>
                  <span>Av. Insurgentes 912, Fracc. María Fernanda, Mazatlán</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span>📞</span>
                  <span>+52 (669) 992 87 00</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span>📧</span>
                  <span>pacifikaclinicadental@hotmail.com</span>
                </div>
                <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-1">
                  <div className="flex items-center gap-3">
                    <span>🕒</span>
                    <span>Lunes - Viernes 8:00 a 20:00</span>
                  </div>
                  <div className="flex items-center gap-3 ml-7">
                    <span>Sábado 9:00 a 14:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Pacifika Clínica Dental. Todos los derechos reservados.
            </div>
            <p className="text-gray-500 text-sm">
              Powered by {' '}
              <a href="https://xan.mx/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">XAN</a>
            </p>
            <div className="flex gap-4 text-gray-400 text-sm">
              <a href="/privacidad" className="hover:text-white transition-colors">Privacidad</a>
              <a href="/terminos" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
