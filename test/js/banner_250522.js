$(document).ready(function(){
    /*
        오버한 li 1개만 on 클래스 추가
        (이전에 오버했던 li에서는 on 삭제)
        무조건 li 1개는 on이 있음

        .tour.acc01 .list ul li
    */
   $('.tour.acc01 .list ul li').on('mouseenter', function(){
        $('.tour.acc01 .list ul li').removeClass('on');
        $(this).addClass('on');
   });

   /*
        .tour.acc02 .list ul li
        마우스를 올리면 오버한 li에만 on 클래스 추가
        li에 마우스를 오버하지 않으면 on 클래스 삭제
   */

    $('.tour.acc02 .list ul li').on('mouseenter', function(){
        console.log('오버했음');
        $(this).addClass('on');
    });
    $('.tour.acc02 .list ul li').on('mouseleave', function(){
        console.log('아웃');
        $(this).removeClass('on');
    });
});