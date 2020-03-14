const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = (env = {}) =>
  merge(baseConfig.config, {
    mode: 'development',
    entry: ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server', baseConfig.indexFile],
    devServer: {
      host: 'localhost',
      historyApiFallback: true,
      port: 3000,
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      watchOptions: {
        ignored: ['node_modules'],
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: [baseConfig.reactPath],
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
            {
              loader: 'eslint-loader',
            },
          ],
        },
      ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  });
