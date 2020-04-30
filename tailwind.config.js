const defaultTheme = require("tailwindcss/defaultTheme");
const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  purge: [
    './source/**/*.html',
    './source/**/*.md',
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      //'xl': '1280px',
    },
    extend: {
      listStyleType: {
        circle: 'circle',
      },

    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ]
}
