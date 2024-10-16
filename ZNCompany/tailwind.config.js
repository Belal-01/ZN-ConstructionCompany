/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'zn-green-dark':'#14B05D',
        'zn-green':'#2BE784',
        'zn-green-light':'#59ED9F',
        'zn-blue-dark':'#031C1D',
        'zn-blue':'#074143',
        'zn-blue-light':'#0E7E83',
        'zn-red':'#E55B5B',
        'zn-gray-box':'#D9D9D980',
        'zn-orang':'#D8814F',
        'zn-white':'#EEF9F3',
        'zn-gray-1':'#C5D9CF',
        'zn-gray-2':'#6A997F',
        'zn-gray-3':'#3D624F',
        'zn-black':'#121C17',

      }

    },
    fontFamily:{
      'Lato': ['Lato'] ,
       'Inter':['Inter','sans-serif']

    }
  },
  plugins: [
    
  ],
}