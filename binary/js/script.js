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

gsap.timeline({
	scrollTrigger: {
		trigger: ".about",
		start: "15% center", // Начало анимации с этой точки
		end: "30% center", // Конец анимации на этой точке
		markers: false, // Показывает метки начала действия скрипта
		scrub: true, // Даёт возможность контролировать анимацию скроллом, если задать время в секундах, то анимация после остановки скролла будет длиться столько секунд после

		// pin: true, //создаёт пустое пространство для нового элемента
	}
})
	// после операторов не ставить точку с запятой:
	.to(".menu", {
		y: 0,
		opacity: 1,
	})
