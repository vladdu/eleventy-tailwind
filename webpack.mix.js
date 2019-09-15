let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.disableSuccessNotifications();
mix.setPublicPath('.');
//mix.setPublicPath('_site');
//mix.setResourceRoot('_site');

const outputDir = '_site';

let purgecss = require('@fullhuman/postcss-purgecss')({

    content: [
        './source/**/*.html',
        './source/**/*.md',
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  });

mix.js('source/_assets/js/main.js', outputDir+'/js')
    .sourceMaps()
    .postCss('source/_assets/css/main.css', outputDir+'/css', [
        require('postcss-import')(),
        tailwindcss('./tailwind.config.js'),
        require('postcss-preset-env')({
            stage: 2,
            features: {
                'nesting-rules': true
            },
            preserve: false
        }),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ])
    .copy('source/_assets/img/', outputDir+'/img')
    .copy('source/favicon.ico', outputDir+'/favicon.ico')
    ;

if (mix.inProduction()) {
    mix.version().extract();
}