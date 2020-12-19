var advt1 = document.querySelector(".advt1-js");
var advt2 = document.querySelector(".advt2-js");
var advt3 = document.querySelector(".advt3-js");

var advit1 = document.querySelector(".advit1-js");
var advit2 = document.querySelector(".advit2-js");
var advit3 = document.querySelector(".advit3-js");


advt1.addEventListener("click", function (evt) {
	evt.preventDefault();
	advit1.classList.add("slider__item--show-adv");
	advt1.classList.add("advantage__toggle--active");
	advit2.classList.remove("slider__item--show-adv");
	advt2.classList.remove("advantage__toggle--active");
	advit3.classList.remove("slider__item--show-adv");
	advt3.classList.remove("advantage__toggle--active");
});


advt2.addEventListener("click", function (evt) {
	evt.preventDefault();
	advit1.classList.remove("slider__item--show-adv");
	advt1.classList.remove("advantage__toggle--active");
	advit2.classList.add("slider__item--show-adv");
	advt2.classList.add("advantage__toggle--active");
	advit3.classList.remove("slider__item--show-adv");
	advt3.classList.remove("advantage__toggle--active");
});

advt3.addEventListener("click", function (evt) {
	evt.preventDefault();
	advit1.classList.remove("slider__item--show-adv");
	advt1.classList.remove("advantage__toggle--active");
	advit2.classList.remove("slider__item--show-adv");
	advt2.classList.remove("advantage__toggle--active");
	advit3.classList.add("slider__item--show-adv");
	advt3.classList.add("advantage__toggle--active");
});
