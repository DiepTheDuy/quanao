$(document).ready(function(){  
    $('.product-color-option a:first-child').addClass('active');
    $('.color-btn').hover(function(){
        // alert('ok');        
        $('.color-btn').removeClass('active');
        $(this).toggleClass('active');
    });
    

    $('.product-item').hover(function(){
      $('.color-btn').removeClass('active');
      $('.product-item .product-img .product-color-option a:first-child').addClass('active');                 
    });
      
});