$(function(){
  $('.top-slick').slick({
    dots: true,
    prevArrow: '<button type="button" class="top-slick__prev top-slick__arrow focus"><svg class="top-slick__arrow-icon"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="top-slick__next top-slick__arrow focus"><svg class="top-slick__arrow-icon"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    fade: true,
    infinite: false,
  //   responsive: [
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         arrows: false,
  //       }
  //     },
  //   ]
    
  });


  var mixer = mixitup('.product__cards');

});