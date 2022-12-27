$(document).ready(function(){

  // nav bar bg change on scroll js 
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("nav-bg");
      }
      else{
        $('header').removeClass("nav-bg");
      }
    });
  // nav bar bg change on scroll js ends here 

  
  //  what clients say section carousel
    $('.right-what-client-say-sec').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $(".left-arrow"),
        nextArrow: $(".right-arrow"),
    });
    // what clients say section carousel ends here


    // blog section carousel 
    $('.blog-carousel').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      // autoplay: true,
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
    // blog section carousel ends here


    //=== mmenu js ===
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
              "prev",
              "title",
              "close"
           ]
        }
     
   });
  //  mmenu js ends here 


  // number count for stats, using jQuery animate
  var a = 0;
  $(window).scroll(function () {
      var oTop = $(".counter-box").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
          $(".counter").each(function () {
              var $this = $(this),
                  countTo = $this.attr("data-number");
              $({
                  countNum: $this.text()
              }).animate(
                  {
                      countNum: countTo
                  },
  
                  {
                      duration: 3000,
                      easing: "swing",
                      step: function () {
                          //$this.text(Math.ceil(this.countNum));
                          $this.text(
                              Math.ceil(this.countNum).toLocaleString("en")
                          );
                      },
                      complete: function () {
                          $this.text(
                              Math.ceil(this.countNum).toLocaleString("en")
                          );
                          //alert('finished');
                      }
                  }
              );
          });
          a = 1;
      }
  });
  // counting script ends here 


  // AOS js 
  AOS.init();
  AOS.init({
    offset: 100,
    mirror: false,
    disable: 'mobile',
  });
  // Custom AOS delay 400
});

    
  