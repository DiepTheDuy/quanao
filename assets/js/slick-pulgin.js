//================slider ==================
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
 //================ end slider ==================
 //================slider 2 khung ==================
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
//================end slider 2 khung ==================


  //===========side bar ============
  $(document).ready(function () {
    $('.wp-detail-product').stickySidebar({
      topSpacing: 100,
      bottomSpacing: 60
    });
  });
  
  $(document).ready(function () {
    $('.side-bar').stickySidebar({
      topSpacing: 100,
    });
  });


  //====collection====
$(".collection-page-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
});
$(".gallery-slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  centerPadding: '0px',
  asNavFor: '.gallery-slider-nav'
});
$(".gallery-slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".gallery-slider-for",
  dots: true,
  centerPadding: '0px',
  centerMode: true,
  focusOnSelect: true,
  arrows: false
});

//==== end collection====