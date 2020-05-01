# Website template with eleventy and tailwindcss

This sets up a site using eleventy and tailwindcss, using laravel mix. Currently using eleventy 0.10 and tailwind 1.4.

PostCSS is used to allow imports and nested rules, to allow sass-like features.

## Setup

* Some site data is in _data/app.js
* The sources are in `source`.
* The output is in `_site`; if you change that, make sure to also update `webpack.mix.js`.
