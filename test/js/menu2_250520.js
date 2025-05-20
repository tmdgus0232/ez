$(document).ready(function(){
    let scrolling; // 브라우저가 스크롤 된 정도를 저장
    let win_w; // 브라우저 넓이
    let device_status; // 지금 현재 넓이가 pc인지 모바일인지 지정

    scroll_chk(); // 문서가 로딩되었을 때 한번 실행

    $(window).scroll(function(){ // 스크롤 할 때마다 한번씩 실행
        scroll_chk();
    });

    device_chk();

    $(window).resize(function(){
        device_chk();
    });




    function scroll_chk(){
        scrolling = $(window).scrollTop();
        // console.log(scrolling);
        if(scrolling > 0)
        {
            $('header').addClass('fixed');
        }
        else
        {
            $('header').removeClass('fixed');
        }
    };

    function device_chk(){
        win_w = $(window).width();

        if(win_w > 1024)
        {
            device_status = 'pc';
        }
        else
        {
            device_status = 'mobile';
        }
        // console.log(device_status);
    }

    /*
        pc 버전에서만 메뉴에 마우스를 오버하면
        header .gnb .gnb_wrap ul.depth1 > li

        1. header에 menu_over 클래스 추가
        2. 오버한 1차 메뉴 li에 over 클래스 추가
            header .gnb .gnb_wrap ul.depth1 > li
        
        언제 메뉴의 오버 상태를 해제할건가?
        header 밖에 나가면 메뉴 사라지게
    */

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc')
        {
            $('header').addClass('menu_over');
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
            $(this).addClass('over');
        }
    });

    $('header').on('mouseleave', function(){
        if(device_status == 'pc')
        {
            $('header').removeClass('menu_over');
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
        }
    });

    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child > a').on('mouseleave', function(){
        if(device_status == 'pc')
        {
            $('header').removeClass('menu_over');
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
        }
    });
    
    /* 
        모바일에서만
        
        메뉴 열기 버튼을 클릭하면 header에 menu_open 클래스 추가
        >> header .gnb .gnb_open
        
        메뉴 닫기 버튼을 클릭하면 header에 menu_open 클래스 삭제
        >> header .gnb .gnb_close
    */

    $('header .gnb .gnb_open').on('click',function(){
        $('header').addClass('menu_open');
    });
    $('header .gnb .gnb_close').on('click',function(){
        $('header').removeClass('menu_open');
    });
    
    /*
        모바일에서만
        1차 메뉴를 클릭하면

        1. 링크(href)로 이동하는 걸 막아야 함
            -> 반드시 href가 있는 a를 클릭한 것으로 해야함

        2. 1차 메뉴 li에 open 클래스 추가
            -> 이미 열려있는 메뉴를 클릭하면 클릭한 메뉴를 닫고 끝남
            -> 열려있지 않은 메뉴를 클릭하면 이전에 열려있던 메뉴를 닫고 지금 클릭한 메뉴가 열림
    */

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile')
        {
            e.preventDefault();

            let depth1_open = $(this).parents('li').hasClass('open');
            // console.log(depth1_open);

            if(depth1_open == true)
            {
                // console.log('open')
                $(this).parents('li').removeClass('open');
            }
            else
            {
                // console.log('close')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $(this).parents('li').addClass('open')
            }
        }
    });
});