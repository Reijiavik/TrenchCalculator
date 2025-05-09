const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development', // Añadir esta línea para especificar el modo de desarrollo
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: false, // Desactivar la minimización en modo de desarrollo
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"), // Cambiar a 'development' para el entorno de desarrollo
      },
    }),
  ],
};