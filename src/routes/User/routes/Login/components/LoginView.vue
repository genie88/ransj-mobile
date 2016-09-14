<template>
<header class="">
    <div class="user_nav">
        <span class="arrow" onclick="javascript:history.go(-1);"></span>
        <ul class="user_tabs">
            <li class="on" id="1"><a href="#!/user/login">登录</a></li>
            <li class="" id="2"><a href="#!/user/register">注册</a></li>
        </ul>
    </div>
</header>
<!-- 登录 -->
<div class="user_content" style="height: 100%; display: block;">
    <div class="account_login"><img src="http://ransj.com/static/b2c/css/widgets/headers/logo_modified.png"></div>
    <form action="" method="post" id="login_form">
        <div class="cus_form_list">
            <ul>
                <li>
                    <label class="login_user_icon">登录账号</label>
                    <div class="input_text" id="phoneNoDiv"><input v-model="username" type="text" placeholder="用户名/手机号" style="width: 100%;"><span style="float:right;color:#ae5b64" id="noError"></span></div>
                </li>
                <li>
                    <label class="login_pass_icon">密码</label>
                    <div class="input_text"><input v-model="password" type="password" placeholder="登录密码" style="width: 100%"></div>
                </li>
            </ul>
            <div class="row" id="m_tips_box1_error" v-show="msg">
                <p style="width:100%;font-size:.95rem;line-height:30px;vertical-align:middle;text-align:left;color:#ae5b64;" id="login_error_message">{{msg}}</p>
            </div>
            <button type="button" class="login_button" @click.prevent="login()">登录</button>
            <a href="forgetpassword.jsp" class="login_tips">忘记密码</a>
        </div>
    </form>
</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: '',
                username: '',
                password: ''
            }
        },
        methods: {
            login(){
                if(this.$data.username.length < 1) {
                    this.$data.msg = '还没有你的名字呢'
                    return;
                }
                if(this.$data.password.length < 1) {
                    this.$data.msg = '还没有输入密码呢';
                    return;
                }
                $.ajax({
                    url: 'http://ransj.com/user/login',
                    type: 'POST',
                    data: {
                        username: this.$data.username,
                        password: this.$data.password
                    },
                    success: function(json){
                        console.log(json);
                    }
                })
            }
        },
        components: {},
        ready(){

        }
    }
</script>
