$(document).ready(function(){
    /************************************************** header **************************************************
        * pc인지 모바일인지 구분 - 브라우저 넓이로
        * 스크롤 값 계산
        * 공통사항 : 브라우저가 스크롤되면 or header에 오버하면 header에 fixed 클래스 추가
        * pc일때 마우스를 오버한 li에만 over 클래스 추가
        * 모바일일 때 메뉴열기를 클릭하면 header에 menu_open 클래스 추가
        * 하위 메뉴가 존재하는 1차 메뉴를 클릭하면 클릭한 li에 open 클래스 추가
    */
   
    let device_status; // 모바일인지 pc인지
    let scrolling; // 스크롤한 값
    let window_w; // 브라우저 넓이
    let mobile_size = 1024; // 모바일로 전환되는 사이즈
    
    resize_chk(); // 함수 실행(문서가 처음 로딩되었을 때 한번)
    scroll_chk(); // 함수 실행(문서가 처음 로딩되었을 때 한번)

    // 브라우저가 리사이즈 될 때마다 한번씩 실행
    $(window).resize(function(){
        resize_chk();
    });

    $(window).scroll(function(){
        scroll_chk();
    });

    // 함수 선언
    function resize_chk(){
        window_w = $(window).width();
        if(window_w > mobile_size)
        {
            device_status = 'pc';
        }
        else
        {
            device_status = 'mobile';
        }
    };

    function scroll_chk(){
        scrolling = $(window).scrollTop();
        if(scrolling > 0)
        {
            $('header').addClass('fixed');
        }
        else
        {
            $('header').removeClass('fixed');
        }
    };

    // header에 마우스를 오버했을 때, 클릭했을 때도 작동함
    $('header').on('mouseenter focusin', function(){
        if(device_status == 'pc')
        {
            $('header').addClass('fixed');
        }
    });
    
    $('header').on('mouseleave focusout', function(){
        // 브라우저가 스크롤 된 상태에서는 header에 fixed 클래스를 삭제하면 안됨, 맨 위에 있을 때만 삭제해야 함
        if(scrolling == 0)
        {
            $('header').removeClass('fixed');
        }
    });

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc')
        {
            $(this).addClass('over');
        }
    });

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $(this).removeClass('over');
    });

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open');
    });

    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li:last-child').on('focusout', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
    });

    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open');
    });

    /*
        닫힌 메뉴를 클릭하면 열리고, 열린 메뉴를 클릭하면 닫힘
        동시에 여러 개의 메뉴가 열려있을 수도 있음
        toggleClass - 클래스가 없으면 추가하고, 있으면 삭제
    */
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile')
        {
            e.preventDefault();
            $(this).parents('li').toggleClass('open');
        }
    });
    
    /************************************************** visual swiper **************************************************/
    
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_wrap button.btn_prev',  
        },

    });
    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */
    $('.visual .btn_wrap button.btn_stop').on('click', function(){ // 일시정지
        visual_swiper.autoplay.stop();
        $(this).hide(); // 정지 숨김
        $('.visual .btn_wrap button.btn_play').show(); // 재생 보임
    });
    $('.visual .btn_wrap button.btn_play').on('click', function(){ // 재생
        visual_swiper.autoplay.start();
        $(this).hide(); // 재생 숨김
        $('.visual .btn_wrap button.btn_stop').show(); // 정지 보임
    });

    /************************************************** find **************************************************/
    
    let find_content; // 클릭한 메뉴 이름(id)

    $('.find .list .tab_list ul li').on('click', function(){
        
        if($(this).hasClass('active') == false)
        {
            find_content = $(this).attr('data-content');

            $('.find .list .tab_content .tab_item').removeClass('active');
            $('.find .list .tab_content').find('#'+find_content).addClass('active');

            $('.find .list .tab_list ul li').removeClass('active');
            $(this).addClass('active');

            $('.find .list .tab_list ul li button span').text('');
            $(this).find('span').text('선택됨');

            $('.find .list .tab_list ul li').attr('aria-selected', 'false');
            $(this).attr('aria-selected', 'true');
        }
    });

    /************************************************** adopt swiper **************************************************/

    const adopt_swiper = new Swiper('.adopt .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 640px 이상일때 적용 */
                spaceBetween: 24,
                centeredSlides: true,
            },
        },
        centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {
            nextEl: '.adopt .list_ctrl .btn_next',
            prevEl: '.adopt .list_ctrl .btn_prev',
        },
    });
});