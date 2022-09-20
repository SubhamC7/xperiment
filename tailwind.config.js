module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DB4132",
        primaryDark: "#bf3226",
        accent: "#FCBEC1",
        tabCircle: "#ef9799",
        backdrop: "#0000007d",
        transparent: "rgba(255, 255, 255, 0)",
        transparentD: "#000000a8",
        transparentD2: "#00000085",
        grad1: "#0D324D",
        grad2: "#4C4177",
        grad1T: "#052438c0 ",
        grad2T: "#14054eb6 ",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};

// "theme-color": "#0a9396",
