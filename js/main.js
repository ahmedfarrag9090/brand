$(function(){

    $(window).on('scroll', function(){

        if($(window).scrollTop() >= '150'){

            $('nav').fadeOut();
        }else{
            $('nav').fadeIn();
        }

        if($(window).scrollTop() >= '150'){

            $('.scroll-top-btn').fadeIn()
        }else{
            $('.scroll-top-btn').fadeOut()
        }

    });

    $('.scroll-top-btn').on('click', function(){
        $('body, html').animate({
            scrollTop : '0'
        }, 1000)
    });

    

    $('.menu-bar ul li').on('click', function(){


        $('body, html').animate({
            scrollTop : ($($(this).data('section')) .offset().top )
        }, 1000)
    });
    
    

    $('.menu-btn').on('click', function(){
        $('.menu-bar').slideToggle()
        $('.menu-btn i').toggleClass('hidden')
    })



    $('.pop-carousel .bolls span:first').on('click', function(){

        $(this).css('background-color', '#337ab7')
            .siblings().css('background-color', '#ccc')

        $('.pop-carousel .carousel-stage').css({

            'transform' : 'translateX(0)'
        })
    });


    $('.pop-carousel .bolls span:nth(1)').on('click', function(){

        $(this).css('background-color', '#337ab7')
            .siblings().css('background-color', '#ccc')

        $('.pop-carousel .carousel-stage').css({

            'transform' : 'translateX(-100%)'
        })
    });

    $('.pop-carousel .bolls span:nth(2)').on('click', function(){

        $(this).css('background-color', '#337ab7')
            .siblings().css('background-color', '#ccc')

        $('.pop-carousel .carousel-stage').css({

            'transform' : 'translateX(-200%)'
        })
    });

    $('.active').next('p').slideDown();

    $('.accord a').on('click', function(){
        $(this).next().slideToggle().end().siblings('a').next().slideUp()

        $(this).toggleClass('active').siblings().removeClass('active')
    })

    $('input[type="email"]').on('focus', function(){
        this.classList.add('focus')
    });

    $('input[type="email"]').on('blur', function(){
        if(this.value == ''){
            this.classList.remove('focus')
           }
    });


});