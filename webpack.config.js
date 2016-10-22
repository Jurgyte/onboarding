var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js?/, loader: 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react', exclude: /node_modules/ },
      { test: /\.css$|\.scss$|\.sass$/, loader: 'style!css?modules!sass?sourceMap'},
      { test: /\.jpg$|\.png$/, loader: 'url-loader?limit=10000' },
    ],
  }
};
