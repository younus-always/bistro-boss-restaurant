import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        loginBg: "url('./assets/others/authentication.png')",
        contactBg: "url('./assets/contact/banner.jpg')",
        shopBg: "url('./assets/shop/banner2.jpg')",
        menuBg: "url('./assets/menu/banner3.jpg')",
      },
      colors: {
        customGold: "#D1A054",
      }
    },
  },
  plugins: [daisyui],
}

