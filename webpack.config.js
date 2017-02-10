const {
	addPlugins,
	createConfig,
	defineConstants,
	entryPoint,
	env,
	performance,
	setOutput,
	webpack,
}               = require('@webpack-blocks/webpack2')
const babel     = require('@webpack-blocks/babel6')
const devServer = require('@webpack-blocks/dev-server2')

// const basePlugins = []

const productionPlugins = [
	new webpack.LoaderOptionsPlugin({
		minimize: true,
		debug: false
	}),
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		output: {
			comments: false
		},
		screwIe8: true,
		sourceMap: false
	}),
]

console.log('process.env.NODE_ENV:', process.env.NODE_ENV)

module.exports = createConfig([
	setOutput('./server/src/main/webapp/js/bundle.js'),
	babel(),
	// addPlugins(basePlugins),
	defineConstants({
		'process.env.NODE_ENV': process.env.NODE_ENV || 'development'
	}),
	env('development', [
		entryPoint('./src/index.dev.js'),
		() => ({ devServer: {
			contentBase: ['server/src/main/webapp/']
		}}),
		devServer(),
		/*devServer.proxy({
			'/api/*': { target: 'http://localhost:8080' }
		}),*/
		performance({
			// Increase performance budget thresholds for development mode
			maxAssetSize: 1500000,
			maxEntrypointSize: 1500000
		})
	]),
	env('production', [
		entryPoint('./src/index.js'),
		addPlugins(productionPlugins)
	])
])