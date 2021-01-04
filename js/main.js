$(window).on("load", function () {
	svgToInline(".inline-svg");
	closeSideNav();
});

const sliderWrapper = $(".slider__wrapper");
$(window).on("load", function () {
	//console.log(sliderWrapper);
	sliderWrapper.flickity({
		cellSelector: ".slider__item",
		cellAlign: "left",
		contain: true,
		wrapAround: true, //loop
		draggable: true,
		prevNextButtons: false,
		pageDots: true,
		autoPlay: false,
		pauseAutoPlayOnHover: false,
		lazyLoad: 1,
		selectedAttraction: 0.01, //Higher attraction makes the slider move faster
		friction: 0.2, //Higher friction makes the slider feel stickier and less bouncy
		setGallerySize: false, //Set size of cells by CSS
		on: {
			ready: function () {
				// let default_dots = $(".flickity-page-dots"),
				// 	my_dots = $(".slider__paging");
				// default_dots.addClass("slider__dots");
				// default_dots.appendTo(my_dots);
			},
			change: function (index) {
				// let number = $(".slider__number span");
				// number.text((index + 1).toString().padStart(2, 0));
			},
		},
	});
});

/* SHOW - HIDE HEADER WHEN SCROLLING */
const header = $("header.main-header"),
	toggleBtn = $("#toggle-btn");
let lastScollPos = 0;
$(document).on("scroll", function () {
	headerStyling($(this));
	closeSideNav();
});
function headerStyling(window) {
	let scrollTop = window.scrollTop();
	//console.log(scrollTop + " " + lastScollPos);

	if (scrollTop > lastScollPos) {
		// downscroll code
		header.removeClass("--active");
	} else {
		// upscroll code
		if (scrollTop >= toggleBtn.offset().top + toggleBtn.height()) {
			header.addClass("--active");
		} else {
			header.removeClass("--active");
		}
	}
	lastScollPos = scrollTop;
}

/* SHOW - HIDE SIDENAV WHEN CLICK BTN */
const sideNav = $("nav"),
	overlay = $("#overlay"),
	mobileBurger = $("header .memu-mobile .burger");
$(document).on("click", "#toggle-btn", function () {
	openSideNav();
});

$(document).on("click", "#toggle-btn-mobile", function () {
	openSideNav();
});
$(document).on("click", "#close-nav", function () {
	closeSideNav();
});
$(document).on("click", "#overlay", function () {
	closeSideNav();
});
$(document).on("keydown", function (event) {
	if (event.key === "Escape") {
		closeSideNav();
	}
});

function openSideNav() {
	sideNav.addClass("--active");
	overlay.addClass("--active");
}

function closeSideNav() {
	overlay.removeClass("--active");
	sideNav.removeClass("--active");
}

const customRow = $(".custom-row");
$(window).on("load", function () {
	//console.log(sliderWrapper);
	customRow.flickity({
		cellSelector: ".cell",
		cellAlign: "center",
		contain: true,
		wrapAround: true, //loop
		draggable: true,
		prevNextButtons: false,
		pageDots: false,
		autoPlay: false,
		pauseAutoPlayOnHover: false,
		lazyLoad: 1,
		selectedAttraction: 0.01, //Higher attraction makes the slider move faster
		friction: 0.2, //Higher friction makes the slider feel stickier and less bouncy
		setGallerySize: false, //Set size of cells by CSS
		// groupCells: 3,
		on: {
			ready: function () {
				// let default_dots = $(".flickity-page-dots"),
				// 	my_dots = $(".slider__paging");
				// default_dots.addClass("slider__dots");
				// default_dots.appendTo(my_dots);
			},
			change: function (index) {
				// let number = $(".slider__number span");
				// number.text((index + 1).toString().padStart(2, 0));
			},
		},
	});
});

$(window).on("load", function () {
	$(".project .project__types .project__type").each(function (index, value) {
		let delay = index * 60;
		$(this).css({
			"animation-delay": delay + "ms",
		});
	});
});

// PRODUCT-IMAGE-FLICKITY
const $productImages = $("main.product .image__wrapper");
// bind event listener first
$productImages.on("ready.flickity", function () {
	console.log("Flickity ready");
});
// initialize Flickity
$productImages.flickity({
	cellSelector: ".image__item",
	cellAlign: "left",
	contain: true,
	wrapAround: true, //loop
	draggable: true,
	prevNextButtons: false,
	pageDots: false,
	autoPlay: false,
	pauseAutoPlayOnHover: false,
	selectedAttraction: 0.01, //Higher attraction makes the slider move faster
	friction: 0.2, //Higher friction makes the slider feel stickier and less bouncy
	setGallerySize: false, //Set size of cells by CSS
	// groupCells: 3,
	on: {
		ready: function () {
			// let default_dots = $(".flickity-page-dots"),
			// 	my_dots = $(".slider__paging");
			// default_dots.addClass("slider__dots");
			// default_dots.appendTo(my_dots);
		},
		change: function (index) {
			// let number = $(".slider__number span");
			// number.text((index + 1).toString().padStart(2, 0));
		},
	},
});
