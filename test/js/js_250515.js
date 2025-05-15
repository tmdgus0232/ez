/*
    js에서 html 요소를 부를때는 html 요소가 로딩된 이후에 불러야한다.
    문서의 구조상 js를 head안에서 먼저 부르고, 그 다음 body에 html 요소를 쓴다.
*/

$(document).ready(function(){
    // $('.group').addClass('on');
    console.log('document.ready 내부');

    $('.group').on('mouseenter', function(){
        // group에 마우스를 올릴 때마다 실행
        $('.group').addClass('on');
        $('.group span').text('오버했음');
    });
    $('.group').on('mouseleave', function(){
        // group에 마우스를 올릴 때마다 실행
        $('.group').removeClass('on');
        $('.group span').text('오버 안했음');
    });

    // 문서가 로딩되고 단 1번만 실행
    let scrolling = $(window).scrollTop();
    console.log(scrolling);

    $(window).scroll(function(){
        scrolling = $(window).scrollTop();
        console.log(scrolling);
        // 스크롤 값이 0보다 크면
        if(scrolling > 5){
            $('header').addClass('fixed');
        }
    });

    $('.list ul li').on('mouseenter', function(){
        // li 중에서 오버한 li만 지칭
        $(this).addClass('on');
    });
});

console.log('누가 먼저 실행될까요?');