import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-fira-sans)",
        mono: "var(--font-fira-code)",
      },
      boxShadow: {
        white: "0 3px 24px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)",
      },
      textShadow: {
        black: "0px 3px 6px rgb(0 0 0)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function({ addUtilities, theme }) {
      const newUtilities: { [key: string]: { textShadow: string } } = {};
      Object.entries(theme('textShadow')).forEach(([key, value]) => {
        newUtilities[`.text-shadow-${key}`] = {
          textShadow: String(value),
        };
      });
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
export default config;
