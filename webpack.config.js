const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devtool: isProduction ? false : 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'src'),
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type:'asset/resource' },
      { test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jenny Lam',
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
};
