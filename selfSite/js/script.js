// Какие скрипты будут использованы на сайте:

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
// Функция которая проверяет может ли браузер поддерживать разрешение webp;
// Открытие и закрытие бургера:-------------------------
$(document).ready(function () {
	// обращаемся к меню бургера, при клике на бургер должны добавиться классы актив к корневому блоку span-ов и блоку nav
	$('.icon-menu').click(function () {
		$('.menu__body, .icon-menu').toggleClass('_active');
		// добавляет класс актив к тегу body и запрещает перемотку при открытом бургере
		$('body').toggleClass('lock');
	});

	// Чтобы меню закрывалось после нажатия на категрию меню:
	$('.menu__body').click(function () {
		$('.menu__body, .icon-menu').removeClass('_active');
		$('body').removeClass('lock');
	});

});
// Открытие и закрытие бургера:------------------------;
"use strict"

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;

// Перемотка, плавная на выбранную величину:
function setScrollToOptions(x) {
	window.scrollTo({
		top: x,
		left: 0,
		// smooth, instant,
		// либо auto; по умолчанию auto
		behavior: "smooth",
	});
}

function goToSection(nameClass) {
	const section = document.querySelector(`.${nameClass}`);
	const elementOffsetTop = section.offsetTop;

	if (mainElementWidth > 767.98) {
		window.scrollTo({
			top: elementOffsetTop - 70,
			left: 0,
			behavior: "smooth",
		});
	} else {
		window.scrollTo({
			top: elementOffsetTop,
			left: 0,
			behavior: "smooth",
		});
	}
}


;
// ? Скролл триггер:

// ? Информация по видео-инструкции
// gsap.registerPlugin(scrollTrigger);

// let tl = gsap.timeline({
// 		scrollTrigger: {
// 			".item",
// 			start: center center,
// 			end:() => "+=" + document.querySelector(".item").offsetWidth,
// 			markers: true,
// 			scrub: true, // Даёт возможность контролировать анимацию скроллом, если задать время в секундах, то анимация после остановки скролла будет длиться столько секунд после
// 			toggleActions: "play none none none" // Возможные примеры (play, restart, reset, complete, none, reverse, resume, pause)
// 			1) позиция - начало 2) конечная точка 3) продолжение 4)
// 	} 
// });

// tl.to(
//? gsap.to( // Если таймлайн будетвнутри
// 	".item",{
// 	color: '#000',

// ? можно разместить тут, а можно в тайм-лайне, тогда имя шапки измениться
// 		scrollTrigger: {
// 			".item",
// 			start: center center,
// 			end:() => "+=" + document.querySelector(".item").offsetWidth,
// 			markers: true,
// 			scrub: true, // Даёт возможность контролировать анимацию скроллом, если задать времяв секундах, то анимация после остановки скроллабудет длиться столькосекунд после
// 			toggleActions: "play none none none" // Возможные примеры (play, restart, reset, complete, none, reverse, resume, pause)
// 	} 
// ? можно разместить тут, а можно в тайм-лайне

// });

// Наложение портфолио друг надруга ===================================
const windowWidth = window.innerWidth;
// console.log(windowWidth);
// if (windowWidth > 768) { // запрещает данную анимацию при md3
// 	gsap.registerPlugin(ScrollTrigger);

// 	gsap.utils.toArray('.project').forEach((project, i) => {
// 		ScrollTrigger.create({
// 			trigger: project,
// 			start: "top 87px",
// 			pin: true,
// 			pinSpacing: false,
// 		});
// 	});

// };

// Наложение портфолио друг надруга ===================================

// Выдвижение кадров слева ===================================
if (windowWidth > 768) { // запрещает данную анимацию при md3
	gsap.registerPlugin(ScrollTrigger);

	gsap.utils.toArray('.work').forEach((project, i) => {

		gsap.timeline({
			scrollTrigger: {
				trigger: project,
				start: "0% bottom", // Начало анимации с этой точки
				end: "75% bottom", // Конец анимации на этой точке						
				scrub: true,
				markers: false,
				toggleActions: "play none resume none", // Возможные примеры (play, restart, reset, complete, none, reverse, resume, pause)
			}
		})
			.from(project, {
				x: innerWidth * 1,
				rotate: 20,
				opacity: 0,
			})
	})

};
// Выдвижение кадров слева ===================================



// const firstLink = document.querySelectorAll(".menu__body2 .menu__link")[1];
// console.log(firstLink);

gsap.timeline({
	scrollTrigger: {
		trigger: ".about__container",
		start: "100% bottom", // Начало анимации с этой точки
		end: "80% bottom", // Конец анимации на этой точке
		markers: false, // Показывает метки начала действия скрипта
		scrub: true, // Даёт возможность контролировать анимацию скроллом, если задать время в секундах, то анимация после остановки скролла будет длиться столько секунд после

		// pin: true, //создаёт пустое пространство для нового элемента
	}
})
	// после операторов не ставить точку с запятой:
	.to(".menu__body2", {
		y: 0,
		opacity: 1,
	})



;

const formWrap = document.querySelector(".wrapper__form");
const form = document.querySelector(".form");


function openForm() {
	formWrap.classList.toggle("wrapper__form-active");
};


const languageSelector = document.querySelectorAll('.language__text');
const languagePlace = document.querySelectorAll('.language__place');

for (let index = 0; index < languageSelector.length; index++) {
	const languageItem = languageSelector[index];
	languageItem.addEventListener("click", function (e) {
		
		for (let index = 0; index < languageSelector.length; index++) {
			let languageItem2 = languageSelector[index];
			languageItem2.classList.toggle("_active");
		}

		for (let index = 0; index < languagePlace.length; index++) {
			let languagePlaceItem = languagePlace[index];
			languagePlaceItem.classList.toggle("_active");
		}
	});
}
;