<template>
<header class="">
    <div class="user_nav">
        <span class="arrow" onclick="javascript:history.go(-1);"></span>
        <ul class="user_tabs">
            <li class="on" id="1"><a v-link="{ path: '/user/login' }">登录</a></li>
            <li class="" id="2"><a v-link="{ path: '/user/register' }">注册</a></li>
        </ul>
    </div>
</header>
<!-- 登录 -->
<div class="user_content" style="height: 100%; display: block;">
    <div class="account_login"><img src="/images/logo.png"></div>
    <form action="" method="post" id="login_form">
        <div class="cus_form_list">
            <ul>
                <li>
                    <label class="login_user_icon">登录账号</label>
                    <div class="input_text" id="phoneNoDiv">
                        <input v-model="username" @input="setLoginBool" 
                        type="text" placeholder="用户名/手机号" style="width: 100%;">
                        <span style="float:right;color:#ae5b64" id="noError"></span>
                    </div>
                </li>
                <li>
                    <label class="login_pass_icon">密码</label>
                    <div class="input_text">
                        <input v-model="password" @input="setLoginBool" 
                        type="password" placeholder="登录密码" style="width: 100%">
                    </div>
                </li>
            </ul>
            <div class="row" id="m_tips_box1_error" v-show="msg">
                <p style="width:100%;font-size:.95rem;line-height:30px;vertical-align:middle;text-align:left;color:#ae5b64;" :style="{visibility: errors.errorbool}" id="login_error_message">{{errors.errortip}}</p>
            </div>
            <button type="button" class="login_button" 
                disabled="{{loginBool}}" @click="emitLogin">
                登录
            </button>
            <a href="forgetpassword.jsp" class="login_tips">忘记密码</a>
        </div>
    </form>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Login',
    data () {
        return {
            msg: '',
            username: '',
            password: '',
            loginBool: true
        }
    },
    computed: {
        ...mapGetters(['errors'])
    },
    methods: {
        ...mapActions(['initCheckLogin', 'userLogin']),
        setLoginBool () {
            this.initCheckLogin();
            if(this.username.trim() && this.password.trim()){
                this.loginBool = false;
            }else{
                this.loginBool = true;
            }
        },
        emitLogin () {
            if(!this.loginBool){
                this.userLogin({
                    username: this.username,
                    password: this.password
                })
            }
        }
    },
    components: {}
}
</script>
