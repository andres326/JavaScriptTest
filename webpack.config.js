const path = require('path');

module.exports = {
  entry: './model/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/'),
  },
  mode: 'development'
};
