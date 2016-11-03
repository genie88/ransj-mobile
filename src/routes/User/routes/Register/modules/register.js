
import regexp from 'utils/regexp'
import cookie from 'utils/cookie'
import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const SUCCESS_REGISTER = 'SUCCESS_REGISTER';
export const FAILURE_REGISTER = 'FAILURE_REGISTER';
export const CHECK_FAILURE_REGISTER = 'CHECK_FAILURE_REGISTER'; //校验失败
export const INIT_CHECK_REGISTER = 'INIT_CHECK_REGISTER';
export const CAN_GET_CODE = 'CAN_GET_CODE';
export const CANNOT_GET_CODE = 'CANNOT_GET_CODE';



// ------------------------------------
// States
// ------------------------------------
const state = {
  session: '',
  errors: {
    errortip: '错误提示：手机号格式不正确，请重试!',
    errorbool: 'hidden',
    getCodeBool: false,
    codeMsg: '获取验证码',
    intervalNum: 60
  }
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    registerErrors: state => state.errors
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  /*注册前验证*/
  initCheckRegister({commit}) {
    commit(INIT_CHECK_REGISTER);  
  },

  /*发送注册时的验证码*/
  async registerCode ({commit}, param) {
    if(!regexp.mobile(param.username)){
        commit(CHECK_FAILURE_REGISTER, 'invaildMobile');
    }else{
        let num = 60
        let timer = setInterval(() => {
            commit(CANNOT_GET_CODE, num)
            num--
            if(num < 0){
                clearInterval(timer)
                commit(CAN_GET_CODE)
            }
        }, 1000)

        const res = await fetch(`http://ransj.com/public/verifycodesend`, {
          method: "POST",
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'x-requested-with': 'XMLHttpRequest',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({mobile: param.username, type: 1})
        })
        const json = await res.json();
        // console.log(json);
        if(json && json.errno == 0) {
          
        } else {
          
        }
    }
  },

  /*注册*/
  async userRegister ({commit}, param) {
    if(!regexp.mobile(param.username)){
        commit(CHECK_FAILURE_REGISTER, 'invaildMobile');
    }else if(!regexp.password(param.password)){
        commit(CHECK_FAILURE_REGISTER, 'invaildPassword');
    }else if(!regexp.code(param.code)){
        commit(CHECK_FAILURE_REGISTER, 'invaildCode');
    }else{
        let paramObj = {
            mobile: param.mobile,
            password: param.password,
            smscode: param.code
        }
        if(param.referer != ""){
            paramObj.referer = param.referer
        }
        if(cookie.get('openId')){
            paramObj.openId = cookie.get('openId')
        }
        router.go({path: '/user/my'})
        const res = await fetch(`http://ransj.com/public/smsreg`, {
          method: "POST",
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'x-requested-with': 'XMLHttpRequest',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({mobile: param.username, sms_type: 1, verifycode: param.code, password: param.password})
        })
        const json = await res.json();
        // console.log(json);
        if(json && json.errno == 0) {
          
        } else {
          
        }
    }
  }

}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  [CHECK_FAILURE_REGISTER](state, errorType){
    if(errorType == "invaildMobile"){
      state.errors.errortip = '错误提示：手机号为空或格式不正确，请检查!'
    }else if (errorType == "invaildPassword") {
      state.errors.errortip = '错误提示：密码为空或格式不正确，请检查!'
    }else if (errorType == "invaildCode") {
      state.errors.errortip = '错误提示：验证码为空或格式不正确，请检查!'
    }else{
      state.errors.errortip = '错误提示：短信验证码不正确，请重试!'
    }
    state.errors.errorbool = 'visible'
  },

  [CAN_GET_CODE](state){
    state.errors.getCodeBool = false
    state.errors.codeMsg = '点击发送'
    state.errors.intervalNum = 60
  },

  [CANNOT_GET_CODE](state, data){
    state.errors.getCodeBool = true
    state.errors.codeMsg = data + 's后重试'
    state.errors.intervalNum = data
  },

  [INIT_CHECK_REGISTER] (state) {
    state.errors.errorbool = 'hidden'
  },

  [FAILURE_REGISTER](state){
    state.session = ''
  },

  [SUCCESS_REGISTER](state,data){
    state.session = data.SessionId
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}