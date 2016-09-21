// ======================================================
// NODE_ENV === 'development'
// ======================================================

var config = require('vuex-cli-webpack/lib/config')

config.server_port = 80;

module.exports = {
	compiler_public_path: `http://${config.server_host}:${config.server_port}/`,
	proxy: {
		enabled: false,
		options: {
			host: 'http://ransj.com/',
			match: /^\/api\/.*/
		}
	}
}