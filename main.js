const menu = document.querySelector(".menu"),
    nav = document.querySelector(".header-nav");

menu.addEventListener("click", () => {
    menu.classList.toggle("activate");
    nav.classList.toggle("menu-open");
})
