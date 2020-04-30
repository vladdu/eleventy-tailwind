let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.disableSuccessNotifications();
mix.setPublicPath('.');
//mix.setPublicPath('_site');
//mix.setResourceRoot('_site');

const outputDir = '_site';

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
    ])
    .copy('source/_assets/img/', outputDir+'/img')
    .copy('source/favicon.ico', outputDir+'/favicon.ico')
    ;

if (mix.inProduction()) {
    mix.version().extract();
}
