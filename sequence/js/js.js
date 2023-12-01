
$(function(){
    // html에 소스를 추가하는 방법
    var imgs = ''
    for(var a = 0; a<200; a++){
        imgs +="<img src=img/pic"+a+".jpg>"
        console.log(imgs)

    }


    $('section').html(imgs)







    // 스크롤에 따라 배경 움직임
    $(window).mousemove(function(e){
        var x = e.pageX
        var wd = $(window).width()
        // 백분율
        // 자연수 환산 Math.floor / 
        var xNum = Math.floor((x/wd)*200)
        // text는 안에 넣는다.
        $('h1').text(xNum)

        // 속성값을 변경하는 방식 메서드 attr()
        // pic뒤에 번호를 변수로 놓는다. 
        // $('section img').attr({'src':'img/pic'+xNum+'.jpg'})

        
        // 지정된 숫자만 보여라
        $('section img').hide() // 모든 이미지 사라져라
        $('section img').eq(xNum).show()


    })








})