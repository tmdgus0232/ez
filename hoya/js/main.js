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
    let sec04_cnt
    $('.sec04 .top .tab ul li').on('click', function(){
        console.log('ㅇㅋㅇㅋ');
        if($(this).hasClass('active') == false){
            sec04_cnt = $(this).attr('aria-controls');

            $('.sec04 .tab_contents .cnt').removeClass('active');
            $('.sec04 .tab_contents').find('#'+sec04_cnt).addClass('active');

            $('.sec04 .top .tab ul li').removeClass('active');
            $(this).addClass('active');

            $('.sec04 .top .tab ul li btn_tab span').text('');
            $(this).find('span').text('선택됨');

            $('.sec04 .top .tab ul li').attr('aria-selected', 'false');
            $(this).attr('aria-selected', 'true');
        }
    })

    AOS.init({
        offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });


});