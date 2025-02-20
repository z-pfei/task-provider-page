import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: {
          1: "#FEF9EE",
          2: "#FFEBCC",
          3: "#FFFFFE",
          4: "#66430D",
          5: "#FBF6ED",
        },
        dark: {
          1: "#170D00",
        },
        origin: {
          1: "#DE6430",
        },
      },
      boxShadow: {
        'default-button': '0px 2.1px 27.3px 0px rgba(251, 246, 237, 1)',
        'primary-button': '0px 2px 26px 0px rgba(255, 235, 204, 1)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to bottom, #FFFFFF, #DDD7CF, #32200B)',
      }
    },
  },
  plugins: [],
} satisfies Config;
