module.exports = {
	entry: {
		app: './index.js'
	},
	output: {
		path: './public',
		filename: '[name].bundle.js',
		libraryTarget: 'this'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader?experimental&optional=selfContained'
			}
		]
	},
	noInfo: true,
	colors: true
}
