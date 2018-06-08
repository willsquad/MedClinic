$(document).ready(function() {
   $('.address_map_overlay').on('click', function(){
       $('.address_map_container').addClass('slide_down_height').slideDown();
       $(this).addClass('hide');
   });
});