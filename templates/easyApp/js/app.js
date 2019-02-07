$(document).ready(function () {
    
    $('.burger').click(function () {
        
        if ($('.menu').css('left') == '0px') {

            $('.menu').css('left', '-100%');
            $('i').removeClass('fas fa-times');
            $('i').addClass('fas fa-bars');
            
        } else {

            $('.menu').css('left', '0');
            $('i').removeClass('fas fa-bars');
            $('i').addClass('fas fa-times');
            
        }
        
    });

});