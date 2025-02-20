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
        primary: {
          4: "#3F2501",
          10: "#3C2708",
        },
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
        'modal-gradient': 'linear-gradient(180deg, rgba(254, 242, 196, 1) -53.77%, rgba(245, 233, 185, 1) -33.57%, rgba(237, 224, 174, 1) -13.37%, rgba(228, 215, 164, 1) 6.82%, rgba(220, 206, 153, 1) 27.02%, rgba(211, 197, 142, 1) 47.22%, rgba(203, 188, 131, 1) 67.42%, rgba(194, 179, 120, 1) 87.61%, rgba(186, 171, 110, 1) 107.81%, rgba(177, 162, 99, 1) 128.01%, rgba(168, 153, 88, 1) 148.21%, rgba(160, 144, 77, 1) 168.41%, rgba(151, 135, 66, 1) 188.6%, rgba(143, 126, 55, 1) 208.8%, rgba(134, 117, 45, 1) 229%, rgba(126, 108, 34, 1) 249.2%, rgba(117, 99, 23, 1) 269.39%)',
        'modal-button': 'linear-gradient(275.52deg, #3F2501 -6.96%, #442903 -6.96%, #B68540 97.29%)'
      }
    },
  },
  plugins: [],
} satisfies Config;
