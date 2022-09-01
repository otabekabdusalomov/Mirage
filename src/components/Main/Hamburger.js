
const elHamburgerBtn = document.querySelector(".header-hamburger")

const elHeader = document.querySelector(".header")


elHamburgerBtn.addEventListener("click", () => {
    elHeader.classList.toggle(".header--open")
});
