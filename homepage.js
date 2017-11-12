$('.about-link').click(function() {
    $('html,body').animate({
        scrollTop: $("#about-section").offset().top},
        'slow');
});
