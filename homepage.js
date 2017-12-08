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

$(".photo-container").on('mousemove', function(e) {
  if (e.pageX < ($(this).offset().left + $(this).width() / 2)) {
    $('#next-pic').css('visibility','hidden');
    $('#prev-pic').css('visibility','visible');
  } else {
    $('#prev-pic').css('visibility','hidden');
    $('#next-pic').css('visibility','visible');
  }
});

$(".photo-container").mouseleave(function(e) {
    $('#prev-pic').css('visibility','hidden');
    $('#next-pic').css('visibility','hidden');
});

$('#prev-icon').click(function() {
  var id = parseInt($('.pics').attr('id'));
  prevPic(id);
});

$('#next-icon').click(function() {
  var id = parseInt($('.pics').attr('id'));
  nextPic(id);
});

$('#slider-left').click(function(){
  var id = parseInt($('.pics').attr('id'));
  prevPic(id);
})

$('#slider-right').click(function(){
  var id = parseInt($('.pics').attr('id'));
  nextPic(id);
})

function nextPic(id){
  if(id < 10){
    var newId = id + 1;
    $('.pics').attr({'id': newId, 'src':'pic' + newId +'.JPG'});
    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  }
}

function prevPic(id){
  if(id > 1){
    var newId = id - 1;
    $('.pics').attr({'id': newId, 'src':'pic' + newId +'.JPG'});
    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  }
}

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
