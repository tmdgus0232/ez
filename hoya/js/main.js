$(document).ready(function(){
    // visual swiper
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
    // tech
    $('.tech .list ul li').on('mouseenter', function(){
        $('.tech .list ul li').removeClass('over');
        $(this).addClass('over');
    });

    const news_swiper = new Swiper('.product .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 640px 이상일때 적용 */
                spaceBetween: 50,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: '.product .ctrl_wrap .btn_next',
            prevEl: '.product .ctrl_wrap .btn_prev',
        },
    });
});