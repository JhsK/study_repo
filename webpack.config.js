const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval', // hidden-source-map 프로덕션 모드 시 사용
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },

    entry: {
        app: './client'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
        }]
    },
    output: {
        filename: '[name].js', //app.js
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    }
}