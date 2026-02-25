export default function ContactInfo() {
  return (
    <div className="lg:col-span-2">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
      <div className="space-y-6">
        <div className="flex items-start gap-4 group">
          <div className="flex items-center justify-center pt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" />
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-lg">Enví­a un mensaje</p>
            <p className="text-gray-600">pacifikaclinicadental@hotmail.com</p>
          </div>
        </div>
        <div className="flex items-start gap-4 group">
          <div className="flex items-center justify-center pt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
              <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.59 5.95L0 24l6.32-1.66a11.88 11.88 0 005.74 1.47c6.56 0 11.89-5.34 11.89-11.89a11.84 11.84 0 00-3.42-8.44zM12.06 21.37a9.47 9.47 0 01-4.82-1.32l-.35-.21-3.59.94.96-3.51-.22-.36a9.48 9.48 0 01-1.45-5.01c0-5.23 4.26-9.48 9.49-9.48 2.54 0 4.92.99 6.71 2.78a9.45 9.45 0 012.77 6.7c0 5.23-4.26 9.48-9.49 9.48zm5.16-7.9c-.28-.14-1.68-.83-1.94-.92-.26-.1-.45-.14-.62.14-.18.27-.69.91-.85 1.09-.16.19-.31.21-.57.07-.28-.14-1.09-.4-2.08-1.27-.77-.69-1.29-1.53-1.44-1.79-.15-.26-.02-.4.12-.55.13-.13.28-.33.41-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.62-1.39-.85-1.9-.22-.5-.43-.43-.59-.44-.15-.01-.33-.02-.51-.02-.18 0-.47.07-.72.35-.25.28-.95.93-.95 2.26 0 1.33.97 2.61 1.11 2.79.14.19 2.02 3 4.9 4.21.68.29 1.22.41 1.63.53.68.22 1.29.19 1.77.11.54-.08 1.66-.64 1.89-1.26.23-.62.23-1.15.16-1.26-.07-.11-.25-.18-.54-.32z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-lg">WhatsApp</p>
            <p className="text-gray-600">669 158 1164</p>
          </div>
        </div>
        <div className="flex items-start gap-4 group">
          <div className="flex items-center justify-center pt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-lg">Horarios</p>
            <p className="text-gray-600">Lunes - Viernes 8:00 a 20:00</p>
            <p className="text-gray-600">Sábado 9:00 a 14:00</p>
          </div>
        </div>
        <div className="flex items-start gap-4 group">
          <div className="flex items-center justify-center pt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
              <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
  );
}
