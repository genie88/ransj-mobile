import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'

// ------------------------------------
// Constants
// ------------------------------------

export const SUCCESS_MY_CART_INFO = 'SUCCESS_MY_CART_INFO'; // 查询购物车信息
export const FAILURE_MY_CART_INFO = 'FAILURE_MY_CART_INFO';


export const SUCCESS_UPDATE_CART_ITEM = 'SUCCESS_UPDATE_CART_ITEM'; // 更新购物车条目信息
export const FAILURE_UPDATE_CART_ITEM = 'FAILURE_UPDATE_CART_ITEM';

export const ADD_TO_CART = 'ADD_TO_CART'; // 添加到购物车

export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'; // 结算请求
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';



// ------------------------------------
// States
// ------------------------------------
const state = {
  cartItems: {},
  casherInfo: {},
  lastCheckout: null
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
  cartItems: state => state.cartItems,
  casherInfo: state => state.casherInfo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
    //查询购物车信息
    async getCartInfo({commit}){
      try{
        const res = await fetch(`http://ransj.com/cart`, {
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
        if(json && json.total != undefined) {
          commit(SUCCESS_MY_CART_INFO, json);
        } else {
          if(json && json.errno == -2) {
              router.go('/user/login');
          }
          commit(FAILURE_MY_CART_INFO, json);
        }
      } catch (e) {
          // router.go('/user/login');
          commit(FAILURE_MY_CART_INFO);
      }
    },


    //更新购物车条目消息 [数量+1， 数量-1， 移除 0]
    async updateCartItem({commit}, data){
      let api = data.qty==0 ? `http://ransj.com/cart/delcart`: `http://ransj.com/cart/stepper`
      const res = await fetch( api, {
        method: "POST",
        mode: 'cors',
        credentials: 'include',  // ['cors', include', 'same-origin']
        headers: {
          'Accept': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ids: data.id +'', qty: data.qty})
      })
      const json = await res.json();
      // console.log(json);
      if(json && json.data) {
        
        if(json.data.name == '删除成功！') {
          json.data.data = {qty: 0, product_id: data.id}
        }

        commit(SUCCESS_UPDATE_CART_ITEM, json.data.data);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_UPDATE_CART_ITEM, json);
      }
    },

    //添加到购物车
    async addToCart ({ commit }, data) {
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
        commit(ADD_TO_CART, json)
      }
    },

    //结算
    async checkout ({ commit }, data){
      const res = await fetch(`http://ransj.com/cart/getorderinfo`, {
        method: "POST",
        mode: 'cors',
        credentials: 'include',  // ['cors', include', 'same-origin']
        headers: {
          'Accept': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data   //ids=254&qty=1&ids=253&qty=3&Submit=&coupon_code=
      })
      const json = await res.json();
      // console.log(json);
      if(json && json.data && json.errno == 0) {
        commit(CHECKOUT_SUCCESS, json.data)
        router.go('/casher');
      } else {
        commit(CHECKOUT_FAILURE)
      }
    },

    //将商品添加至喜欢
    addToLike(){

    },

    //从购物车中移除商品
    removeCartItem(){

    }
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {

  // 更新购物车条目信息
  [FAILURE_UPDATE_CART_ITEM](state){
    // state.cartItems = null
  },

  [SUCCESS_UPDATE_CART_ITEM](state, data){
    // 替换更新的item
    let num = 0;
    for (let i=0; i<state.cartItems.data.length; i++) {
      let item = state.cartItems.data[i];
      if(item.product_id == data.product_id) {

        if ( data.qty == 0 ) {
          //数量为0，需要直接删除
          state.cartItems.data.splice(i, 1);
          break;
        }
        state.cartItems.data[i].qty = data.qty;
        state.cartItems.data[i].price = data.price;
      }
      num += state.cartItems.data[i].qty;
    }

    state.cartItems.num = num;
  },

  // 获取购物车信息
  [FAILURE_MY_CART_INFO](state){
    state.cartItems = null
  },

  [SUCCESS_MY_CART_INFO](state,data){
    state.cartItems = data
  },

  [ADD_TO_CART] (state, data) {
    //返回的是最新的购物车数据
    state.cartItems = data
  },

  [CHECKOUT_REQUEST] (state) {
  },

  [CHECKOUT_SUCCESS] (state, data) {
    state.casherInfo = data;
    state.lastCheckout = 'successful';
  },

  [CHECKOUT_FAILURE] (state, savedCartItems) {

  }
}

export default {
    state,
    getters,
    actions,
    mutations
}