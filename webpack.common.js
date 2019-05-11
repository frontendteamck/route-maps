const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react'],
						plugins: [
							"react-hot-loader/babel",
							"transform-class-properties"
						]
					}
				}
			},

			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: false,
								quality: 65
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75
							}
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	resolve: {
		extensions: [".webpack.js", ".web.js", ".js", ".jsx", ".json"],
		alias: {}
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),

	],

}