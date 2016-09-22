import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'

// ------------------------------------
// Constants
// ------------------------------------

export const SUCCESS_MY_CART_INFO = 'SUCCESS_MY_CART_INFO'; //查询购物车信息
export const FAILURE_MY_CART_INFO = 'FAILURE_MY_CART_INFO';

export const ADD_TO_CART = 'ADD_TO_CART'; //添加到购物车
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
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

    },

    //调整购物车数量 data = {qty: 1, id: good_id}
    updateCartItem({commit}, data){
      //需要判断商品库存
    }
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {

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