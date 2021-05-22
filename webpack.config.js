var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: 'development',
  // entry: './src/main.js',
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   publicPath: '/dist/',
  //   filename: 'build.js'
  // },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              // {
              //   loader: '/Users/zhengxin/DOC/Vue/tests/vue-unit-test-template/node_modules/vue-style-loader/index.js',
              //   options: {
              //     sourceMap: false,
              //     shadowMode: false
              //   }
              // },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/zhengxin/DOC/Vue/tests/vue-unit-test-template/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              // {
              //   loader: '/Users/zhengxin/DOC/Vue/tests/vue-unit-test-template/node_modules/postcss-loader/src/index.js',
              //   options: {
              //     sourceMap: false,
              //     plugins: [
              //       function () { /* omitted long function */ }
              //     ]
              //   }
              // }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  // devtool: '#eval-source-map'
  devtool: "cheap-module-eval-source-map",
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }

// // test specific setups
// if (process.env.NODE_ENV === 'test') {
//   module.exports.externals = [require('webpack-node-externals')()]
//   module.exports.devtool = 'eval'
// }
