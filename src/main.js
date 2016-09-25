import Vue from 'vue'
import Router from 'vue-router'
import promise from 'es6-promise'
import fetch from 'isomorphic-fetch'
import App from 'App'
import { routes, alias }  from './routes'
import a from './utils/filter'


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
router.beforeEach(transition => {
	if (transition.to.auth) {
		// 对用户身份进行验证...
		// transition.abort()
		transition.next()
	} else {
		transition.next()
	}
})

router.afterEach(transition => {
	window.scrollTo(0, 0)
})

router.start(App, '#app')
