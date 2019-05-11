const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	entry: {
		app: [
			'./src/webpack-public-path',
			'react-hot-loader/babel',
			'webpack-hot-middleware/client',
			'./src/index.js'
		]
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}]
				})
			},
		],
	},

	devtool: 'inline-source-map',
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: 'src/index.html'
		}),
		new ExtractTextPlugin("styles.css"),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
});
