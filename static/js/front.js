if (window.console == undefined) { console = { log: () => { } } }

// 배포시 삭제 예정.
document.querySelector('body').classList.add('padding50');

/* device */
(function (window, undefined) {
	"use strict";
	/**
	 * @description device 분기
	 * @modify
			@20231103 추가
	*/
	var device = {
		/** 플러그인명 */
		bind: device,
		initialize: function () {
			const me = this;

			me._resize();
		},
		_resize: () => {
			const body = document.querySelector('body');

			const deviceCall = () => {
				window.innerWidth < 1024 ? ( // mobile
					body.classList.remove('pc'),
					body.classList.add('mobile')
				) : ( // pc
					body.classList.remove('mobile'),
					body.classList.add('pc')
				)
			}

			deviceCall();

			window.addEventListener('resize', () => {
				deviceCall();
			})
		}
	};

	window.device = device;
}(window));

/* header */
(function (window, undefined) {
	"use strict";
	/**
	 * @description header menu
	 * @modify
			@20231102 추가
	*/
	var headerMenu = {
		/** 플러그인명 */
		bind: headerMenu,
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			// 비동기 selector 사용 금지
		},
		initialize: function () {
			const me = this;

			me._click();
			me._scroll();
		},
		_click: () => {
			const tg = '[data-include="header"]',
				menuBtn = document.querySelector(tg + ' .btn-menu'),
				menuBox = document.querySelector(tg + ' .box-menu'),
				items = document.querySelectorAll(tg + ' .box-menu ul li > a'),
				body = document.querySelector('body');

			// mobile menu show hide
			menuBtn.addEventListener('click', () => {
				menuBox.classList.add('is-active');
				body.style.overflow = 'hidden';
			})
			menuBox.querySelector('.btn-close').addEventListener('click', () => {
				menuBox.classList.remove('is-active')
				body.style.overflow = '';
			})

			// mobile 1뎁스 click
			for (const item of items) {
				item.addEventListener('click', (e) => {
					if (!e.target.parentElement.classList.contains('no-arrow')) {
						e.target.parentElement.classList.toggle('is-active')
					}
				})
			}
		},
		_scroll: () => {
			const showNav = gsap.from('[data-include="header"] .box-header', {
				//yPercent: -200,
				"opacity":"0",
				"display":"none",
				paused: true,
				duration: 0.2
			}).progress(1);

			ScrollTrigger.create({
				start: "top top",
				end: 99999,
				onUpdate: (self) => {
					// console.log(self.direction)
					window.onscroll = (e) => {
						let windowTop = window.scrollY;
						
						if ( windowTop > 152 ) {
							self.direction === -1 ? showNav.play() : showNav.reverse();
						}
					}
				}
			});
		}
	};

	window.headerMenu = headerMenu;
}(window));

// Footer Up Btn
(function (window, undefined) {
	"use strict";
	/**
	 * @description Footer Up Btn
	 * @modify
			@20231106 추가
	*/
	var footerUpBtn = {
		/** 플러그인명 */
		bind: footerUpBtn,
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			// 비동기 selector 사용 금지
		},
		initialize: function () {
			const me = this;

			me._click();
		},
		_click: () => {
			const tg = '[data-include="upBtn"]',
				upBtn = document.querySelector(tg + ' a');

			upBtn.addEventListener('click', (e) => {
				e.preventDefault();
				window.scrollTo({ top: top, behavior: "smooth" });
			})
		}
	};

	window.footerUpBtn = footerUpBtn;
}(window));

/* mainTopKv */
(function (window, undefined) {
	"use strict";
	var mainTopKv = {
		bind: mainTopKv,
		initialize: function () {
			const me = this;

			me._init();
		},
		_init: () => {
			var mainTopKv = new Swiper(".main-top-kv", {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 0,
				simulateTouch: true,
				loop: true,
				speed: 1000,
				effect: 'fade',
				fadeEffect: {
					crossFade: false
				},
				// autoplay: {
				// 	delay: 5000,
				// },
				pagination: {
					el: '.main-top-kv .swiper-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<div class="' + className + '"><span></span></div>';
					}
				},
			});
		}
	};

	window.mainTopKv = mainTopKv;
}(window));

/* bestProducts */
(function (window, undefined) {
	"use strict";
	var bestProducts = {
		bind: bestProducts,
		initialize: function () {
			const me = this;

			me._init();
		},
		_init: () => {
			let swiperSubNum = document.querySelectorAll('.swiper-best .item').length; // swiper item length

			var bestProducts = new Swiper(".swiper-best", {
				slidesPerView: 1.6,
				slidesPerGroup: 1,
				spaceBetween: 0,
				simulateTouch: true,
				loop: true,
				loopedSlides: swiperSubNum, //loop 시 파라미터 duplicate 개수 - 정적으로 숫자 4 표현 가능
				loopAdditionalSlides: 3,
				speed: 700,
				centeredSlides: true,
				slideToClickedSlide: false,
				navigation: {
					nextEl: '.box-bestProducts .swiper-button-next',
					prevEl: '.box-bestProducts .swiper-button-prev',
				},
				breakpoints: {
					1700: {  //브라우저가 1700보다 클 때3
						slidesPerView: 7.7,
						centeredSlides: false,
					},
					1600: {  //브라우저가 1600보다 클 때
						slidesPerView: 6,
						centeredSlides: false,
					},
					1500: {  //브라우저가 1500보다 클 때
						slidesPerView: 5,
						centeredSlides: false,
					},
					1280: {  //브라우저가 1280보다 클 때
						slidesPerView: 4.8,
						centeredSlides: false,
					},
					1024: {  //브라우저가 1024보다 클 때
						slidesPerView: 1,
						centeredSlides: true,
					},
					600: {  //브라우저가 600보다 클 때
						slidesPerView: 1.9,
						centeredSlides: true,
					},
					490: {  //브라우저가 490보다 클 때
						slidesPerView: 1.7,
						centeredSlides: true,
					},
				},
			});
		}
	};

	window.bestProducts = bestProducts;
}(window));

/* swiperBrand */
(function (window, undefined) {
	"use strict";
	var swiperBrand = {
		bind: swiperBrand,
		initialize: function () {
			const me = this;

			me._init();
		},
		_init: () => {
			var swiperBrand = new Swiper(".swiper-brand", {
				slidesPerView: 1.17,
				slidesPerGroup: 1,
				spaceBetween: 16,
				simulateTouch: true,
				loop: false,
				speed: 600,
				breakpoints: {
					1024: {  //브라우저가 1024보다 클 때
						slidesPerView: 3,
						spaceBetween: 24,
					},
				},
			});
		}
	};

	window.swiperBrand = swiperBrand;
}(window));

/* Sub - ourStory > vision */
(function (window, undefined) {
	"use strict";
	var subVisionSw = {
		bind: subVisionSw,
		initialize: function () {
			const me = this;

			me._init();
		},
		_init: () => {
			var subVisionSw = new Swiper(".vision-swiper", {
				slidesPerView: 1.09,
				slidesPerGroup: 1,
				spaceBetween: 8,
				simulateTouch: true,
				loop: false,
				speed: 600,
				breakpoints: {
					1024: {  //브라우저가 1024보다 클 때
						slidesPerView: 2,
						spaceBetween: 24,
					},
				},
			});
		}
	};

	window.subVisionSw = subVisionSw;
}(window));

/* Sub - products > detail Ingredients */
(function (window, undefined) {
	"use strict";
	var subIngredientsSw = {
		bind: subIngredientsSw,
		initialize: function () {
			const me = this;

			me._init();
		},
		_init: () => {
			var subIngredientsSw = new Swiper(".ingredient-swiper", {
				slidesPerView: 'auto',
				slidesPerGroup: 1,
				spaceBetween: -16,
				simulateTouch: true,
				loop: false,
				speed: 600,
				// autoHeight: true,
				centeredSlides: true,
				breakpoints: {
					1024: {  //브라우저가 1024보다 클 때
						slidesPerView: 5,
						spaceBetween: 24,
						centeredSlides: false,
					},
					780: {  //브라우저가 780보다 클 때
						slidesPerView: 1.8,
						spaceBetween: 24,
						centeredSlides: true,
					},
					600: {  //브라우저가 600보다 클 때
						slidesPerView: 1.6,
						spaceBetween: 12,
						centeredSlides: true,
					},
					480: {  //브라우저가 480보다 클 때
						slidesPerView: 1.4,
						spaceBetween: 12,
						centeredSlides: true,
					},
					420: {  //브라우저가 420보다 클 때
						slidesPerView: 1.3,
						spaceBetween: 12,
						centeredSlides: true,
					},
					372: {  //브라우저가 372보다 클 때
						slidesPerView: 1.1,
						spaceBetween: 0,
						centeredSlides: true,
					},
				},
			});
		}
	};

	window.subIngredientsSw = subIngredientsSw;
}(window));

/* Sub - products > detail Recommend */
(function (window, undefined) {
	"use strict";
	var subRecommendSw = {
		bind: subRecommendSw,
		initialize: function () {
			const me = this;

			me._init();
		},
		_init: () => {
			var subRecommendSw = new Swiper(".recommend-swiper", {
				slidesPerView: 1,
				slidesPerGroup: 1,
				simulateTouch: true,
				loop: false,
				speed: 600,
				centeredSlides: true,
				pagination: {
					el: ".swiper-pagination",
				},
				breakpoints: {
					1024: {  //브라우저가 1024보다 클 때
						slidesPerView: 2,
					},
				},
			});
		}
	};

	window.subRecommendSw = subRecommendSw;
}(window));

// 공통 XMLHttpRequest js 호출
window.onload = () => {
	setTimeout(() => {
		headerMenu.initialize();
		footerUpBtn.initialize();
	}, 100)
}

// 공통 js 호출
device.initialize();

// body scroll smooth
const lenis = new Lenis()

function raf(time) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}

requestAnimationFrame(raf)