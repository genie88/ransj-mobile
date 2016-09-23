// We only need to import the modules necessary for initial render
const createRoutes = {
	routes: {
		'/': require("./Home"),
        '/cart': require("./Cart"),
        '/product/:id': require("./Product"),
        '/activity': require("./Activity"),
        '/search': require("./Search"),
        '/article/:id': require("./Article"),
        '/casher': require("./Casher"),
        '/casher/pay/order/:id': require("./Casher/pay"),
        '/casher/payres': require("./Casher/payres"),
		// '/counter': require("./Counter"),
		'/user': require("./User")
	},

	alias: {
		// '/login/:username': '/login'
	}
}


export default createRoutes