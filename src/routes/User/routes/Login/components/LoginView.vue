<template>
<header class="">
    <div class="user_nav">
        <span class="arrow" onclick="javascript:history.go(-1);"></span>
        <ul class="user_tabs">
            <li class="on" id="1"><a href="javascript:;">登录</a></li>
            <li class="" id="2"><a href="javascript:;">注册</a></li>
        </ul>
    </div>
</header>
<!-- 登录 -->
<div class="user_content" style="height: 100%; display: block;">
    <div class="account_login"><img src="http://m.yimishiji.com/mine_2.0/img/user_icon/yimiLogo.png"></div>
    <form action="" method="post" id="login_form">
        <div class="cus_form_list">
            <ul>
                <li>
                    <label class="login_user_icon">登录账号</label>
                    <div class="input_text" id="phoneNoDiv"><input type="text" name="login[username]" id="phoneNumber" placeholder="用户名/手机号" style="width: 100%;"><span style="float:right;color:#ae5b64" id="noError"></span></div>
                </li>
                <li>
                    <label class="login_pass_icon">密码</label>
                    <div class="input_text"><input type="password" name="login[password]" id="password" placeholder="登录密码" style="width: 100%"></div>
                </li>
            </ul>
            <div class="row" id="m_tips_box1_error" style="display:none;">
                <p style="width:100%;font-size:.95rem;line-height:30px;vertical-align:middle;text-align:left;color:#ae5b64;" id="login_error_message"></p>
            </div>
            <button type="button" class="login_button">登录</button>
            <a href="forgetpassword.jsp" class="login_tips">忘记密码</a>
        </div>
    </form>
</div>
<!-- 注册 -->
<div class="user_content" style="display: none;">
    <div class="account_login"><img src="/mine_2.0/img/user_icon/yimiLogo.png"></div>
    <form action="" method="post" id="register_form">
        <div class="cus_form_list">
            <ul>
                <li>
                    <label class="res_tel_icon">手机号</label>
                    <div class="input_text" id="regPhoneNoDiv">
                        <span class="f14 fb">+86</span>
                        <input type="text" name="login[username]" id="regPhoneNumber" placeholder="填写您的手机号" class="" style="display:inline-block;padding-left:10px;width:53%">
                        <input type="button" id="btn" value="获取验证码" class="password_style getM" onclick="sendVerificationCode(this)">
                    </div>
                </li>
                <li>
                    <label class="res_sms_icon">验证码</label>
                    <div class="input_text">
                        <input type="text" name="verificationCode" id="verificationCode" placeholder="填写短信验证码" style="width: 50%">
                    </div>
                </li>
                <li>
                    <label class="res_pass_icon">密码</label>
                    <div class="input_text">
                        <input id="regPassword" type="password" name="res[password]" placeholder="6-20个字符" style="width: 100%">
                        <span id="togglePassword" for="togglePassword" class="password_style password_off"></span>
                    </div>
                </li>
            </ul>
            <div class="row" id="m_tips_box2_error" style="display:none;">
                <p style="width:100%;font-size:.95rem;line-height:30px;vertical-align:middle;text-align:left;color:#ae5b64;" id="reg_error_message"></p>
            </div>
            <button type="button" class="res_button">注册</button>
        </div>
    </form>
</div>

<div class="m_tips_box" id="m_tips_box1" style="display:none;">
    <div class="">
        <img src="/mine_2.0/img/user_icon/blackpopupicon.png">
        <p>登录成功</p>
    </div>
</div>

<div class="m_tips_box" id="m_tips_box2" style="display:none;">
    <div class="">
        <img src="/mine_2.0/img/user_icon/blackpopupicon.png">
        <p>注册成功</p>
    </div>
</div>

</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        components: {},
        ready(){
            $(document).ready(function(){
                var x = window.location.hash;
                if(x){
                    $(x).addClass("on").siblings().removeClass('on');
                    $(".user_content").hide().eq($(this).index(x)).show();
                    hiddenPhoneErrorMessage();
                }
                $(".user_nav .user_tabs li").click(function(){
                    $(".user_nav .user_tabs li").eq($(this).index()).addClass("on").siblings().removeClass('on');
                    $(".user_content").hide().eq($(this).index()).show();
                    hiddenPhoneErrorMessage();
                });
                $("#regPhoneNumber").change(function(){
                    hiddenRegPhoneErrorMessage();
                });
                /*$("#regPhoneNumber").focus(function(){
                    var btnvalue = $("#btn").val();
                    if(btnvalue!="获取验证码" && btnvalue.indexOf("发送")<0 ){
                        hiddenRegPhoneErrorMessage();
                    }
                });*/
            });
            $("#regPhoneNumber").change(function(){
                hiddenRegPhoneErrorMessage();
            });
            $("#phoneNumber").change(function(){
                hiddenPhoneErrorMessage();
            });
            $(".login_button").click(function(){
                var phoneNumber = $("#phoneNumber").val();
                if(phoneNumber==""){
                    showPhoneErrorMessage("请输入用户名/手机号");
                    return false;
                }
                var password = $("#password").val();
                var end_string = hex_md5(password);
                var fromurl = "http://m.yimishiji.com/mine_info";
                $.ajax({
                    url : "/YMSJ/login_ymsj",
                    type : "post",
                    data : {
                        "phoneNumber" : phoneNumber,
                        "password" : end_string
                    },
                    dataType : "json",
                    success : function(data) {
                        var projectName = getRootPath();
                        var msg = eval("("+data+")");
                        if (msg.data.message == "登录成功") {
                            $('#m_tips_box1').show().delay(1000).hide(0);
                            /* io统计 start */
                            var member_version = msg.data.member_id;
                            ioLoginSuccess(member_version);
                            /* io统计 end */

                            if(fromurl != null && fromurl != "") {
                                window.location.href = fromurl;
                            } else {
                                window.location.href = "/show_home";
                            }
                        }else if(msg.data.message=="查无此用户"){
                            showPhoneErrorMessage("此号码未注册");
                        }else{
                            if(password==""){
                                showPhoneErrorMessage("请输入密码");
                                return false;
                            }
                            showPhoneErrorMessage(msg.data.message);
                        }
                    }
                });
            });
            $(".res_button").click(function(){
                validateForm();
            });

        /*  function showMessage(message){
                $('#m_tips_box1_error').show().delay();
                $("#login_error_message").html(message);
            }
            function hiddenMessage(){
                $('#m_tips_box1_error').hide();
                $("#login_error_message").html("");
            }*/
            function showPhoneErrorMessage(message){
                /*$("#noError").html(message);
                $("#phoneNumber").css({
                    "width":"50%"
                });
                $("#phoneNoDiv").css({
                    "border-bottom":" 1px solid #ae5b64"
                });*/
                $('#m_tips_box1_error').show().delay();
                $("#login_error_message").html(message);
            }
            function hiddenPhoneErrorMessage(){
                /*$("#noError").html("");
                $("#phoneNumber").css({
                    "width":"100%"
                });
                $("#phoneNoDiv").css({
                    "border-bottom":" 1px solid #eef3f5"
                });*/
                $('#m_tips_box1_error').hide();
                $("#login_error_message").html("");
            }
            function showRegPhoneErrorMessage(message){
                /*$("#btn").attr("disabled", true).val(message);
                $("#btn").css({
                    "border": "0px",
                    "color":"#ae5b64"
                });
                $("#regPhoneNoDiv").css({
                    "border-bottom":" 1px solid #ae5b64"
                });*/
                $('#m_tips_box2_error').show().delay();
                $("#reg_error_message").html(message);
            }
            function hiddenRegPhoneErrorMessage(){
                /*$("#btn").removeAttr("disabled").val("获取验证码");
                $("#btn").css({
                    "color":"#1d384b",
                    "border": "1px solid #afc1cb"
                });
                $("#regPhoneNoDiv").css({
                    "border-bottom":" 1px solid #eef3f5"
                });*/
                $('#m_tips_box2_error').hide();
                $("#reg_error_message").html("");
            }


            //发送验证码
            function sendVerificationCode(obj) {
                var param = document.getElementById("regPhoneNumber").value;
                var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
                var temp = reg.test(param);
                if (temp == false) {
                    showRegPhoneErrorMessage("请输入正确的手机号")
                    return false;
                }
                $.ajax({
                    url : "/isPhoneRegisted",
                    type : "post",
                    data : {
                        "phoneNumber_ajax" : param,
                    },
                    dataType : "json",
                    success : function(data) {
                        var returndata = eval("(" + data + ")");
                        if (returndata.data.message == "已被占用！") {
                            showRegPhoneErrorMessage("手机号已被注册")
                            return false;
                        } else {
                            settime(obj);
                            $.ajax({
                                url : "/verificationCode",
                                type : "post",
                                data : {
                                    "phoneNumber_ajax" : param
                                },
                                dataType : "json",
                                success : function(data) {
                                }
                            });
                        }
                    }
                });
            };

            var countdown = 120;
            function settime(obj) {
                if (countdown == 0) {
                    obj.removeAttribute("disabled");
                    obj.value = "再次发送";
                    countdown = 120;
                    return;
                } else {
                    obj.setAttribute("disabled", true);
                    obj.value = "重新发送(" + countdown + ")";
                    countdown--;
                }
                setTimeout(function() {
                    settime(obj)
                }, 1000)
            }

            function validateForm() {
                var code = $("#verificationCode").val();
                var param = $("#regPhoneNumber").val();
                var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
                var temp = reg.test(param);
                if (temp == false) {
                    //手机格式不正确
                    showRegPhoneErrorMessage("请输入正确的手机号");
                    return false;
                }
                //验证码为空
                if (code == "") {
                    showRegPhoneErrorMessage("验证码不能为空");
                    return false;
                }
                //密码不能为空
                if (!$("#regPassword").val()) {
                    showRegPhoneErrorMessage("密码不能为空");
                    return false;
                }

                var username = document.getElementById("regPhoneNumber").value;
                var createtime = Math.round(new Date().getTime() / 1000);
                var source_str = $("#regPassword").val();
                var string_md5_only = hex_md5(source_str);
                var string_md5 = hex_md5(hex_md5(source_str) + username + createtime);
                var front_string = string_md5.substr(0, 31);
                var end_string = "s" + front_string;
                var x = $("#regPassword").val();
                x = end_string;
                $.ajax({
                    url : "/register_ymsj",
                    type : "post",
                    data : {
                        "phoneNumber" : username,
                        "password1" : end_string,
                        "password2" : string_md5_only,
                        "createtime" : createtime,
                        "verificationCode" : code
                    },
                    dataType : "json",
                    success : function(data) {
                        var msg = eval("("+data+")");
                        if (msg.message == "该手机号已被注册") {
                            showRegPhoneErrorMessage("手机号已被注册");
                            return false;
                        }if (msg.message == "短信验证错误") {
                            showRegPhoneErrorMessage("请输入正确的验证码");
                            return false;
                        }
                        $('#m_tips_box2').show().delay(1000).hide(0);
                        
                        window.location.href = "/login_ymsj";
                    }
                });

            }

        }
    }
</script>
