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
        'banner-bg1': "url('../../public/images/banner-bg1.jpg')",
        'banner-bg2': "url('../../public/images/banner-bg2.jpg')",
        'banner-bg3': "url('../../public/images/banner-bg3.jpg')",
        'banner-bg4': "url('../../public/images/banner-bg4.jpg')",
        'banner-bg5': "url('../../public/images/banner-bg5.jpg')",
        'about-bg' : "url('../../public/images/about-bg.jpg')",
        'about-bg3' : "url('../../public/images/about-bg3.jpg')",
      },
      fontFamily: {
        title: ['var(--font-playfairDisplay)'],
        detail: ['var(--font-montserrat)'],
        navigation: ['var(--font-roboto)'],
      },
      keyframes: {
        appear: {
          "0%": {
            transform: "translateY(-96rem)",
          },
          "100%": {
            transform: "translateY(0)",
          }
        },
        rotate: {
          "0%": {transform: "rotateY(0)"},
          "100%": {transform: "rotateY(360deg)"},
        },
        showUp: {
          "0%": {opacity: "0"},
          "100%": {opacity: "1"},
        },
        slideVertical: {
          "0%": {transform: "translateY(-8rem)"},
          "10%": {transform: "translateY(0)"},
          "80%": {transform: "translateY(0)"},
          "100%": {transform: "translateY(8rem)"},
        }
      },
      animation: {
        'appear': "appear 2.5s ease-in-out",
        'rotate': "rotate 4s ease-in-out",
        'showUp': "showUp 2s ease-in-out",
        'slideVertical': "slideVertical 6s infinite"
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
