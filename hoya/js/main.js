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
    // $('.sec02 .list ul li').on('mouseenter', function(){
    //     $('.sec02 .list ul li').removeClass('over');
    //     $(this).addClass('over');
    // });

    // sec03 swiper
    const news_swiper = new Swiper('.sec03 .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            1025: {
                spaceBetween: 30,
            },
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.sec03 .tit .paging_wrap .ctrl_wrap .btn_next',
            prevEl: '.sec03 .tit .paging_wrap .ctrl_wrap .btn_prev',
        },
        pagination: {
		    el: '.sec03 .paging',
		    clickable: true,
		    type: 'fraction',
	    },
        on: {
            slideChange: function() {
                const activeSlide = this.slides[this.activeIndex]
                const activeSlideWidth = activeSlide.offsetWidth
                const otherSlides = this.slides[this.previousIndex]
                const otherSlideWidth = otherSlides.offsetWidth			
                const slideWidthDifference = activeSlideWidth - otherSlideWidth;
                this.setTranslate(this.translate - slideWidthDifference);
            },
            slideChangeTransitionEnd: function() {
                // 전환이 끝나면 Swiper를 다시 업데이트
                setTimeout(() => {
                    this.update();
                }, 100);  // 잠시 딜레이를 주고 업데이트
            }
        },
    });

    // sec04 cnt
    let sec04_cnt
    $('.sec04 .top .tab ul li').on('click', function(){
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

    // sec05 swiper
    const swiper = new Swiper('.sec05 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 24, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 20,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.sec05 .cnt .ctrl_wrap button.btn_next',
            prevEl: '.sec05 .cnt .ctrl_wrap button.btn_prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
    });


});