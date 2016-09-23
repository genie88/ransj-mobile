import regexp from 'utils/regexp'
import fetch from 'isomorphic-fetch'
// import jsonp from 'fetch-jsonp'

// ------------------------------------
// Constants
// ------------------------------------

export const SUCCESS_CREATE_ORDER = 'SUCCESS_CREATE_ORDER'; // 创建订单信息
export const FAILURE_CREATE_ORDER = 'FAILURE_CREATE_ORDER';

export const SUCCESS_GET_PAYMENT_INFO = 'SUCCESS_GET_PAYMENT_INFO'; //获取订单支付必要信息
export const FAILURE_GET_PAYMENT_INFO = 'FAILURE_GET_PAYMENT_INFO';

export const SUCCESS_PAYMENT = 'SUCCESS_PAYMENT'; //支付
export const FAILURE_PAYMENT = 'FAILURE_PAYMENT';
export const REQUEST_PAYMENT = 'REQUEST_PAYMENT'; 


// ------------------------------------
// States
// ------------------------------------
const state = {
  lastOrderId: null, //用户最新创建的订单
  paymentInfo: {}
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
  lastOrderId: state => state.lastOrderId,
  paymentInfo: state => state.paymentInfo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
    //结算
    async createOrder ({ commit }, data){
      const res = await fetch(`http://ransj.com/cart/createorder`, {
        method: "POST",
        mode: 'cors',
        credentials: 'include',  // ['cors', include', 'same-origin']
        headers: {
          'Accept': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
          'Content-Type': 'application/json'//'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(data)
      })
      const json = await res.json();
      // console.log(json);
      if(json && json.data && json.errno == 0) {
        commit(SUCCESS_CREATE_ORDER, json.data)
        //如果用户选择的是货到付款，跳转到支付成功页面
        //如果用户选择的是在线支付，跳转到支付页面
        router.go('/casher/pay/order/' + json.data.order_id);
      } else {
        commit(FAILURE_CREATE_ORDER)
      }
    },

    //获取付款必要信息[订单信息，可选支付方式]
    async getPaymentInfo ({ commit }, orderId){
      const res = await fetch(`http://ransj.com/cart/pay?order=${orderId}`, {
        method: "GET",
        mode: 'cors',
        credentials: 'include',  // ['cors', include', 'same-origin']
        headers: {
          'Accept': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
          'Content-Type': 'application/json'//'application/x-www-form-urlencoded'
        }
      })
      const json = await res.json();
      // console.log(json);
      if(json && json.data && json.errno == 0) {
        commit(SUCCESS_GET_PAYMENT_INFO, json.data)
      } else {
        commit(FAILURE_GET_PAYMENT_INFO)
      }
    },

    //付款
    async payment ({ commit }, data){
      console.log(data, JSON.stringify(data))
      const res = await fetch(`http://ransj.com/cart/pay`, {
        method: "POST",
        mode: 'cors',
        credentials: 'include',  // ['cors', include', 'same-origin']
        headers: {
          'Accept': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
          'Content-Type': 'application/json' //'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(data)//`order_id=${data.order_id}&payment=${data.payment}`
      })
      const json = await res.json();
      console.log(json);
      if(json && json.data && json.errno == 0) {
        commit(SUCCESS_PAYMENT, json.data)
      } else {
        commit(FAILURE_PAYMENT)
      }
    }

}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  // 创建订单
  [SUCCESS_CREATE_ORDER] (state, data) {
    state.lastOrderId = data.order_id;
  },

  [FAILURE_CREATE_ORDER] (state) {

  },

  // 获取付款必要信息
  [SUCCESS_GET_PAYMENT_INFO] (state, data) {
    state.paymentInfo = data;
  },

  [FAILURE_GET_PAYMENT_INFO] (state) {

  },

  // 支付
  [SUCCESS_PAYMENT] (state, data) {
    state.paymentInfo = data;
    // data.extra.success_url = 'http://test.ransj.com/#!/casher/payres'
    pingpp.createPayment(data.data, function(result, err){
        console.log(result);
        console.log(err.msg);
        console.log(err.extra);
        if (result == "success") {
            // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
        } else if (result == "fail") {
            // charge 不正确或者微信公众账号支付失败时会在此处返回
        } else if (result == "cancel") {
            // 微信公众账号支付取消支付
        }
    }); 
  },

  [FAILURE_PAYMENT] (state) {

  }
}

export default {
    state,
    getters,
    actions,
    mutations
}