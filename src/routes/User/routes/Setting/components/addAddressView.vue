<template>
    <v-secondary-nav :title="'添加地址'"></v-secondary-nav>

    <!-- 添加地址 -->
    <div class="user_content wd90" style="display:;">
        <div class="form1">
            <form>
                <div class="f_list pre">
                    <label class="c_1e384b">收货人</label>
                    <input id="ship_name" type="text" placeholder="姓名">
                    <div class="recordname" style="display:none;">11</div>
                </div>
                <div class="f_list pre">
                    <label class="c_1e384b">联系电话</label>
                    <input type="text" id="ship_mobile" placeholder="手机号码">
                </div>
                <div class="f_list pre">
                    <label class="c_1e384b">收货地区</label>
                    <div class="area_con ml10">
                        <span>上海</span>
                        <span class="ml10">上海市</span>
                        <span class="u_area_select">
                            <select id="area">
                                <option zip="200001" value="">请选择</option>
                                
                                    <option zip="200001" value="23">黄浦区</option>
                                
                                    <option zip="200001" value="24">卢湾区</option>
                                
                                    <option zip="200001" value="25">徐汇区</option>
                                
                                    <option zip="200001" value="26">长宁区</option>
                                
                                    <option zip="200001" value="27">静安区</option>
                                
                                    <option zip="200001" value="28">普陀区</option>
                                
                                    <option zip="200001" value="29">闸北区</option>
                                
                                    <option zip="200001" value="30">虹口区</option>
                                
                                    <option zip="200001" value="31">杨浦区</option>
                                
                                    <option zip="200001" value="35">浦东新区</option>
                                
                                    <option zip="200001" value="36">闵行区</option>
                                
                                    <option zip="200001" value="37">宝山区</option>
                                
                                    <option zip="200001" value="38">嘉定区</option>
                                
                                    <option zip="200001" value="39">奉贤区</option>
                                
                                    <option zip="200001" value="40">青浦区</option>
                                
                                    <option zip="200001" value="41">松江区</option>
                                
                                    <option zip="200001" value="42">南汇区</option>
                                
                                    <option zip="200001" value="44">金山区</option>
                                
                            </select>
                        </span>
                    </div>
                </div>
                <div class="f_list pre">
                    <label class="c_1e384b">详细地址</label>
                    <input type="text" placeholder="填写地址" id="ship_addr">
                </div>
                <div class="f_list pre">
                    <span class="c_1e384b">设为默认地址</span>
                    <span class="switch fr core"><span class="switch_bar"></span></span>
                </div>
                
            </form>
        </div>
        <div class="keep_btn mt20" id="btn-submit">保存</div>
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