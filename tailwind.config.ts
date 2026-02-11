import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutrals — tight monochromatic scale
        neutral: {
          0:   '#FFFFFF',
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D1D1D1',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        // Legacy aliases — keeps existing components working
        text: {
          primary: '#0A0A0A',
          secondary: '#525252',
        },
        bg: {
          base: '#FFFFFF',
          muted: '#FAFAFA',
          subtle: '#F5F5F5',
        },
        border: {
          DEFAULT: '#E8E8E8',
          strong: '#D1D1D1',
        },
        // Primary brand accent — deep ink blue
        accent: {
          DEFAULT: '#18181B',
          hover:   '#09090B',
          // vivid indigo for interactive highlights
          vivid:   '#4F46E5',
          'vivid-hover': '#4338CA',
          muted:   '#EEF2FF',
        },
        // Semantic
        success: '#16A34A',
        warning: '#D97706',
        error:   '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Display — hero-level
        'display':  ['clamp(40px, 6vw, 72px)',  { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-sm': ['clamp(32px, 4.5vw, 56px)', { lineHeight: '1.1',  letterSpacing: '-0.025em', fontWeight: '700' }],
        // Headings
        'h1': ['clamp(28px, 4vw, 48px)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['clamp(22px, 3vw, 36px)', { lineHeight: '1.2',  letterSpacing: '-0.018em' }],
        'h3': ['clamp(18px, 2.5vw, 24px)', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        'h4': ['16px', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
        // Body
        'body-lg':  ['clamp(16px, 1.5vw, 18px)', { lineHeight: '1.7' }],
        'body':     ['15px', { lineHeight: '1.65' }],
        'body-sm':  ['14px', { lineHeight: '1.6' }],
        // UI
        'label':    ['12px', { lineHeight: '1.4', letterSpacing: '0.06em', fontWeight: '600' }],
        'mono':     ['13px', { lineHeight: '1.5', fontFamily: 'JetBrains Mono, monospace' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
        'section-lg': '9rem',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
      },
      maxWidth: {
        'content': '1120px',
        'content-sm': '768px',
        'content-xs': '560px',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'DEFAULT': '8px',
        'md': '10px',
        'lg': '14px',
        'xl': '18px',
        '2xl': '24px',
        // Legacy
        'soft': '8px',
      },
      boxShadow: {
        'xs':    '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        'sm':    '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'md':    '0 4px 12px -2px rgb(0 0 0 / 0.08), 0 2px 4px -1px rgb(0 0 0 / 0.04)',
        'lg':    '0 8px 24px -4px rgb(0 0 0 / 0.1), 0 4px 8px -2px rgb(0 0 0 / 0.05)',
        'xl':    '0 16px 40px -6px rgb(0 0 0 / 0.12), 0 8px 16px -4px rgb(0 0 0 / 0.06)',
        'card':  '0 0 0 1px rgb(0 0 0 / 0.06), 0 4px 16px -4px rgb(0 0 0 / 0.08)',
        'card-hover': '0 0 0 1px rgb(0 0 0 / 0.1), 0 8px 24px -6px rgb(0 0 0 / 0.12)',
        'inner': 'inset 0 1px 3px 0 rgb(0 0 0 / 0.06)',
        'none':  'none',
      },
      transitionTimingFunction: {
        'spring':  'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth':  'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      animation: {
        'fade-in':    'fadeIn 0.4s ease-out both',
        'slide-up':   'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-down': 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in':   'scaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'ticker':     'ticker 28s linear infinite',
      },
      keyframes: {
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp:   { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        scaleIn:   { '0%': { opacity: '0', transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        ticker:    { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
