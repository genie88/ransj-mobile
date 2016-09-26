<template>
    <v-secondary-nav :title="'添加地址'"></v-secondary-nav>

    <!-- 添加地址 -->
    <div class="user_content wd90" style="display:;">
        <div class="form1">
            <form>
                <div class="f_list pre">
                    <label class="c_1e384b">收货人</label>
                    <input v-model="address.accept_name" type="text" placeholder="姓名">
                </div>
                <div class="f_list pre">
                    <label class="c_1e384b">联系电话</label>
                    <input type="text" v-model="address.phone" placeholder="手机号码"/>
                </div>
                <div class="f_list pre">
                    <label class="c_1e384b">收货地区</label>
                    <div class="area_con ml10">
                        <span>长沙</span>
                        <span class="ml10">长沙市</span>
                        <span class="u_area_select">
                            <select id="area" v-model="address.county" style="width:100px;height:20px;font-size:12px;">
                                <option value="0">请选择</option>
                                <option value="430102">芙蓉区</option>
                                <option value="430103">天心区</option>
                                <option value="430104">岳麓区</option>
                                <option value="430105">开福区</option>
                                <option value="430111">雨花区</option>
                                <option value="430122">望城区</option>
                                <option value="430121">长沙县</option>
                            </select>
                        </span>
                    </div>
                </div>
                <div class="f_list pre">
                    <label class="c_1e384b">详细地址</label>
                    <input type="text" placeholder="填写地址" v-model="address.addr">
                </div>
                <div class="f_list pre">
                    <span class="c_1e384b">设为默认地址</span>
                    <span class="switch fr core" :class="defaultAddr ? 'on': ''"
                        @click="toggleDefaultAddr()">
                        <span class="switch_bar"></span>
                    </span>
                </div>
                
            </form>
        </div>
        <div class="keep_btn mt20" @click.prevent="onSaveAddress()">保存</div>
    </div>

    
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import vSecondaryNav from '../../../../../components/SecondaryNav'
import vTabHeader from '../../../../../components/TabHeader'
export default {
    data () {
        return {
            address: {
                county:0
            },
            defaultAddr: false
        }
    },
    computed: {
        ...mapGetters(['addresses']),
    },
    methods: {
        ...mapActions(['saveAddress', 'showToast']),
        toggleDefaultAddr(){
            this.$data.defaultAddr = !this.$data.defaultAddr;
            this.$data.address.is_default = this.$data.defaultAddr ? 1 : 0;
        },
        onSaveAddress(){
            this.showToast({tips: '添加地址成功'})
            console.log(this.$data.address);
        }
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