/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        bounceRight:{
          '0% , 100%' :{ transform: 'translateY(-25%) rotate(20deg)'},
          '50%' : {transform: 'translateY(0) rotate(15deg)'} 
        },
        bounceLeft:{
          '0% , 100%' :{ transform: 'translateY(-25%) rotate(-20deg)'},
          '50%' : {transform: 'translateY(0) rotate(-15deg)'} 
        },
        
      },
      animation:{
          bounceRight: 'bounceRight 2s ease-in-out infinite',
          bounceLeft: 'bounceLeft 2s ease-in-out infinite',

      }
    },
  },
  plugins: [],
}