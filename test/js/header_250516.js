$(document).ready(function(){
    /*
        header에 fixed 클래스 추가
        1. 브라우저가 조금이라도 스크롤이 되면 header에 fixed 클래스 추가
           스크롤 값이 0보다 크면
        2. 브라우저가 맨 위로 스크롤이 되면 header에 fixed 클래스 삭제

        클래스 주는 명령
        
        브라우저가 스크롤되는 것을 체크할 수 있는 명령을 알아야 함
    */

    // $('header').addClass('fixed');
    // $('header').removeClass('fixed');

    // html이 로딩된 이후 단 1번만 실행
    let scrolling;
    scroll_chk(); // 함수를 호출, 실행

    function scroll_chk(){
        // 함수 선언(scroll_chk이라는 이름의 함수)
        scrolling = $(window).scrollTop()
        console.log(scrolling)
            
        if(scrolling > 0) // 스크롤 된 값이 0보다 크면
        {
            // console.log('0보다 크다')
            $('header').addClass('fixed');
        }
        else // 스크롤 된 값이 0보다 작거나 같으면
        {
            // console.log('0보다 작거나 같다')
            $('header').removeClass('fixed');
        }
    };
    
    $(window).scroll(function(){
        scroll_chk()
    })
});