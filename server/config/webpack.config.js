const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, '../../src/js/index.js'),
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../../dist'),
        filename: 'js/[name][contenthash].js',
        clean: true,
        assetModuleFilename: 'assets/[name][ext]',
    },
    devtool: 'source-map',
    devServer: {

        proxy: {
            '/api': createProxyMiddleware({
              target: 'http://localhost:3001', 
              changeOrigin: true,
            }),

            },
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,

    
    },
  

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false, // Empêcher la création du fichier LICENSE.txt
            }),
            new CssMinimizerPlugin(), // Ajout de la minimisation CSS
        ],
    },
 
    
    performance: {
        maxAssetSize: 1000000, // 1 MiB
        maxEntrypointSize: 400000,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html',
            minify: false,
        }), 
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
    ],
};
