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



// Range-slider ползунок
const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
    start: [100, 1000],
		connect: true,
		step: 20,
    range: {
			'min': [0],
			'max': [1200]
    }
	});
}

	const input0 = document.getElementById('input-0');
	const input1 = document.getElementById('input-1');
	const inputs = [input0, input1];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
  // Range-slider ползунок