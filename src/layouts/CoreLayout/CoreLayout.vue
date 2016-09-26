<template>
	<router-view></router-view>
	<slot></slot>
	<v-footer :menus="footerMenus"></v-footer>

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
        ...mapActions(['hideConfirmDialog']),
        onConfirmDialogOk(){
            this.globalComfirmDialog.onConfirm && this.globalComfirmDialog.onConfirm();
            this.hideConfirmDialog();
        },
        onConfirmDialogCancle(){
            this.globalComfirmDialog.onCancle && this.globalComfirmDialog.onCancle();
            this.hideConfirmDialog();
        }
    },
	computed: {
        ...mapGetters(['footerMenus', 'globalTips', 'globalComfirmDialog'])
    },
	components: {
		vHeader,
		vFooter
	}
}
</script>
<!-- <style src="./styles.css"></style> -->