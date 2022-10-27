$(function() {


  $('.menu__btn').on('click', function(){
      $('.menu__item-list').toggleClass('menu__item-list--active');
  });

  
  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
});



// Открыть корзину
$('.user-nav__link--card').on('click', function(){
  $('.card').toggleClass('card--active');
});
// Закрыть корзину
$('.card__close-btn').on('click', function(e) {
  e.preventDefault();
  $('.card').removeClass('card--active');
});


// При нажатии класс получает доп класс filters__btn-turn--active, стрелка меняет положение на 180 градусов
$('.filters__btn-turn').on('click', function(){
  $('.filters__btn-turn').toggleClass('filters__btn-turn--active');
});



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