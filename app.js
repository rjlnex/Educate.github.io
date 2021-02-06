$(document).ready(function(){
    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-times");
        $('.slide-menu').slideToggle();
        //$(".menu").toggleClass("nav-toggle");
    });

    $(".slide-menu li a").click(function(){
        $(".fas").removeClass("fa-times");
        //$('.menu').toggleClass("nav-toggle");
        $('.slide-menu').slideToggle();
    });

    $(window).scroll(function(){
        if($(window).scrollTop() < 20){
            $('header').css('box-shadow','none');
        }else{$('header').css('box-shadow','0 .2rem .5rem #333')}
    })
});