const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';

// Multiple HTML pages
let htmlPageNames = ['404', 'about', 'home'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/pages/${name}.html`, // relative path to the HTML files
    filename: `./pages/${name}.html`, // output HTML files
  })
});

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/ts/index.ts')
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
    publicPath: '/'
  },
  devtool: isProduction ? false : 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'src'),
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type:'asset/resource', },
      { test: /\.html$/i, loader: 'html-loader'},
      { test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jenny Lam',
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ].concat(multipleHtmlPlugins),
};
