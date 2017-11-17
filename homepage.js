$('#about-link').click(function() {
    $('html,body').animate({
        scrollTop: $(".content-about").offset().top},
        'slow');
});

$('#projects-link').click(function() {
    $('html,body').animate({
        scrollTop: $(".content-projects").offset().top},
        'slow');
});

$('#discover-link').click(function() {
    $('html,body').animate({
        scrollTop: $(".content-discover").offset().top},
        'slow');
});

$('#about-footer').click(function() {
    $('html,body').animate({
        scrollTop: $(".content-about").offset().top},
        'slow');
});

$('#projects-footer').click(function() {
    $('html,body').animate({
        scrollTop: $(".content-projects").offset().top},
        'slow');
});


// $("#prev-pic").mouseenter(function(e) {
//   $('#prev-pic').css('visibility','visible');
// });
$(".photo-Container").on('mousemove', function(e) {
  console.log(e.pageX);
  console.log(this.offsetLeft);
  console.log(this.offsetRight);
  if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
    $('#prev-pic').css('visibility','visible');
  } else {
    $('#next-pic').css('visibility','visible');
  }
});

$(".photo-Container").mouseleave(function(e) {
    $('#prev-pic').css('visibility','hidden');
    $('#next-pic').css('visibility','hidden');
});

// $(function (){
//   var i, inPic, outPic;
//   for (i = 1; i <= $('.pics').length; i++) {
//     inPic = "#pic" + i;
//     if(i == 1){
//       $('#pic1').fadeIn(2000).delay(6000).fadeOut(2000);
//     }
//     else if(i == 2){
//       $(inPic).delay(10000).fadeIn(2000).delay(6000).fadeOut(2000);
//     }
//     else if (i == $('.pic').length) {
//       $(inPic).fadeIn(2000);
//       $('#pic10').css('display','block');
//     }
//     else{
//       $(inPic).delay(10000 * (i-1)).fadeIn(2000).delay(6000).fadeOut(2000);
//     }
//   }
// });
// Javascript for timeline by Sebastiano Guerriero from CodyHouse

// jQuery(document).ready(function($){
// 	var timelineBlocks = $('.cd-timeline-block'),
// 		offset = 0.8;
//
// 	//hide timeline blocks which are outside the viewport
// 	hideBlocks(timelineBlocks, offset);
//
// 	//on scolling, show/animate timeline blocks when enter the viewport
// 	$(window).on('scroll', function(){
// 		(!window.requestAnimationFrame)
// 			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
// 			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
// 	});
//
// 	function hideBlocks(blocks, offset) {
// 		blocks.each(function(){
// 			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
// 		});
// 	}
//
// 	function showBlocks(blocks, offset) {
// 		blocks.each(function(){
// 			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
// 		});
// 	}
// });
