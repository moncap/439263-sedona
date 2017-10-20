var navMain = document.querySelector(".main-nav__wrapper");
var navToggle = document.querySelector(".main-nav__toggle");
var navClose = document.querySelector(".main-nav__close");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  navMain.classList.add("main-nav--opened");
  navToggle.classList.add("main-nav--top");
});

navClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  navMain.classList.remove("main-nav--opened");
  navToggle.classList.remove("main-nav--top");
});
