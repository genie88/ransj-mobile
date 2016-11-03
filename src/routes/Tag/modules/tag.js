import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_GET_TAG = 'SUCCESS_GET_TAG'; //获取TAG详情
export const FAILURE_GET_TAG = 'FAILURE_GET_TAG';

export const SUCCESS_GET_TAG_LIST = 'SUCCESS_GET_TAG_LIST'; //获取TAG列表
export const FAILURE_GET_TAG_LIST = 'FAILURE_GET_TAG_LIST';

// ------------------------------------
// States
// ------------------------------------
const state = {
  detail: {},
  tagList: {}
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    tagDetail: state => state.detail,
    tagList: state => state.tagList
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
  },

  async getTagList({commit}) {
    //发起ajax请求获取tag列表 'GET  http://ransj.com/tags'
    try{
      const res = await fetch(`http://ransj.com/tags`, {
        method: "GET"
      })
      const tagList = await res.json();
      if(tagList && tagList){
        commit(SUCCESS_GET_TAG_LIST, tagList);
      } else {
        commit(FAILURE_GET_TAG_LIST);
      }
    } catch(e){
      commit(FAILURE_GET_TAG_LIST);
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
    state.detail = null;
  },

  [SUCCESS_GET_TAG_LIST](state, tagList){
    state.tagList = tagList;
  },

  [FAILURE_GET_TAG_LIST](state, data){
    state.tagList = null;
  },
}

export default {
    state,
    getters,
    actions,
    mutations
}