$(document).ready(function(){
    /*
        pc와 mobile을 분리해서 jquery 동작
        css와 동일하게 브라우저 넓이를 계산해서
        1024를 기준으로 1024 이하는 모바일
        1025 이상은 pc버전
    */

    // 문서가 로딩되고 단 한번만 실행
    let device_status; // 현재 디바이스가 pc인지 mobile인지 지ㅓ장
    let win_w; // 브라우저 넓이
    device_chk(); // 함수의 실행

    $(window).resize(function(){ // 브라우저가 리사이즈 될 때마다 한번 실행
    });

    function device_chk(){ // 함수의 정의
        win_w = $(window).width();
        console.log(win_w);
        if(win_w > 1024) // 1025부터
        {
            device_status = 'pc';
        }
        else
        {
            device_status = 'mobile';
        }
        console.log(device_status);
    };

    /*
        메뉴에 마우스를 오버하면
        메뉴 : header .gnb .gnb_wrap ul.depth1 > li
        
        1. header에 menu_over 클래스 추가
            header addClass

        2. 오버한 1차메뉴 li에 over 클래스 추가
        header .gnb .gnb_wrap ul.depth1 > li

        3. 다른 메뉴에 마우스를 오버하면 이전에 오버했던 메뉴는 아웃됨(over 클래스 삭제)
        removeClass

        4. 메뉴 영역을 벗어나면 header, li에 들어간 클래스 삭제
    */

    // $('header .gnb .gnb_wrap ul.depth1 > li').addClass('over')
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc')
        {
            // console.log('pc 오버')
            $('header').addClass('menu_over');
            /* 
                이전에 마우스를 오버했던 li에서는 over를 삭제해야 하는데
                이전에 마우스를 오버했던 li를 찾는 것이 다소 복잡함

                먼저 모든 li에 있는 over 클래스를 모두 지우고
                마우스를 오버한 li에만 over 클래스를 추가함

                이렇게 하면 이전에 오버했던 li를 몰라도 됨
                over 클래스가 없던 요소는 removeClass 사용해도 아무일도 안 일어남
            */
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
            $(this).addClass('over');
        }
        
    });
    // 메뉴는 오버를 감지하는 영역보다 out을 잡아주는 영역이 커야함
    $('header .gnb').on('mouseleave', function(){
        $('header').removeClass('menu_over');
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
    });

    $('header .tnb .search').on('focusin', function(){
        $('header').removeClass('menu_over');
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
    })

    /* 
        모바일에서 1차 메뉴를 클릭하면 하위 메뉴가 열리는 기능

        1. 닫혀있는 메뉴를 클릭하면 열림
        header .gnb .gnb_wrap ul.depth1 > li에 오픈 클래스 추가

        2. 열려있는 메뉴를 다시 클릭하면 닫힘

        3. 이미 하나가 열려있는 상태에서 다른 메뉴를 보려면, 이전에 열려있던 메뉴는 닫힘
        메뉴를 클릭했을 때
        메뉴가 열려있는 상태라면 나 자신을 닫고 끝남
        메뉴가 닫혀있는 상태라면 다른 메뉴를 닫고 나만 열음
        :: 메뉴를 클릭했을 때 현재 메뉴가 열려있는지 닫혀있는지 알아야함
        1차 메뉴 li에 open 클래스가 있으면 열려있는 것
        hasClass

        4. 모바일에서 1차 메뉴를 클릭하면, 1차 메뉴 a에 입력되어 있는 링크 주소로 이동
        메뉴를 안열고, a 태그에 있는 href 페이지로 이동되는 것을 막아야 함
        a 클릭했을 때로 선택자 변경
        $(this)가 li를 선택해야 하는데 a가 됨
        $(this).parents('li')로 클릭한 a의 상위요소 li를 선택
    */
   $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile')
        {
            e.preventDefault(); // a href 페이지 이동을 막는 명령
            // $(this).parents('li').addClass('open');

            let depth1_open = $(this).parents('li').hasClass('open')
            // console.log(depth1_open)
            if(depth1_open == true)
            {
                $(this).parents('li').removeClass('open')
            }
            else
            {
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')            
                $(this).parents('li').addClass('open')
            }
        }
    });

    /*
        메뉴 열기 버튼을 클릭하면 메뉴 열림
        -- header .gnb .gnb_open을 클릭하면 header에 menu_open 클래스 추가
        메뉴 닫기 버튼을 클릭하면 메뉴 닫힘
        -- header .gnb .gnb_close를 클릭하면 header에 menu_open 클래스 삭제
    */

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })
});