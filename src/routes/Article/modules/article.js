import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_GET_ARTICLE = 'SUCCESS_GET_ARTICLE'; //获取文章详情
export const FAILURE_GET_ARTICLE = 'FAILURE_GET_ARTICLE';

export const SUCCESS_GET_ARTICLE_COMMENTS = 'SUCCESS_GET_ARTICLE_COMMENTS'; //获取文章评论
export const FAILURE_GET_ARTICLE_COMMENTS = 'FAILURE_GET_ARTICLE_COMMENTS';

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
    articleDetail: state => state.detail,
    articleComments: state => state.comments
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  async getArticleDetail({commit}, articleId) {
    //发起ajax请求获取商品详情 'POST  http://ransj.com/detail/254'
    try{
      const res = await fetch(`http://ransj.com/detail/${articleId}`, {
        method: "POST",
        body: ''
      })
      const detail = await res.json();
      if(detail && detail.id){
        commit(SUCCESS_GET_ARTICLE, detail);
      } else {
        commit(FAILURE_GET_ARTICLE);
      }
    } catch(e){
      commit(FAILURE_GET_ARTICLE);
    } 
  },

  async getArticleComments({commit}, articleId){
    //发起ajax请求获取商品评论
    try{
      const res = await fetch(`http://ransj.com/comment?tid=${articleId}`, {
        method: "POST",
        body: ''
      })
      const comments = await res.json();
      commit(SUCCESS_GET_ARTICLE_COMMENTS, comments);
    } catch(e){
      console.log(e)
      commit(FAILURE_GET_ARTICLE_COMMENTS);
    } 
  }
  
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  [SUCCESS_GET_ARTICLE](state, payload){
    state.detail = payload;
  },

  [FAILURE_GET_ARTICLE](state,data){
    state.detail = null
  },

  [SUCCESS_GET_ARTICLE_COMMENTS](state, payload){
    state.comments = payload;
  },

  [FAILURE_GET_ARTICLE_COMMENTS](state,data){
    state.comments = null
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}