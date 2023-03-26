/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1ec93a",
        
"secondary": "#c94079",
        
"accent": "#c00be0",
        
"neutral": "#1A161D",
        
"base-100": "#E5E0EB",
        
"info": "#44ACC1",
        
"success": "#20BC70",
        
"warning": "#EFB257",
        
"error": "#EE1757",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

};
