// Configuración del logotipo - Pacifika Clínica Dental

export const logoConfig = {
  // Tamaños disponibles
  sizes: {
    xs: 'w-8 h-8',      // 32px
    sm: 'w-10 h-10',    // 40px
    md: 'w-12 h-12',    // 48px (tamaño original)
    lg: 'w-16 h-16',    // 64px (tamaño actual)
    xl: 'w-20 h-20',    // 80px
    '2xl': 'w-24 h-24', // 96px
    '3xl': 'w-32 h-32', // 128px (30% más grande que 2xl)
    '4xl': 'w-44 h-44', // 176px (40% más grande que 2xl)
    '5xl': 'w-36 h-36', // 144px (50% más grande que 2xl)
    '6xl': 'w-44 h-44', // 11rem (176px)
    'custom': 'w-[11rem] h-[11rem]', // 11rem exacto
  },
  
  // Configuración por ubicación
  locations: {
    header: {
      size: '5xl', // w-36 h-36 (50% más grande)
      className: 'object-contain',
    },
    footer: {
      size: 'custom', // w-[11rem] h-[11rem]
      className: 'object-contain m-0 p-0 block align-top',
    },
    hero: {
      size: '2xl', // w-24 h-24
      className: 'object-contain',
    },
    card: {
      size: 'sm', // w-10 h-10
      className: 'object-contain',
    }
  },
  
  // Ruta de la imagen
  src: '/logo.png',
  
  // Alt text
  alt: 'Pacifika Clínica Dental',
};

// Función helper para obtener las clases del logo
export const getLogoClasses = (location: keyof typeof logoConfig.locations): string => {
  const config = logoConfig.locations[location];
  const sizeClass = logoConfig.sizes[config.size as keyof typeof logoConfig.sizes];
  return `${sizeClass} ${config.className}`;
};

// Función helper para obtener el tamaño específico
export const getLogoSize = (size: keyof typeof logoConfig.sizes): string => {
  return logoConfig.sizes[size];
};

export default logoConfig;
