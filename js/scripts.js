var navMain = document.querySelector(".main-nav__wrapper");
var navToggle = document.querySelector(".main-nav__toggle");
var navClose = document.querySelector(".main-nav__close");
var modal = document.querySelector(".form__button");
var emotions = document.querySelector(".emotions-sent");
var error = document.querySelector(".form-error");
var emotionsClose = document.querySelector(".emotions-sent__button");
var errorClose = document.querySelector(".form-error__button");

navMain.classList.remove("main-nav__wrapper--nojs");
navToggle.classList.remove("main-nav__toggle--top")

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

modal.addEventListener("click", function (evt) {
  evt.preventDefault();
  emotions.classList.add("emotions-sent__show");
  error.classList.add("form-error__show");
});

emotionsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  emotions.classList.remove("emotions-sent__show");
})

errorClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  error.classList.remove("form-error__show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (emotions.classList.contains("emotions-sent__show")) {
      emotions.classList.remove("emotions-sent__show");
    }
  }
  if (evt.keyCode === 27) {
    if (error.classList.contains("form-error__show")) {
      error.classList.remove("form-error__show");
    }
  }
});
