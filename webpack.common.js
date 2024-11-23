const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss').default;
const webpack = require('webpack');
const loader = require('sass-loader');

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
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },                                        
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer,
                                    purgecss({
                                        content: [
                                            './src/**/*.html',
                                            './src/**/*.js',
                                            './src/**/*.jsx',
                                            './src/**/*.ts',
                                            './src/**/*.tsx',
                                            './src/**/*.vue',
                                        ],
                                        safelist: [
                                            /^depth-/,
                                            /^indent-/,
                                            /^link/,
                                            /^toggle/,
                                            /^goto-next/,
                                            /^navPanel/,
                                        ],
                                        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
                                    })
                                ],
                            },
                        },
                    },                  
                    {
                        loader: 'resolve-url-loader',
                        options: { sourceMap: true},
                    },     
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
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
        new HtmlWebpackPlugin({
            template: './src/left-sidebar.html',
            filename: './left-sidebar.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/right-sidebar.html',
            filename: './right-sidebar.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/no-sidebar.html',
            filename: './no-sidebar.html',
        }),       
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],        
};