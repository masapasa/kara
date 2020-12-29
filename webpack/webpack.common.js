const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { join, resolve } = require('path');

const context = resolve(__dirname, '..');

/** @type {import('webpack').Configuration} */
const config = {
	context,
	entry: join(context, 'src/index.tsx'),
	output: {
		filename: 'js/[name].[contenthash:8].js',
		chunkFilename: 'js/[name].[contenthash:8].chunk.js',
		publicPath: '/',
		path: join(context, 'build'),
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: ['@babel/env', '@babel/react', '@babel/typescript'],
							plugins: [
								['@babel/plugin-transform-runtime', { regenerator: true }],
							],
						},
					},
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ForkTsCheckerPlugin({ async: false }),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].chunk.css',
		}),
		new HtmlWebpackPlugin({
			template: join(context, 'public/index.html'),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public/',
				},
			],
		}),
	],
};

module.exports = config;
