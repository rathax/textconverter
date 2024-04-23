/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],

  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.094rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.75rem',
      '4xl': '2.625rem',
      '5xl': '3.052rem',
    }
  },
   plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        ".formatted-text": {
          "@apply leading-7 text-base": {},
          "a": {
            "@apply text-[#007bff]": {},
          }
        },
      })
    }),
  ],
}