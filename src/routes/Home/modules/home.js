import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'

// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_HOME_SLIDER = 'SUCCESS_HOME_SLIDER';
export const SUCCESS_PRODUCT_CATS = 'SUCCESS_PRODUCT_CATS';
export const SUCCESS_PRODUCT_HOTS = 'SUCCESS_PRODUCT_HOTS';
export const SUCCESS_PRODUCT_NEW = 'SUCCESS_PRODUCT_NEW';
export const SUCCESS_ARTICLE_HOT = 'SUCCESS_ARTICLE_HOT';

// ------------------------------------
// States
// ------------------------------------
const state = {
    slider: [],     // 首页幻灯片信息
    cates: [],      // 商品分类
    hotProducts: [],   // 热门商品
    newProducts: [],   // 新到尖货
    hotArticles: []    // 热门文章
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
  homeSlider: state => state.slider,
  cates: state => state.cates,
  hotProducts: state => state.hotProducts,
  newProducts: state => state.newProducts,
  hotArticles: state => state.hotArticles
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {

  //获取所有商品分类
  async getProductCates ({ commit }) {
    const res = await fetch(`http://ransj.com/topic/subcates?category=108`, {
      method: "GET",
      mode: 'cors',
      credentials: 'include',  // ['cors', include', 'same-origin']
      headers: {
        'Accept': 'application/json',
        'x-requested-with': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      }
    })
    const json = await res.json();
    if(json && json.data && json.errno == 0) {
      commit(SUCCESS_PRODUCT_CATS, json)
      return json
    }
  },


  //获取首页Slider
  async getHomeSliders ({ commit }, data) {
    const res = await fetch(`http://ransj.com/cart/addcart`, {
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
      commit(SUCCESS_HOME_SLIDER, json)
    }
  },

  //获取热门文章
  async getHotArticles ({ commit }, data) {
    const res = await fetch(`http://ransj.com/topic/list?category=1-1`, {
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
      commit(SUCCESS_ARTICLE_HOT, json)
    }
  },

  //获取热门商品
  async getHotProducts ({ commit }, data) {
    const res = await fetch(`http://ransj.com/topic/list?category=108-1`, {
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
      commit(SUCCESS_PRODUCT_HOTS, json)
    }
  },


  //获取最新商品
  async getNewProducts ({ commit }, data) {
    const res = await fetch(`http://ransj.com/cart/addcart`, {
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
      commit(SUCCESS_PRODUCT_NEW, json)
    }
  },



}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  [SUCCESS_HOME_SLIDER] (state, data){
    state.slider = data;
  },

  [SUCCESS_PRODUCT_CATS] (state, data){
    state.cates = data;
  },

  [SUCCESS_PRODUCT_HOTS] (state, data){
    state.hotProducts = data;
  },

  [SUCCESS_PRODUCT_NEW] (state, data){
    state.newProducts = data;
  },

  [SUCCESS_ARTICLE_HOT] (state, data){
    state.hotArticles = data;
  },
}

export default {
    state,
    getters,
    actions,
    mutations
}