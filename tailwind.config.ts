import type { Config } from "tailwindcss";

const config: Config = {
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
        accent: {
          yellow: "#FFD54F",
          orange: "#FF7043",
          "yellow-light": "#FFF8E1",
          "orange-light": "#FFE0B2",
        },
        primary: {
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#FFC107",
          600: "#FFB300",
          700: "#FFA000",
          800: "#FF8F00",
          900: "#FF6F00",
        },
        secondary: {
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF7043",
          600: "#FF7043",
          700: "#F57C00",
          800: "#EF6C00",
          900: "#E65100",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            a: {
              color: "#FF7043",
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                color: "#F57C00",
                textDecoration: "underline",
              },
            },
            h1: {
              color: "#111827",
              fontWeight: "700",
            },
            h2: {
              color: "#111827",
              fontWeight: "600",
            },
            h3: {
              color: "#111827",
              fontWeight: "600",
            },
            blockquote: {
              borderLeftColor: "#FFD54F",
              backgroundColor: "#FFF8E1",
              padding: "1rem",
              borderRadius: "0.5rem",
            },
            code: {
              backgroundColor: "#F3F4F6",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              fontSize: "0.875rem",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
