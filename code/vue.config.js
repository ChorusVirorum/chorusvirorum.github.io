const path = require("path");
const WebpackAssetsManifest = require('webpack-assets-manifest')


module.exports = {
  outputDir: path.resolve(__dirname, "./build"),
  configureWebpack: config => {
    config.plugins = config.plugins.concat(
      new WebpackAssetsManifest({
        output: 'assets.json'
      })
    );
  },
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('file-loader')
        .loader('file-loader')
        .end();
  }
}