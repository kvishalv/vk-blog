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
          orange: "#FF6B35", // Vibrant engineering orange
          "orange-light": "#FFF4F0", // Very light orange background
          "orange-dark": "#E55A2B", // Darker orange for hover states
          blue: "#2563EB", // Professional blue accent
          "blue-light": "#EFF6FF", // Light blue background
        },
        primary: {
          50: "#FFF4F0",
          100: "#FFE4D6",
          200: "#FFC9AD",
          300: "#FFA882",
          400: "#FF8757",
          500: "#FF6B35", // Main vibrant orange
          600: "#E55A2B",
          700: "#CC4A21",
          800: "#B33A17",
          900: "#9A2A0D",
        },
        secondary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2563EB", // Professional blue
          600: "#1D4ED8",
          700: "#1E40AF",
          800: "#1E3A8A",
          900: "#1E3A8A",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
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
            color: "#404040",
            a: {
              color: "#FF6B35",
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                color: "#E55A2B",
                textDecoration: "underline",
              },
            },
            h1: {
              color: "#171717",
              fontWeight: "700",
            },
            h2: {
              color: "#171717",
              fontWeight: "600",
            },
            h3: {
              color: "#171717",
              fontWeight: "600",
            },
            blockquote: {
              borderLeftColor: "#FF6B35",
              backgroundColor: "#FFF4F0",
              padding: "1rem",
              borderRadius: "0.5rem",
            },
            code: {
              backgroundColor: "#F5F5F5",
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
