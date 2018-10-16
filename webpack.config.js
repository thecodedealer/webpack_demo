const path = require('path');
const webpack = require('webpack');


const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BumpPlugin = require("bump-webpack-plugin");
const MinifyPlugin = require('babel-minify-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

console.log(process.argv);
const build = process.argv.indexOf('build') !== -1;
console.log(build);


const jsDir = path.resolve(__dirname, './dist/build');
const cssDir = path.resolve(__dirname, './dist/css');


const config = {
    entry: ['./app/app.js', './app/styles/app.scss'],
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(jsDir)
    },
    performance: {hints: false},
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'app.bundle.css',
                            outputPath: '/'
                        }
                    },

                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: "css-loader",
                        options: {url: true, minimize: build}
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        publicPath: './fonts'       // override the default path
                    }
                }]
            },
            {
                test: /.(svg(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'svg/',    // where the fonts will go
                        publicPath: './svg'       // override the default path
                    }
                }]
            }
            ]
    },
    plugins: [
        new CleanWebpackPlugin([jsDir]),
        new CleanWebpackPlugin([cssDir]),

        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 5000,
            server: {baseDir: ['dist']},
            reload: false
        })

    ]
};

if (build) {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }));
    config.mode = 'production';
    config.plugins.push(new MinifyPlugin());
    config.plugins.push(new BumpPlugin([
        'package.json'
    ]));
} else {
    config.plugins.push(new BundleAnalyzerPlugin({analyzerPort: 9999}));
    config.mode = 'development';
    config.watchOptions = {
        aggregateTimeout: 300,
        poll: 1000
    };
}

module.exports = config;