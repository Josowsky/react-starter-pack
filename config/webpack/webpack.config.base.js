const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const reactPath = path.join(__dirname, '../../src');
const buildPath = path.join(__dirname, '../../build');
const publicPath = path.join(__dirname, '../../public');
const indexFile = path.join(reactPath, 'index.tsx');

module.exports = {
  reactPath,
  buildPath,
  indexFile,
  config: {
    entry: ['@babel/polyfill'],
    output: {
      publicPath: '/',
      path: buildPath,
      filename: 'js/bundle.[name].min.js',
      chunkFilename: 'js/bundle.[name].min.js',
    },
    resolve: {
      modules: ['node_modules', reactPath],
      extensions: ['.js', '.ts', '.json', '.jsx', '.tsx'],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: `${publicPath}/index.html`,
        filename: 'index.html',
      }),
    ],
  },
};
