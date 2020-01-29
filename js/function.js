$(function () {
    
    //var
    var $indicator = $('#slides>.slides-pagination>li>a');
    var $slides = $('#slides>.slides-container>li');
    var $prev = $('#slides>.slides-prev');
    var $next = $('#slides>.slides-next');
    var nowIdx = 0;

    var $btnAuto = $("#slides>.slides-btn");
    var intervalKey;


    //자동재생 함수
    function autoPlay() {
        intervalKey = setInterval(function () {
            nextIdx();
            slideMove();
        }, 2000);
        $btnAuto.addClass('play');
    }

    //재생정지 함수
    function autoStop() {
        clearInterval(intervalKey);
        $btnAuto.removeClass('play');
    }

    autoPlay();

    //자동실행-원버튼
    $btnAuto.on("click", function (evt) {
        evt.preventDefault();

        if ($(this).hasClass("play")) {

            autoStop();

        } else {

            autoPlay();

        }
    });


    //슬라이드
    function slideMove() {
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        $slides.filter('.on').stop().fadeOut(1000).removeClass('on');
        $slides.eq(nowIdx).stop().fadeIn(1000).addClass('on'); 
    }

    function nextIdx() {
        if (nowIdx < 2) {
            nowIdx++;
        } else {
            nowIdx = 0;
        }
    }



    $indicator.on('click', function (event) {

        event.preventDefault();
        
        autoStop();
        
        
        if ($(this).parent().hasClass('on') == false) {
            nowIdx = $indicator.index(this);
            slideMove();
        }
    });


    $prev.on('click', function () {
        
        autoStop();
        if (nowIdx > 0) {
            nowIdx--;
        } else {
            nowIdx = 2;
        }

        slideMove();
    });//end of prev


    $next.on('click', function () {
        
        autoStop();
        nextIdx();
        slideMove();
    });//end of next

});



