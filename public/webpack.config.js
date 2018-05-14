const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('css/main.css')

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        'js/bundle.js': ['babel-polyfill', './js/index.js'],
    },
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: '[name]'
    },
    devServer: {
        contentBase: './dist',
        proxy: {
            '*': {
                target: 'http://localhost:5000'
            }
        }
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, 
            {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        CSSExtract
    ],
    devtool: 'cheap-module-eval-source-map'
};
