<template>
	<!--header开始-->
	<header class="homePage">
	    <span class='logo'></span>
	    <p id="title" class="menu">全部分类<i class="arrow"></i></p>
	    <span id="search" class="search-box" onclick="window.open('/new_search','_self')"></span>
	</header>
</template>

<script>
	import VNavbar from './Navbar'
	import { routes } from '../routes'
	
	export default {
		name: 'header',
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
		        if ($("#classify .swiper-wrapper .swiper-slide").size() <= 1) {
		            cateShow();
		        }
		        $('#classify-box').slideToggle();
		        $(this).find("i").toggleClass('arrow2');
		    });
		}
	}
</script>