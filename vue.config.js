
const path = require('path')

module.exports = {
	devServer: {
		port: 1174
	},
	outputDir: 'dist',
	filenameHashing: false,
	productionSourceMap: false,
	chainWebpack: GET_chainWebpack,
	publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
}

function resolve (dir) {
	return path.join(__dirname, dir)
}

function GET_chainWebpack (config) {
	config.plugin('html').tap(args => {		
		args[0].minify = {
			removeComments: false,
			collapseWhitespace: false,
			removeAttributeQuotes: false
		}
		args[0].hash = true
		args[0].inject = 'body'
		args[0].PACK_TIME = +new Date()
		return args
	})

	config.plugins.delete('preload')	
	config.plugins.delete('prefetch')

	config.resolve.alias.set('@js', resolve('src/js'))
											.set('@src', resolve('src'))
											.set('@css', resolve('src/css'))
											.set('@images', resolve('src/images'))
											.set('@common', resolve('common'))
											.set('@components', resolve('src/components'))
											.set('@base', resolve('base'))
											.set('jcy-common', resolve('common'))
}
