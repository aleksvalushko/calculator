// vue.config.js
// eslint-disable-next-line import/no-unused-modules
const appName = 'calculator'
const path = require('path')

module.exports = {
  // proxy API requests to Valet during development
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT,
    disableHostCheck: true,
    proxy: process.env.BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Authorization'
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that it can be accessed in index.html to inject the correct title.
    name: appName,
    entry: './src/main.js',
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, '../../../../src'),
        '~': path.resolve(__dirname, 'tests'),
        '#': path.resolve(__dirname, 'src', 'styles')
      }
    }
  },
  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: './dist',
  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  pwa: {},
  css: {
    loaderOptions: {
      sass: {
        // sassOptions: {
        //   indentedSyntax: true
        // }
        // Примечание: формат конфигурации отличается между Vue CLI v4 и v3
        // Для пользователей Vue CLI v3, обратитесь к документации css-loader v1
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        // modules: {
        //   localIdentName: '[name]-[hash]'
        // },
        // localsConvention: 'camelCaseOnly'
      }
    }
  }
}
