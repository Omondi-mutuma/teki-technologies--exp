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
      backgroundColor: {
        "bg-purple": "#2A193C",
      },
      boxShadow: {
        "inner-shadow-custom": "inset 0 0 6px 3px rgba(255,255,255, 0.4)",
      },
      colors: {
        "custom-gradient-start": "#FFF",
        "custom-gradient-end": "#B372CF",
        "bleached-purple": "#8C45FF",
        "badge-bg": "#000000",
        "badge-label-bg": "#9855FF",
        "purple-blur-fill": "#602A9A",
        "small-purple-blur-fill": "#622A9A",
        "black-linear-gradient-start": "rgba(0,0,0,0%)",
        "black-linear-gradient-end": "rgba(5,2,8,100%)",
      },
      fontSize: {
        "heading-1": "82px",
        "heading-2": "48px",
        "heading-3": "32px",
        "heading-4": "24px",
        "heading-5": "16px",
        "heading-6": "13px",
        "body-xs": "13px",
        "body-s": "14px",
        "body-m": "16px",
        "body-l": "18px",
      },
      lineHeight: {
        "lg-heading-height": "84px",
        "sm-heading-height": "52px",
      },
      letterSpacing: {
        "heading-spacing": "-5.06%",
      },
    },
  },
  plugins: [],
};
export default config;
