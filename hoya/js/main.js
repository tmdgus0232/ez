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
    const news_swiper = new Swiper('.product .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        breakpoints: {
            768: {
                spaceBetween: 50,
            },
        },
        loop: true,
        navigation: {
            nextEl: '.product .ctrl_wrap .btn_next',
            prevEl: '.product .ctrl_wrap .btn_prev',
        },
    });
});