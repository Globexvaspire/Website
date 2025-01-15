/** @type {import('tailwindcss').Config} */
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
        color1: "#F2EDED",
        color2: "#E4DFDC",
        color3: "#E6DACE",
        color4: "#D1C7BF",
        white: "#FFFFFF",
        amber: "#FFBF00",
        darkMatcha: "#44624a",
        lightMatcha: "#8ba888",
        neutral: "#C9C2B2",
      },
      backgroundImage: {
        'banner-bg': "url('../../public/images/banner-bg.png')",
        'about-bg' : "url('../../public/images/about-bg.jpg')",
        'about-bg3' : "url('../../public/images/about-bg3.jpg')",
      }
      ,
      fontFamily: {
        title: ['Playfair Display', 'serif'],
        detail: ['Montserrat', 'serif'],
        navigation: ['Roboto', 'serif']
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
