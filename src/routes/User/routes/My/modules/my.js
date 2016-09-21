import regexp from 'utils/regexp'
import cookie from 'utils/cookie'
// import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_USERINFO = 'SUCCESS_USERINFO';
export const FAILURE_USERINFO = 'SUCCESS_USERINFO';

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
        commit(FAILURE_USERINFO, json);
      }
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
  }
}


export default {
    state,
    getters,
    actions,
    mutations
}