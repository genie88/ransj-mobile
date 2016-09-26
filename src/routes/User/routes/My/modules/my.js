import regexp from 'utils/regexp'
import cookie from 'utils/cookie'
// import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_USERINFO = 'SUCCESS_USERINFO';
export const FAILURE_USERINFO = 'SUCCESS_USERINFO';

export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';


export const SUCCESS_GET_ADDRESS = 'SUCCESS_GET_ADDRESS'; //收货地址
export const FAILURE_GET_ADDRESS = 'FAILURE_GET_ADDRESS';

// export const SUCCESS_ADD_ADDRESS = 'SUCCESS_ADD_ADDRESS'; //增加地址
// export const FAILURE_ADD_ADDRESS = 'FAILURE_ADD_ADDRESS';

export const SUCCESS_DELETE_ADDRESS = 'SUCCESS_DELETE_ADDRESS'; //删除地址
export const FAILURE_DELETE_ADDRESS = 'FAILURE_DELETE_ADDRESS';

export const SUCCESS_UPDATE_ADDRESS = 'SUCCESS_UPDATE_ADDRESS'; //修改地址
export const FAILURE_UPDATE_ADDRESS = 'FAILURE_UPDATE_ADDRESS';



// ------------------------------------
// States
// ------------------------------------
const state = {
  userInfo: {},
  addresses:[]
}


// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    userInfo: state => state.userInfo,
    addresses: state => state.addresses
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

  // 添加/更新/设为默认 收货地址 updateReceiptAdress
  async updateReceiptAdress({commit}, addr){
    try{
      const res = await fetch(`http://ransj.com/cart/addaddr`, {
        method: "POST",
        mode: 'cors',
        credentials: 'include',  // ['cors', include', 'same-origin']
        headers: {
          'Accept': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addr)
      })
      const json = await res.json();
      console.log(json);
      if(json && json.errno == 0) {
        commit(SUCCESS_UPDATE_ADDRESS, json);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_UPDATE_ADDRESS, json);
      }
    } catch (e) {
        commit(FAILURE_UPDATE_ADDRESS);
    }
  },


  // 删除 收货地址 updateReceiptAdress
  async delReceiptAdress({commit}, id){
    try{
      const res = await fetch(`http://ransj.com/cart/deladdr?id=${id}`, {
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
        commit(SUCCESS_DELETE_ADDRESS, id);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_DELETE_ADDRESS, id);
      }
    } catch (e) {
        commit(FAILURE_DELETE_ADDRESS);
    }
  },


  // 查询收货地址 getReceiptAdress
  async getReceiptAdress({commit}){
    try{
      const res = await fetch(`http://ransj.com/user/address`, {
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
      if(json && json.length) {
        commit(SUCCESS_GET_ADDRESS, json);
      } else {
        commit(FAILURE_GET_ADDRESS, json);
      }
    } catch (e) {
        commit(FAILURE_GET_ADDRESS);
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
  },


  //收货地址相关
  [SUCCESS_GET_ADDRESS](state, data){
    state.addresses = data;
  },

  [FAILURE_GET_ADDRESS](state, data){
    state.addresses = [];
  },

  [SUCCESS_UPDATE_ADDRESS](state, data){
    //如果是新增地址，增加到地址列表
    //如果是修改地址，更新到地址列表
  },

  [SUCCESS_DELETE_ADDRESS](state, id){
    //删除相应的地址
    let i, index = -1;
    if(state.addresses.length > 0){
      for(i=0; i<state.addresses.length; i++) {
        if(state.addresses[i].id == id) {
          index = i;
          break;
        }
      }
      if(index != -1) {
        state.addresses.splice(index, 1)
      }
    }
  }
}


export default {
    state,
    getters,
    actions,
    mutations
}