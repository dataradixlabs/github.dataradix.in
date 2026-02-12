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
        // Primary text (near-black)
        text: {
          primary: '#0A0A0A',
          secondary: '#525252',
        },
        // Backgrounds
        bg: {
          base: '#FFFFFF',
          muted: '#F7F7F8',
        },
        // Borders/dividers
        border: {
          DEFAULT: '#E5E7EB',
        },
        // Single accent color (Charcoal Blue)
        accent: {
          DEFAULT: '#1E293B',
          hover: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['clamp(32px, 5vw, 56px)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['clamp(28px, 4vw, 40px)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['clamp(20px, 3vw, 28px)', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'body': ['clamp(16px, 2vw, 18px)', { lineHeight: '1.6' }],
        'small': ['14px', { lineHeight: '1.5' }],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        'content': '1100px',
      },
      borderRadius: {
        'soft': '8px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;


