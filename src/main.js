import Vue from 'vue'
import Router from 'vue-router'
import promise from 'es6-promise'
import fetch from 'isomorphic-fetch'
import VueValidator from 'vue-validator'
import App from 'App'
import { routes, alias }  from './routes'
import a from './utils/filter'
import paramUtil from './utils/paramUtil'
import Cookie from './utils/cookie'
import wx from './utils/wx'


promise.polyfill();

if (module.hot) {
	module.hot.accept()
}

Vue.config.debug = __DEV__

// global mixins
Vue.mixin({
	// vuex: {
	// 	getters: {  }
	// }
})
Vue.use(VueValidator)
Vue.use(Router)

const router = new Router({
	history: false,
	saveScrollPosition: true,
	linkActiveClass: 'link-active'
})

window.router = router;

// register routes
router.map(routes)
router.alias(alias)

//全局钩子函数
let authChecked = false;
router.beforeEach(transition => {
	//Util.isWexin() && !authChecked
	let code = paramUtil.get('code') || '';
	if(code && !authChecked) {
		try{
			// 一定需要用POST方式，GET方式会生成新的session? 导致登录失败，奇怪的问题
			fetch(`http://ransj.com/wechat/getopenid?code=${code}`, {
				method: "POST",
				body: '',
				credentials: 'include',
			})
			.then((res)=>{
				return res.json();
			})
			.then((json)=> {
				authChecked = true;
				// trick cookie
				// let session = json.data.session.thinkjs || {};
				// Cookie.set(session.name, session.value, 24, 'ransj.com');
				window.history.pushState({},'然生记','http://m.ransj.com');
				transition.next();
			})
		} catch(e) {
			transition.next();
		}
		
	    
	} else {
		transition.next()
	}
})

router.afterEach(transition => {
	window.scrollTo(0, 0);
	// document.title = '然生记';
	wx.setTitle('然生记');
})

router.start(App, '#app')
