// We only need to import the modules necessary for initial render
const createRoutes = {
    routes: {
        '/': require("./Home"),
        '/cart': require("./Cart"),
        '/list/:id': require("./Product/list"),
        '/group/:id': require("./Product/group"),
        '/product/:id': require("./Product"),
        '/activity': require("./Activity"),
        '/search': require("./Search"),
        '/search/result': require("./Search/result"),
        '/article/:id': require("./Article"),
        '/tags': require("./Tag/list"),
        '/tag/:id': require("./Tag"),
        '/casher': require("./Casher"),
        '/casher/pay/order/:id': require("./Casher/pay"),
        '/casher/payres': require("./Casher/payres"),
        // '/counter': require("./Counter"),
        '/user': require("./User")
    },
    alias: {
        '/choice': '/tags'
        // '/login/:username': '/login'
    }
}
export default createRoutes