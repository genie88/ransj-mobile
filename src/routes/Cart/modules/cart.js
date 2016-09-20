import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'
// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TO_CART = 'ADD_TO_CART'; //获取商品详情
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';



// ------------------------------------
// States
// ------------------------------------
const state = {
  added: {},
  lastCheckout: null
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {

}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
    //添加到购物车
    addToCart ({ dispatch }, product) {
      if (product.inventory > 0) {
        dispatch(ADD_TO_CART, product.id)
      }
    },

    checkout ({ dispatch, state }, products){
      const savedCartItems = [...state.cart.added]
      dispatch(CHECKOUT_REQUEST)
      shop.buyProducts(
        products,
        () => dispatch(CHECKOUT_SUCCESS),
        () => dispatch(CHECKOUT_FAILURE, savedCartItems)
      )
    }
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {

  [ADD_TO_CART] (state, productId) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === productId)
    if (!record) {
      state.added.push({
        id: productId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  [CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.lastCheckout = null
  },

  [CHECKOUT_SUCCESS] (state) {
    state.lastCheckout = 'successful'
  },

  [CHECKOUT_FAILURE] (state, savedCartItems) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.lastCheckout = 'failed'
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}