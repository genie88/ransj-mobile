import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_GET_PRODUCT = 'SUCCESS_GET_PRODUCT'; //获取商品详情
export const FAILURE_GET_PRODUCT = 'FAILURE_GET_PRODUCT';

export const SUCCESS_GET_FARMER_PRODUCTS = 'SUCCESS_GET_FARMER_PRODUCTS'; //获取农场商品列表
export const FAILURE_GET_FARMER_PRODUCTS = 'FAILURE_GET_FARMER_PRODUCTS';

export const SUCCESS_GET_RECOMM_PRODUCTS = 'SUCCESS_GET_RECOMM_PRODUCTS'; //获取猜你喜欢商品列表
export const FAILURE_GET_RECOMM_PRODUCTS = 'FAILURE_GET_RECOMM_PRODUCTS';

export const SUCCESS_GET_PRODUCT_COMMENTS = 'SUCCESS_GET_PRODUCT_COMMENTS'; //获取商品评论
export const FAILURE_GET_PRODUCT_COMMENTS = 'FAILURE_GET_PRODUCT_COMMENTS';

export const CHECK_FAILURE_COMMENT = 'CHECK_FAILURE_COMMENT'; //评论校验失败
export const INIT_CHECK_COMMENT = 'INIT_CHECK_COMMENT';

export const SUCCESS_COMMENT = 'SUCCESS_COMMENT'; //评论
export const FAILURE_COMMENT = 'FAILURE_COMMENT';

export const SUCCESS_GET_PRODUCTS_BY_CATE = 'SUCCESS_GET_PRODUCTS_BY_CATE'; //根据分类查询商品列表
export const FAILURE_GET_PRODUCTS_BY_CATE = 'FAILURE_GET_PRODUCTS_BY_CATE';

export const ADD_PRODUCT_VIEW_HISTORY = 'ADD_PRODUCT_VIEW_HISTORY'; // 增加商品详情浏览历史
export const GET_PRODUCT_VIEW_HISTORY = 'GET_PRODUCT_VIEW_HISTORY'; // 查询商品详情历史

// ------------------------------------
// States
// ------------------------------------
const state = {
  productViewHistory: [],
  productsByCate: {},
  detail: {},
  farmerGoods: {},
  comments: {},
  promotions: [],
  comment: null
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    productViewHistory: state => state.productViewHistory,
    productsByCate: state => state.productsByCate,
    productDetail: state => state.detail,
    productComments: state => state.comments,
    farmerGoods: state => state.farmerGoods
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
      return detail;
    } catch(e){
      commit(FAILURE_GET_PRODUCT);
    } 
  },


  async getFarmerGoods({commit}, farmerid) {
    //发起ajax请求获取农场商品列表 'POST  http://ransj.com/topic/farmergoods?farmer_id=263'
    try{
      const res = await fetch(`http://ransj.com/topic/farmergoods?farmer_id=${farmerid}`)
      const data = await res.json();
      if(data && data.data){
        commit(SUCCESS_GET_FARMER_PRODUCTS, data);
      } else {
        commit(FAILURE_GET_FARMER_PRODUCTS);
      }
    } catch(e){
      commit(FAILURE_GET_FARMER_PRODUCTS);
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
  },

  //根据分类查询分类列表
  async getProductListByCate({commit}, catId){
    //发起ajax请求获取商品评论
    const res = await fetch(`http://ransj.com/topic/list?category=${catId}`, {
      method: "POST",
      mode: 'cors',
      credentials: 'include',  // ['cors', include', 'same-origin']
      headers: {
        'Accept': 'application/json',
        'x-requested-with': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(catId)
    })
    const json = await res.json();
    if(json && json.data) {
      commit(SUCCESS_GET_PRODUCTS_BY_CATE, json)
    } else {
      commit(FAILURE_GET_PRODUCTS_BY_CATE, json)
    }
  },

  //添加商品浏览详情
  addProductViewHistory({commit}, product){
    let price, findIndex, item, history = store.get('productViewHistory');

    try{
      price = JSON.parse(product.price);
    } catch(e) {}
    item = {
      id: product.id,
      title: product.title,
      image: product.pictures[0],
      farm: product.farmer.title,
      specs: product.specification,
      price: price.present_price,
      price2: price.discount_price,
      viewTime: new Date().getTime() 
    }

    if(!history || !history.length) {
      history = []
    }
    //删除相同的ID历史
    findIndex = history.findIndex((item)=>{
      return item.id == product.id
    })
    if(findIndex != -1) {
      history.splice(findIndex, 1)
    }

    //插入新的浏览记录
    history.unshift(item)
    
    store.set('productViewHistory', history);
    commit(ADD_PRODUCT_VIEW_HISTORY, history);
  },

  //查询商品浏览详情
  getProductViewHistory({commit}){
    let history = store.get('productViewHistory');
    commit(GET_PRODUCT_VIEW_HISTORY, history);
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

  //查询商品详情
  [SUCCESS_GET_PRODUCT](state, payload){
    state.detail = payload;
  },

  [FAILURE_GET_PRODUCT](state,data){
    state.detail = null
  },

  // 商品评论 
  [SUCCESS_GET_PRODUCT_COMMENTS](state, payload){
    state.comments = payload;
  },

  [FAILURE_GET_PRODUCT_COMMENTS](state,data){
    state.comments = null
  },

  // 农场商品
  [SUCCESS_GET_FARMER_PRODUCTS](state, payload){
    state.farmerGoods = payload;
  },

  [FAILURE_GET_FARMER_PRODUCTS](state,data){
    state.farmerGoods = null
  },

  //查询某二级分类的商品列表
  [SUCCESS_GET_PRODUCTS_BY_CATE](state, payload){
    state.productsByCate = payload;
  },

  [FAILURE_GET_PRODUCTS_BY_CATE](state,data){
    state.productsByCate = null
  },

  //商品浏览详情 [增加/查询]
  [ADD_PRODUCT_VIEW_HISTORY](state, data){
    state.productViewHistory = data
  },

  [GET_PRODUCT_VIEW_HISTORY](state,data){
    state.productViewHistory = data
  },
}

export default {
    state,
    getters,
    actions,
    mutations
}