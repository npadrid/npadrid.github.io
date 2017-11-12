$('.about-link').click(function() {
    $('html,body').animate({
        scrollTop: $("#content-about").offset().top},
        'slow');
});
