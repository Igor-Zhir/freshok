$(function() {


  $('.menu__btn').on('click', function(){
      $('.menu__item-list').toggleClass('menu__item-list--active');
  })

  
  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
})

$('.header-slider').slick({
  arrows: true,
  autoplaySpeed: 2000,
});
  

});