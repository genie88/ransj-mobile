import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_GET_FARMER = 'SUCCESS_GET_FARMER'; //获取农场详情
export const FAILURE_GET_FARMER = 'FAILURE_GET_FARMER';

export const SUCCESS_GET_FARMER_COMMENTS = 'SUCCESS_GET_FARMER_COMMENTS'; //获取农场评论
export const FAILURE_GET_FARMER_COMMENTS = 'FAILURE_GET_FARMER_COMMENTS';

// ------------------------------------
// States
// ------------------------------------
const state = {
  detail: {},
  comments: {},
  comment: null
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    farmerDetail: state => state.detail,
    farmerComments: state => state.comments
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  async getFarmerDetail({commit}, farmId) {
    //发起ajax请求获取商品详情 'POST  http://ransj.com/detail/254'
    try{
      const res = await fetch(`http://ransj.com/detail/${farmId}`, {
        method: "POST",
        body: ''
      })
      const detail = await res.json();
      if(detail && detail.id){
        commit(SUCCESS_GET_FARMER, detail);
      } else {
        commit(FAILURE_GET_FARMER);
      }
    } catch(e){
      commit(FAILURE_GET_FARMER);
    } 
  },

  async getFarmerComments({commit}, farmId){
    //发起ajax请求获取商品评论
    try{
      const res = await fetch(`http://ransj.com/comment?tid=${farmId}`, {
        method: "POST",
        body: ''
      })
      const comments = await res.json();
      commit(SUCCESS_GET_FARMER_COMMENTS, comments);
    } catch(e){
      console.log(e)
      commit(FAILURE_GET_FARMER_COMMENTS);
    } 
  }
  
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  [SUCCESS_GET_FARMER](state, payload){
    state.detail = payload;
  },

  [FAILURE_GET_FARMER](state,data){
    state.detail = null
  },

  [SUCCESS_GET_FARMER_COMMENTS](state, payload){
    state.comments = payload;
  },

  [FAILURE_GET_FARMER_COMMENTS](state,data){
    state.comments = null
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}