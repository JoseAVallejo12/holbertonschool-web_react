const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.jpg$/i,
        type: 'asset',
      },
    ]
  },
  optimization: {
    minimizer: [
      // Extend default minimizer, i.e. `terser-webpack-plugin` for JS
      "...",
      // We recommend using only for the "production" mode
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              "imagemin-jpegtran",
            ],
          },
        },
        // Disable `loader`
        loader: false,
      }),
    ],
  },
};