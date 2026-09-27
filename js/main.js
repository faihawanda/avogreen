const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("menu-active");
    mobileMenu.classList.toggle("opacity-0");
    mobileMenu.classList.toggle("invisible");
    mobileMenu.classList.toggle("-translate-y-3");
});

const mobileLinks = document.querySelectorAll(".mobile-link");

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuButton.classList.remove("menu-active");
        mobileMenu.classList.add("opacity-0");
        mobileMenu.classList.add("invisible");
        mobileMenu.classList.add("-translate-y-3");
    });
});

window.addEventListener("load", () => {
    const fadeUp = document.querySelector(".fade-up");
    const fadeRight = document.querySelector(".fade-right");

    setTimeout(() => {
        fadeUp.classList.add("show");
    }, 200);

    setTimeout(() => {
        fadeRight.classList.add("show");
    }, 400);
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("bg-[#c3dd69]/90", "backdrop-blur-md", "shadow-sm");
    } else {
        navbar.classList.remove("bg-[#c3dd69]/90", "backdrop-blur-md", "shadow-sm");
    }
});