const path = require('path');

const ENTRY_FILE    = 'index.ts';
const ENTRY_FOLDER  = 'src';
const OUTPUT_FILE   = 'index.js';
const OUTPUT_FOLDER = 'dist';

module.exports = {
  entry: path.resolve(__dirname, ENTRY_FOLDER, ENTRY_FILE),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: OUTPUT_FILE,
    path: path.resolve(__dirname, OUTPUT_FOLDER),
  },
};