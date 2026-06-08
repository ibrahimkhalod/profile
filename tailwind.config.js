/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        surfaceHover: '#1f1f1f',
        primary: '#3b82f6', // blue-500
        primaryDark: '#2563eb', // blue-600
        accent: '#8b5cf6', // purple-500
        textMain: '#f3f4f6', // gray-100
        textMuted: '#9ca3af', // gray-400
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
