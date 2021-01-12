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




$(document).ready(function(){
  
  $('ul#main-menu li').hover(function(){
    $(this).find('>ul.sub-menu').fadeToggle(150);    
  });
  
});


$(document).ready(function(){
   $(window).scroll(function(){
      if($(window).scrollTop() > 0){
        $('#header').addClass('sticky animate__animated animate__slideInDown');       
      }else{
        $('#header').removeClass('sticky animate__animated animate__slideInDown');
      }

      if($(window).scrollTop()>200){
        $('#wp-home-page-new-colection .content-header').addClass('visible animate__animated animate__slideInUp');
      }

      if($(window).scrollTop()>220){
        $('#wp-home-page-new-colection .home-page-slider.new-colection').addClass('visible animate__animated animate__slideInUp');
      }

      if($(window).scrollTop()>700){
        $('#wp-homme-page-new-product .content-header').addClass('visible animate__animated animate__slideInUp');
      }

      if($(window).scrollTop()>800){
        $('#wp-homme-page-new-product .home-page-slider.new-product').addClass('visible animate__animated animate__fadeInRightBig');
      }

      if($(window).scrollTop()>1400){
        $('#wp-home-page-best-seller .content-header').addClass('visible animate__animated animate__slideInUp');
      }
      if($(window).scrollTop()>1600){
        $('#wp-home-page-best-seller .best-seller').addClass('visible animate__animated animate__slideInUp');
      }
   });
        
});

$(document).ready(function(){
  
    if($(window).scrollTop() > 50){
      $('#wp-policy-menu').addClass('sticky animate__animated animate__fadeIn');  
      if($(window).scrollTop() > 4300){
        //$('#wp-policy-menu').toggleClass('sticky animate__animated animate__fadeIn');
        $('#wp-policy-menu').addClass('sticky animate__animated animate__fadeOut animate__faster');       
      }else{      
        $('#wp-policy-menu').removeClass('animate__fadeOut animate__faster');
      } 
    }else{
      $('#wp-policy-menu').removeClass('sticky animate__animated animate__fadeIn');
    }    
    
    
});

