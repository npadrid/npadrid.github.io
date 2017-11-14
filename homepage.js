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

$(function (){
  var i, allPics, inPic, outPic;
  for (i = 1, allPics = $('.pics').length, i < allPics; i++) {
    inPic = "#pic" + i;
    console.log(inPic);
    if(i == 1){
      console.log("first pic");
      $('#pic1').delay(1000).fadeOut(500);
    }
    else{
      $(inPic).fadeIn(500).delay(1000).fadeOut(500);
    }
});
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
