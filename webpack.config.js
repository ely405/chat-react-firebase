const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'react-hot-loader/patch',
		'./src/js/index.js',
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.css$/,
				loader: combineLoaders([
					{
					  loader: 'style-loader',
					}, {
					  loader: 'css-loader',
					},
				  ]),
			},
			{ test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
			{ test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=img/[name].[ext]' },
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery',
		}),
	],
	devServer: {
		contentBase: './dist',
		hot: true,
		port: process.env.PORT || 3000,
		inline: true,
		publicPath: '/',
		historyApiFallback: true,
	},
};