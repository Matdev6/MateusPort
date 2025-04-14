/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D5D5C', // Nome da variável para a cor
        secundary: '#9AA49C'
      },
      backgroundImage: {
        'radial' : 'radial-gradient(var(--tw-gradient-stops))',
      },
      
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
