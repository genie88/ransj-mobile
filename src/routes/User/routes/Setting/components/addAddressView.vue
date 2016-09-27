<template>
    <v-secondary-nav :title="'添加地址'"></v-secondary-nav>

    <!-- 添加地址 -->
    <div class="user_content wd90">
        <div class="form1">
            <validator name="VDT">
            <form novalidate>
                <div class="f_list pre">
                    <label class="c_1e384b">收货人</label>
                    <input v-model="address.accept_name"
                        v-validate:acceptname="{ required: true, maxlength: 50 }"
                        type="text" placeholder="姓名">
                    <div class="f12 c_e88671 mt10" v-if="$VDT.acceptname.touched">
                        <p v-if="$VDT.acceptname.required">请填写收货人姓名</p>
                        <p v-if="$VDT.acceptname.maxlength">姓名太长</p>
                    </div>
                </div>
                <div class="f_list pre">
                    <label class="c_1e384b">手机号码</label>
                    <input type="text" v-model="address.mobile"
                        v-validate:mobile="{ pattern: '/^\d{11}$/' }"
                        placeholder="手机号码"/>
                    <div class="f12 c_e88671 mt10" v-if="$VDT.mobile.touched">
                        <p v-if="$VDT.mobile.pattern">
                        请填写正确的手机号码</p>
                    </div>
                </div>
                <div class="f_list pre">
                    <label class="c_1e384b">收货地区</label>
                    <div class="area_con ml10">
                        <span>长沙</span>
                        <span class="ml10">长沙市</span>
                        <span class="u_area_select">
                            <select id="area" v-model="address.county" style="width:100px;height:20px;font-size:12px;" v-validate:county="['required']">
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
                    <div class="f12 c_e88671 mt10" v-if="$VDT.county.touched">
                        <p v-if="$VDT.county.required">请选择收货地区</p>
                    </div>
                </div>
                <div class="f_list pre">
                    <label class="c_1e384b">详细地址</label>
                    <input type="text" placeholder="填写地址" v-model="address.addr" v-validate:addr="['required']">
                    <div class="f12 c_e88671 mt10" v-if="$VDT.addr.touched">
                        <p v-if="$VDT.addr.required">请填写收货详细地址</p>
                    </div>
                </div>
                <div class="f_list pre">
                    <span class="c_1e384b">设为默认地址</span>
                    <span class="switch fr core" :class="defaultAddr ? 'on': ''"
                        @click="toggleDefaultAddr()">
                        <span class="switch_bar"></span>
                    </span>
                </div>
                
            </form>
            </validator>
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
                province: 430000,
                city: 430100,
                county:0,
            },
            defaultAddr: false
        }
    },
    computed: {
        ...mapGetters(['addresses']),
    },
    methods: {
        ...mapActions(['updateReceiptAdress', 'showToast', '']),
        toggleDefaultAddr(){
            this.$data.defaultAddr = !this.$data.defaultAddr;
            this.$data.address.is_default = this.$data.defaultAddr ? 1 : 0;
        },
        onSaveAddress(){
            // console.log(this.$VDT.valid);
            if(!this.$VDT.valid) {
                this.showToast({tips: '请填写完整的信息!', fail: true});
                return;
            }
            this.updateReceiptAdress(this.$data.address).then((json)=>{
                this.showToast({tips: '添加地址成功'});
            })
            
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