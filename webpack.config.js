const Encore = require('@symfony/webpack-encore');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ArcoWebpackPlugin = require('@arco-plugins/webpack-react');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');


if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('./dist')
  .setPublicPath('/')
  .enableVersioning()
  .addEntry('app', './src/index.tsx')
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableLessLoader()
  .enablePostCssLoader()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .configureBabel(null)
  .enableSassLoader()
  .enableTypeScriptLoader()
  .enableReactPreset()
  .configureLoaderRule('ts', loaderRule => {
    loaderRule.test = /\.(ts|tsx)$/
    loaderRule.exclude = /node_modules/;
    loaderRule.use = [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [Encore.isDev() && require.resolve('react-refresh/babel')].filter(Boolean),
        },
      },
    ];
  })
  .addPlugin(new HtmlWebpackPlugin({
    title: "Arco design",
    template: "./index.html"
  }))
  .addPlugin(new ArcoWebpackPlugin())
  .addCacheGroup('common', {
    node_modules: ['react', 'react-dom', 'react-router-dom', 'react-hook-form', '@tanstack']
  })
  .addCacheGroup('arco-design', {
    node_modules: ['@arco-design']
  })
  .addPlugin(new BundleStatsWebpackPlugin())
;

if (Encore.isDev()) {
  Encore.addPlugin(new ReactRefreshWebpackPlugin())
}

const config = Encore.getWebpackConfig();

module.exports = config;
