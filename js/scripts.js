

//---------------
$(document).ready(function() {
     
    /* initialize shuffle plugin */
    var $grid = $('#grid');
         
    $grid.shuffle({
        itemSelector: '.item' // the selector for the items in the grid
    });

    $('#filter a').click(function (e) {
    e.preventDefault();
         
    // set active class
    $('#filter a').removeClass('active');
    $(this).addClass('active');
         
    // get group name from clicked item
    var groupName = $(this).attr('data-group');
         
    // reshuffle grid
    $grid.shuffle('shuffle', groupName );
});
setTimeout(function(){
   $('.wrap').fadeOut('fast');
   $('.social-share-button').addClass('show_social');
  }, 9000);

var tmax_opts = {
  delay: 0.5,
  repeat: -1,
  repeatDelay: 0.5,
  yoyo: true
};

var tmax_tl           = new TimelineMax(tmax_opts),
    polylion_shapes   = $('svg.polylion > g polygon'),
    polylion_stagger  = 0.00475,
    polylion_duration = 1.5;

var polylion_staggerFrom = {
  scale: 0,
  opacity: 0,
  transformOrigin: 'center center',
};

var polylion_staggerTo = {
  opacity: 1,
  scale: 1,
  ease: Elastic.easeInOut
};

tmax_tl.staggerFromTo(polylion_shapes, polylion_duration, polylion_staggerFrom, polylion_staggerTo, polylion_stagger, 0);



var target = $('.timeline_contain');
var targetHeight = target.outerHeight() - 260;

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >= targetHeight){
       $('.time').each(function(i){
        setTimeout(function(){
            $('.time').eq(i).addClass('op');
        }, 300 * (i + 1));
       });
    }else{
         $('.time').each(function(i){
        setTimeout(function(){
            $('.time').eq(i).removeClass('op');
        }, 300 * (i + 1));
       });
    }
});





$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >= targetHeight){
       $('.line_p').each(function(i){
        setTimeout(function(){
            $('.line_p').eq(i).addClass('scale');
        }, 300 * (i + 1));
       });
    }else{
     $('.line_p').each(function(i){
        setTimeout(function(){
            $('.line_p').eq(i).removeClass('scale');
        }, 300 * (i + 1));
       });
    }
});



 
$(window).scroll(function(){

    var scroll = $(this).scrollTop();

    if(scroll > $('.interests').offset().top - $(window).height() ) {

        var offset = Math.min(0, scroll - $('.interests').offset().top + $(window).height() - 325 );


        $('.interest_three').css({'transform': 'translate(' + offset + 'px, 0px)'});


        $('.interest_one').css({'transform': 'translate(' + Math.abs(offset) + 'px, 0px)'});

    }


}); 



$(window).scroll(function(){

    var scroll = $(this).scrollTop();

    if(scroll > $('.people').offset().top - $(window).height() ) {

        var offset = Math.min(0, scroll - $('.people').offset().top + $(window).height() - 400 );


        $('.person_one').css({'transform': 'translate(' + offset + 'px, 0px)'});


        $('.person_three').css({'transform': 'translate(' + Math.abs(offset) + 'px, 0px)'});

    }


});







$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 15
        }, 750);
        $('html,body').animate({
          scrollTop: target.offset().top - 80
        }, 150);
        return false;
      }
    }
  });






var nav = $('header');
var navHeight = nav.outerHeight() - 150;

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >= navHeight){
        $('.nav').css('height', '30px');
        $('.nav').css('line-height', '30px');
        $('.nav p a').css('padding', '2px');        
        $('.nav').addClass('fixed'); 




    }else{
        $('.nav').css('height', '80px'); 
        $('.nav').css('line-height', '80px'); 
        $('.nav p a').css('padding', '25px');        
         }
});






var hom = $('#home');
var homHeight = hom.outerHeight() - 400;

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >= homHeight){
       $('.nav_one').addClass('activated');
    }else{
         $('.nav_one').removeClass('activated');
        
    }
});


var his = $('.time_h1');
var hisHeight = his.outerHeight() + 400;

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >= hisHeight){
       $('.nav_one').removeClass('activated');
       $('.nav_two').addClass('activated');
    }else{
         $('.nav_two').removeClass('activated');
        
    }
});



var skill = $('.skills_h1');
var skillHeight = skill.outerHeight() + 1400;

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >= skillHeight){
       $('.nav_two').removeClass('activated');
       $('.nav_three').addClass('activated');
    }else{
         $('.nav_three').removeClass('activated');
        
    }
});




var pro = $('.h1_projects');
var proHeight = pro.outerHeight() + 1900;

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >= proHeight){
       $('.nav_three').removeClass('activated');
       $('.nav_four').addClass('activated');
    }else{
         $('.nav_four').removeClass('activated');
        
    }
});




var interst = $('.interests_h1');
var interstHeight = interst.outerHeight() + 2300;

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >= interstHeight){
       $('.nav_four').removeClass('activated');
       $('.nav_five').addClass('activated');
    }else{
         $('.nav_five').removeClass('activated');
        
    }
});






var vid = $('.video_h1');
var vidHeight = vid.outerHeight() + 2800;

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >= vidHeight){
       $('.nav_five').removeClass('activated');
       $('.nav_six').addClass('activated');
    }else{
         $('.nav_six').removeClass('activated');
        
    }
});









var peop = $('.people_h1');
var peopHeight = peop.outerHeight() + 3300;

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >= peopHeight){
       $('.nav_six').removeClass('activated');
       $('.nav_seven').addClass('activated');
    }else{
         $('.nav_seven').removeClass('activated');
        
    }
});



var con = $('.contact_h1');
var conHeight = con.outerHeight() + 3700;

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >= conHeight){
       $('.nav_seven').removeClass('activated');
       $('.nav_eight').addClass('activated');
    }else{
         $('.nav_eight').removeClass('activated');
        
    }
});
});


//---------------
$(function(){
var modal = document.getElementById('dialog');

$('.the_video').click(function(){
    modal.showModal();
    $('dialog').addClass('see');

});


 
    
$('.modalClose').click(function(){
	modal.close();
    $('dialog').removeClass('see'); 
});

});

//---------------
$(function(){
	
$('img').hover(function(){
        // Hover over code
        $('<p class="tooltip"></p>')
        .text($(this).attr('alt'))
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
      
        $('.tooltip').fadeOut('fast');
}).mousemove(function(e) {
        var mousex = e.pageX + -50; //Get X coordinates
        var mousey = e.pageY + -60; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});

});

//---------------

$(function(){


var Video = document.getElementById('Video');
var playPause = document.getElementById('playPause');    
var Seek = document.getElementById('inputSeek');
//var mute = document.getElementById('mute');
var Volume = document.getElementById('inputVolume');
//var fullScreen = document.getElementById('fullscreen');    




  $('#playPause').click(function(){
       if (Video.paused){
            Video.play();
            $('#playPause').html('| |');
        }else{
            Video.pause();
            $('#playPause').html('▶');
        }        
});

    
   var muteBtn = document.getElementById('mute');
muteBtn.addEventListener('click', function(){
	if(Video.muted == false){
		Video.muted = true;
        $('#mute').html('<i class="fa fa-volume-off"></i>');
	}else{
		Video.muted = false;
        $('#mute').html('<i class="fa fa-volume-up"></i>');

	}
});
    
    inputVolume.addEventListener("change", function(){
        Video.volume = inputVolume.value;
    });
    
    
    
    
var fullScreen = document.getElementById('fullscreen');
fullScreen.addEventListener('click', function(){
	if(Video.requestFullscreen){
		Video.requestFullscreen();
        $('main').addClass('full');
         $('.con').addClass('maincon');
	}else if (Video.mozRequestFullScreen) {
    Video.mozRequestFullScreen(); // Firefox
        $('main').addClass('full');
         $('.con').addClass('maincon');
  } else if (Video.webkitRequestFullscreen) {
    Video.webkitRequestFullscreen(); // Chrome and Safari
      $('main').addClass('full');
       $('.con').addClass('maincon');
  }
});
    
    
    
    Video.addEventListener('timeupdate', function(){
        var pct = Video.currentTime / Video.duration * 100;
        Seek.value = pct;
         
        Video.onended = function(e) {
        $('#playPause').html('▶');
           Seek.value = 0;
        };
        
        
    });
    
    
    Seek.addEventListener('change', function(){
        var videoTime = Seek.value * Video.duration / 100;
        Video.currentTime = videoTime;
    });
      
      $('.hamburger').click(function(){
      $('.hamburger').toggleClass('ham_slide');
      $('.head_three').toggleClass('headee_slide');
      
    });
   

     





  
});


