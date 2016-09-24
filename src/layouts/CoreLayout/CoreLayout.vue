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
	computed: {
        ...mapGetters(['footerMenus', 'globalTips'])
    },
	components: {
		vHeader,
		vFooter
	}
}
</script>
<!-- <style src="./styles.css"></style> -->