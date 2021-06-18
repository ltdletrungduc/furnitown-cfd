// $(window).on("load", function () {
// 	myLoading();
// });
// function myLoading() {
// 	setTimeout(() => {
// 		$("body > .overlay").addClass("loaded");
// 		AOS.init();
// 	}, 1234);
// }

svgToInline(".inline-svg");
$(function () {
	loadingAnimation();
	if (window.matchMedia("(max-width: 1366px)").matches) {
		// The viewport is less than 1366 pixels wide
		setViewHeight(true);
		console.log("TRUE");
	} else {
		setViewHeight(false);
		console.log("FALSE");
	}
	closeSideNav();
});
const loadingAnimation = () => {};
const setViewHeight = (condition) => {
	let value = "100vh";
	if (condition) {
		value = `${window.innerHeight}px`;
	}
	document.documentElement.style.setProperty("--viewHeight", value);
};

// EVENTS IMAGE 3D SLIDER
$(".slider-3D input").on("change", function () {
	const thisId = $(this).attr("id");
	const left = $(".slider-3D label.left");
	const right = $(".slider-3D label.right");
	const selected = $(".slider-3D label.selected");
	const selector = `.slider-3D label[for="${thisId}"]`;
	if ($(selector).hasClass("left")) {
		selected.removeClass("selected").addClass("right");
		$(selector).removeClass("left").addClass("selected");
		right
			.removeClass("right")
			.addClass("behind")
			.delay(100)
			.queue(function (next) {
				$(this).removeClass("behind");
				next();
			})
			.addClass("left");
	} else if ($(selector).hasClass("right")) {
		selected.removeClass("selected").addClass("left");
		$(selector).removeClass("right").addClass("selected");
		left
			.removeClass("left")
			.addClass("behind")
			.delay(100)
			.queue(function (next) {
				$(this).removeClass("behind");
				next();
			})
			.addClass("right");
	}
});

// SIDENAV LOGIC
const sideNav = $("nav.sidenav");
$(document).on("click", "#burger", function () {
	openSideNav();
});
$(document).on("click", "#close-nav", function () {
	closeSideNav();
});
$(document).on("keydown", function (event) {
	if (event.key === "Escape") {
		closeSideNav();
	}
});
const openSideNav = () => {
	sideNav.addClass("active");
	$("main, footer").addClass("nav-active");
};
const closeSideNav = () => {
	sideNav.removeClass("active");
	$("main, footer").removeClass("nav-active");
};

// STYLING HEADER ON SCROLL

const header = $("header.header");
const headerStyling = (window) => {
	let scrollTop = window.scrollTop();
	if (scrollTop <= 50) {
		header.removeClass("active");
	} else {
		header.addClass("active");
	}
};
$(document).on("scroll", function () {
	headerStyling($(this));
	closeSideNav();
});
// SCROLL TO TOP
const $scrollToTop = $("#scroll-to-top");
let bannerHeight = $(".homepage .banner").height();
$(document).on("scroll", function handleScroll() {
	if ($(document).scrollTop() > bannerHeight * 1.1) {
		$scrollToTop.removeClass("deactive");
	} else {
		$scrollToTop.addClass("deactive");
	}
});
$scrollToTop.on("click", function () {
	let scrollTime = $(document).scrollTop() / 2;
	//html works for FFX but not Chrome
	//body works for Chrome but not FFX
	//This strange selector seems to work universally
	// THANKS TO "Explosion Pills"
	$("html, body").animate({ scrollTop: 0 }, Math.min(2000, scrollTime));
});
