import regexp from 'utils/regexp'
// ------------------------------------
// Constants
// ------------------------------------
// export const ADD_USER = 'ADD_USER'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FAILURE_LOGIN = 'FAILURE_LOGIN';
export const CHECK_FAILURE_LOGIN = 'CHECK_FAILURE_LOGIN'; //校验失败
export const INIT_CHECK_LOGIN = 'INIT_CHECK_LOGIN';


// ------------------------------------
// States
// ------------------------------------
const state = {
  errors: {
    errortip: '错误提示',
    errorbool: 'hidden'
  }
}

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {
    errors: state => state.errors
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  initCheckLogin({commit}){
    commit(INIT_CHECK_LOGIN);
  },

  userLogin({commit}, param){
    if(!regexp.mobile(param.username)){
      commit(CHECK_FAILURE_LOGIN, 'invaildMobile')
    }else if(!regexp.password(param.password)){
      commit(CHECK_FAILURE_LOGIN, 'invaildPassword')
    }else{
      commit(SUCCESS_LOGIN, {});
      router.go({path: '/user/my'})
      // $.ajax({
      //       url: 'http://ransj.com/user/login',
      //       type: 'POST',
      //       data: {
      //           username: this.$data.username,
      //           password: this.$data.password
      //       },
      //       success: function(json){
      //           console.log(json);
      //       }
      //   })
    }
  }
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
  [CHECK_FAILURE_LOGIN](state, errorType){
    if(errorType == "invaildMobile"){
      state.errors.errortip = '错误提示：手机号格式不正确，请重试!'
    }else if(errorType == "invaildPassword"){
      state.errors.errortip = '错误提示：密码格式格式不正确，请重试!'
    }else{
      state.errors.errortip = '错误提示：手机号或密码错误，请重试!'
    }
    state.errors.errorbool = 'visible'
  },

  [INIT_CHECK_LOGIN] (state) {
    state.errors.errorbool = 'hidden'
  },

  [FAILURE_LOGIN](state){
    state.session = ''
  },

  [SUCCESS_LOGIN](state,data){
    state.session = data.SessionId
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}