import regexp from 'utils/regexp'
import cookie from 'utils/cookie'
import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_MY_ORDER_INFO = 'SUCCESS_MY_ORDER_INFO';
export const FAILURE_MY_ORDER_INFO = 'FAILURE_MY_ORDER_INFO';


export const SUCCESS_CONFIRM_RECEIPT = 'SUCCESS_CONFIRM_RECEIPT';
export const FAILURE_CONFIRM_RECEIPT = 'FAILURE_CONFIRM_RECEIPT';


export const SUCCESS_DELETE_ORDER = 'SUCCESS_DELETE_ORDER';
export const FAILURE_DELETE_ORDER = 'FAILURE_DELETE_ORDER';

//获取订单详情
export const SUCCESS_ORDER_DETAIL = 'SUCCESS_ORDER_DETAIL';
export const FAILURE_ORDER_DETAIL = 'FAILURE_ORDER_DETAIL';
// ------------------------------------
// States
// ------------------------------------
const state = {
  myOrderInfo: {},
  orderDetail: {},
}


// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    myOrderInfo: state => state.myOrderInfo,
    orderDetail: state => state.orderDetail,
}



// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {

  /**
   * 查询我的订单状态
   * pay_status： 0未付款   1已付款
   * status: 2:订单创建成功等待付款/审核;  3:审核成功/付款成功;  4:确认收货;  5:已评论  6:已作废(订单超时或者管理员设置)
   * delivery_status: 0未发货  1已发货
   * is_del: 是否删除
   */
  async getMyOrderInfo({commit}, param){
    try{
      const res = await fetch(`http://ransj.com/user/order`, {
        method: "POST",
        mode: 'cors',
        credentials: 'include',  // ['cors', include', 'same-origin']
        headers: {
          'Accept': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(param)
      })
      const json = await res.json();
      // console.log(json);
      if(json && json.data) {
        commit(SUCCESS_MY_ORDER_INFO, json);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_MY_ORDER_INFO, json);
      }
    } catch (e) {
        // router.go('/user/login');
        commit(FAILURE_MY_ORDER_INFO);
    }
  },

  /**
   * 确认收货
   *  @param orderId  确认收货的订单ID
   */
  async confirmReceipt({commit}, orderId){
    try{
      const res = await fetch(`http://ransj.com/user/confirmreceipt?id=${orderId}`, {
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
        commit(SUCCESS_CONFIRM_RECEIPT, orderId);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_CONFIRM_RECEIPT, json);
      }
    } catch (e) {
        // router.go('/user/login');
        commit(FAILURE_CONFIRM_RECEIPT);
    }
  },


  /**
   *  删除订单
   *  @param orderId  待删除的订单ID
   */
  async deleteOrder({commit}, orderId){
    try{
      const res = await fetch(`http://ransj.com/user/delorder?id=${orderId}`, {
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
        commit(SUCCESS_CONFIRM_RECEIPT, orderId);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_CONFIRM_RECEIPT, json);
      }
    } catch (e) {
        // router.go('/user/login');
        commit(FAILURE_CONFIRM_RECEIPT);
    }
  },



  /**
   *  获取订单详情
   *  @param orderId  订单ID
   */
  async getOrderDetail({commit}, orderId){
    try{
      const res = await fetch(`http://ransj.com/order?order_id=${orderId}`, {
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
      console.log(json);
      if(json && json.errno == 0 && json.data) {
        commit(SUCCESS_ORDER_DETAIL, json.data);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        commit(FAILURE_ORDER_DETAIL, json);
      }
      return json;
    } catch (e) {
        commit(FAILURE_ORDER_DETAIL);
    }
  },


  /**
   *  评论订单(评论订单中的所有商品)
   *  @param data.orderId  订单ID
   *  @param data.comment  订单评论内容
   */
  async commentOrder({commit}, data){
    try{
      const res = await fetch(`http://ransj.com/order/comment`, {
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
      console.log(json);
      if(json && json.errno == 0 && json.data) {
        // commit(SUCCESS_ORDER_COMMENT, json.data);
      } else {
        if(json && json.errno == -2) {
            router.go('/user/login');
        }
        // commit(FAILURE_ORDER_COMMENT, json);
      }
      return json;
    } catch (e) {
        // commit(FAILURE_ORDER_COMMENT);
    }
  },
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  [FAILURE_MY_ORDER_INFO](state){
    state.myOrderInfo = null
  },

  [SUCCESS_MY_ORDER_INFO](state,data){
    state.myOrderInfo = data
  },

  // 确认收货
  [SUCCESS_CONFIRM_RECEIPT](state, orderId){

  },
  [FAILURE_CONFIRM_RECEIPT](state, orderId){

  },

  // 删除订单
  [SUCCESS_DELETE_ORDER](state, orderId){

  },
  [FAILURE_DELETE_ORDER](state, orderId){

  },

  // 获取订单详情
  [SUCCESS_ORDER_DETAIL](state, order) {
    state.orderDetail = order
  },

  [FAILURE_ORDER_DETAIL](state, order) {
    state.orderDetail = null
  },
}


export default {
    state,
    getters,
    actions,
    mutations
}