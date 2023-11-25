/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: "Rubik",
      },
      colors: {
        Black: "#000000",
        white: "#FFF",
        skyBlue: "#0076BE",
        Green: "#48BF91",
        Sky: "#95D8EB",
        blackSecondary:
          "linear-gradient(136deg, rgba(0, 118, 190, 0.05) 3.65%, rgba(72, 191, 145, 0.05) 89.63%)",
        skyBlueGradient:
          "linear-gradient(136deg, #0076BE 3.65%, #48BF91 89.63%)",
        skyBlueGradient2: "rgba(255, 255, 255, 0.10)",
      },
      backgroundImage: {
        footerBG: "url('./public/images/footerBG.webp')",
        roadmapBG: "url('./public/images/roadmapBG.webp')",
        roadmapSvg: "url('./public/images/roadmapSvg.svg')",
        roadmapLine: "url('./public/images/roadmapLine.png')",
        bgLine: "url('./public/images/bgLine.webp')",
      },
      keyframes: {
        loder: {
          '0%': { left: '0',height: '29px' ,width:'15px' },
          '50%': { height: '8px' ,width:'39px'},
          '100%': { left: '229px',height: '29px' ,width:'15px'},
        }
      }
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1170px",
      xxl: "1270px",
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
