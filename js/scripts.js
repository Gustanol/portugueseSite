const home = document.querySelector(".home");
const header = document.querySelector("header");
const mainNav = document.querySelector(".mainNav");
const main = document.querySelector("main");

let iluminismo = document.querySelector("#iluminismo");
let arcadismo = document.querySelector("#arcadismo");

const slider = document.querySelectorAll(".slider");
const slides = document.querySelectorAll(".slides");
let currentIndex = 1;
let active = false;
const slide = document.querySelectorAll('.slide');
const firstClone = document.querySelectorAll('.firstClone');

const totalSlides = slide.length/2;
let slideInterval;

const leftArrow = document.querySelectorAll(".leftArrow");
const rightArrow = document.querySelectorAll(".rightArrow");

window.addEventListener("load", () => {
  home.style.height = `${window.innerHeight - header.offsetHeight - mainNav.offsetHeight}px`;
  slider.forEach((sliderItem) => {
    sliderItem.style.height = `${window.innerHeight - header.offsetHeight - mainNav.offsetHeight}px`;
  });
  slides.forEach((slidesItem) => {
    slidesItem.style.height = `${window.innerHeight - header.offsetHeight - mainNav.offsetHeight}px`;
  });
});

setTimeout(() => {
  active = true;
  if (firstClone) {
    firstClone.forEach((firstCloneItem) => {
      firstCloneItem.style.opacity = '1';
    });
  }
}, 500);

function showSlide(index) {
  currentIndex = index;

  slides.forEach((slidesItem) => {
    slidesItem.style.transition = active
      ? 'transform 0.5s ease-in-out'
      : 'none';
  
    slidesItem.style.transform = `translateX(${-currentIndex * 100}%)`;
    slidesItem.addEventListener("transitionend", () => {
      if (currentIndex === 0) {
        slidesItem.style.transition = "none";
        currentIndex = totalSlides - 2;
        slidesItem.style.transform = `translateX(${-currentIndex * 100}%)`;
      } else if (currentIndex === totalSlides - 1) {
        slidesItem.style.transition = "none";
        currentIndex = 1;
        slidesItem.style.transform = `translateX(${-currentIndex * 100}%)`;
      }
    });
  });
}

showSlide(currentIndex);

leftArrow.forEach((leftArrowItem) => {
  leftArrowItem.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });
});

rightArrow.forEach((rightArrowItem) => {
  rightArrowItem.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });
});
