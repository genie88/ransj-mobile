import regexp from 'utils/regexp'
import cookie from 'utils/cookie'
import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_MY_ORDER_INFO = 'SUCCESS_MY_ORDER_INFO';
export const FAILURE_MY_ORDER_INFO = 'FAILURE_MY_ORDER_INFO';

// ------------------------------------
// States
// ------------------------------------
const state = {
  myOrderInfo: {}
}


// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    myOrderInfo: state => state.myOrderInfo
}



// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  async getMyOrderInfo({commit}){
    try{
      const res = await fetch(`http://ransj.com/user/order`, {
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
      // console.log(json);
      if(json && json.data) {
        commit(SUCCESS_MY_ORDER_INFO, json);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_MY_ORDER_INFO, json);
      }
    } catch (e) {
        // router.go('/user/login');
        commit(FAILURE_MY_ORDER_INFO);
    }
  }
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  [FAILURE_MY_ORDER_INFO](state){
    state.myOrderInfo = null
  },

  [SUCCESS_MY_ORDER_INFO](state,data){
    state.myOrderInfo = data
  }
}


export default {
    state,
    getters,
    actions,
    mutations
}