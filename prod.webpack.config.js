const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

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
        // publicPath: 'local/components/',
        // contentBase: path.join(__dirname, 'local'),
        // contentBasePublicPath: '',
        // watchContentBase: true,
        // liveReload: true,
        //inline: true,
        //hot: true,
        compress: true,
        port: 9000,
        // open: true,
        openPage: 'components/review/template.html',
    },
    entry: {
        review: ['./src/components/review/default/script.js'],
        reviews: ['./src/components/reviews/default/script.js'],
        review_add: ['./src/components/review_add/default/script.js'],
        tools: ['./src/components/tools/default/script.js'],
        // b: ["./app/entry-b1", "./app/entry-b2"]
        // contact: { import: './src/contact.js', filename: 'pages/[name][ext]' }
        // contact: { import: ['./app.js', './app2.js'], filename: 'pages/[name][ext]' }
    },
    output: {
        path: path.resolve(__dirname, 'local'),
        filename: './components/[name]/script.js',
        publicPath: ''
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
                            url = url.replace(/src/gi, '');
                            url = url.replace(/default/gi, '');
                            return url;
                        },
                        // publicPath: 'assets',
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
                            url = url.replace(/fonts/gi, 'template/default/fonts');
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
            template: './src/components/review/default/template.html',
            filename: './components/review/template.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/components/review_add/default/template.html',
            filename: './components/review_add/template.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/components/tools/default/template.html',
            filename: './components/tools/template.html'
        }),
        new MiniCssExtractPlugin({
            chunkFilename: './src/components/[name]/default/style.css',
            filename: './components/[name]/style.css'
        }),
        new LodashModuleReplacementPlugin,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            jsdom: 'jsdom'
        }),
        new ImageMinimizerPlugin({
            severityError: 'warning', // Ignore errors on corrupted images
            deleteOriginalAssets: true,
            minimizerOptions: {
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                    [
                        'svgo',
                        {
                            plugins: [{
                                removeViewBox: false,
                            }, ],
                        },
                    ],
                ],
            },
            filename: '[path][name][ext]',
        }),
    ],
};