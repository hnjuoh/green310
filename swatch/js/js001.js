// @@@@@@@@@@@@@@@@@@@@@@@@@@ 
//     현주 제이쿼리 연습장
// JJJJJJJJJJJJJJJJJJJJJJJJJJJ
//    JJJJJJJJJJJJJJJJJJJJ
//       JJJJJJJJJJJJJJ


$(function(){
    // 원도우에서 section 높이값 찾(변수)
    var wht = $(window).height()
    $('section').height(wht);

    // 화면크기가 바뀌었을때, 윈도우의 높이값을 찾아
    // section에 높이값을 대입한다.

    $(window).resize(function(){
        var wht = $(window).height()
        $('section').height(wht);


    });

    // GNB li를 클릭했을때, li의 순번을 찾아라.
    // 클릭한 나 자신의 클래스 on값을 더해라.
    $('.gnb li').click(function(){
    var wht = $(window).height() 
    var i = $(this).index();
    console.log(i);

    $('.gnb li').removeClass('on') // 다 뺏은 다음에 줘라 (순서 첫번째)
    $(this).addClass('on')

    $('html,body').animate({'scrollTop':wht*i},1400,'easeOutBounce')


    });


    // 섹션에서 마우스휠을 했을 때,
    // 올리면 바뀌고 내리면 바뀌어라 를 실행하겠다.
    $('section').mousewheel(function(event,delta){ //마우스 값 delta????????
        event.preventDefault()

        // 마우스를 올렸을 때 (기준값 0)
        if(delta>0){
            var prev = $(this).prev().offset().top
            $('html,body').stop().animate({'scrollTop':prev},1400,'easeOutBounce')
        }

        // 마우스를 내렸을 때
        else if(delta<0){
            var next = $(this).next().offset().top
            $('html, body').stop().animate({'scrollTop':next},1400,'easeOutBounce')
        }



    });


    // 스크롤 했을 때, 스크롤의 위치값을 찾고 일정 높이였을때 li의 on값을 더해라.
    $(window).scroll(function(){
        var wht = $(window).height()
        var sc = $(this).scrollTop()
        $('h1').text(sc)



        // 반복문을 활용한 스크립트 축약
        for(var a = 0; a<5; a++){
            if(sc>=wht*a && sc<wht*(a+1)){
            $('.gnb li').removeClass('on')
            $('.gnb li').eq(a).addClass('on')
            }
        }





    })







})