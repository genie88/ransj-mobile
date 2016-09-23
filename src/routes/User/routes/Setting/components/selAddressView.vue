<template>
    <v-secondary-nav :title="'选择地址'"></v-secondary-nav>

    <div class="user_content">
        <div class="user_addaddress" id="add">
            <span class="f14">添加收货地址</span>
        </div>
        
        <div class="user_address_items" id="20831">
            <div class="user_address" onclick="confirm(20831,'ddd','上海上海市卢湾区','fadfadsfasdfad','200001','','18099876654','true','mainland:上海/上海市/卢湾区:24')">
                <div class="address_info">
                    <div class="name f14"><span class="mr5">ddd</span>|<span class="ml5">18099876654</span></div>
                    <div class="f14 mt5">上海上海市卢湾区fadfadsfasdfad</div>
                </div>
            </div>
            <div class="new_addr_btn">
                <div class="f14 fl"><label>默认地址</label></div>
                <div class="del_adress f14" onclick="deleteAddrm(20831)"><span></span>删除</div>
                <div class="bj_adress f14" onclick="edit(20831,'ddd','mainland:上海/上海市/卢湾区:24','fadfadsfasdfad','200001','','18099876654','true')"><span></span>编辑</div>
            </div>
        </div> 
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