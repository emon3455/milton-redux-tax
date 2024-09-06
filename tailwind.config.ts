import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#00904B",
        error: "#F44336",
        warning: "#FFC107",
        primary: 'red',
      },
      keyframes: {
        bgChange: {
          '0%': { backgroundImage: "url('/path/to/image1.jpg')" },
          '33%': { backgroundImage: "url('/path/to/image2.jpg')" },
          '66%': { backgroundImage: "url('/path/to/image3.jpg')" },
          '100%': { backgroundImage: "url('/path/to/image1.jpg')" }, // Loop back to the first image
        },
      },
      animation: {
        bgChange: 'bgChange 10s infinite ease-in-out', // 10s duration for the background change
      },
    },
  },
  plugins: [],
};

export default config;
