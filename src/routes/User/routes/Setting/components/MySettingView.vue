<template>
    <v-secondary-nav :title="'基本信息'"></v-secondary-nav>
    <v-tab-header></v-tab-header>

    <!-- 基本信息设置 -->
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
        </div>
    </form>



    <!-- 安全设置 -->
    <div class="user_content wd90" style="display: block;">
        <div class="tips pt10">建议您开启全部安全装置，以保障账户及资金安全</div>
        <hr class="hr_b mt20">
        <div class="member_security">
            <form>
                <div class="ac_securityitem confirm_icon">
                    <div class="ac_securityTitle">
                        登录密码
                    </div>
                    <div class="ac_securityAction">
                        <a class="u_s_btn modify_btn" href="user_modify_password.jsp">修改 </a>
                    </div>
                </div>
               <div class="ac_securityitem confirm_icon">
                    <div class="ac_securityTitle">
                        <p>手机已验证</p>
                    </div>
                    <div class="ac_securityAction">
                        <a class="u_s_btn modify_btn" href="user_change_mobile1.jsp">修改 </a>
                    </div>
                </div>
                <div class="ac_securityitem no_confirm_icon">
                    <div class="ac_securityTitle">
                        <p>邮箱未验证</p>
                    </div>
                    <div class="ac_securityAction">
                        <a class="u_s_btn go_modify_btn" href="user_change_email1.jsp">去验证 </a>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- 收货地址 -->
    <div class="user_content" style="display: block;" id="addrManager">
        <div class="user_addaddress" onclick="window.open('/address2_toadd','_self')">
            <span class="f14">添加收货地址</span>
        </div>
        <div class="user_address_items"><div class="user_address"><div class="address_info"> <div class="name f14"><span class="mr5">aaa</span>|<span class="ml5">18709889066</span></div><div class="f14 mt5">上海上海市黄浦区aaa</div></div></div><div class="new_addr_btn"><div class="f14 fl"><label><input type="radio" class="addr_default mr5" name="default" checked="checked" onclick="SetDefault(this)">设为默认</label><input type="hidden" name="ship_id" value="18682"><input type="hidden" name="ship_name" value="aaa"><input type="hidden" name="ship_area" value="mainland:上海/上海市/黄浦区:23"><input type="hidden" name="ship_addr" value="aaa"><input type="hidden" name="ship_zip" value="null"><input type="hidden" name="ship_tel" value="null"><input type="hidden" name="ship_mobile" value="18709889066"><input type="hidden" name="is_default" value="true"></div><div class="del_adress f14" onclick="confirmDelete(18682)"><span></span>删除</div><div class="bj_adress f14" onclick="edit(this)"><span></span>编辑</div></div></div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import vSecondaryNav from '../../../../../components/SecondaryNav'
import vTabHeader from '../../../../../components/TabHeader'
export default {
    data () {
        return {
            
        }
    },
    computed: {

    },
    methods: {

    },
    route: {
        data (){

        }
    },
    components: {
        vSecondaryNav,
        vTabHeader
    },
    ready(){}
}
</script>