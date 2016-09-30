import regexp from 'utils/regexp'
import cookie from 'utils/cookie'
import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_MY_LIKE_INFO = 'SUCCESS_MY_LIKE_INFO';
export const FAILURE_MY_LIKE_INFO = 'FAILURE_MY_LIKE_INFO';

export const SUCCESS_ADD_LIKE = 'SUCCESS_ADD_LIKE';
export const FAILURE_ADD_LIKE = 'FAILURE_ADD_LIKE';

export const SUCCESS_CANCEL_LIKE = 'SUCCESS_CANCEL_LIKE';
export const FAILURE_CANCEL_LIKE = 'FAILURE_CANCEL_LIKE';

// ------------------------------------
// States
// ------------------------------------
const state = {
  myLikes: null
}


// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    myLikes: state => state.myLikes
}



// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  async getMyLikes({commit}){
    try{
      const res = await fetch(`http://ransj.com/like/get_user_like`, {
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
        commit(SUCCESS_MY_LIKE_INFO, json);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_MY_LIKE_INFO, json);
      }
    } catch (e) {
        // router.go('/user/login');
        commit(FAILURE_MY_LIKE_INFO);
    }
  },

  //添加到我的喜欢
  async addToLike({commit}, tid){
    try{
      const res = await fetch(`http://ransj.com/like/add`, {
        method: "POST",
        mode: 'cors',
        credentials: 'include',  // ['cors', include', 'same-origin']
        headers: {
          'Accept': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({tid: tid})
      })
      const json = await res.json();
      // console.log(json);
      if(json && json.data) {
        commit(SUCCESS_ADD_LIKE, json);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_ADD_LIKE, json);
      }
    } catch (e) {
        commit(FAILURE_ADD_LIKE);
    }
  },


  //从我的喜欢中移除
  async dislike({commit}, tid){
    try{
      const res = await fetch(`http://ransj.com/like/cancel`, {
        method: "POST",
        mode: 'cors',
        credentials: 'include',  // ['cors', include', 'same-origin']
        headers: {
          'Accept': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({tid: tid})
      })
      const json = await res.json();
      // console.log(json);
      if(json && json.data) {
        commit(SUCCESS_CANCEL_LIKE, tid);
        return json;
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_CANCEL_LIKE, json);
      }
    } catch (e) {
        commit(FAILURE_CANCEL_LIKE);
    }
  },
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  //获取我的喜欢😍
  [FAILURE_MY_LIKE_INFO](state){
    state.myLikes = null
  },

  [SUCCESS_MY_LIKE_INFO](state, data){
    state.myLikes = data
  },

  //添加到我的喜欢❤️
  [FAILURE_ADD_LIKE](state){

  },

  [SUCCESS_ADD_LIKE](state, data){

  },

  //取消喜欢❤️
  [FAILURE_CANCEL_LIKE](state){

  },

  [SUCCESS_CANCEL_LIKE](state, id){
    let i, likes = state.myLikes.data;
    for(i=0; i< likes.length; i++) {
      if(likes[i].id === id) {
        likes.splice(i, 1);
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