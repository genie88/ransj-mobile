<template>
    <v-secondary-nav :title="'基本信息'">
    </v-secondary-nav>
    <v-tab-header :tabs="tabs" v-on:tabchange="onTabChange">
    </v-tab-header>
    <!-- 基本信息设置 -->
    <form enctype="multipart/form-data" id="upForm" method="POST" v-if="showTab == 0">
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
    <!-- <div class="user_content wd90" v-if="showTab == 1">
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
    </div> -->
    <div class="user_content wd90" v-if="showTab == 1">
        <div class="form1 pt10" style="margin-top:100px;">
            <validator name="UPDATEPASSWORD">
            <form method="post" action="">
                <div class="f_list pre">
                    <label class="c_1e384b">旧密码</label>
                    <input v-model="security.oldpassword" type="password" 
                    v-validate:oldpassword="{ required: true, minlength: 6, maxlength: 20 }"
                    placeholder="输入旧密码" id="passwordOld">
                    <span class="m_tips1" v-if="$UPDATEPASSWORD.oldpassword.touched">
                        <span v-if="$UPDATEPASSWORD.oldpassword.required">请输入旧密码</span>
                        <span v-if="$UPDATEPASSWORD.oldpassword.minlength">密码太短</span>
                        <span v-if="$UPDATEPASSWORD.oldpassword.maxlength">密码太长</span>
                    </span>
                </div>
                <div class="f_list pre">
                    <label class="c_1e384b">新密码</label>
                    <input v-model="security.password" type="password" 
                    v-validate:oldpassword="{ required: true, minlength: 6, maxlength: 20 }"
                    name="pass" vlaue="" placeholder="6-20个字符" id="passwordNew">
                    <span class="m_tips2">强度<strong class="t_word"></strong></span>
                    <span class="t_info pass_put">请输入6-20位密码</span>
                    <!-- <span class='safe'>强度<strong class='word'></strong></span> -->
                    <span class="m_tips3 pass_error"></span>
                    <span class="m_tips1 pass_ok"></span>
                </div>
                <div class="f_list pre">
                    <label class="c_1e384b">确认密码</label>
                    <input v-model="security.password2" type="password" 
                    v-validate:oldpassword="{ required: true, minlength: 6, maxlength: 20 }"
                    name="confirm_pass" placeholder="再次输入新密码" id="passwordConfirm">
                    <!-- <span class="m_tips3"></span> -->
                    <span class="t_info confirm_put">请再次输入密码</span>
                    <span class="m_tips3 confirm_error"></span>
                    <span class="m_tips1 confirm_ok"></span>
                </div>
            </form>
            </validator>
        </div>
        <div class="keep_btn mt20" @click="onUpdatePassword()">确认</div>
    </div>

    <!-- 收货地址 -->
    <div class="user_content" id="addrManager" v-if="showTab == 2">
        <div class="height45"></div>
        <div class="user_addaddress">
            <a class="f14" v-link="{path: '/user/address/add'}">
                添加收货地址
            </a>
        </div>
        <div class="user_address_items" v-for="addr in addresses" :class="addr.is_default ? 'default_address': ''">
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
                <div class="f14 fl" @click.prevent="setDefaultAddress(addr.id)" v-if="!addr.is_default">
                    <label>
                        设为默认
                    </label>
                </div>
                <div class="f14 fl" v-if="addr.is_default">
                    <label style="color:#ee9b84;">
                        <input checked="true" class="addr_default mr5"
                             name="default" type="radio"/>
                             默认地址
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
                gender: 0,
                qq: ''
            },
            security: {
                password: '',
                password2: '',
                oldpassword: '',
            }
        }
    },
    computed: {
        ...mapGetters(['userInfo', 'addresses'])
    },
    methods: {
        ...mapActions(['getUserInfo', 'saveUserInfo', 'showToast', 'showConfirmDialog', 'getReceiptAdress', 'delReceiptAdress', 'updateReceiptAdress', 'updatePassword', 'updateUserProfile']),
        //tab切换
        onTabChange(index){
            this.$data.showTab = index;
            this.$data.tabs.forEach((tab)=>{
                tab.current = false;
            })
            this.$data.tabs[index].current = true;
        },
        //设置性别
        setGender(gender){
            this.$data.user.gender = gender;
            console.log(JSON.stringify(this.$data.user))
        },
        //保持用户信息
        saveUserInfo(){
             console.log(JSON.stringify(this.$data.user))
            this.updateUserProfile(this.$data.user).then((json) => {

                if(json && json.errno == 0) {
                    this.showToast({tips: '用户信息更新成功'});
                } else {
                    this.showToast({tips: json.errmsg, fail: true});
                }
            })
        },

        //更新密码
        onUpdatePassword(){
            if(!this.$UPDATEPASSWORD.valid) {
                this.showToast({tips: '请检查输入是否正确!', fail: true});
                return;
            }
            // console.log(JSON.stringify(this.$data.security))
            this.updatePassword(this.$data.security).then((json) => {
                if(json && json.errno == 0) {
                    this.showToast({tips: '密码修改成功'});
                } else {
                    this.showToast({tips: json.errmsg, fail: true});
                }
            })
        },

        //编辑按钮
        editAddress(id){
            router.go(`/user/address/edit/${id}`)
        },

        //设置为默认地址
        setDefaultAddress(id){
            this.updateReceiptAdress({id: id, is_default: 1, action: 'SET_DEFAULT'})
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
                qq: newval.qq
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