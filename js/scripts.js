var navMain = document.querySelector('.main-nav__wrapper');
var navToggle = document.querySelector('.main-nav__toggle');
var navClose = document.querySelector('.main-nav__close');

var link = document.querySelector('.form__button');
var popup = document.querySelector('.emotions-sent');
var close = popup.querySelector(".emotions-sent__button");
var error = document.querySelector(".form-error")

var form = document.querySelector("form");
var name = document.querySelector("[name=first-name]")
var surname = document.querySelector("[name=surname]");
var patronymic = document.querySelector("[name=patronymic]");
var tel = document.querySelector("[name=tel]");
var email = document.querySelector("[name=email]");

navMain.classList.remove('main-nav--nojs');

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

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("emotions-sent__show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("emotions-sent__show");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !surname.value || !patronymic.value || !tel.value || !email.value) {
    evt.preventDefault();
    error.classList.add("form-error__show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("emotions-sent__show")) {
      popup.classList.remove("emotions-sent__show");
    }
  }
});
