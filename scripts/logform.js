var logform__enter = document.querySelector(".user-list__login");
var mainnav = document.querySelector(".main-nav");

var logform = document.querySelector(".logform");

var logform__close = document.querySelector(".logform__close");

logform__enter.addEventListener("click", function (evt) {
	evt.preventDefault();
	logform.classList.remove("logform-none")
});


logform__enter.addEventListener("click", function (evt) {
	evt.preventDefault();
	mainnav.classList.remove("main-nav--opened")
	mainnav.classList.add("main-nav--closed")
});


logform__enter.addEventListener("click", function (evt) {
	evt.preventDefault();
	logform.classList.remove("logform-none")
});

logform__close.addEventListener("click", function (evt) {
	evt.preventDefault();
	logform.classList.add("logform-none")
});


window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (!logform.classList.contains("logform-none")) {
			logform.classList.add("logform-none");
		}
	}
});
