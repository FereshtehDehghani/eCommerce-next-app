const defaultTheme = require("tailwindcss/defaultTheme")
import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    
      fontFamily: {
       bodyFont:['Urbanist',...defaultTheme.fontFamily.sans],
     }
    },
    colors: {
      bodyColor: "#fbfaf7",
      bgLight: "#1010100d",
      darkText: "#242424",
      lightText: "#a5a5a5",
      transparent: 'transparent',
      current: 'currentColor',
      ...colors
      // black: colors.black,
      // white: colors.white,
      // gray: colors.slate,
      // green: colors.emerald,
      // purple: colors.violet,
      // yellow: colors.amber,
      // pink: colors.fuchsia,
      // blend: colors.blend,
      // slate: colors.slate,
      // red:colors.red,
    }
  },
  plugins: [],
}
export default config
