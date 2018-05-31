const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require("path");

module.exports = {

    watch: true,

    target: 'electron-main',

    entry: './gui/src/renderer_process.js',

    output: {
        path: __dirname + '/gui/dist',
        publicPath: 'dist/',
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react'],
					compact: false
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                })
            },
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			},
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ],

	resolve: {
		extensions: ['.js', '.json', '.jsx'],
		modules: [
			/* Path resolvers for application imports using absolute path */
			path.resolve('./gui/src'),
			path.resolve('./node_modules')
		]
	}

};
