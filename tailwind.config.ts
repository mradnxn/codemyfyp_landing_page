import type { Config } from "tailwindcss";

const config: Config = {
darkMode: ["class"],
content: [
"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
container: {
center: true,
padding: "1rem",
screens: {
"2xl": "1400px",
},
},
extend: {
colors: {
background: "#050816",
foreground: "#ffffff",


    primary: {
      DEFAULT: "#14C8E8",
      dark: "#0A5FBF",
    },

    secondary: {
      DEFAULT: "#7C3AED",
      dark: "#5B21B6",
    },

    card: {
      DEFAULT: "rgba(255,255,255,0.05)",
      border: "rgba(255,255,255,0.10)",
    },
  },

  fontFamily: {
    sans: ["Inter", "sans-serif"],
  },

  backgroundImage: {
    heroGradient:
      "linear-gradient(135deg,#7C3AED 0%,#0A5FBF 50%,#14C8E8 100%)",

    cardGradient:
      "linear-gradient(135deg,rgba(20,200,232,.15),rgba(124,58,237,.15))",
  },

  boxShadow: {
    glow: "0 0 40px rgba(20,200,232,.25)",
    card: "0 8px 32px rgba(0,0,0,.25)",
  },

  borderRadius: {
    xl2: "1.5rem",
    xl3: "2rem",
  },

  keyframes: {
    float: {
      "0%,100%": {
        transform: "translateY(0px)",
      },
      "50%": {
        transform: "translateY(-20px)",
      },
    },

    glow: {
      "0%,100%": {
        opacity: "0.6",
      },
      "50%": {
        opacity: "1",
      },
    },

    slideUp: {
      "0%": {
        opacity: "0",
        transform: "translateY(30px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0px)",
      },
    },
  },

  animation: {
    float: "float 6s ease-in-out infinite",
    glow: "glow 4s ease-in-out infinite",
    slideUp: "slideUp .8s ease forwards",
  },
},


},

plugins: [],
};

export default config;
