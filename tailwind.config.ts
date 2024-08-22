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
      },
      boxShadow: {
        'inner-shadow-custom': 'inset 0 0 6px 3px rgba(255,255,255, 0.4)'
      },
      colors: {
        'custom-gradient-start': '#FFF',
        'custom-gradient-end': '#B372CF',
        'bleached-purple': '#8C45FF'
      },
    },
  },
  plugins: [

  ],
};
export default config;
