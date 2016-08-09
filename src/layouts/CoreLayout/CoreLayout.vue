<template>
	<v-header></v-header>
	<router-view class="router-view" transition="slide-up" transition-mode="out-in" keep-alive></router-view>
	<slot></slot>
	<v-footer></v-footer>
</template>
<script>
	import vHeader from '../../components/Header'
	import vFooter from '../../components/Footer'
	export default {
		name: 'App',
		components: {
			vHeader,
			vFooter
		}
	}
</script>
<!-- <style src="./styles.css"></style> -->