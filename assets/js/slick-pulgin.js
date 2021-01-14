$('.home-page-bander-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false ,
    
    
  });

  $('.home-page-slider.new-colection').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    adaptiveHeight:true,

  });
  
  $('.home-page-slider.new-product').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows:true,
    adaptiveHeight:true,

  });

  


 

  $('.product-view-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false ,
    draggable: false ,
    fade: true,
    asNavFor: '.product-view-slider-nav'
  });
  $('.product-view-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-view-slider-for',    
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });