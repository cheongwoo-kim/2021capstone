$(document).ready(function() {
    //Main Page FullPage
    if($('#fullpage').length > 0){
        $('#fullpage').fullpage({
            afterLoad: function(origin, destination, direction){
                //색인 사용
                if(destination.index > 0){
                   $('.fixed-nav').fadeIn();
                   $('.header nav').addClass('fixed');
                   $('.logo img').attr('src', 'images/logo_black.png');
                   $('.toggle-btn img').attr('src', 'images/menu_icon_black.png');
                }else{
                    $('.fixed-nav').fadeOut();
                    $('.header nav').removeClass('fixed');
                    $('.logo img').attr('src', 'images/logo.png');
                    $('.toggle-btn img').attr('src', 'images/menu_icon.png');
                }
                if(destination.index == 5){
                    $('.back_to_top').addClass('active');
                }else{
                    $('.back_to_top').removeClass('active');
                }
                if(destination.index == 1 || destination.index == 3){
                    $('.fixed-nav').find('a').removeClass('active');
                    $('.fixed-nav').find('a').removeClass('active-black');
                    $('.fixed-nav').find('a').eq(destination.index).addClass('active-black');     
                }
                else{
                    $('.fixed-nav').find('a').removeClass('active');
                    $('.fixed-nav').find('a').removeClass('active-black');
                    $('.fixed-nav').find('a').eq(destination.index).addClass('active');
                }
               
            }
        });
    }//fullpage end
	

    //Main Page Slide
   if($('.main-slides').length > 0){
    const swiper = new Swiper('.main-slides', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        clickable:true
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }

    });
   }//main slides
   if($('.testimonial-slides').length > 0){
    const testimonial = new Swiper('.testimonial-slides', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        clickable:true
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }

    });
   }//testimonial slides
    
    //toggle menu open and close
    $('.toggle-btn').click(function(){
        $('.toggle-menu').addClass('active');
    });
    $('.toggle-menu .close').click(function(){
        $('.toggle-menu').removeClass('active');
    });
    //subpage header fixed
    $('.subpage nav').addClass('fixed');
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.subpage nav').addClass('fixed');
        }else{
            $('.subpage nav').removeClass('fixed');
        }
        var footerOST = $('.footer').offset().top - 800;
        if($(this).scrollTop() > footerOST){
        //back to top by scrollTop

        $('.back_to_top').addClass('active');
        }else{
            $('.back_to_top').removeClass('active');
        }
    });
    $('.about_btt').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},500,'easeOutQuint');

    });
});//document read

