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
  dots: false,
  infinite: false,

  // Добавляем точки при расширении экрана 1530 и убираем стрелки
  responsive: [
    {
      breakpoint: 1530,
      settings: {  
        dots: true,
        arrows: false,
      }
    }
  ]

});
  

});