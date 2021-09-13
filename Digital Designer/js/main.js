$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });
});
