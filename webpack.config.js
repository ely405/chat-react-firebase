const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
	// devtool: 'inline-source-map',
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
				// exclude: /node_modules/,
				loader: combineLoaders([
					{
					  loader: 'style-loader',
					}, {
					  loader: 'css-loader',
					  query: {
							// modules: true,
							// localIdentName: '[name]__[local]___[hash:base64:5]',
					  },
					},
				  ]),
			},
			{ test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
				  'file-loader',
				  {
						loader: 'image-webpack-loader',
						options: {
					  mozjpeg: {
								progressive: true,
								quality: 65,
					  },
					  // optipng.enabled: false will disable optipng
					  optipng: {
								enabled: false,
					  },
					  pngquant: {
								quality: '65-90',
								speed: 4,
					  },
					  gifsicle: {
								interlaced: false,
					  },
					  // the webp option will enable WEBP
					  webp: {
								quality: 75,
					  },
						},
				  },
				],
			  },
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
		// new ExtractTextPlugin('style.min.css', { allChunks: true }),
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