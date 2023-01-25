const Encore = require('@symfony/webpack-encore');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ArcoWebpackPlugin = require('@arco-plugins/webpack-react');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');


if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'development');
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
  .enableForkedTypeScriptTypesChecking()
  .enablePostCssLoader()
  .enableEslintPlugin()
  .enableForkedTypeScriptTypesChecking()
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
          plugins: [Encore.isDevServer() && require.resolve('react-refresh/babel')].filter(Boolean),
        },
      },
    ];
  })
  .addPlugin(new HtmlWebpackPlugin({
    title: "Arco design",
    template: "./index.html"
  }))
  .addPlugin( new CopyPlugin({
    patterns: [
      { from: "./src/locales", to: "locales" },
    ],
  }))
  .addPlugin(new webpack.EnvironmentPlugin(['NODE_ENV']))
  .when((Encore) => Encore.isProduction(), (Encore) => Encore.addPlugin(new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
    // maximumFileSizeToCacheInBytes: 8097152,
  })))
  .addPlugin(new ArcoWebpackPlugin())
  .addPlugin(new BundleStatsWebpackPlugin())
  .when((Encore) => Encore.isDevServer(), (Encore) => Encore.addPlugin(new ReactRefreshWebpackPlugin()))
  .addCacheGroup('common', {
    node_modules: ['react', 'react-dom', 'react-router-dom', 'react-hook-form', '@tanstack']
  })
  .addCacheGroup('arco-design', {
    node_modules: ['@arco-design']
  })
;

const config = Encore.getWebpackConfig();

module.exports = config;
