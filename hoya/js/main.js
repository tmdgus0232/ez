$(document).ready(function(){

    /****************************** visual swiper ******************************/
    let visual_name = ['','','']
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap button.btn_prev',  
        },

        // pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		// 	el: '.visual .paging', /* 해당 요소의 class명 */
		// 	clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		// 	//type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		// 	renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		// 		return '<span class="' + className + '">  ' + visual_name[index] + "</span>";
		// 	},
		// },
    });
    /****************************** section - doctor aos ******************************/
    AOS.init({
        offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });
})