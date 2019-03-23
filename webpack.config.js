const webpack = require('webpack')
const path = require('path')
const NODE_ENV = process.env.NODE_ENV
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractCssPlugin = require('extract-text-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const config = {
    // 模式配置
    mode: NODE_ENV,
    devtool: 'inline-source-map',
    // 入口文件
    // 字符串 --- 单一入口文件
    // entry: './src/index.js',   
    // 数组 --- 多入口文件，打包会合并
    // entry: ['./src/index.js', './src/es6.js'],
    // 对象 --- 多入口文件，打包文件根据配置，拆分代码块
    entry: {
        vendor: ['lodash'],
        index: './src/index.js',
        list: './src/list.js'
    },
    // 出口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 出口文件的路径path必须是绝对路径
        filename: 'static/js/[name].[hash:5].js'
    },
    // 对应处理模块
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                // use: [
                //     { loader: 'style-loader' },
                //     { loader: 'css-loader' }
                // ]
                use: ExtractCssPlugin.extract({
                    use: ['css-loader', 'postcss-loader'], // 将css以link的方式引入就不需要style-loader了
                    publicPath: '../../'
                })
                // use: [MiniCssPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractCssPlugin.extract({
                    use: ['css-loader?modules=true', 'sass-loader', 'postcss-loader'],
                    publicPath: '../../'
                })
            },
            {
                test: /\.less$/,
                use: ExtractCssPlugin.extract({
                    use: ['css-loader?modules=true', 'less-loader', 'postcss-loader'],
                    publicPath: '../../'
                })
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024,
                        outputPath: 'static/images/'
                    }
                }]
            },
            {
                test: /\.html?$/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.(eot|ttf|woff2?|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'static/iconfont'
                        }
                    }
                ]
            }
        ]
    },
    // 对应的插件
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new ExtractCssPlugin({
            // filename: 'static/css/[name].[contenthash:5].css'
            filename: 'static/css/[name].[chunkhash:5].css'
        }),
        // new MiniCssPlugin({
        //     filename: 'static/css/[name].[contenthash:5].css'
        // }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['vendor', 'index']
        }),
        new HtmlWebpackPlugin({
            template: './src/list.html',
            filename: 'list.html',
            chunks: ['vendor', 'list']
        })
    ],
    // 开发服务器配置
    devServer: {
        contentBase: './temp',
        host: 'localhost',
        port: 8000,
        open: true,
        hot: true,
        inline: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
}

module.exports = config