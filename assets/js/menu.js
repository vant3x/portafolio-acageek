'use strict';

// abrir y cerrar menu

function scrollToElement(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop
  });
}

document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".menu-screen").classList.add("active");
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".menu-screen").classList.remove("active");
});

var links = document.querySelectorAll(".menu-screen a");

links.forEach(function (link) {
  link.addEventListener('click', function (ev) {
    document.querySelector(".menu-screen").classList.remove("active");

    var paths = this.href.split("/");

    var selector = paths[paths.length - 1];

    ev.preventDefault();

    if (window.scrollTo) ev.preventDefault();

    scrollToElement(document.querySelector(selector));

    return !!window.scrollTo;
  });
});

// export default menus;