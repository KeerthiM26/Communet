// Pinspiration
// https://www.pinterest.com/pin/271201208788842829/

$(document).ready(function(){
    
    // Page scrolling function for the nav-links
    $(".nav-link").click(function(){
        $('html,body').animate({ scrollTop: $(this.hash).offset().top-80 }, 1400);
        return false;
    });
    
    // Back to Top Link
    $(".top-link").click(function(){
        $('html,body').animate({ scrollTop: $("#topSection").offset().top }, 2000);
        return false;
    });
    
    // Function to change the nav-bar on scroll
    $(window).scroll(function(){
        ($(window).scrollTop() >= 110) ? (
            $('.nav-bar').addClass('scrolled')
        ) : (
            $('.nav-bar').removeClass('scrolled')
        );
    });
    
    // Setting the active nav-link based on the scroll position
    // There is a better way to do this but this way works so I'll fix it later
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $('#contactSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#contactLink').addClass('active');
        } 
    //    else if ($(window).scrollTop() >= $('#teamSection').offset().top - $(window).height()/2 ) {
    //         $('.nav-link').removeClass('active');
    //         $('#teamLink').addClass('active');
    //     } 
        else if ($(window).scrollTop() >= $('#servicesSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#servicesLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#subscriptionsSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#subscriptionsLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#artistsSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#artistsLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#aboutSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#aboutLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#topSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#topLink').addClass('active');
        }
    });
    
});