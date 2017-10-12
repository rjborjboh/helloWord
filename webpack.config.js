const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		index: './scripts/index.js',
		vendor: ['jquery', 'moment']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]-[hash]-bundle.js'
	},
	devtool: 'eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		hot: true,
		port: 8083
	},
	module: {
		rules: [
			{test: /\.(js|jsx)$/, loader: 'babel-loader'},
			{test: /\.(css|less|sass)$/, 
			  use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [
					{loader: 'css-loader', options: {module: true}},
					{loader: 'less-loader', options: {module: true}},
					{loader: 'sass-loader', options: {module: true}}
				]
			})},
			{test: /\.(jpe?g|gif|png)$/, loader: 'file-loader'}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new ExtractTextPlugin('[name].[hash].css'),
		new webpack.BannerPlugin('班群所有,侵权必究!(就喊喊)'),
		new webpack.optimize.UglifyJsPlugin({sourceMap: false}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			filename: './index.html',
			showErrors: true,
			template: __dirname + '/index.templ.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};