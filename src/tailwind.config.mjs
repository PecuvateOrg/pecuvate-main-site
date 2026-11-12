/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F47C20',
          // Orange for TEXT: #F47C20 is 2.7:1 on white; this is 5.0:1 (WCAG AA). Borders/logo keep #F47C20.
          'orange-text': '#B45309',
          yellow: '#F5C200',
          gray:   '#8C8C8C',
        },
        ink: {
          primary: '#1A1A1A',
          muted:   '#6B6B6B',
        },
        surface: {
          DEFAULT: '#FAFAFA',
          subtle:  '#F0F0F0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [typography],
};
