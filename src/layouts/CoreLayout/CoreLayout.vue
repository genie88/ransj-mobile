<template>
	<router-view></router-view>
	<slot></slot>
	<v-footer :menus="footerMenus"></v-footer>
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
        ...mapGetters(['footerMenus'])
    },
	components: {
		vHeader,
		vFooter
	}
}
</script>
<!-- <style src="./styles.css"></style> -->