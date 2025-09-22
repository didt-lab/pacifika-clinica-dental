const { theme } = require('./src/design-system/config/theme');

/** @type {import('tailwindcss').Config} */
export default {
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
    },
  },
  plugins: [],
}
