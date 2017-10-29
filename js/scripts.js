var navMain = document.querySelector(".main-nav__wrapper");
var navToggle = document.querySelector(".main-nav__toggle");
var navClose = document.querySelector(".main-nav__close");

navMain.classList.remove("main-nav__wrapper--nojs");
navToggle.classList.remove("main-nav__toggle--top");
navClose.classList.remove("main-nav__close--nojs");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  navMain.classList.add("main-nav__wrapper--opened");
  navToggle.classList.add("main-nav__toggle--top");
});

navClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  navMain.classList.remove("main-nav__wrapper--opened");
  navToggle.classList.remove("main-nav__toggle--top");
});
