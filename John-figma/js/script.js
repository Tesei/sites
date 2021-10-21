// Вставка страницы со скриптом

// Функция которая проверяет может ли браузер поддерживать разрешение webp
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
// Функция которая проверяет может ли браузер поддерживать разрешение webp
// Открытие и закрытие бургера:-------------------------
$(document).ready(function () {
	// обращаемся к меню бургера, при клике на бургер должны добавиться классы актив к корневому блоку span-ов и блоку nav
	$('.icon-menu').click(function (event) {
		$('.menu__body, .icon-menu').toggleClass('_active');
		// добавляет класс актив к тегу body и запрещает перемотку при открытом бургере
		$('body').toggleClass('lock');
	});

// Чтобы меню закрывалось после нажатия на категрию меню:
	$('.menu__body').click(function(){
	 	 	$('.menu__body, .icon-menu').removeClass('_active');
	  		$('body').removeClass('lock');
});
	
});
// Открытие и закрытие бургера:------------------------
