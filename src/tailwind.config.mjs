/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F47C20',
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
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
