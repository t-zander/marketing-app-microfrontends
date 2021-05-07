const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3000/'
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:3001/remoteEntry.js',
        auth: 'auth@http://localhost:3002/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(common, devConfig);
