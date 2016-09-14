// We only need to import the modules necessary for initial render
const createRoutes = {
    '/my': require('./My'),
	'/login': require("./Login"),
    '/register': require("./Register")
}


export default createRoutes