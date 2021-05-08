// see /src/index.js
const path = require('path')

module.exports = {
	mode: 'development',				// put production, it will generate a min file
	entry: './src/index.js',		// source code
	output: {
		path: path.resolve(__dirname, 'public', 'assets', 'js'),
		filename: 'bundle.js'				// output in the directory created with path module
	},

	module: {
		rules: [{
			exclude: /node_modules/,	// not compile node_modules
			test: /\.js$/,						// archives that end in .js
			use: {										// use babel
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env']
				}
			}
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},

	devtool: 'source-map'						// if not, in a error, per example, it will appear in the bundle.js
}