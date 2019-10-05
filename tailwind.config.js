module.exports = {
  theme: {
    fontFamily: {
      'sans': [
        'Open Sans',
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      'serif': [
        'Georgia',
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'serif',
      ],
      'mono': [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
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
    require('@tailwindcss/custom-forms')
  ]
}
