function isTouchDevice() {
	return (
		"ontouchstart" in window ||
		navigator.maxTouchPoints > 0 ||
		navigator.msMaxTouchPoints > 0
	);
}

document.addEventListener("DOMContentLoaded", function (event) {
	if (isTouchDevice()) {
		if (screen.width <= 1366) {
			document.querySelector(".mobile-area").classList.add("--mobile-active");
			document.querySelector(".normal-area").classList.add("--mobile-active");
			document
				.querySelector(".mobile-area")
				.addEventListener("click", function () {
					document
						.querySelectorAll(".mobile-area .full-screen .menu .link")
						.forEach((item) => {
							item.classList.toggle("--tail");
						});
				});
		}
	}
});
