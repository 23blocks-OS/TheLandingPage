const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { url } = require('inspector');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',                    
                    {
                        loader: 'resolve-url-loader',
                        options: {       
                            sourceMap: true,
                            filter: (url) => !(url.startsWith("data:image/svg+xml"))
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.(png|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[hash][ext]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',            
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
          // Add more HtmlWebpackPlugin instances if you have multiple HTML files
          new HtmlWebpackPlugin({
            template: './src/elements.html',
            filename: './elements.html',
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'src/assets/vectors'), // Source folder
        //             to: 'vectors', // Destination folder in dist
        //         },
        //     ],
        // }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
}),
    ],        
};