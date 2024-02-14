/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'grey-bg': '#f5f5f5',
        'black-222': '#222',
        'black-777': '#777',
        'gold': '#FF9B04',
        '#2A1A01':'#2A1A01',
        '#E0E0E0':'#E0E0E0',
        'text-rgb':'rgba(255, 155, 4, 0.25)'
      },
      boxShadow:{
        'header-sh': '0px 4px 10px 0px #0000000D',
      },
    },
    textDecorationThickness:{
      textDecoration:{
        'strikethrough':'strikethrough'
      }
    },
    fontFamily:{
      'liana':'Liana'
    }
  },
}