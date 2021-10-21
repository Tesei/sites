// Открытие и закрытие табов:-------------------------
$(document).ready(function () {
	// обращаемся к меню табов, при клике на кнопку должен добавиться класс _active к выбранному блоку (выбор блока по классу или id)
	$('#list__item_all').click(function (event) {
		$('.fotoarea__picture').removeClass('_active');
		$('.fotoarea__picture').toggleClass('_active');
	});

	$('#list__item_web').click(function (event) {
		$('.fotoarea__picture').removeClass('_active');
		$('.fotoarea__picture_web').toggleClass('_active');
	});

	$('#list__item_apps').click(function (event) {
		$('.fotoarea__picture').removeClass('_active');
		$('.fotoarea__picture_apps').toggleClass('_active');
	});

	$('#list__item_other').click(function (event) {
		$('.fotoarea__picture').removeClass('_active');
		$('.fotoarea__picture_other').toggleClass('_active');
	});

});
// Открытие и закрытие табов:------------------------

// Паралакс эффект - фоновое изображение, при скроле "вниз",сдвигается вверх, в 2 раза медленнее

// $(window).scroll(function (event)) {
// 	var s = 0 - $(this).scrollTop() / 2;
// 	$('.top').css('transform', 'translate3d(0, ' + s + 'px, 0)');
// };

// Открытие и закрытие меню навигации:------------------------