<template>
<header class="">
    <div class="user_nav">
        <span class="arrow" onclick="javascript:history.go(-1);"></span>
        <ul class="user_tabs">
            <li class="" id="1"><a href="#!/user/login">登录</a></li>
            <li class="on" id="2"><a href="#!/user/register">注册</a></li>
        </ul>
    </div>
</header>
<div class="user_content" style="height: 100%; display: block;">
   <!--  <div class="account_login"><img src="http://ransj.com/static/b2c/css/widgets/headers/logo_modified.png"/></div> -->
    <form action="" method="post" id="register_form">
        <div class="cus_form_list">
            <ul>
                <li>
                    <label class="res_tel_icon">手机号</label>
                    <div class="input_text" id="regPhoneNoDiv">
                        <span class="f14 fb">+86</span>
                        <input v-model="username" autocomplete="off" type="text" name="username" placeholder="填写您的手机号" class="" style="display:inline-block;padding-left:10px;width:53%">
                        <input type="button" id="btn" value="获取验证码" class="password_style getM">
                    </div>
                </li>
                <li>
                    <label class="res_sms_icon">验证码</label>
                    <div class="input_text">
                        <input v-model="verifyCode" type="text" name="verifyCode" placeholder="填写短信验证码">
                    </div>
                </li>
                <li>
                    <label class="res_pass_icon">密码</label>
                    <div class="input_text">
                        <input v-model="password" type="password" name="password" placeholder="6-20个字符" style="width: 100%">
                        <span id="togglePassword" for="togglePassword" class="password_style password_off"></span>
                    </div>
                </li>
            </ul>
            <div class="row" id="m_tips_box2_error" style="display:none;">
                <p style="width:100%;font-size:.95rem;line-height:30px;vertical-align:middle;text-align:left;color:#ae5b64;" id="reg_error_message"></p>
            </div>
            <button type="button" class="res_button" @click.prevent="register()">注册</button>
        </div>
    </form>
</div>
</template>

<script>
    export default {
        data () {
            return {
                username: '',
                verifyCode: '',
                password: ''
            }
        },
        methods: {
            register(){
                $.ajax({
                    url: 'http://ransj.com/user/register',
                    type: 'POST',
                    data: {
                        username: this.$data.username,
                        mobile: this.$data.username,
                        email: this.$data.username,
                        password: this.$data.password,
                        password2: this.$data.password,
                        clause: 'on' //是否同意服务条款
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

