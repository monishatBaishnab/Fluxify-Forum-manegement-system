const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#F48023',
        'c-blue': '#1B4DFF',
        'c-slate': '#D7DFE9',
        'c-gray': '#455468'
      }
    },
  },
  plugins: [],
});