const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', { flags: 'w' });
var log_stdout = process.stdout;
console.log = function(d) { //
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};


module.exports = {
    mode: 'development',
    target: "web",
    devServer: {
        // host: 'localhost',
        // publicPath: 'local',
        // contentBase: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'local')],
        // contentBasePublicPath: path.join(__dirname, 'local'),
        // watchContentBase: true,
        liveReload: true,
        inline: true,
        hot: true,
        compress: true,
        port: 9000,
        // open: true,
        openPage: 'ru/index.html',
    },
    entry: {
        ru: ['./src/ru/script.js'],
        en: ['./src/en/script.js'],
        "ru/experience": ['./src/ru/experience/script.js'],
        "en/experience": ['./src/en/experience/script.js'],
        "ru/works": ['./src/ru/works/script.js'],
        "en/works": ['./src/en/works/script.js'],
    },
    output: {
        path: path.resolve(__dirname, 'local'),
        filename: './[name]/script.js',
        // publicPath: ''
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            //publicPath    {String|Function}   webpackOptions.output.publicPath    //Задает настраиваемый общедоступный путь для внешних ресурсов, таких как изображения, файлы и т. Д.
                            //esModule  {Boolean}   true    Использовать синтаксис модулей ES
                            //modules   {Object}    undefined   Конфигурация CSS-модулей
                            // publicPath: function(resourcePath, context) {
                            //  resourcePath.replace(/src/gi, 'local');
                            // },
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            //sourceMap: true
                        }
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'file-loader', // Or `url-loader` or your other loader
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: (url, resourcePath, context) => {
                            return url.replace(/src/gi, '').replace(/\/default/gi, '');
                        },
                        publicPath: (url, resourcePath, context) => {
                            url = url.replace(/src/gi, '/local').replace(/\/default/gi, '');
                            return url;
                        },
                        // context: 'project',
                    }
                }],
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: (url, resourcePath, context) => {
                            url = url.replace(/src/gi, '');
                            // url = url.replace(/fonts/gi, 'template/default/fonts');
                            return url;
                        },
                        // publicPath: 'assets',
                        // context: 'project',
                    }
                }, ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/en/index.html',
            filename: './en/index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/en/experience/index.html',
            filename: './en/experience/index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/en/works/index.html',
            filename: './en/works/index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/ru/index.html',
            filename: './ru/index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/ru/experience/index.html',
            filename: './ru/experience/index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/ru/works/index.html',
            filename: './ru/works/index.html'
        }),
        new MiniCssExtractPlugin({
            chunkFilename: './src/[name]/style.css',
            filename: './[name]/style.css'
        }),
        new LodashModuleReplacementPlugin,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            jsdom: 'jsdom'
            // $: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
            // jQuery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
        }),
    ],
};