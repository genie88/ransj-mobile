import regexp from 'utils/regexp'
import cookie from 'utils/cookie'
// import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_USERINFO = 'SUCCESS_USERINFO';
export const FAILURE_USERINFO = 'SUCCESS_USERINFO';

export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';

// ------------------------------------
// States
// ------------------------------------
const state = {
  userInfo: {}
}


// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    userInfo: state => state.userInfo
}



// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  async getUserInfo({commit}){
    try{
      const res = await fetch(`http://ransj.com/user`, {
        method: "POST",
        mode: 'cors',
        credentials: 'include',  // ['cors', include', 'same-origin']
        headers: {
          'Accept': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: ''
      })
      const json = await res.json();
      console.log(json);
      if(json && json.errno == 0) {
        commit(SUCCESS_USERINFO, json);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_USERINFO, json);
      }
    } catch (e) {
        router.go('/user/login');
        commit(FAILURE_USERINFO);
    }
  },

  async logout({commit}) {
    const res = await fetch(`http://ransj.com/user/logout`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'x-requested-with': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: ''
    })
    commit(SUCCESS_LOGOUT);
    router.go('/')
  }
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  [FAILURE_USERINFO](state){
    state.userInfo = null
  },

  [SUCCESS_USERINFO](state,data){
    state.userInfo = data.userInfo
  },

  [SUCCESS_LOGOUT](state,data){
    state.userInfo = null
  }
}


export default {
    state,
    getters,
    actions,
    mutations
}