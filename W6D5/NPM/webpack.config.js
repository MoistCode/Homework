module.exports = {
  entry: './entry.jsx',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.js$?/,/\.jsx$?/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
