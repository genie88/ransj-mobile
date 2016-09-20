import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_GET_PRODUCT = 'SUCCESS_GET_PRODUCT'; //获取商品详情
export const FAILURE_GET_PRODUCT = 'FAILURE_GET_PRODUCT';

export const SUCCESS_GET_PRODUCT_COMMENTS = 'SUCCESS_GET_PRODUCT_COMMENTS'; //获取商品评论
export const FAILURE_GET_PRODUCT_COMMENTS = 'FAILURE_GET_PRODUCT_COMMENTS';

export const CHECK_FAILURE_COMMENT = 'CHECK_FAILURE_COMMENT'; //评论校验失败
export const INIT_CHECK_COMMENT = 'INIT_CHECK_COMMENT';

export const SUCCESS_COMMENT = 'SUCCESS_COMMENT'; //评论
export const FAILURE_COMMENT = 'FAILURE_COMMENT';


// ------------------------------------
// States
// ------------------------------------
const state = {
  detail: {},
  comments: {},
  promotions: [],
  comment: null
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    productDetail: state => state.detail,
    productComments: state => state.comments
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  initCheckComment({commit}){
    commit(INIT_CHECK_COMMENT);
  },

  async getDetail({commit}, productId) {
    //发起ajax请求获取商品详情 'POST  http://ransj.com/detail/254'
    try{
      const res = await fetch(`http://ransj.com/detail/${productId}`, {
        method: "POST",
        body: ''
      })
      const detail = await res.json();
      if(detail && detail.id){
        commit(SUCCESS_GET_PRODUCT, detail);
      } else {
        commit(FAILURE_GET_PRODUCT);
      }
    } catch(e){
      commit(FAILURE_GET_PRODUCT);
    } 
  },

  async getComments({commit}, productId){
    //发起ajax请求获取商品评论
    try{
      const res = await fetch(`http://ransj.com/comment?tid=${productId}`, {
        method: "POST",
        body: ''
      })
      const comments = await res.json();
      commit(SUCCESS_GET_PRODUCT_COMMENTS, comments);
    } catch(e){
      console.log(e)
      commit(FAILURE_GET_PRODUCT_COMMENTS);
    } 
    
  },

  comment({commit}, param){
    //ajax发起评论
    commit(SUCCESS_COMMENT, {});
  }
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  [CHECK_FAILURE_COMMENT](state, errorType){

  },

  [INIT_CHECK_COMMENT] (state) {
    state.comment = null;
  },

  [SUCCESS_GET_PRODUCT](state, payload){
    state.detail = payload;
  },

  [FAILURE_GET_PRODUCT](state,data){
    state.detail = null
  },

  [SUCCESS_GET_PRODUCT_COMMENTS](state, payload){
    state.comments = payload;
  },

  [FAILURE_GET_PRODUCT_COMMENTS](state,data){
    state.comments = null
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}