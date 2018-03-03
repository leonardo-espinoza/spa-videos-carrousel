var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, './src');

module.exports = {
	entry: APP_DIR + '/index.js',
	output: {
		filename: 'bundle.js',
		path: BUILD_DIR
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{ 
				test: /\.jsx?|\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/ 
			} /*,
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            } */
		]
	},
    devServer: {
        contentBase: BUILD_DIR
    }
};

