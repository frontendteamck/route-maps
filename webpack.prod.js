const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
	mode: "production",
	entry: {
		app: path.resolve(__dirname, 'src/index')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Production build',
			template: 'src/index.html',

		}),
		new ExtractTextPlugin('[name].[contenthash].css'),
		new UglifyJSPlugin({ sourceMap: true }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [{
					loader: 'style-loader', // creates style nodes from JS strings
				}, {
					loader: 'css-loader', // translates CSS into CommonJS
				}, {
					loader: 'sass-loader', // compiles Sass to CSS
				}],
			},
		],
	},
});
