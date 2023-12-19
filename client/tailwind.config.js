/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: "12px",
        xs: "14px",
        sm: "16px",
        base: "18px",
        md: "20px",
        md2: "24px",
        lg: "32px",
        xl: "40px",
        xxl: "42px",
        "2xl": "48px",
        "3xl": "56px",
      },
      colors: {
        lightblack: "#253D4E",
        gray: "#939393",
        primary: " #e5bb5d",
        sky: "#67BCEE",
        lightSky: "#e5bb5d",
        pink: "#F74B81",
        labrador: "#F2EBD9",
        montblancpeak: "#F4EAEA",
        whisperblue: "#E9ECF4",
        water: "#D9F2F9",
        tangaroa: "#1E293B",
        pumpingspice: "#F74B4B",
        perfectwhite: "#F2F0F0",
        green: "#3BB77E",
        spacegrey: "#130027",
        corbeau: "#14142B",
        red: "#FF0532",
      },
    },
  },
  plugins: [],
};
