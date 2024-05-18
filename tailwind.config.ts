import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'orange-primary': '#FC4024',
        'orange-primaryLigth': '#FF7A66',
      }

    },
  },
  plugins: [
    
    function({addUtilities} : any){
      const newUtilities = {
        '.scrollbar-thin' :{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(31 29) white',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '3px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'red',
            borderRadius: '10px',
            border: '3px solid #fff'
          },
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
    
  
  ],
};
export default config;
