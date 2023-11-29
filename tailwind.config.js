/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
        bounceRightFrita:{
          '0% , 100%' :{ transform: 'translateY(-25%) rotate(50deg)'},
          '50%' : {transform: 'translateY(0) rotate(45deg)'} 
        },
        bounceLeftFrita:{
          '0% , 100%' :{ transform: 'translateY(-25%) rotate(-10deg)'},
          '50%' : {transform: 'translateY(0) rotate(-5deg)'} 
        },

        
      },
      animation:{
          bounceRight: 'bounceRight 2s ease-in-out infinite',
          bounceLeft: 'bounceLeft 2s ease-in-out infinite',
          bounceRightFrita: 'bounceRightFrita 2s ease-in-out infinite',
          bounceLeftFrita: 'bounceLeftFrita 2s ease-in-out infinite',

      }
    },
  },
  plugins: [],
}