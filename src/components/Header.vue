<template>
	<!--header开始-->
	<header class="homePage">
	    <span class='logo'></span>
	    <p id="title" class="menu">{{title}}<i class="arrow"></i></p>
	    <span id="search" class="search-box" v-link="{path: '/search'}"></span>
	</header>
</template>

<script>
	import VNavbar from './Navbar'
	import { routes } from '../routes'
	
	export default {
		name: 'header',
		props: ['title'],
		data(){
			return {
				routes
			}
		},
		components:{
			VNavbar
		},
		ready(){
			$('.menu').on('click', function () {
		        $('#classify-box').slideToggle();
		        $(this).find("i").toggleClass('arrow2');
		    });
		}
	}
</script>