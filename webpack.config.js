const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './app/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({/*
            hash: true,*/
            template: './index.html' //relative to root of the application
        }),
        new CopyPlugin({
            patterns: [
                { from: './app/**/*.html', to: './' }
            ],
        })
    ]
};