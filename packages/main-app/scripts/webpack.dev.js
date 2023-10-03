// webpack.dev.js
const {merge} = require("webpack-merge");
const base = require("./webpack.base.js");

module.exports = merge(base, {
  mode: "development", // 开发模式
  devServer: {
    open: true, // 编译完自动打开浏览器
    port: 8080,
    hot: true, // 开启热更新
    liveReload: true,//开启实时刷新
    watchFiles: [],
    historyApiFallback: true,
    compress: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  // webpack.dev.js
  module: {
    rules: [
      // ...
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                parser: "postcss-js",
              },
            },
          },
          "less-loader",
        ],
        // 排除 node_modules 目录
        exclude: /node_modules/,
      },
    ],
  },
});
