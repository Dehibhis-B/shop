/** @type {import('tailwindcss').Config} */
module.exports = {
  // ✅ Importante: Rutas de Expo
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        fontFamily:{
            poppins: ["Poppins-Regular"],
            "poppins-medium":["Poppins-Medium"],
            "poppins-semibold":["Poppins-SemiBold"],
            "poppins-bold":["Poppins-Bold"],
            railway:["Railway"],
            "railway-bold":["Railway-Bold"],

            inter: ["Inter-Regular"],
            "inter-semibold":["Inter-Semibold"],
            "inter-bold":["Inter-Bold"],

        },
      colors: {
        // Tus colores personalizados (opcional)
        primary: '#007AFF',
        secondary: '#5856D6',
      },
    },
  },
  plugins: [],
}