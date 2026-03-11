const menuBtn = document.getElementById("mobile-menu");
const mobileMenu = document.querySelector(".mainmenu-mobile");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
});