const { theme } = require('./theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/design-system/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        neutral: theme.colors.neutral,
        dental: theme.colors.dental,
        success: theme.colors.success,
        warning: theme.colors.warning,
        error: theme.colors.error,
        info: theme.colors.info,
      },
      fontFamily: {
        sans: theme.typography.fontFamily.sans,
        serif: theme.typography.fontFamily.serif,
        mono: theme.typography.fontFamily.mono,
      },
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeight,
      lineHeight: theme.typography.lineHeight,
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,
      boxShadow: theme.boxShadow,
      zIndex: theme.zIndex,
      screens: theme.breakpoints,
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-dental': 'pulse-dental 2s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-dental': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        slideInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #14b8a6 0%, #6ee7b7 100%)',
        'gradient-hero': 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};


