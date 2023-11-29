/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gra':{
          '0':'#BFBFBF',
          '1':'#B3B3B3',
          '2':'#98989A',
          '3':'#656567',
          '4':'#59595A',
          '5':'#4C4C4D',
          '6':'#333333',
          '7':'#262626',
          '8':'#1C1C1C',
          '9':'#191919',
        },
        'gre':{
          '0':'#FEFFFA',
          '1':'#FBFFF0',
          '2':'#F8FFE5',
          '3':'#F2FFCC',
          '4':'#E5FF99',
          '5':'#D8FF66',
          '6':'#D1FF4C',
          '7':'#CAFF33'
        },
        'whi':{
          '0':'#FCFCFD',
          '1':'#F7F7F8',
          '2':'#F1F1F3',
          '3':'#E4E4E7',
          '4':'#D9D9DB'
        }
      }
      ,
      screens:{
        'xs':'575px'
      },
    },
  },
  plugins: [],
  corePlugins:{
    preflight:false
  }
}


 