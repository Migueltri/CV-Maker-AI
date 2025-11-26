import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d6e0ff',
          300: '#b3c7ff',
          400: '#8aa3ff',
          500: '#667eea',
          600: '#5568d3',
          700: '#4451b8',
          800: '#363f94',
          900: '#2d3470',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        /* Nuevos colores personalizados para compatibilidad con las clases usadas */
        background: {
          DEFAULT: '#ffffff', // fondo principal blanco
          light: '#f9fafb',   // variante ligera para secciones
        },
        foreground: {
          DEFAULT: '#111827', // color de texto principal (gris muy oscuro)
          muted: '#6b7280',   // texto secundario
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-soft': 'linear-gradient(135deg, #f5f7ff 0%, #faf5ff 100%)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'premium': '0 4px 24px -2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'premium-lg': '0 8px 40px -4px rgba(0, 0, 0, 0.12), 0 4px 16px -4px rgba(0, 0, 0, 0.08)',
        'premium-xl': '0 12px 48px -8px rgba(0, 0, 0, 0.16), 0 6px 24px -8px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config