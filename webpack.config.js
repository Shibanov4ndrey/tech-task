const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';


module.exports = {
  entry: { techTask: path.resolve(__dirname, "./src/index.tsx") },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: production ? '[name].[contenthash].js' : '[name].js',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(module.scss|scss)$/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              sourceMap: !production,
              modules: {
                localIdentName: !production ? '[name]__[local]' : '[hash:base64:8]',
                namedExport: true,
              },
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !production
            }
          }
        ]
      },
      {
        test: /\.(jpg|lpeg|png)$/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'convertColors',
                    params: {
                      currentColor: true,
                    }
                  }
                ]
              }
            }
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", '.ts', '.tsx', ".scss"],
    alias: {
      '@': path.join(__dirname, 'src'),
      '@shared': path.join(__dirname, 'src/shared'),
      '@entities': path.join(__dirname, 'src/entities'),
      '@features': path.join(__dirname, 'src/features'),
      '@widgets': path.join(__dirname, 'src/widgets'),
      '@pages': path.join(__dirname, 'src/pages'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack & React",
      template: "./src/index.html",
      favicon: "./public/favicon.ico"
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 3001,
    hot: true,
  },
  mode: production ? 'production' : 'development'
};