// Открытие и закрытие бургера:-------------------------
$(document).ready(function () {
	// обращаемся к меню бургера, при клике на бургер должны добавиться классы актив к корневому блоку span-ов и блоку nav
	$('.icon-menu').click(function (event) {
		$('.menu, .icon-menu, .header__link').toggleClass('_active');
		// добавляет класс актив к тегу body и запрещает перемотку при открытом бургере
		$('body').toggleClass('lock');
	});

	// Чтобы меню закрывалось после нажатия на категрию меню:
	$('.menu').click(function () {
		$('.menu, .icon-menu, .header__link').removeClass('_active');
		$('body').removeClass('lock');
	});

});

// Фильтр данных------------------------------------------------------
// У кнопок должена быть прописана надпись в теге data-filter="имя_вида"
// У фильтруемых элементов прописаны классы с видом (по ним будем фильтровать)

$('.tabs__link').click(function (event) {
	// строкой ниже мы проверяем имя вида
	var i = $(this).data('filter');
	// ниже мы смотрим к какому виду принадлежит строка (all - все виды)
	if (i == 'all') {
		$('.news-media__column').show();
	} else {
		// Если класс фильтруемого элемента содержит вид того, что нам необходим - показывем его
		$('.news-media__column').hide();
		$('.news-media__column.' + i).show();
	}
	// Добавляем класс актив к выбранной кнопке (для придания свойств, типа цвет, форма итд)
	$('.tabs__link').removeClass('_active');
	$(this).addClass('_active')

	return false;
});
// Фильтр данных------------------------------------------------------


// Карта Google API------------------------------------------------------

// Initialize and add the map
function initMap() {
	// The location of Uluru
	const uluru = { lat: 51.1951619, lng: 13.9863702 };
	const france = { lat: 48.055495, lng: 3.225413 };
	const poland = { lat: 52.240236, lng: 19.450740 };
	const italy = { lat: 38.643463, lng: 16.236828 };
	const russia = { lat: 55.6036283, lng: 51.6657343 };
	
	var icon = {
		url: "img/content/map/icon.svg", // url 
		scaledSize: new google.maps.Size(24, 29), // масштабирование иконки
		origin: new google.maps.Point(0,0), // origin
		anchor: new google.maps.Point(12, 29) // якорь - уточнение местоположения
	};
	
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 3, // Масштаб
		mapId: "5b306ff421bb8346", // Подбор стиля. Так же указывается в скрипте HTML
		center: uluru,
	});
	// The marker, positioned
	const markerFr = new google.maps.Marker({
		position: france,
		map: map,
		icon: icon,
		title: 'Investors', // Наименование маркера
	// 	label: {
	// 		text: 'A',
	// 		color: '#79E149'
	//   }
	});
	const markerPl = new google.maps.Marker({
		position: poland,
		map: map,
		icon: icon
	});
	const markerIt = new google.maps.Marker({
		position: italy,
		map: map,
		icon: icon
	});
	const markerRu = new google.maps.Marker({
		position: russia,
		map: map,
		icon: icon
	});
}
// Необходимовставить в HTML документ c API и ID:
/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAGdtSzVkeCv231H09PhB9GmmTvx00ENk&map_ids=5b306ff421bb8346&callback=initMap&libraries=&v=weekly"async></script> */

// Карта Google API------------------------------------------------------
