// We only need to import the modules necessary for initial render
const createRoutes = {
    '/my': require('./My'),         // 用户中心
    '/order': require("./Order"),   // 我的订单
    '/like': require("./Like"),     // 我的喜欢
    '/order/status/:status': require("./Order"),
    '/order/:orderId': require("./Order/detail"), // 订单
    '/order/:orderId/comment': require("./Comment/add"), // 评论订单
    // '/like': require("./Like"),     // 我喜欢的 
    '/comment': require("./Comment"), // 评论
    '/card': require("./Card"),     // 充值卡 
    '/coupon': require("./Coupon"), // 优惠券
    '/score': require("./Score"), // 积分
    '/setting': require("./Setting"), // 设置 (基本信息\安全中心\收货地址)
    '/address/add': require("./Setting/addAddr"), // 添加收货地址
    '/address/edit/:id': require("./Setting/editAddr"), // 编辑收货地址
    '/address/sel': require("./Setting/selAddr"), // 选择收货地址
	'/login': require("./Login"),
    '/register': require("./Register")
}


export default createRoutes