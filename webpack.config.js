const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
              { from: "src/assets", to: "assets" },
            ]
        })
    ],
    module: {
        rules: [
          {
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            type: 'asset/resource',
            generator: {
              filename: 'assets/fonts/[name][ext]'
            } 
          },
          {
            test: /\.(jpe?g|png|gif|svg|ico)$/,
            type: 'asset/resource',
            generator: {
              filename: 'assets/img/[name][ext]'
            } 
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }
        ],
      },
};
// File: webpack.config.js
