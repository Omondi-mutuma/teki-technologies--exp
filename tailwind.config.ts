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
        "gradient-radial-start":
          "radial-gradient(183.81% 220.09% at 18.23% -40.51%, #FFDAA3 0%, #E27F5A 46.78%, #691616 100%)",
        "gradient-radial-bento":
          "url(/card.png), radial-gradient(53.33% 74.69% at 50% 107.05%, #BBA5F4 0%, #653AD8 100%)",
        "bento-bg-image":
          "url(/card.png), radial-gradient(214.89% 255.91% at 214.89% -5.91%, rgba(127, 139, 210, 0.3) 0%, rgba(89, 106, 197, 0) 100%)",
      },
      backgroundColor: {
        "bg-purple": "#2A193C",
      },
      boxShadow: {
        "inner-shadow-custom": "inset 0 0 6px 3px rgba(255,255,255, 0.4)",
        "toggle-shadow-custom": "inset 0px 0px 23.608px rgba(0, 0, 0, 0.3)",
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
        "blue-linear-gradient-end": "#6633EE",
        "blue-linear-gradient-start": "#F5F1FF",
        "b-blue-linear-gradient-start": "#B294FF",
        "b-blue-linear-gradient-end": "#4F2BAC",
        "bento-bg": "#1D1D3B",
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
