<template>
    <v-secondary-nav :title="'基本信息'">
    </v-secondary-nav>
    <v-tab-header :tabs="tabs" v-on:tabchange="onTabChange()">
    </v-tab-header>
    <!-- 基本信息设置 -->
    <form enctype="multipart/form-data" id="upForm" method="POST" v-if="showTab == 1">
        <div class="height45">
        </div>
        <div class="user_content wd80 pb20" style="display: block;">
            <div class="user_photo_level">
                <div class="user_header user_managecon">
                    <div class="user_photo_c pre">
                        <div class="user_photo">
                            <img class="my_img" src="/img/touxiang.png">
                            </img>
                        </div>
                        <!-- <input id="tx_file" name="file0" class="user_photo" type="file" accept="image/*;capture=camera" style="opacity:0;left:0px;top:10px;position: absolute;height:15px;width:55px;padding:20px 7%"> -->
                        <div class="user_edit">
                            <img src="/img/user_edit.png" style="margin-left: 6px;">
                            </img>
                        </div>
                    </div>
                    <input id="imgId" name="imgId" type="hidden">
                    </input>
                </div>
            </div>
            <div class="form1 pt10">
                <div class="f_list">
                    <label>
                        用户名
                    </label>
                    <input id="name" name="name" 
                        placeholder="输入用户名" type="text" 
                        v-model="user.username"/>
                </div>
                <div class="f_list">
                    <label>
                        性别
                    </label>
                    <span class="u_sex">
                        <a class="u_sex_w" 
                            :class="!user.gender? 'on': ''" 
                            @click.prevent="setGender(0)">
                            女
                        </a>
                        <a class="u_sex_m" 
                            :class="user.gender? 'on': ''" 
                            @click.prevent="setGender(1)">
                            男
                        </a>
                    </span>
                    <input id="sex" name="sex" type="hidden"/>
                </div>
                <div class="f_list">
                    <label>
                        QQ
                    </label>
                    <input id="qq" name="qq" 
                        placeholder="输入QQ号" type="text" 
                        v-model="user.qq"/>
                </div>
            </div>
            <div>
                <input class="keep_btn mt20" style="width:100%" 
                    type="submit" value="保 存"
                    @click.prevent="saveUserInfo()"/>
            </div>
        </div>
    </form>
    <!-- 安全设置 -->
    <div class="user_content wd90" style="display: block;" v-if="showTab == 1">
        <div class="height45"></div>
        <div class="tips pt10">
            建议您开启全部安全设置，以保障账户及资金安全
        </div>
        <hr class="hr_b mt20">
            <div class="member_security">
                <form>
                    <div class="ac_securityitem confirm_icon">
                        <div class="ac_securityTitle">
                            登录密码
                        </div>
                        <div class="ac_securityAction">
                            <a class="u_s_btn modify_btn" href="user_modify_password.jsp">
                                修改
                            </a>
                        </div>
                    </div>
                    <div class="ac_securityitem confirm_icon">
                        <div class="ac_securityTitle">
                            <p>
                                手机已验证
                            </p>
                        </div>
                        <div class="ac_securityAction">
                            <a class="u_s_btn modify_btn" href="user_change_mobile1.jsp">
                                修改
                            </a>
                        </div>
                    </div>
                    <div class="ac_securityitem no_confirm_icon">
                        <div class="ac_securityTitle">
                            <p>
                                邮箱未验证
                            </p>
                        </div>
                        <div class="ac_securityAction">
                            <a class="u_s_btn go_modify_btn" href="user_change_email1.jsp">
                                去验证
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </hr>
    </div>
    <!-- 收货地址 -->
    <div class="user_content" id="addrManager" style="display: block;" v-if="showTab == 0">
        <div class="height45"></div>
        <div class="user_addaddress">
            <a class="f14" v-link="{path: '/user/address/add'}">
                添加收货地址
            </a>
        </div>
        <div class="user_address_items" v-for="addr in addresses">
            <div class="user_address">
                <div class="address_info">
                    <div class="name f14">
                        <span class="mr5">
                            {{addr.accept_name}}
                        </span>
                        |
                        <span class="ml5">
                            {{addr.mobile}}
                        </span>
                    </div>
                    <div class="f14 mt5">
                        {{addr.province}}{{addr.city}}{{addr.county}}{{addr.addr}}
                    </div>
                </div>
            </div>
            <div class="new_addr_btn">
                <div class="f14 fl" @click.prevent="setDefaultAddress(addr.id)">
                    <label>
                        <input checked="true" class="addr_default mr5" 
                            name="default" type="radio"/>
                            设为默认
                        </input>
                    </label>
                </div>
                <div class="del_adress f14" @click.prevent="confirmDeleteAddress(addr.id)">
                    <span>
                    </span>
                    删除
                </div>
                <div class="bj_adress f14" @click.prevent="editAddress(addr.id)">
                    <span>
                    </span>
                    编辑
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import vSecondaryNav from '../../../../../components/SecondaryNav'
import vTabHeader from '../../../../../components/TabHeader'
export default {
    name: 'MySettingView',
    data () {
        return {
            showTab: 0,
            tabs: [
                {index:0, name: '基本信息', current: true},
                {index:1, name: '修改密码', current: false},
                {index:2, name: '收货地址', current: false}
            ],
            user: {
                gender: '',
                username: '',
                mobile: '',
                qq: ''
            }
        }
    },
    computed: {
        ...mapGetters(['userInfo', 'addresses'])
    },
    methods: {
        ...mapActions(['getUserInfo', 'saveUserInfo', 'showToast', 'showConfirmDialog', 'getReceiptAdress', 'delReceiptAdress']),
        //tab切换
        onTabChange(index){
            console.log(index);
        },
        //设置性别
        setGender(gender){
            this.$data.user.gender = gender;
            console.log(this.$data.user)
        },
        //保持用户信息
        saveUserInfo(){

        },

        //删除收货地址
        confirmDeleteAddress(id){
            this.showConfirmDialog({
                title: '确定要删除',
                content: '删除后将不可恢复!',
                onConfirm: () => {
                    this.delReceiptAdress(id);
                    this.showToast({tips: '删除地址成功'});
                }
            })
        }
    },
    watch: {
        'userInfo': function(newval){
            this.$data.user = {
                avatar: newval.avatar,
                gender: newval.gender,
                username: newval.username,
                mobile: newval.mobile,
                qq: newval.qq || newval.email
            }; 
        }
    },
    route: {
        data (){
            this.getUserInfo();
            this.getReceiptAdress();
        }
    },
    components: {
        vSecondaryNav,
        vTabHeader
    },
    ready(){}
}
</script>