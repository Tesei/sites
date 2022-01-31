// Включение слайдера
$(document).ready(function () {
	$('.slider__items').slick({
		arrows: false, //Если стрлки не нужны
		dots: true, // Точки слайдера
		adaptiveHeight: true, // Слайдер подстраивается под высоту контента +scss нужно включить slick-track (проверить!)
		autoplay: true, // Автоматическая прокрутка слайдера
		// autoplaySpeed: 3500, // Задержка автоматического пролистывания (по умолчанию 3000мс)
		pauseOnFocus: true, // Пауза когда кликнем
		pauseOnHover: true, // Пауза когда наведём на слайд
		pauseOnDotsHover: true, // Пауза когда наведём на точку
	});
});

// Открытие и закрытие бургера:-------------------------
$(document).ready(function () {
	// обращаемся к меню бургера, при клике на бургер должны добавиться классы актив к корневому блоку span-ов и блоку nav
	$('.icon-menu').click(function (event) {
		$('.menu__body, .icon-menu, .header__logo').toggleClass('_active');
		// добавляет класс актив к тегу body и запрещает перемотку при открытом бургере
		$('body').toggleClass('lock');
	});

	// Чтобы меню закрывалось после нажатия на категрию меню:
	$('.menu__body').click(function () {
		$('.menu__body, .icon-menu, .header__logo').removeClass('_active');
		$('body').removeClass('lock');
	});

});
// Открытие и закрытие бургера:------------------------