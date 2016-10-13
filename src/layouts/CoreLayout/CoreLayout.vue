<template>
	<router-view></router-view>
	<slot></slot>
	<v-footer :menus="footerMenus" :carts="cartItems"></v-footer>

    <!-- toast tips -->
    <div class="m-global-tips-box m-ani-in" v-if="globalTips">
        <dl class="clearfix" style="font-size:14.4px;color:white;">
          <dd>
            <img style="display:block;width:35px;height:35px;margin:0px auto 5px;" src="/img/happy.png"/>
            {{globalTips.tips}}
            </dd>
        </dl>
    </div>

    <!-- 全局弹窗模块 -->
    <div class="open_pop" v-if="globalComfirmDialog">
        <div class="pop_bg"></div>
        <div class="sendTime_pop txtc">
            <p class="fb mt10">{{globalComfirmDialog.title}}</p>
            <p class="fb mt10"></p>
            <p class="f9 c_b0c2cc">{{globalComfirmDialog.content}}</p>
            <p class="mt20 giveup">
                <a @click.prevent="onConfirmDialogCancle" class="fl qx">取消</a>
                <a @click.prevent="onConfirmDialogOk" class="fr qd">确定</a>
            </p>
        </div>
    </div>

    <!-- 全局底部浮层模块 -->
    <div class="show_detail" v-if="globalBottomDialog">
    <div class="pop_bg"></div>
    <div class="fund_info checkRule">
        <p class="f14 fb txtc">{{globalBottomDialog.title}}</p>
        <span class="close" @click.prevent="onBottomDialogClose"></span>
        <hr>
        <div class="rule_height">
            <p>
                <span class="f12 c_1e384b fl">{{globalBottomDialog.subTitle}}</span>
            </p>
            <p>
                <span class="f12 c_afc1cb ml5 fl">{{{globalBottomDialog.content | safe}}}</span>
            </p>
        </div>
    </div>
</div>
    
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import vHeader from '../../components/Header'
import vFooter from '../../components/Footer'
export default {
	name: 'App',
	data () {
        return {}
    },
    methods: {
        ...mapActions(['hideConfirmDialog', 'getCartInfo', 'updateBadge', 'hideBottomDialog']),
        onConfirmDialogOk(){
            this.globalComfirmDialog.onConfirm && this.globalComfirmDialog.onConfirm();
            this.hideConfirmDialog();
        },
        onConfirmDialogCancle(){
            this.globalComfirmDialog.onCancle && this.globalComfirmDialog.onCancle();
            this.hideConfirmDialog();
        },
        onBottomDialogClose(){
            this.globalBottomDialog.onClose && this.globalBottomDialog.onClose();
            this.hideBottomDialog();
        }
    },
	computed: {
        ...mapGetters(['footerMenus', 'globalTips', 'globalComfirmDialog', 'globalBottomDialog', 'cartItems'])
    },
	components: {
		vHeader,
		vFooter
	},
    ready(){
        this.getCartInfo();
    }
}
</script>
<!-- <style src="./styles.css"></style> -->