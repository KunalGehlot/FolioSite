/* =================================
------------------------------------
	Civic - CV Resume
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';


$(window).on('load', function () {
    /*------------------
    	Preloder
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

});


(function ($) {

    /*------------------
    	Background set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });


    $('.review-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true
    });



    $('.progress-bar-style').each(function () {
        var progress = $(this).data("progress");
        var prog_width = progress + '%';
        if (progress <= 100) {
            $(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
        } else {
            $(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
        }
    });


    $('.lan-prog').each(function () {
        var progress = $(this).data("lanprogesss");
        var ele = '<span></span>';
        var ele_fade = '<span class="fade-ele"></span>';

        for (var i = 1; i <= 5; i++) {
            if (i <= progress) {
                $(this).append(ele);
            } else {
                $(this).append(ele_fade);
            }
        }
    });


    /*------------------
    	Popup
    --------------------*/
    $('.portfolio-item .port-pic').magnificPopup({
        type: 'image',
        mainClass: 'img-popup-warp',
        removalDelay: 500,
    });

})(jQuery);

function progress1(){
    if ($().circleProgress) {
        //Set progress circle 1
        $("#progress1").circleProgress({
            value: 0.75,
            size: 175,
            thickness: 2,
            fill: "#40424a",
            animation: {
                duration: 2500,
                easing: "circleProgressEasing"
            },
            emptyFill: "rgba(0, 0, 0, 0)"
        });
    }
}
function progress2(){
    if ($().circleProgress) {
        //Set progress circle 2
        $("#progress2").circleProgress({
            value: 0.90,
            size: 175,
            thickness: 2,
            fill: "#40424a",
            animation: {
                duration: 2500,
                easing: "circleProgressEasing"
            },
            emptyFill: "rgba(0, 0, 0, 0)"
        });
    }
}
function progress3(){
    if ($().circleProgress) {
        //Set progress circle white
        $("#progress3").circleProgress({
            value: 0.75,
            size: 175,
            thickness: 2,
            fill: "#40424a",
            animation: {
                duration: 2500,
                easing: "circleProgressEasing"
            },
            emptyFill: "rgba(0, 0, 0, 0)"
        });
    }
}
function progress4(){
    if ($().circleProgress) {
        //Set progress circle white
        $("#progress4").circleProgress({
            value: 0.80,
            size: 175,
            thickness: 2,
            fill: "#40424a",
            animation: {
                duration: 2500,
                easing: "circleProgressEasing"
            },
            emptyFill: "rgba(0, 0, 0, 0)"
        });
    }
}
function progress5(){
    if ($().circleProgress) {
        //Set progress circle skyblue
        $("#progress5").circleProgress({
            value: 0.75,
            size: 175,
            thickness: 2,
            fill: "#009fff",
            animation: {
                duration: 2500,
                easing: "circleProgressEasing"
            },
            emptyFill: "rgba(0, 0, 0, 0)"
        });
    }
}

function progress6(){
    if ($().circleProgress) {
        //Set progress circle skyblue
        $("#progress6").circleProgress({
            value: 0.83,
            size: 175,
            thickness: 2,
            fill: "#009fff",
            animation: {
                duration: 2500,
                easing: "circleProgressEasing"
            },
            emptyFill: "rgba(0, 0, 0, 0)"
        });
    }
}

function progress(index){
    //console.log(index);
    switch(index){
        case 1: progress1();break;
        case 2: progress2();break;
        case 3: progress3();break;
        case 4: progress4();break;
        case 5: progress5();break;
        case 6: progress6();break;
        default:break;
    }
}
var active=[false,false,false,false];

function check_in_view(){
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  
  var p=[$("#progress1"),$("#progress2"),$("#progress3"),$("#progress4")]
  
  for(let i=0;i<p.length;i++){
      var ele_height=p[i].outerHeight();
      var ele_top_pos=p[i].offset().top;
      var ele_bottom_pos=(ele_height+ele_top_pos);

      if((ele_bottom_pos >= window_top_position) && (ele_top_pos <= window_bottom_position)){
          if(!active[i]){
            progress(i+1);
          }            
          active[i]=true;
      }
      else{
          active[i]=false;
      }
  } 
  
}

$(window).on('scroll resize',check_in_view);
$(window).trigger('scroll');



