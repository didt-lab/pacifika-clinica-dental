import React, { useState } from 'react';
import { motion } from 'framer-motion';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const navItems = [
  { id: "inicio", label: "Inicio", isPage: false, href: "/" },
  {
    id: "odontologia-integral",
    label: "Odontología\nIntegral",
    isPage: true,
    href: "/odontologia-integral",
    submenu: [
      { id: "especialista", label: "Especialista", href: "/odontologia-integral#especialista" },
      { id: "beneficios", label: "Beneficios", href: "/odontologia-integral#beneficios" },
      { id: "especialidades_odontologia", label: "Especialidades", href: "/odontologia-integral#especialidades_odontologia" },
      { id: "preguntas_odontologia", label: "FAQ", href: "/odontologia-integral#preguntas_odontologia" },
      { id: "contacto_odontologia", label: "Contacto", href: "/odontologia-integral#contacto_odontologia" }
    ]
  },
  {
    id: "restauradora-avanzada",
    label: "Restauradora\nAvanzada",
    isPage: true,
    href: "/restauradora-avanzada",
    submenu: [
      { id: "especialista", label: "Especialista", href: "/restauradora-avanzada#especialista" },
      { id: "tratamientos_periodoncia", label: "Tratamientos", href: "/restauradora-avanzada#tratamientos_periodoncia" },
      { id: "alineadores_periodoncia", label: "Beneficios", href: "/restauradora-avanzada#alineadores_periodoncia" },
      { id: "preguntas_periodoncia", label: "FAQ", href: "/restauradora-avanzada#preguntas_periodoncia" },
      { id: "contacto_periodoncia", label: "Contacto", href: "/restauradora-avanzada#contacto_periodoncia" }
    ]
  },
  {
    id: "endodoncia",
    label: "Endodoncia",
    isPage: true,
    href: "/endodoncia",
    submenu: [
      { id: "especialista", label: "Especialista", href: "/endodoncia#especialista" },
      { id: "beneficios", label: "Beneficios", href: "/endodoncia#beneficios" },
      { id: "especialidades_endodoncia", label: "Especialidades", href: "/endodoncia#especialidades_endodoncia" },
      { id: "preguntas_endodoncia", label: "FAQ", href: "/endodoncia#preguntas_endodoncia" },
      { id: "contacto_endodoncia", label: "Contacto", href: "/endodoncia#contacto_endodoncia" }
    ]
  },
  {
    id: "periodoncia",
    label: "Periodoncia\nImplantes",
    isPage: true,
    href: "/periodoncia",
    submenu: [
      { id: "especialista", label: "Especialista", href: "/periodoncia#especialista" },
      { id: "tratamientos_periodoncia", label: "Tratamientos", href: "/periodoncia#tratamientos_periodoncia" },
      { id: "alineadores_periodoncia", label: "Beneficios", href: "/periodoncia#alineadores_periodoncia" },
      { id: "preguntas_periodoncia", label: "FAQ", href: "/periodoncia#preguntas_periodoncia" },
      { id: "contacto_periodoncia", label: "Contacto", href: "/periodoncia#contacto_periodoncia" }
    ]
  },
  {
    id: "ortodoncia",
    label: "Ortodoncia",
    isPage: true,
    href: "/ortodoncia",
    submenu: [
      { id: "especialista", label: "Especialista", href: "/ortodoncia#especialista" },
      { id: "tratamientos_ortodoncia", label: "Tratamientos", href: "/ortodoncia#tratamientos_ortodoncia" },
      { id: "alineadores_ortodoncia", label: "Alineadores", href: "/ortodoncia#alineadores_ortodoncia" },
      { id: "preguntas_ortodoncia", label: "FAQ", href: "/ortodoncia#preguntas_ortodoncia" },
      { id: "contacto_ortodoncia", label: "Contacto", href: "/ortodoncia#contacto_ortodoncia" }
    ]
  },
  { id: "contacto", label: "Contacto", isPage: false, href: "/#contacto" },
];

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function Layout({ children, currentPage = "inicio" }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.isPage) {
      window.location.href = item.href;
    } else {
      if (item.id === "inicio") {
        window.location.href = "/";
      } else if (item.id === "contacto" && window.location.pathname !== "/") {
        window.location.href = "/#contacto";
      } else {
        scrollToId(item.id);
      }
    }
  };

  const handleSubmenuNavigation = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
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

          <nav className="hidden md:flex items-start gap-1 mx-2.5">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => handleNavigation(item)}
                  onMouseEnter={() => item.submenu && setOpenSubmenu(item.id)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition whitespace-pre-line text-left flex items-center gap-1 ${currentPage === item.id
                    ? "bg-primary-500 text-white"
                    : "hover:bg-slate-800 text-slate-300 hover:text-white"
                    }`}
                >
                  {item.label}
                  {item.submenu && (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Submenu */}
                {item.submenu && openSubmenu === item.id && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-slate-800 rounded-lg shadow-lg border border-slate-700 py-2 z-50"
                    onMouseEnter={() => setOpenSubmenu(item.id)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleSubmenuNavigation(subItem.href)}
                        className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Call button (mobile hidden) */}
            <a
              href="tel:+526699928700"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105"
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
              className="hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 text-sm font-medium shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105"
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
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
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
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur border-b border-slate-700 shadow-lg z-40"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      if (item.submenu) {
                        setMobileSubmenu(mobileSubmenu === item.id ? null : item.id);
                      } else {
                        handleNavigation(item);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition whitespace-pre-line flex items-center justify-between ${currentPage === item.id
                      ? "bg-primary-500 text-white"
                      : "hover:bg-slate-800 text-slate-300 hover:text-white"
                      }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <svg className={`w-3 h-3 transition-transform duration-200 ${mobileSubmenu === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {item.submenu && mobileSubmenu === item.id && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => {
                            handleSubmenuNavigation(subItem.href);
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

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
                  <a href="https://wa.me/526699928700" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
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
