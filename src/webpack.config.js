const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");

let htmlPageNames = [];
let htmlWebpackPluginPages = [];

const getEntries = () =>
  glob.sync("./pages/**/*.entry.js").reduce((acc, item) => {
    const path = item.split("/");
    path.pop();
    const name = path.pop();
    acc[name] = item;
    htmlPageNames.push(name);

    htmlPageNames.forEach((page) =>
      htmlWebpackPluginPages.push(
        new HtmlWebpackPlugin({
          template: `./pages/${page}/${page}.html`,
          chunks: [`${page}`],
          inject: "body",
          filename: `${page}.html`,
          meta: {
            viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
          },
        })
      )
    );
    return acc;
  }, {});

module.exports = {
  entry: getEntries(),
  output: {
    filename: "scripts/[name].scripts.js",
    path: path.resolve(__dirname, "./build"),
    assetModuleFilename: 'assets/[name][ext]'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { 
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|webm|mp4|woff|woff2|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'svgs/icon-[name][ext]'
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].styles.css",
    }),
    new CleanWebpackPlugin(),
    ...htmlWebpackPluginPages,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackInlineSVGPlugin({
      inlineAll: true
    })
  ],
};
