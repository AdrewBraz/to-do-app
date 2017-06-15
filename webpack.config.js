const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loader: ['css-loader', 'sass-loader'],
    publicPath: '/dist'
});
const cssConfig = isProd ? cssProd : cssDev;

const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;


module.exports = {
    entry: {
        app: './src/app.js',
        bootstrap: bootstrapConfig
    },

    output: {
        path: path.resolve(__dirname + './dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [{
                test: /\.handlebars$/,
                use: "handlebars-loader"
            },

            {
                test: /\.sass$/,
                use: cssConfig
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                use: "babel-loader"
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 3000,
        stats: "minimal",
        open: true
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '/css/[name].css',
            allChunks: true,
            disable: !isProd
        }),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            minify: {
                collapseWhitespace: true,
            },
            template: './src/index.hbs'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}