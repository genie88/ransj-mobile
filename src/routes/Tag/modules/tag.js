import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_GET_TAG = 'SUCCESS_GET_TAG'; //获取TAG详情
export const FAILURE_GET_TAG = 'FAILURE_GET_TAG';

// ------------------------------------
// States
// ------------------------------------
const state = {
  detail: {}
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    tagDetail: state => state.detail
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  async getTagDetail({commit}, id) {
    //发起ajax请求获取tag详情 'GET  http://ransj.com/tags/detail?id=254'
    try{
      const res = await fetch(`http://ransj.com/tags/detail?id=${id}`, {
        method: "GET"
      })
      const detail = await res.json();
      if(detail && detail.id){
        commit(SUCCESS_GET_TAG, detail);
      } else {
        commit(FAILURE_GET_TAG);
      }
    } catch(e){
      commit(FAILURE_GET_TAG);
    } 
  }
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  [SUCCESS_GET_TAG](state, detail){
    state.detail = detail;
  },

  [FAILURE_GET_TAG](state,data){
    state.detail = null
  },
}

export default {
    state,
    getters,
    actions,
    mutations
}