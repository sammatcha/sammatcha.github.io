import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-gradient" :"radial-gradient( circle at center, rgba(255,255,255,.2) 0%, rgba(255,255,255,0)50%)",
      },
      colors: {
        'darkMode' : '#0F172A',
        'slightGreyBlue' : '#1E293B',
        'darkGreyBlue' : '#131B2E',
        'soft-white': '#F3F4F6',
        'light-gray' : '#CBD5E0',
        'soft-gray' : '#A0AEC0',
        'gray': '#9CA3AF',
        'deep-teal': '#033E3E',
        'soft-blue': '#63B3ED',
        'muted-blue':'#1755A6',
        'medium-gray': '#F7FAFC'
        

      },
      keyframes: {
        slidein: {
          from: {
            opacity : "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
       slidein: "slidein 1s ease var(--slidein-delay,0) forwards",
      }
    },
  },
  plugins: [],
};
export default config;
