const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		// publicPath: path.resolve(__dirname, './dist'),
		path: path.resolve(__dirname, './dist'),
	},
	mode: 'development',
	// build: {
	// 	assetsRoot: path.resolve(__dirname, './dist'),
	// },
	devServer: {
		open: true,
		port: 9000,
    hot: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugin: [require('autoprefixer')],
							},
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[ext]',
						limit: 1024 * 2,
						outputPath: 'static/images/',
						publicPath: '../static/images',
					},
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './src/index.html',
		}),
		new CleanWebpackPlugin(),
	],
}
