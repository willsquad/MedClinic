$(document).ready(function() {

    $(document).on('click', '#menu_icon', function(){
        $('#primary-menu').slideToggle();
        $(this).find('i').toggleClass('fas-bars fas-times');
    });


   $('.address_map_overlay').on('click', function(){
       $('.address_map_container').addClass('slide_down_height').slideDown();
       $(this).addClass('hide');
   });

   $('.faq_element').on('click', function(){
        $('.faq_element').find('.faq_question').removeClass('faq_active').removeClass('faq_open');
        $('.faq_element').find('.faq_answer').removeClass('faq_active').removeClass('faq_open').slideUp();
        $('.faq_element').find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).find('.faq_question').addClass('faq_active');
        $(this).find('.faq_answer').addClass('faq_active').slideDown();
        $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');

   });

   $('.faq_categories').on('click', function(){
        $('.faq_categories').removeClass('active');
        $(this).addClass('active');
        

        var category = $(this).attr('data-category');

        if(category == 'all') {
            $('.faq_element').slideDown();
        } else if (category == 'facilities') {
            $('.faq_element').slideUp();
            $('.faq_element[data-category="'+category+'"]').slideDown();
        } else if (category == 'care') {
            $('.faq_element').slideUp();
            $('.faq_element[data-category="'+category+'"]').slideDown();
        } else if (category == 'payments') {
            $('.faq_element').slideUp();
            $('.faq_element[data-category="'+category+'"]').slideDown();
        }
   });

   $('.team_images_container').slick({
        prevArrow:'<i class="arrow_left fas fa-chevron-left"></i>',
        nextArrow:'<i class="arrow_right fas fa-chevron-right"></i>',
        dots:true,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        centerPadding: '20px',
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
            }
        ]
    });


    $('.testimonial_slider_container').slick({
        prevArrow:'<i class="arrow_left testimonial_arrow fas fa-chevron-left"></i>',
        nextArrow:'<i class="arrow_right testimonial_arrow fas fa-chevron-right"></i>',
        dots:true,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '20px',
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
            }
        ]
    });


});