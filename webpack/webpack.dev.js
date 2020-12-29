const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		hot: true,
		port: 3000,
		open: true,
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, '../build'),
		stats: 'minimal',
		overlay: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
});

module.exports = config;
