<template>
	<router-view></router-view>
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