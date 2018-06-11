$(document).ready(function() {
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


});