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
        heroBg: "url('/images/home-hero-bg.jpg')"
      },
      
      fontFamily: {
        maison: ["var(--font-maison)"],
        trumpGothic: ["var(--font-trump-gothic)"]
      },
      colors: {
        primary: "#0052FF"
      }
    },
  },
  plugins: [],
};
export default config;
