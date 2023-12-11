/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці

	// if (document.querySelector('.slider-text')) {
	// 	// Створюємо слайдер
	// 	new Swiper('.slider-text', {
	// 		modules: [ Autoplay],
	// 		observer: true,
	// 		observeParents: true,
	// 		speed: 8000,
	// 		loop: true,
	// 		allowTouchMove: false,

	// 		autoplay: {
	// 			delay: 0,
	// 			disableOnInteraction: false,
	// 		},

	// 		breakpoints: {
	// 			320: {
	// 				slidesPerView: "auto",
	// 				spaceBetween: 20,
	// 			},
	// 			768: {
	// 				slidesPerView: "auto",
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: "auto",
	// 				spaceBetween: 40,
	// 			},
	// 			1230: {
	// 				slidesPerView: "auto",
	// 				spaceBetween: 60,
	// 			},
	// 		},
	// 	});
	// }

	if (document.querySelector('.offers__slider')) {
		// Створюємо слайдер
		new Swiper('.offers__slider', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,

			navigation: {
				prevEl: '.offers__slider .button-prev',
				nextEl: '.offers__slider .button-next',
			},

			pagination: {
				el: '.offers__pagination',
				clickable: true,
			},
		});
	}

	for (const mobileSlider of document.querySelectorAll('.team__slider')) {
        if (mobileSlider) {
            (function () {
                "use strict";

                const breakpoint = window.matchMedia("(min-width:768px)");
                let slider;

                const enableSwiper = function () {
                    slider = new Swiper(mobileSlider, {
                        modules: [Pagination],
						observer: true,
						observeParents: true,
						slidesPerView: 1,
						spaceBetween: 0,
						speed: 800,

						pagination: {
							el: '.team__pagination',
							clickable: true,
						},

						breakpoints: {
							320: {
								slidesPerView: 1.3,
								spaceBetween: 20,
							},
							570: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
						},

                    });
                };

                const breakpointChecker = function () {
                    if (breakpoint.matches === true) {
                        if (slider !== undefined) slider.destroy(true, true);

                        return;
                    } else if (breakpoint.matches === false) {
                        return enableSwiper();
                    }
                };

                breakpoint.addListener(breakpointChecker);
                breakpointChecker();
            })();
        }

    }

	if (document.querySelector('.reviews__slider')) {
		// Створюємо слайдер
		new Swiper('.reviews__slider', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,

			navigation: {
				prevEl: '.reviews__slider .button-prev',
				nextEl: '.reviews__slider .button-next',
			},

			pagination: {
				el: '.reviews__pagination',
				clickable: true,
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1230: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});