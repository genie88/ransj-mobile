// We only need to import the modules necessary for initial render
const createRoutes = {
	routes: {
		'/': require("./Home"),
        '/cart': require("./Cart"),
        '/product/:id': require("./Product"),
        '/activity': require("./Activity"),
        '/search': require("./Search"),
        '/article': require("./Article"),
		// '/counter': require("./Counter"),
		'/user': require("./User")
	},

	alias: {
		// '/login/:username': '/login'
	}
}


export default createRoutes