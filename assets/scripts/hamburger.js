let button = document.querySelector(".hamburger");
let menu = document.querySelector(".mobile.links");
let header = document.querySelector(".header");

button.addEventListener("click", function () {
    if (!menu.classList.contains("active")) {
        setTimeout(function () {
            menu.style.pointerEvents = "auto";
        }, 400);
        header.classList.add("mobile-active");
    } else {
        menu.style.pointerEvents = "none";
        header.classList.remove("mobile-active");
    }
    menu.classList.toggle("active");
});