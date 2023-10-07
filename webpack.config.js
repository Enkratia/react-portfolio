const path = require("path");
const loaderUtils = require("loader-utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [new TerserWebpackPlugin(), new CssMinimizerPlugin()];
  }

  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

const getLocalIdent = (context, localIdentName, localName) => {
  const base = path.parse(context.resourcePath)?.name?.replace(/\.module/, "");

  const hasRootModifier = localName[4] === "_";

  const hash = loaderUtils.getHashDigest(
    path.posix.relative(context.rootContext, context.resourcePath) + localName,
    "md5",
    "base64",
    5,
  );

  if (localName.startsWith("root")) {
    if (hasRootModifier) {
      return `${base}__${localName.replace("root", "")}--${hash}`;
    }
    return `${base}--${hash}`;
  }

  return `${base}_${localName}--${hash}`;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "@src/index.tsx",
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  target: "web",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".png", ".json"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  },
  optimization: optimization(),
  devtool: isDev ? "source-map" : false,
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, "public"),
  //   },
  //   port: 5173,
  //   historyApiFallback: true,
  // },
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            // options: {
            //   modules: {
            //     getLocalIdent,
            //   },
            // },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|ico)$/,
        type: "asset/resource",
        generator: {
          filename: isDev ? "img/[name][ext]" : "img/[name].[contenthash][ext]",
          publicPath: "/dist/",
        },
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: isDev ? "fonts/[name][ext]" : "fonts/[name].[contenthash][ext]",
          publicPath: "/dist/",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.svg"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
};
