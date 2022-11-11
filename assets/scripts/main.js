document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".header");

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("scroll", function () {
    let navbar = document.querySelector(".header");

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});