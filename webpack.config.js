const path = require('path');

module.exports = function() {
    return {
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
                ]
            }
            ]
        },
        devServer: {
            contentBase: './build',
            publicPath: '/',
            historyApiFallback: {
                index: '/index.html'
            },
            port: 3000,
            hot: true,
            compress: false,
            disableHostCheck: true,
        },
    }
};