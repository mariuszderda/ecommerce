const mix = require('laravel-mix');
const webpackNodeExternals = require('webpack-node-externals');

mix.js('resources/js/admin/ssr.js', 'public/js/admin')
    .vue({
        version: 3,
        useVueStyleLoader: true,
        options: { optimizeSSR: true },
    })
    .alias({
        '@': 'resources/js/admin',
        ziggy: 'vendor/tightenco/ziggy/dist/index',
    })
    .webpackConfig({
        target: 'node',
        externals: [webpackNodeExternals()],
    });
