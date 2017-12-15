var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: [
        './js/main.js'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js",
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015',
                exclude: /node_modules|athena\.js/
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules'
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'AthenaJS-Webpack-Starter',
            template: 'index-wp.ejs',
            inject: 'body'
        }),
        new WebpackNotifierPlugin({
            alwaysNotify: true,
            skipFirstNotification: true,
            title: 'AthenaJS-Webpack-Starter'
        })
    ]
};