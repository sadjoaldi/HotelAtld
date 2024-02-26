/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#13323A",
      },
      backgroundImage: {
        "custom-image":
          "url('https://img.freepik.com/photos-gratuite/interieur-chambre-chambre-hotel_23-2150683419.jpg') ",

        "second-custom-image":
          "url('https://img.freepik.com/photos-gratuite/jeune-femme-ayant-massage-du-visage-relaxant-dans-salon-spa_176420-7550.jpg')",

        "thirt-custom-image":
          "url('https://images.unsplash.com/photo-1612152842505-f075576e6fee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },

      gridTemplateColumns: {
        "custom-grid": "45% 55%",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
