// Sistema de Diseño - Pacifika Clínica Dental
// Exportaciones principales del sistema de diseño

// Configuración
export { theme, clinicConfig } from './config/theme';

// Componentes
export { default as Button } from './components/Button';
export { default as Card } from './components/Card';
export { default as Input } from './components/Input';
export { default as ServiceCard } from './components/ServiceCard';
export { default as DoctorCard } from './components/DoctorCard';
export { default as StatsCard } from './components/StatsCard';
export { default as Logo } from './components/Logo';

// Iconos
export * from './components/Icons';

// Estilos
// Los estilos se importan automáticamente en index.css

// Utilidades
export const designSystem = {
  // Colores
  colors: {
    primary: '#2563eb',
    secondary: '#14b8a6',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    }
  },
  
  // Espaciado
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
  },
  
  // Tipografía
  typography: {
    fontSizes: {
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    }
  },
  
  // Bordes
  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    full: '9999px',
  },
  
  // Sombras
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  }
};

// Clases de utilidad personalizadas
export const utilityClasses = {
  // Botones
  btn: 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
  btnPrimary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-lg hover:shadow-xl',
  btnSecondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
  btnOutline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
  btnGhost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
  
  // Cards
  card: 'bg-white rounded-2xl shadow-card hover:shadow-hover transition-all duration-300',
  cardElevated: 'bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300',
  cardOutlined: 'bg-transparent rounded-2xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-300',
  
  // Formularios
  input: 'w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300',
  label: 'block text-sm font-medium text-gray-700 mb-2',
  
  // Títulos
  title: 'font-bold text-gray-900',
  titleXl: 'text-3xl md:text-4xl font-bold text-gray-900',
  titleLg: 'text-2xl md:text-3xl font-bold text-gray-900',
  titleMd: 'text-xl md:text-2xl font-semibold text-gray-900',
  
  // Texto
  textBody: 'text-gray-600 leading-relaxed',
  textMuted: 'text-gray-500',
  
  // Contenedores
  container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  containerSm: 'mx-auto max-w-3xl px-4 sm:px-6 lg:px-8',
  
  // Secciones
  section: 'py-16 md:py-20',
  sectionSm: 'py-12 md:py-16',
  sectionLg: 'py-20 md:py-24',
  
  // Efectos
  hoverLift: 'hover:-translate-y-1 transition-transform duration-300',
  hoverGlow: 'hover:shadow-lg transition-shadow duration-300',
  hoverScale: 'hover:scale-105 transition-transform duration-300',
};

export default designSystem;
