'use script';

        /* -------　カルーセル　------- */
        $(function () {
            $(".slider").slick({
                arrows: false,
                autoplay: true,//自動再生
                autoplaySpeed: 2000,
                speed: 1000,
                slidesToShow: 3,//画面に画像を何枚みせるか
                slidesToScroll: 3,//1回のスクロールで移動させる枚数
                centerPadding: "10%",//前後の画像をどのくらい見せるか
                adaptiveHeight: true,
                centerMode: true,//左右に画像を表示させる
                dots: true,//ドットを表示させる
                arrows: true, // デフォルトの矢印を表示させる
                appendArrows: $('.arrow_box'),//指定の要素に矢印を入れる
                prevArrow: '<div class="slide-arrow prev-arrow"></div>',
                nextArrow: '<div class="slide-arrow next-arrow"></div>',
                responsive: [
                    {
                    breakpoint: 768,//横幅が768px以下の見せ方
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "30px",
                    }
                    }
                ]
            });
        });

/* -------　nav　------- */
$("#openNav").click(function () {//ボタンがクリックされたら
    $("#nav").toggleClass('show');//showクラスを付与
  });
  
  $("#closeNav").click(function () {//ボタンがクリックされたら
      $("#nav").removeClass('show');//showクラスを除去
  });

  /*----- top bottan---*/
$(document).ready(function() {
    var pagetop = $('.pageTop');
      $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
              pagetop.fadeIn();
         } else {
              pagetop.fadeOut();
              }
         });
         pagetop.click(function () {
             $('body, html').animate({ scrollTop: 0 }, 500);
                return false;
     });
  });

/* -------　loading sign　------- */
    $(function(){
        $(window).on('load', function(){ //ページ内の全ての要素が読み込まれたら実行
            $('.loading').delay(1000).fadeOut(300); //消えるタイミング
        });
        function stopload(){
            $('.loading').delay(1000).fadeOut(500);
        }
        setTimeout(stopload, 2000); //2秒で強制非表示
    });