import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_BADGE = 'UPDATE_BADGE';
export const CHANGE_MENU = 'CHANGE_MENU';

export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';

export const SHOW_CONFIRM_DIALOG = 'SHOW_CONFIRM_DIALOG';
export const HIDE_CONFIRM_DIALOG = 'HIDE_CONFIRM_DIALOG';

// ------------------------------------
// States
// ------------------------------------
const state = {
    globalComfirmDialog: null,
    tips: false,
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
  globalTips: state => state.tips,
  globalComfirmDialog: state => state.globalComfirmDialog
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  showToast ({ commit }, data) {
    commit(SHOW_TOAST, data);
    setTimeout(()=>{
      commit(HIDE_TOAST);
    }, 1000)
  },

  showConfirmDialog ({ commit }, data) {
    commit(SHOW_CONFIRM_DIALOG, data);
  },

  hideConfirmDialog ({ commit }, data) {
    commit(HIDE_CONFIRM_DIALOG, data);
  },
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
  },


  // 全局提示弹窗
  [SHOW_TOAST] (state, tips){
    state.tips = tips;
  },

  [HIDE_TOAST] (state, tips){
    state.tips = false
  },

  // 全局确认弹窗
  [SHOW_CONFIRM_DIALOG] (state, data){
    state.globalComfirmDialog = data;
  },

  [HIDE_CONFIRM_DIALOG] (state){
    state.globalComfirmDialog = null;
  },
}

export default {
    state,
    getters,
    actions,
    mutations
}