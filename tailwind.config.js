/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        mono: ['"SFMono-Regular"', 'Consolas', '"Liberation Mono"', 'monospace'],
      },
      colors: {
        ink: '#191918',
        muted: '#787774',
        subtle: '#9b9a97',
        canvas: '#f7f7f5',
        line: '#e9e9e7',
        accent: '#2383e2',
        'accent-soft': '#e7f3f8',
      },
      maxWidth: {
        reading: '46rem',
        '8xl': '88rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.86' },
          '50%': { transform: 'scale(1.06)', opacity: '1' },
        },
        orbit: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 4.8s ease-in-out infinite',
        breathe: 'breathe 5.5s ease-in-out infinite',
        orbit: 'orbit 22s linear infinite',
      },
    },
  },
  plugins: [],
}
