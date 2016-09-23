import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_BADGE = 'UPDATE_BADGE';
export const CHANGE_MENU = 'CHANGE_MENU';

// ------------------------------------
// States
// ------------------------------------
const state = {
    menus: [{
      current: true,
      btn: '首页',
      link: '/#!/',
      cls: 'footer-index'
    }, {
      current: false,
      btn: '发现',
      link: '/#!/search',
      cls: 'footer-activity'
    }, {
      current: false,
      btn: '购物篮',
      link: '/#!/cart',
      cls: 'footer-shoppingcart',
      badge: 1
    }, {
      current: false,
      btn: '我的',
      link: '/#!/user/my',
      cls: 'footer-personal'
    }]
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
  footerMenus: state => state.menus,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {

}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  [UPDATE_BADGE] (state, badge){
    state.menus[3].badge = badge
  },


  [CHANGE_MENU] (state, index){
    state.menus.forEach((item) => {
      item.current = false;
    })
    state.menus[index].current = true;
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}