// We only need to import the modules necessary for initial render
const createRoutes = {
	routes: {
		'/': require("./Home"),
        '/cart': require("./Cart"),
        '/product': require("./Product"),
        '/activity': require("./Activity"),
		'/counter': require("./Counter"),
		'/user': require("./User")
	},

	alias: {
		// '/login/:username': '/login'
	}
}


export default createRoutes