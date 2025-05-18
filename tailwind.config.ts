import type { Config } from 'tailwindcss'
import { heroui } from '@heroui/react'
import tailwind_animate from 'tailwindcss-animate'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        custom: {
          'background-secondary': 'var(--background-secondary)',
          'background-tertiary': 'var(--background-tertiary)',
          'text-light': 'var(--text-light)',
          'text-body': 'var(--text-body)',
          'text-headings': 'var(--text-heading)',
          'border-color': 'var(--border-color)',
          primary: 'var(--primary-color)',
        },
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        footer: 'var(--footer)',
        gray: {
          '250': '#CECECE',
          '275': '#D1D1D1',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        'font-heading': 'var(--font-outfit)',
        'font-body': 'var(--font-mulish)',
      },
      animation: {
        orbit: 'orbit calc(var(--duration)*1s) linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': {
            transform:
              'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))',
          },
          '100%': {
            transform:
              'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))',
          },
        },
      },
    },
  },
  darkMode: ['class'],
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
    tailwind_animate,
  ],
} satisfies Config
