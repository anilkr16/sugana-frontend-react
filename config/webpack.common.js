const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
    resolve: {
      alias: {
        components: path.resolve(__dirname, '../src/components/UITable'),
        Assets: path.resolve(__dirname, '../assets/images')
      },
      extensions: ['.js', '.json', '.wasm'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", //3. Inject styles into DOM
            "css-loader", //2. Turns css into commonjs
            "sass-loader" //1. Turns sass into css
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        }
      ]
    }
  };