// @ts-ignore
const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": __dirname + "/resources/js"
        }
    }
});
// @ts-ignore
mix.react("resources/js/app.js", "public/js");
// @ts-ignore
mix.combine(
    [
        "resources/css/color.css",
        "resources/css/typography.css",
        "resources/css/space.css",
        "resources/css/button.css",
        "resources/css/notification.css",
        "resources/css/animate.css"
    ],
    "resources/css/app.css"
);
// @ts-ignore
mix.copy("resources/css/app.css", "public/css/app.css");
mix.copy("resources/js/src/serviceWorker.js", "public/serviceWorker.js");
// @ts-ignore
mix.copyDirectory("resources/images", "public/images");
