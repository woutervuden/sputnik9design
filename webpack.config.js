module.exports = {
  watch: true,
  entry: {
    premium: './js/premium/app.js'
  },
  output: {
    path: './dist/js',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals: {
    react: "React",
    lodash: "_",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter"
  },
  devtool: "#inline-source-map"
}
