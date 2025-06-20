$(document).ready(function(){
    let scrolling
    let win_h

    let slogan = $('.slogan')
    let slogan_top // 슬로건이 위에서부터 떨어진 거리
    let slogan_start // 애니메이션 시작 위치
    let slogan_end // 애니메이션 종료 위치

    function slogan_ani(){
        slogan_top = slogan.offset().top

        slogan_start = slogan_top - win_h + (win_h * 0.3)
        console.log('scroll', scrolling, 'start', slogan_start)
        // scroll 값과 start 값이 같을때 애니 시작
        
        slogan_end = slogan_top + slogan.height() - win_h + (win_h * 0.3)
        console.log('scroll', scrolling, 'end', slogan_end)
        // scroll 값과 end 값이 같을때 애니 시작
    }

    let life = $('.life')
    let life_top // life가 위에서부터 떨어진 거리
    let life_start // 애니메이션 시작 위치

    scroll_chk() //브라우저가 로딩됐을때 1번
    resize_chk()
    slogan_ani()

    $(window).scroll(function(){
        //스크롤 할때마다 1번씩
        scroll_chk() 
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        // console.log('스크롤값', scrolling)
    }

    $(window).resize(function(){
        slogan_ani()
    })

    function resize_chk(){
        win_h = $(window).height()
        console.log('브라우저높이', win_h)
    }

})//$(document)