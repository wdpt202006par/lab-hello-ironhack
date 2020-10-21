const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
  entry: "./src/index.js", // Mon entrée
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js" // Ma sortie - c'est par ce nom là que mon fichier va être appelé dans index.html
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: 3000,
    publicPath: "http://localhost:3000/dist", // Dans mon dist, il y a mon fichier bunddle.js
    hot: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  mode: "development",
  performance: {
    hints: false
  },
};
