const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './app/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
   /*  entry: {
    external: './app/external.js',
    main: './app/main.js'
    }, 
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }, */
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
        /* use: ['style-loader', 'css-loader'] */
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
    test: /\.(svg|png|jpg|jpeg|gif)$/,
    loader: 'file-loader',
    options: {
        name: '[name].[ext]',
        outputPath: './images'
    },
}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({/*
            hash: true,*/
            template: './index.html' //relative to root of the application
        }),/*  */
        new CopyPlugin({
            patterns: [
                { from: './app/**/*.html', to: './' },
                { from: './assets/js/jquery/dist/jquery.min.js', to: './assets/js/jquery/dist/' },
                { from: './assets/js/jquery-ui-dist/jquery-ui.min.js', to: './assets/js/jquery-ui-dist/' }
            ],
        }),
        new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
    ]
};