$(document).ready(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("nav-bg");
      }
      else{
        $('header').removeClass("nav-bg");
      }
    });


  
   
    $('.right-what-client-say-sec').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $(".left-arrow"),
        nextArrow: $(".right-arrow"),
    });

    $('.blog-carousel').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: $(".blog-slider-left-arrow"),
      nextArrow: $(".blog-slider-right-arrow"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    new Mmenu( "#m-menu", {
      "offCanvas": {
         "position": "right",
      //    "content": [
      //     "breadcrumbs",
      //     "close"
      //  ]
      },
      "navbars": {
           "position": "top",
           "content": [
              "breadcrumbs",
              "close"
           ]
        }
     
   });

});

    
  