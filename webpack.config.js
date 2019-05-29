const path = require('path');

module.exports = {
    context: __dirname, 
    entry: './frontend/storybook.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js',
    },
    module: {
        // loaders: [
        //     { test: [/\.(png|jpg)$/], 
        //       loader: 'url-loader?limit=8192' }
        // ],
        rules: [
            {
                test: [[/\.jsx?$/], [/\.(png|jpg)$/]],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};
