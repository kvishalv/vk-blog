/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Much tighter paragraph spacing
            'p': {
              marginTop: '0',
              marginBottom: '1rem',
            },
            // Tighter heading spacing
            'h1': {
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            },
            'h2': {
              marginTop: '1.25rem',
              marginBottom: '0.375rem',
            },
            'h3': {
              marginTop: '1rem',
              marginBottom: '0.25rem',
            },
            // Remove extra spacing from lists
            'ul, ol': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            'li': {
              marginTop: '0.125rem',
              marginBottom: '0.125rem',
            },
            // Tighter blockquote spacing
            'blockquote': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            // Remove default margins from first/last elements
            '> :first-child': {
              marginTop: '0',
            },
            '> :last-child': {
              marginBottom: '0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}