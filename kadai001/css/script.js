$(function(){
    $('#mainpic').slick({
        dots:true,
        infinite:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:5000,
        arrows:false,
        fade:true,

    });

    $('.home,.menu>li').on('mouseover',function(){
        $(this).animate({
            opacity:0.5
        },200);
    });

    $('.home,.menu>li').on('mouseout',function(){
        $(this).css('opacity','100%')
    });

    $('.thumbnail').hover(function(){
        $(this).animate({
            opacity:0.5
        },200)},

        function(){ $(this).css('opacity','100%')}
    );
    $('.thumbnail').on('click',function(){
        let img =$(this).attr('src');

        $('#largeImage').attr('src',img);

        $('#largeImage_back').fadeIn();
    });

    $('#btn').on('click',function(){
        $('#largeImage_back').fadeOut();
    });

    $('#topbtn').hover(function(){
        $(this).animate({
            opacity:0.5
        },300);
    },
        function(){
            $(this).animate({
                opacity:1
            },100);
        }
    );

    $(window).on('scroll',function(){

        $('.about,.works,footer').animate({
            opacity:1
        },500);

        let scrollPosition= $(this).scrollTop();

        if(scrollPosition>200){
            $('#topbtn').fadeIn();
        }else{
            $('#topbtn').fadeOut();
        }
    });

});
