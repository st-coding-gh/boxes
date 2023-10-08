import path from 'node:path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`)
const babelOptions = preset => {
  const opts = {
    presets: ['@babel/preset-env'],
  }
  if (preset) opts.presets.push(preset)
  return opts
}

export default {
  context: path.resolve('src'),

  entry: {
    index: './index.js',
  },

  output: {
    filename: filename('js'),
    path: path.resolve('static'),
  },

  devServer: {
    port: 4444,
    hot: isDev,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react'),
        },
      },
    ],
  },
}
