<template>
<header class="">
    <div class="user_nav">
        <span class="arrow" onclick="javascript:history.go(-1);"></span>
        <ul class="user_tabs">
            <li><a v-link="{ path: '/user/login' }">登录</a></li>
            <li class="on"><a v-link="{ path: '/user/register' }">注册</a></li>
        </ul>
    </div>
</header>
<div class="user_content" style="height: 100%; display: block;">
    <div class="account_login"><img src="/images/logo.png"/></div>
    <form action="" method="post" id="register_form">
        <div class="cus_form_list">
            <ul>
                <li>
                    <label class="res_tel_icon">手机号</label>
                    <div class="input_text" id="regPhoneNoDiv">
                        <span class="f14 fb">+86</span>
                        <input v-model="username" @input="setRegisterBool" autocomplete="off" type="text" name="username" placeholder="填写您的手机号" class="" style="display:inline-block;padding-left:10px;width:53%">
                        <input type="button" id="btn" value="{{registerErrors.codeMsg}}"
                        disabled="{{registerErrors.getCodeBool}}" @click="getCode" class="password_style getM">
                    </div>
                </li>
                <li>
                    <label class="res_sms_icon">验证码</label>
                    <div class="input_text">
                        <input v-model="code" @input="setRegisterBool" type="text" name="verifyCode" placeholder="填写短信验证码">
                    </div>
                </li>
                <li>
                    <label class="res_pass_icon">密码</label>
                    <div class="input_text">
                        <input v-model="password" @input="setRegisterBool" type="password" name="password" placeholder="6-16个字符" style="width: 100%">
                        <span id="togglePassword" for="togglePassword" class="password_style password_off"></span>
                    </div>
                </li>
            </ul>
            <div class="row" id="m_tips_box2_error" style="display:none;">
                <p style="width:100%;font-size:.95rem;line-height:30px;vertical-align:middle;text-align:left;color:#ae5b64;" id="reg_error_message" :style="{visibility: registerErrors.errorbool}">{{registerErrors.errortip}}</p>
            </div>
            <button type="button" class="res_button" 
                disabled="{{registerBool}}" @click="emitRegister">
                注册
            </button>
        </div>
    </form>
</div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'Register',
        data () {
            return {
                register: {},
                username: '',
                password: '',
                code: '',
                registerBool: true,
                referer: ''
            }
        },
        computed: {
            ...mapGetters(['registerErrors'])
        },
        methods: {
            ...mapActions(['initCheckRegister', 'registerCode', 'userRegister']),
            setRegisterBool () {
                this.initCheckRegister();
                if(this.username.trim() && this.password.trim() && this.code.trim()){
                    this.registerBool = false;
                }else{
                    this.registerBool = true;
                }
            },
            getCode () {
                this.registerCode({
                    username:this.username,
                    code: this.code
                });
            },
            emitRegister () {
                if(!this.registerBool){
                    this.userRegister({
                        username: this.username,
                        password: this.password,
                        code: this.code,
                        referer: this.referer
                    })
                }
            }
            // register(){
            //     $.ajax({
            //         url: 'http://ransj.com/user/register',
            //         type: 'POST',
            //         data: {
            //             username: this.$data.username,
            //             mobile: this.$data.username,
            //             email: this.$data.username,
            //             password: this.$data.password,
            //             password2: this.$data.password,
            //             clause: 'on' //是否同意服务条款
            //         },
            //         success: function(json){
            //             console.log(json);
            //         }
            //     })
            // }
        },
        route: {
            data ({to}) {
                if(to.query.referer){
                    this.referer = to.query.referer
                }
            }
        },
        ready(){

        }
    }
</script>

