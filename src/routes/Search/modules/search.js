import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'
// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_SEARCH = 'REQUEST_SEARCH'; //搜索
export const SUCCESS_SEARCH = 'SUCCESS_SEARCH';
export const FAILURE_SEARCH = 'FAILURE_SEARCH';


export const SUCCESS_SEARCH_HOTWROD = 'SUCCESS_SEARCH_HOTWROD'; //热词
export const FAILURE_SEARCH_HOTWROD = 'FAILURE_SEARCH_HOTWROD';

export const SUCCESS_SEARCH_SUGGESTIONS = 'SUCCESS_SEARCH_SUGGESTIONS'; //搜索建议
export const FAILURE_SEARCH_SUGGESTIONS = 'FAILURE_SEARCH_SUGGESTIONS';

export const SUCCESS_SEARCH_HISTORY = 'SUCCESS_SEARCH_HISTORY'; //搜索历史
export const FAILURE_SEARCH_HISTORY = 'FAILURE_SEARCH_HISTORY';

// ------------------------------------
// States
// ------------------------------------
const state = {
  searchHotWords: [{name: '泰和乌鸡'}, {name: '天湖牛肉'}, {name: '湘黄鸡'}],
  searchSuggestions: {},
  searchResult: {},
  searchHistory: {}
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
  searchHotWords: state => state.searchHotWords,
  searchSuggestions: state => state.searchSuggestions,
  searchResult: state => state.searchResult,
  searchHistory: state => state.searchHistory
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {

  //获取搜索热词
  async getSearchHotWords ({ commit }, data) {
    const res = await fetch(`http://ransj.com/search/hotwords`, {
      method: "POST",
      mode: 'cors',
      credentials: 'include',  // ['cors', include', 'same-origin']
      headers: {
        'Accept': 'application/json',
        'x-requested-with': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json();
    // console.log(json);
    if(json && json.data) {
      commit(SUCCESS_SEARCH_HOTWROD, json)
    } else {
      commit(FAILURE_SEARCH_HOTWROD, json)
    }
  },

  //获取搜索结果
  async getSearchResult ({ commit }, keyword) {
    const res = await fetch(`http://ransj.com/topic/list?category=108&search=${keyword}`, {
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
      commit(SUCCESS_SEARCH, json)
    } else {
      commit(FAILURE_SEARCH, json)
    }
  },

  //搜索建议
  async getSearchSuggestions ({ commit }, data) {
    const res = await fetch(`http://ransj.com/search/suggestions`, {
      method: "POST",
      mode: 'cors',
      credentials: 'include',  // ['cors', include', 'same-origin']
      headers: {
        'Accept': 'application/json',
        'x-requested-with': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json();
    // console.log(json);
    if(json && json.data) {
      commit(SUCCESS_SEARCH_SUGGESTIONS, json)
    } else {
      commit(FAILURE_SEARCH_SUGGESTIONS, json)
    }
  },


  //搜索历史
  async getSearchHistory ({ commit }, data) {
    const res = await fetch(`http://ransj.com/search/history`, {
      method: "POST",
      mode: 'cors',
      credentials: 'include',  // ['cors', include', 'same-origin']
      headers: {
        'Accept': 'application/json',
        'x-requested-with': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json();
    // console.log(json);
    if(json && json.data) {
      commit(SUCCESS_SEARCH_SUGGESTIONS, json)
    } else {
      commit(FAILURE_SEARCH_SUGGESTIONS, json)
    }
  },

}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {

  //搜索结果
  [SUCCESS_SEARCH](state, data){
    state.searchResult = data;
  },

  [FAILURE_SEARCH](state, data){
    state.searchResult = [];
  },

  //搜索热词
  [SUCCESS_SEARCH_HOTWROD](state, data) {
    state.searchHotWords = data;
  },

  [FAILURE_SEARCH_HOTWROD](state, data){
    state.searchHotWords = [];
  },

  //搜索建议词
  [SUCCESS_SEARCH_SUGGESTIONS](state, data) {
    state.searchSuggestions = data;
  },

  [FAILURE_SEARCH_SUGGESTIONS](state, data){
    state.searchSuggestions = [];
  },

  //获取搜索历史
  [SUCCESS_SEARCH_HISTORY](state, data) {
    state.searchHistory = data;
  },

  [FAILURE_SEARCH_HISTORY](state, data) {
    state.searchHistory = [];
  },

}

export default {
    state,
    getters,
    actions,
    mutations
}