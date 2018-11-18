const webpack = require('./config/webpack.test');

module.exports = function(config) {
	config.set({
		// ... normal karma configuration
    frameworks: ['mocha', 'chai'],
		files: [
			// all files ending in "_test"
			'src/**/*.spec.ts',
		],

		preprocessors: {
			'src/**/*.spec.ts': ['webpack', 'sourcemap']
		},

		webpack,

		webpackMiddleware: {
			// webpack-dev-middleware configuration
			// i.e.
			noInfo: true,
			// and use stats to turn off verbose output
			stats: {
				// options i.e. 
				chunks: false
			}
    },
    browsers: ['Chrome']
	});
};