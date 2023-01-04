/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        blue:"hsl(183, 100%, 35%)",
        lblue:"hsl(183, 49%, 63%)",
        pblue:"hsl(179, 93%, 44%)",
        back:"hsl(216, 19%, 16%)",
        sec:"hsl(217, 10%, 25%);",
        wh:"hsl(0, 0%, 100%)",
        datowh:"hsl(0, 0%, 78%)",
      },
      animation: {
        'spin-slow': 'spin 0.2s linear 0.5',
        'spin-1': 'spin 0.2s linear 0.7',
        'ping-1':' ping 1s cubic-bezier(0, 0, 0.5, 1) 1',
        'ping-2':' ping 1s cubic-bezier(1, 0, 0.5, 1) 1'
        
      }
      
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}