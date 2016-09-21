<template>
    <form id="upForm" method="POST" enctype="multipart/form-data">
<div class="user_content wd80 pb20" style="display: block;">
    <div class="user_photo_level">
        <div class="user_header user_managecon">
            <div class="user_photo_c pre">
                <div class="user_photo">
                    <img class="my_img" src="/mine_2.0/img/touxiang.png">
                </div>
                <input id="tx_file" name="file0" class="user_photo" type="file" accept="image/*;capture=camera" style="opacity:0;left:0px;top:10px;position: absolute;height:15px;width:55px;padding:20px 7%">
                <div class="user_edit"><img src="/mine_2.0/img/user_edit.png"></div>
            </div>
            <input type="hidden" id="imgId" name="imgId">
        </div>
    </div>
    <div class="form1 pt10">
        
            <div class="f_list"><label>用户名</label><input type="text" placeholder="输入用户名" id="name" name="name"></div>
            <div class="f_list">
                <label>性别</label>
                    <span class="u_sex">
                        <a href="#" class="u_sex_w on">女</a>
                        <a href="#" class="u_sex_m">男</a>
                    </span>
                <input type="hidden" id="sex" name="sex">
            </div>
            <div class="f_list"><label>手机号</label><input type="text" placeholder="输入手机号" id="mobile" name="mobile"></div>
            <div class="f_list"><label>QQ</label><input type="text" placeholder="输入QQ号" id="qq" name="qq"></div>
        
    </div>
    <div><input type="submit" class="keep_btn mt20" value="保 存" style="width:100%"></div>
</div></form>
</template>

<script>    
    export default {
        name: 'v-edit-user-info',
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>