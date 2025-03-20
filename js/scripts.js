const home = document.querySelector(".home");
const header = document.querySelector("header");
const mainNav = document.querySelector(".mainNav");

window.addEventListener("load", () => {
  home.style.height = `${window.innerHeight - header.offsetHeight - mainNav.offsetHeight}px`;
});