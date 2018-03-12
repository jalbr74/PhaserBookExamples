var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './src/app'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            },
            {
                test: /phaser\.js/,
                loader: 'expose-loader?Phaser'
            },
            {
                test: /pixi\.js/,
                loader: 'expose-loader?PIXI'
            },
            {
                test: /p2\.js/,
                loader: 'expose-loader?p2'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency',
            inject: true,
            livereload: true
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/assets',
                to: 'assets'
            }
        ])
    ]
};
