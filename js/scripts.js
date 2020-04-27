// //---------------
// $(document).ready(function() {

//     /* initialize shuffle plugin */
//     var $grid = $('#grid');

//     $grid.shuffle({
//         itemSelector: '.item' // the selector for the items in the grid
//     });

//     $('#filter a').click(function (e) {
//     e.preventDefault();

//     // set active class
//     $('#filter a').removeClass('active');
//     $(this).addClass('active');

//     // get group name from clicked item
//     var groupName = $(this).attr('data-group');

//     // reshuffle grid
//     $grid.shuffle('shuffle', groupName );
// });

// setTimeout(function(){
//   $('body').fadeIn('slow')
//            .css('background-color', '#e3e3e3');
// }, 1750);

// var target = $('.timeline_contain');
// var targetHeight = target.outerHeight() - 260;

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll >= targetHeight){
//        $('.time').each(function(i){
//         setTimeout(function(){
//             $('.time').eq(i).addClass('op');
//         }, 300 * (i + 1));
//        });
//     }else{
//          $('.time').each(function(i){
//         setTimeout(function(){
//             $('.time').eq(i).removeClass('op');
//         }, 300 * (i + 1));
//        });
//     }
// });

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll >= targetHeight){
//        $('.line_p').each(function(i){
//         setTimeout(function(){
//             $('.line_p').eq(i).addClass('scale');
//         }, 300 * (i + 1));
//        });
//     }else{
//      $('.line_p').each(function(i){
//         setTimeout(function(){
//             $('.line_p').eq(i).removeClass('scale');
//         }, 300 * (i + 1));
//        });
//     }
// });

// $(window).scroll(function(){

//     var scroll = $(this).scrollTop();

//     if(scroll > $('.interests').offset().top - $(window).height() ) {

//         var offset = Math.min(0, scroll - $('.interests').offset().top + $(window).height() - 325 );

//         $('.interest_three').css({'transform': 'translate(' + offset + 'px, 0px)'});

//         $('.interest_one').css({'transform': 'translate(' + Math.abs(offset) + 'px, 0px)'});

//     }

// });

// $(window).scroll(function(){

//     var scroll = $(this).scrollTop();

//     if(scroll > $('.people').offset().top - $(window).height() ) {

//         var offset = Math.min(0, scroll - $('.people').offset().top + $(window).height() - 400 );

//         $('.person_one').css({'transform': 'translate(' + offset + 'px, 0px)'});

//         $('.person_three').css({'transform': 'translate(' + Math.abs(offset) + 'px, 0px)'});

//     }

// });

// $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top + 20
//         }, 750);
//         $('html,body').animate({
//           scrollTop: target.offset().top - 100
//         }, 150);
//         return false;
//       }
//     }
//   });

// var nav = $('header');
// var navHeight = nav.outerHeight() + 20;

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll >= navHeight){
//         $('.nav').css('height', '30px');
//         $('.nav').css('line-height', '30px');
//         $('.nav p a').css('padding', '2px');
//         $('.nav').addClass('fixed');

//     }else{
//         $('.nav').css('height', '80px');
//         $('.nav').css('line-height', '80px');
//         $('.nav p a').css('padding', '25px');
//          }
// });

// var hom = $('#home');
// var homHeight = hom.outerHeight() - 500;

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll >= homHeight){
//        $('.nav_one').addClass('activated');
//     }else{
//          $('.nav_one').removeClass('activated');

//     }
// });

// var his = $('.time_h1');
// var hisHeight = his.outerHeight() + 600;

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll >= hisHeight){
//        $('.nav_one').removeClass('activated');
//        $('.nav_two').addClass('activated');
//     }else{
//          $('.nav_two').removeClass('activated');

//     }
// });

// var skill = $('.skills_h1');
// var skillHeight = skill.outerHeight() + 1600;

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll >= skillHeight){
//        $('.nav_two').removeClass('activated');
//        $('.nav_three').addClass('activated');
//     }else{
//          $('.nav_three').removeClass('activated');

//     }
// });

// // var pro = $('.h1_projects');
// // var proHeight = pro.outerHeight() + 1900;

// // $(window).scroll(function(){
// //     var scroll = $(this).scrollTop();
// //     if(scroll >= proHeight){
// //        $('.nav_three').removeClass('activated');
// //        $('.nav_four').addClass('activated');
// //     }else{
// //          $('.nav_four').removeClass('activated');

// //     }
// // });

// var interst = $('.interests_h1');
// var interstHeight = interst.outerHeight() + 2250;

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll >= interstHeight){
//        $('.nav_three').removeClass('activated');
//        $('.nav_four').removeClass('activated');
//        $('.nav_five').addClass('activated');
//     }else{
//          $('.nav_five').removeClass('activated');

//     }
// });

// var vid = $('.video_h1');
// var vidHeight = vid.outerHeight() + 2650;

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll >= vidHeight){
//        $('.nav_five').removeClass('activated');
//        $('.nav_six').addClass('activated');
//     }else{
//          $('.nav_six').removeClass('activated');

//     }
// });

// var peop = $('.people_h1');
// var peopHeight = peop.outerHeight() + 3350;

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll >= peopHeight){
//        $('.nav_six').removeClass('activated');
//        $('.nav_seven').addClass('activated');
//     }else{
//          $('.nav_seven').removeClass('activated');

//     }
// });

// var con = $('.contact_h1');
// var conHeight = con.outerHeight() + 4000;

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll >= conHeight){
//        $('.nav_seven').removeClass('activated');
//        $('.nav_eight').addClass('activated');
//     }else{
//          $('.nav_eight').removeClass('activated');

//     }
// });
// });

// //---------------

// // $(function(){
// // var modal = document.getElementById('dialog');

// // $('.the_video').click(function(){
// //     $('dialog').addClass('see');

// // });

// // $('.modalClose').click(function(){
// //     $('dialog').removeClass('see');
// // });

// // });

// // $(function(){
// // var modal = document.getElementById('dialog');

// // $('.the_video').click(function(){
// //     modal.showModal();
// //     $('dialog').addClass('see');

// // });

// // $('.modalClose').click(function(){
// // 	modal.close();
// //     $('dialog').removeClass('see');
// // });

// // });

// //---------------
// // $(function(){
// // 	$('.project_one').click(function(){
// // 		$('.project_one_slide').toggleClass('slide_project');
// // 		$('.back_drop').css('display', 'block');
// // 		$('.date').toggleClass('date_add');
// // 		$('.close_pro').toggleClass('close_slide');
// // 	});

// // 		$('.project_two').click(function(){
// // 		$('.project_two_slide').toggleClass('slide_project');
// // 		$('.back_drop').css('display', 'block');
// // 		$('.date').toggleClass('date_add_two');
// // 	});
// // 			$('.project_three').click(function(){
// // 		$('.project_three_slide').toggleClass('slide_project');
// // 		$('.back_drop').css('display', 'block');
// // 		$('.date').toggleClass('date_add_three');
// // 	});

// // 				$('.project_four').click(function(){
// // 		$('.project_four_slide').toggleClass('slide_project');
// // 		$('.back_drop').css('display', 'block');
// // 		$('.date').toggleClass('date_add_four');
// // 	});
// // 					$('.project_five').click(function(){
// // 		$('.project_five_slide').toggleClass('slide_project');
// // 		$('.back_drop').css('display', 'block');
// // 		$('.date').toggleClass('date_add_five');
// // 	});

// // 						$('.project_six').click(function(){
// // 		$('.project_six_slide').toggleClass('slide_project');
// // 		$('.back_drop').css('display', 'block');
// // 		$('.date').toggleClass('date_add_six');
// // 	});

// // $('.back_drop').click(function(){
// // 		$('.project_one_slide').removeClass('slide_project');
// // 		$('.project_two_slide').removeClass('slide_project');
// // 		$('.project_three_slide').removeClass('slide_project');
// // 		$('.project_four_slide').removeClass('slide_project');
// // 		$('.project_five_slide').removeClass('slide_project');
// // 		$('.project_six_slide').removeClass('slide_project');

// // 			$('.back_drop').css('display', 'none');

// // 	});

// // $('.close_pro').click(function(){
// // 		$('.project_one_slide').removeClass('slide_project');
// // 		$('.project_two_slide').removeClass('slide_project');
// // 		$('.project_three_slide').removeClass('slide_project');
// // 		$('.project_four_slide').removeClass('slide_project');
// // 		$('.project_five_slide').removeClass('slide_project');
// // 		$('.project_six_slide').removeClass('slide_project');

// // 			$('.back_drop').css('display', 'none');

// // 	});
// // });

// //---------------

// $(function(){
//  if($.browser.chrome) {
//    $('.wrapper').css('overflow-x','hidden');
// } else if ($.browser.mozilla) {
//    $('.wrapper').css('overflow-x','initial');
// }else if ($.browser.safari) {
//    $('.wrapper').css('overflow-x','hidden');
// }

//     $('.hamburger').click(function(){
//       $('.head_three').toggleClass('headee_slide');

//     });

//     $('.com img').hover(function(){
//         // Hover over code
//         $('<p class="tooltip"></p>')
//         .text($(this).attr('alt'))
//         .appendTo('body')
//         .fadeIn('fast');
// }, function() {
//         // Hover out code

//         $('.tooltip').remove();
// }).mousemove(function(e) {
//         var mousex = e.pageX + 40; //Get X coordinates
//         var mousey = e.pageY + 20; //Get Y coordinates
//         $('.tooltip')
//         .css({ top: mousey, left: mousex })
// });

// });

// //---------------

// $(function(){

// var Video = document.getElementById('Video');
// var playPause = document.getElementById('playPause');
// var Seek = document.getElementById('inputSeek');
// //var mute = document.getElementById('mute');
// var Volume = document.getElementById('inputVolume');
// //var fullScreen = document.getElementById('fullscreen');

//   $('#playPause').click(function(){
//        if (Video.paused){
//             Video.play();
//             $('#playPause').html('| |');
//         }else{
//             Video.pause();
//             $('#playPause').html('▶');
//         }
// });

//    var muteBtn = document.getElementById('mute');
// muteBtn.addEventListener('click', function(){
// 	if(Video.muted == false){
// 		Video.muted = true;
//         $('#mute').html('<i class="fa fa-volume-off"></i>');
// 	}else{
// 		Video.muted = false;
//         $('#mute').html('<i class="fa fa-volume-up"></i>');

// 	}
// });

//     inputVolume.addEventListener("change", function(){
//         Video.volume = inputVolume.value;
//     });

// // var fullScreen = document.getElementById('fullscreen');
// // fullScreen.addEventListener('click', function(){
// // 	if(Video.requestFullscreen){
// // 		Video.requestFullscreen();
// //         $('main').addClass('full');
// //          $('.con').addClass('maincon');
// // 	}else if (Video.mozRequestFullScreen) {
// //     Video.mozRequestFullScreen(); // Firefox
// //         $('main').addClass('full');
// //          $('.con').addClass('maincon');
// //   } else if (Video.webkitRequestFullscreen) {
// //     Video.webkitRequestFullscreen(); // Chrome and Safari
// //        $('.con').addClass('maincon');
// //   }
// // });

//     Video.addEventListener('timeupdate', function(){
//         var pct = Video.currentTime / Video.duration * 100;
//         Seek.value = pct;

//         Video.onended = function(e) {
//         $('#playPause').html('▶');
//            Seek.value = 0;
//         };

//     });

//     Seek.addEventListener('change', function(){
//         var videoTime = Seek.value * Video.duration / 100;
//         Video.currentTime = videoTime;
//     });

// });

jQuery(document).ready(function ($) {
    //set some variables
    var isAnimating = false,
        firstLoad = false,
        newScaleValue = 1;

    //cache DOM elements
    var dashboard = $('.cd-side-navigation'),
        mainContent = $('.cd-main'),
        loadingBar = $('#cd-loading-bar');

    //select a new section
    dashboard.on('click', 'a', function (event) {
        event.preventDefault();
        var target = $(this),
            //detect which section user has chosen
            sectionTarget = target.data('menu');
        if (!target.hasClass('selected') && !isAnimating) {
            //if user has selected a section different from the one alredy visible - load the new content
            triggerAnimation(sectionTarget, true);
        }

        firstLoad = true;
    });

    //detect the 'popstate' event - e.g. user clicking the back button
    $(window).on('popstate', function () {
        if (firstLoad) {
            /*
		    Safari emits a popstate event on page load - check if firstLoad is true before animating
		    if it's false - the page has just been loaded 
		    */
            var newPageArray = location.pathname.split('/'),
                //this is the url of the page to be loaded
                newPage = newPageArray[newPageArray.length - 1].replace('.html', '');
            if (!isAnimating) triggerAnimation(newPage, false);
        }
        firstLoad = true;
    });

    //scroll to content if user clicks the .cd-scroll icon
    mainContent.on('click', '.cd-scroll', function (event) {
        event.preventDefault();
        var scrollId = $(this.hash);
        $(scrollId).velocity('scroll', {container: $('.cd-section')}, 200);
    });

    //start animation
    function triggerAnimation(newSection, bool) {
        isAnimating = true;
        newSection = newSection == '' ? 'index' : newSection;

        //update dashboard
        dashboard
            .find('*[data-menu="' + newSection + '"]')
            .addClass('selected')
            .parent('li')
            .siblings('li')
            .children('.selected')
            .removeClass('selected');
        //trigger loading bar animation
        initializeLoadingBar(newSection);
        //load new content
        loadNewContent(newSection, bool);
    }

    function initializeLoadingBar(section) {
        var selectedItem = dashboard.find('.selected'),
            barHeight = selectedItem.outerHeight(),
            barTop = selectedItem.offset().top,
            windowHeight = $(window).height(),
            maxOffset = barTop + barHeight / 2 > windowHeight / 2 ? barTop : windowHeight - barTop - barHeight,
            scaleValue = ((2 * maxOffset + barHeight) / barHeight).toFixed(3) / 1 + 0.001;

        //place the loading bar next to the selected dashboard element
        loadingBar
            .data('scale', scaleValue)
            .css({
                height: barHeight,
                top: barTop,
            })
            .attr('class', '')
            .addClass('loading ' + section);
    }

    function loadNewContent(newSection, bool) {
        setTimeout(function () {
            //animate loading bar
            loadingBarAnimation();

            //create a new section element and insert it into the DOM
            var section = $('<section class="cd-section overflow-hidden ' + newSection + '"></section>').appendTo(mainContent);
            //load the new content from the proper html file
            section.load(newSection + '.html .cd-section > *', function (event) {
                //finish up the animation and then make the new section visible
                var scaleMax = loadingBar.data('scale');

                loadingBar.velocity('stop').velocity(
                    {
                        scaleY: scaleMax,
                    },
                    400,
                    function () {
                        //add the .visible class to the new section element -> it will cover the old one
                        section
                            .prev('.visible')
                            .removeClass('visible')
                            .end()
                            .addClass('visible')
                            .on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                                resetAfterAnimation(section);
                            });

                        //if browser doesn't support transition
                        if ($('.no-csstransitions').length > 0) {
                            resetAfterAnimation(section);
                        }

                        var url = newSection + '.html';

                        if (url != window.location && bool) {
                            //add the new page to the window.history
                            //if the new page was triggered by a 'popstate' event, don't add it
                            window.history.pushState({path: url}, '', url);
                        }
                    }
                );
            });
        }, 50);
    }

    function loadingBarAnimation() {
        var scaleMax = loadingBar.data('scale');
        if (newScaleValue + 1 < scaleMax) {
            newScaleValue = newScaleValue + 1;
        } else if (newScaleValue + 0.5 < scaleMax) {
            newScaleValue = newScaleValue + 0.5;
        }

        loadingBar.velocity(
            {
                scaleY: newScaleValue,
            },
            100,
            loadingBarAnimation
        );
    }

    function resetAfterAnimation(newSection) {
        //once the new section animation is over, remove the old section and make the new one scrollable
        newSection.removeClass('overflow-hidden').prev('.cd-section').remove();
        isAnimating = false;
        //reset your loading bar
        resetLoadingBar();
    }

    function resetLoadingBar() {
        loadingBar.removeClass('loading').velocity(
            {
                scaleY: 1,
            },
            1
        );
    }

    $('li').click(function () {
        setTimeout(function () {
            location.reload();
        }, 1500);
    });
});
var tmax_opts = {
    delay: 0.5,
    repeat: -1,
    repeatDelay: 0.5,
    yoyo: true,
};

var tmax_tl = new TimelineMax(tmax_opts),
    polylion_shapes = $('svg.polylion > g polygon'),
    polylion_stagger = 0.00475,
    polylion_duration = 1.5;

var polylion_staggerFrom = {
    scale: 0,
    opacity: 0,
    transformOrigin: 'center center',
};

var polylion_staggerTo = {
    opacity: 1,
    scale: 1,
    ease: Elastic.easeInOut,
};

tmax_tl.staggerFromTo(polylion_shapes, polylion_duration, polylion_staggerFrom, polylion_staggerTo, polylion_stagger, 0);
