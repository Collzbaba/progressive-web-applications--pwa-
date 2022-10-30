const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

//  Add and configure workbox plugins for a service worker and manifest file.
//  Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "TODOs List",
      }),
      // Injecting custom service worker
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "./src-sw.js",
      }),
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
