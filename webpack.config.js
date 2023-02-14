const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: [
    path.resolve(__dirname, "src/javascript/mainApp.js")
  ],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "buildApp.js",
    clean: true,
  },

  devtool: "inline-source-map",

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/i,
        use: "html-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "image/[name][ext]"
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Calculator",
      filename: "index.html",
      template: 'src/template.html',
    }),
  ]
};