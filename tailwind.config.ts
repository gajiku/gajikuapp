import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: [],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/daisyui/dist/**/*.js',
    './node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Noto Sans", "Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
    },
    
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["cupcake"],
  },
};


export default config;
