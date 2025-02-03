import type { Config } from 'tailwindcss'
import { heroui } from '@heroui/react'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        footer: 'var(--footer)',
        gray: {
          250: '#CECECE',
          275: '#D1D1D1',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      layout: {
        fontSize: {
          tiny: '0.875rem',
          small: '1rem',
          medium: '1.125rem',
          large: '1.25rem',
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#EC1C24',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#EC1C24',
            },
          },
        },
      },
    }),
  ],
} satisfies Config
