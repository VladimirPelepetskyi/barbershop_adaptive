var revt1 = document.querySelector(".revt1-js");
var revt2 = document.querySelector(".revt2-js");
var revt3 = document.querySelector(".revt3-js");

var revit1 = document.querySelector(".revit1-js");
var revit2 = document.querySelector(".revit2-js");
var revit3 = document.querySelector(".revit3-js");


revt1.addEventListener("click", function (evt) {
	evt.preventDefault();
	revit1.classList.add("slider__item--show-rev");
	revt1.classList.add("review__toggle--active");
	revit2.classList.remove("slider__item--show-rev");
	revt2.classList.remove("review__toggle--active");
	revit3.classList.remove("slider__item--show-rev");
	revt3.classList.remove("review__toggle--active");
});


revt2.addEventListener("click", function (evt) {
	evt.preventDefault();
	revit1.classList.remove("slider__item--show-rev");
	revt1.classList.remove("review__toggle--active");
	revit2.classList.add("slider__item--show-rev");
	revt2.classList.add("review__toggle--active");
	revit3.classList.remove("slider__item--show-rev");
	revt3.classList.remove("review__toggle--active");
});

revt3.addEventListener("click", function (evt) {
	evt.preventDefault();
	revit1.classList.remove("slider__item--show-rev");
	revt1.classList.remove("review__toggle--active");
	revit2.classList.remove("slider__item--show-rev");
	revt2.classList.remove("review__toggle--active");
	revit3.classList.add("slider__item--show-rev");
	revt3.classList.add("review__toggle--active");
});
