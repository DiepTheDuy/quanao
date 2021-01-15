$(document).ready(function(){  
    $('.product-color-option a:first-child').addClass('active');
    $('.wp-product-view-slider>:first-child').addClass('active');
    $('.color-btn.color-btn-green').click(function(){  
        $('.product-view-slider').fadeToggle(function(){
          $(this).toggleClass('active')
        });    
        $('.color-btn').removeClass('active');
        $(this).toggleClass('active');           
    });

    $('.color-btn.color-btn-brown').click(function(){     
      $('.product-view-slider').fadeToggle(function(){
        $(this).toggleClass('active')
      }); 
      $('.color-btn').removeClass('active');
      $(this).toggleClass('active');               
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
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('#wp-policy-menu').addClass('sticky animate__animated animate__fadeIn');  

      if($(window).scrollTop() > 4300){        
        $('#wp-policy-menu').addClass('sticky animate__animated animate__fadeOut animate__faster'); 
      }else{      
        $('#wp-policy-menu').removeClass('animate__fadeOut animate__faster');
      }
    }else{
      $('#wp-policy-menu').removeClass('sticky animate__animated animate__fadeIn');
    }    
  });
});


$(document).ready(function(){
  $('#icon-search>a').click(function(){
    $('#bg-search-box').addClass('active');
    $('#wp-search-box').addClass('open-search-box');
  });
  $('#search-box i').click(function(){
    $('#bg-search-box').removeClass('active');
    $('#wp-search-box').removeClass('open-search-box');
  });
});





$( document ).ready(function() {
  $('.btn-number').click(function(e){
      e.preventDefault();
      
      var fieldName = $(this).attr('data-field');
      var type      = $(this).attr('data-type');
      var input = $("input[name='"+fieldName+"']");
      var currentVal = parseInt(input.val());
      if (!isNaN(currentVal)) {
          if(type == 'minus') {
              var minValue = parseInt(input.attr('min')); 
              if(!minValue) minValue = 1;
              if(currentVal > minValue) {
                  input.val(currentVal - 1).change();
              } 
              if(parseInt(input.val()) == minValue) {
                  $(this).attr('disabled', true);
              }
  
          } else if(type == 'plus') {
              var maxValue = parseInt(input.attr('max'));
              if(!maxValue) maxValue = 999;
              if(currentVal < maxValue) {
                  input.val(currentVal + 1).change();
              }
              if(parseInt(input.val()) == maxValue) {
                  $(this).attr('disabled', true);
              }
  
          }
      } else {
          input.val(0);
      }
  });
  $('.input-number').focusin(function(){
     $(this).data('oldValue', $(this).val());
  });
  $('.input-number').change(function() {
      
      var minValue =  parseInt($(this).attr('min'));
      var maxValue =  parseInt($(this).attr('max'));
      if(!minValue) minValue = 1;
      if(!maxValue) maxValue = 30;
      var valueCurrent = parseInt($(this).val());
      
      var name = $(this).attr('name');
      if(valueCurrent >= minValue) {
          $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
      } else {
          alert('Vui lòng nhập lại');
          $(this).val($(this).data('oldValue'));
      }
      if(valueCurrent <= maxValue) {
          $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
      } else {
          alert('Bạn đã đặt quá số lượng cho phép ( tối đa 30 )');
          $(this).val($(this).data('oldValue'));
      }
      
      
  });
  $(".input-number").keydown(function (e) {
          // Allow: backspace, delete, tab, escape, enter and .
          if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
               // Allow: Ctrl+A
              (e.keyCode == 65 && e.ctrlKey === true) || 
               // Allow: home, end, left, right
              (e.keyCode >= 35 && e.keyCode <= 39)) {
                   // let it happen, don't do anything
                   return;
          }
          // Ensure that it is a number and stop the keypress
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
          }
  });
});


$(document).ready(function(){
      $('.wp-product-size>.product-size:first-child a').addClass('active');
      $('.product-size a').click(function(){
        $('.product-size a').removeClass('active');
        $(this).toggleClass('active');
      });
});


$(document).ready(function () {
  $('.wp-detail-product').stickySidebar({
    topSpacing: 100,
    bottomSpacing: 60
  });
});

