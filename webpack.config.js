var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .autoProvidejQuery()
    .autoProvideVariables({
        "window.Bloodhound": require.resolve('bloodhound-js'),
        "jQuery.tagsinput": "bootstrap-tagsinput"
    })
    .enableSassLoader()
    .enableVersioning()
    .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/app', ['./assets/scss/app.scss'])
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
;

module.exports = Encore.getWebpackConfig();
