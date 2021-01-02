/*
 * Replace all SVG images with inline SVG
 */
function svgToInline(selector) {
	$(selector).each(function () {
		let $img = $(this),
			imgURL = $img.attr("src"),
			imgID = $img.attr("id"),
			imgClass = $img.attr("class");
		//console.log($img, imgURL, imgID, imgClass);
		$.get(
			imgURL,
			function (data) {
				// Get the SVG tag, ignore the rest
				let $svg = $(data).find("svg");

				// Add replaced image's ID to the new SVG
				if (typeof imgID !== "undefined") {
					$svg = $svg.attr("id", imgID);
				}
				// Add replaced image's classes to the new SVG
				if (typeof imgClass !== "undefined") {
					$svg = $svg.attr("class", imgClass + " replaced-svg");
				}
				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr("xmlns:a");

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if (
					!$svg.attr("viewBox") &&
					$svg.attr("height") &&
					$svg.attr("width")
				) {
					$svg.attr(
						"viewBox",
						"0 0 " + $svg.attr("height") + " " + $svg.attr("width")
					);
				}
				// Replace image with new SVG
				$img.replaceWith($svg);
			},
			"xml"
		);
	});
}
