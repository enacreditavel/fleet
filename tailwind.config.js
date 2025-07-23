import plugin from "tailwindcss/plugin";

export default {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        fundo:{
          claro:"#F8FAFC",
          escuro: "#0F172A",
        }

      },
      fontFamily: {

                    body: [
                              'Inter',
                              'ui-sans-serif',
                              'system-ui',
                              '-apple-system',
                              'system-ui',
                              'Segoe UI',
                              'Roboto',
                              'Helvetica Neue',
                              'Arial',
                              'Noto Sans',
                              'sans-serif',
                              'Apple Color Emoji',
                              'Segoe UI Emoji',
                              'Segoe UI Symbol',
                              'Noto Color Emoji'
                            ],
                    sans: [
                              'Inter',
                              'ui-sans-serif',
                              'system-ui',
                              '-apple-system',
                              'system-ui',
                              'Segoe UI',
                              'Roboto',
                              'Helvetica Neue',
                              'Arial',
                              'Noto Sans',
                              'sans-serif',
                              'Apple Color Emoji',
                              'Segoe UI Emoji',
                              'Segoe UI Symbol',
                              'Noto Color Emoji'
                            ],

                      mono: ["ui-monospace", "SFMono-Regular"],
                    },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    plugin(function ({ addVariant }) {
      addVariant("dark", "&:where(.dark, .dark *)"); // 👈 Isso substitui seu @custom-variant
    }),
  ],
};
