$(document).ready(function(){

    // sec01 swiper
    let visual_name = ['','',''];
    const sec01_swiper = new Swiper('.sec01 .swiper', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        effect: "fade",
        loop: true,

        navigation: {
            nextEl: '.sec01 .ctrl_wrap button.btn_next',
            prevEl: '.sec01 .ctrl_wrap button.btn_prev',  
        },
    });

    // sec02 list
    $('.sec02 .list ul li').on('mouseenter', function(){
        $('.sec02 .list ul li').removeClass('over');
        $(this).addClass('over');
    });

    // sec03 swiper
    const news_swiper = new Swiper('.sec03 .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            1300: {
                spaceBetween: 50,
            },
            1024: {
                spaceBetween: 40,
            },
            768: {
                spaceBetween: 30,
            },
            480: {
                spaceBetween: 20,
            },
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.sec03 .ctrl_wrap .btn_next',
            prevEl: '.sec03 .ctrl_wrap .btn_prev',
        },
        pagination: {
		    el: '.sec03 .paging',
		    clickable: true,
		    type: 'fraction',
	    },
        on: {
            slideChange: function() {
                const activeSlide = $('.sec03 .swiper .swiper-slide.swiper-slide-active');
                const activeSlideWidth = activeSlide.width();
                
                const otherSlides = $('.sec03 .swiper .swiper-slide:not(.swiper-slide-active)')
                const otherSlideWidth = otherSlides.width();
    
                const slideWidthDifference = activeSlideWidth - otherSlideWidth;
                console.log(slideWidthDifference);
    
                this.setTranslate(this.translate + slideWidthDifference);
            },
            slideChangeTransitionEnd: function() {
                setTimeout(() => {
                    this.update();
                }, 100);
            }
        },
    });

    // sec04 cnt
    $('.sec04 .btn_wrap .btn_01').on('click', function(){
        console.log("1번 눌림")
        $('.sec04 ul li').removeClass('click');
        $('.sec04 ul li:nth-child(1)').addClass('click');
        $('.sec04 .btn_wrap button').removeClass('click');
        $(this).addClass('click');
    });
    $('.sec04 .btn_wrap .btn_02').on('click', function(){
        console.log("2번 눌림")
        $('.sec04 ul li').removeClass('click');
        $('.sec04 ul li:nth-child(2)').addClass('click');
        $('.sec04 .btn_wrap button').removeClass('click');
        $(this).addClass('click');
    });
    $('.sec04 .btn_wrap .btn_03').on('click', function(){
        console.log("3번 눌림")
        $('.sec04 ul li').removeClass('click');
        $('.sec04 ul li:nth-child(3)').addClass('click');
        $('.sec04 .btn_wrap button').removeClass('click');
        $(this).addClass('click');
    });


});