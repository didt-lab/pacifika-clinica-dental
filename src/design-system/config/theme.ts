// Sistema de Diseño - Pacifika Clínica Dental
// Configuración centralizada de colores, tipografías y estilos

export const theme = {
  // Colores principales
  colors: {
    // Colores primarios
    primary: {
      50: '#f7fdf0',
      100: '#eef9e0', 
      200: '#ddf2c1',
      300: '#c7e89a',
      400: '#b0dd73',
      500: '#A5C83E', // Verde principal (color del logo)
      600: '#8fb336',
      700: '#7a9e2e',
      800: '#658926',
      900: '#50741e',
    },
    
    // Colores secundarios
    secondary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e', // Verde para éxito
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    
    // Colores neutros
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
    },
    
    // Colores de estado
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    
    // Colores específicos de la clínica
    dental: {
      blue: '#2563eb',
      teal: '#14b8a6',
      mint: '#6ee7b7',
      coral: '#fb7185',
    }
  },
  
  // Tipografías
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Fira Code', 'monospace'],
    },
    
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },
    
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    }
  },
  
  // Espaciado
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
  },
  
  // Bordes y radios
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },
  
  // Sombras
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Z-index
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  }
};

// Configuración específica de la clínica
export const clinicConfig = {
  name: 'Pacifika Clínica Dental',
  location: 'Mazatlán, Sinaloa',
  phone: '+52 (669) 992 87 00',
  email: 'pacifikaclinicadental@hotmail.com',
  address: 'Av. Insurgentes 912, Fracc. María Fernanda',
  
  // Horarios
  schedule: {
    weekdays: '08:00 - 18:00',
    saturday: '08:00 - 14:00',
    sunday: 'Cerrado'
  },
  
  // Redes sociales
  social: {
    instagram: 'https://instagram.com/pacifika_dental',
    facebook: 'https://facebook.com/pacifika_dental',
    whatsapp: 'https://wa.me/526699928700'
  },
  
  // Servicios principales
  services: [
    'Odontología General',
    'Odontología Cosmética', 
    'Odontología Pediátrica',
    'Ortodoncia',
    'Implantes Dentales',
    'Endodoncia',
    'Diseño de Sonrisa',
    'Periodoncia'
  ],
  
  // Especialistas
  specialists: [
    { name: 'Dr. Juan Lizarraga', specialty: 'Endodoncia' },
    { name: 'Dra. Krizia Zamudio', specialty: 'Odontología General' },
    { name: 'Dr. Mario Díaz', specialty: 'Periodoncia e Implantología' },
    { name: 'Dr. Luis Osuna', specialty: 'Restauradora Avanzada' },
    { name: 'Dra. Erika Bernal', specialty: 'Ortodoncia' },
  ]
};


export default theme;
