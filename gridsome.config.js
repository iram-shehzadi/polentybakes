// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const merge = require('webpack-merge');

module.exports = {
	siteName: 'Gridsome',
	plugins: [],
	configureWebpack(config) {
		return merge(
			{
				resolve: {
					mainFields: ['module', 'main', 'browser'],
					// Webpack will now resolve js files respectively according to the given order in the mainFields array
				},
			},
			config
		);
	},
};
