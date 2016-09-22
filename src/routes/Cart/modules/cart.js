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
  lastCheckout: null
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
  cartItems: state => state.cartItems
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
        if(json && json.data) {
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
      try{
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
          commit(SUCCESS_UPDATE_CART_ITEM, json.data.data);
        } else {
          if(json && json.errno == -2) {
              router.go('/user/login');
          }
          commit(FAILURE_UPDATE_CART_ITEM, json);
        }
      } catch (e) {
          // router.go('/user/login');
          commit(FAILURE_UPDATE_CART_ITEM);
      }
    },

    //添加到购物车
    addToCart ({ commit }, product) {
      if (product.inventory > 0) {
        commit(ADD_TO_CART, product.id)
      }
    },

    //结算
    checkout ({ commit }, products){
      const savedCartItems = [...state.cartItems]
      commit(CHECKOUT_REQUEST)
      // shop.buyProducts(
      //   products,
      //   () => dispatch(CHECKOUT_SUCCESS),
      //   () => dispatch(CHECKOUT_FAILURE, savedCartItems)
      // )
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
    for (let i=0; i<state.cartItems.data.length; i++) {
      let item = state.cartItems.data[i];
      if(item.product_id == data.product_id) {
        state.cartItems.data[i].qty = data.qty;
        state.cartItems.data[i].price = data.price;
        break;
      }
    }
  },

  // 获取购物车信息
  [FAILURE_MY_CART_INFO](state){
    state.cartItems = null
  },

  [SUCCESS_MY_CART_INFO](state,data){
    state.cartItems = data
  },

  [ADD_TO_CART] (state, productId) {
    state.lastCheckout = null
    const record = state.cartItems.find(p => p.id === productId)
    if (!record) {
      state.cartItems.push({
        id: productId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  [CHECKOUT_REQUEST] (state) {
    // clear cart
    state.cartItems = []
    state.lastCheckout = null
  },

  [CHECKOUT_SUCCESS] (state) {
    state.lastCheckout = 'successful'
  },

  [CHECKOUT_FAILURE] (state, savedCartItems) {
    // rollback to the cart saved before sending the request
    state.cartItems = savedCartItems
    state.lastCheckout = 'failed'
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}