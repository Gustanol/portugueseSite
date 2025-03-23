const home = document.querySelector(".home");
const header = document.querySelector("header");
const headerFirstDiv = document.querySelector("header > div:first-of-type");
const mainNav = document.querySelector(".mainNav");
const mainNavP = mainNav.querySelectorAll("p");
const iluminismoButton = document.querySelector(".mainNav > p:first-of-type");
const arcadismoButton = document.querySelector(".mainNav > p:nth-of-type(2)");
const main = document.querySelector("main");
let slidesCounter = document.querySelectorAll(".slideCounter");

let iluminismo = document.querySelector("#iluminismo");
let arcadismo = document.querySelector("#arcadismo");

const slider = document.querySelectorAll(".slider");
const slides = document.querySelectorAll(".slides");
let currentIndex = 1;
let active = false;
let slide = document.querySelectorAll('.slide');
const firstClone = document.querySelectorAll('.firstClone');

let totalSlides = slide.length;
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
    slidesCounter.forEach((slideCounter) => {
      if (currentIndex === totalSlides - 1) {
        slideCounter.innerHTML = `${1} / ${totalSlides - 2}`;
      } else if (currentIndex === 0) {
        slideCounter.innerHTML = `${totalSlides - 2} / ${totalSlides - 2}`;
      } else {
        slideCounter.innerHTML = `${currentIndex} / ${totalSlides - 2}`;
      }
    });
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

iluminismoButton.addEventListener("click", () => {
  mainNavP.forEach((p) => {
    p.style.color = "white";
  });
  document.querySelector(".mainNav > p:first-of-type").style.color = "#fada9e";
  slide = iluminismo.querySelectorAll(".slide");
  totalSlides = slide.length;
  slidesCounter.forEach((slideCounter) => {
    slideCounter.innerHTML = `${currentIndex} / ${totalSlides - 2}`;
  });
  showSlide(1);
  if (window.getComputedStyle(home).display != "none") {
    home.style.opacity = "0";
    setTimeout(() => {
      home.style.display = "none";
    }, 700);
  } else if (window.getComputedStyle(arcadismo).display != "none") {
    arcadismo.style.opacity = "0";
    setTimeout(() => {
      arcadismo.style.display = "none";
    }, 700);
  }
  iluminismo.style.display = "flex";
  setTimeout(() => {
    iluminismo.style.opacity = "1";
    showSlide(currentIndex);
  }, 900);
});

arcadismoButton.addEventListener("click", () => {
  mainNavP.forEach((p) => {
    p.style.color = "white";
  });
  document.querySelector(".mainNav > p:nth-of-type(2)").style.color = "#fada9e";
  slide = arcadismo.querySelectorAll(".slide");
  totalSlides = slide.length;
  slidesCounter.forEach((slideCounter) => {
    slideCounter.innerHTML = `${currentIndex} / ${totalSlides - 2}`;
  });
  showSlide(1);
  if (window.getComputedStyle(home).display != "none") {
    home.style.opacity = "0";
    setTimeout(() => {
      home.style.display = "none";
    }, 700);
  } else if (window.getComputedStyle(iluminismo).display != "none") {
    iluminismo.style.opacity = "0";
    setTimeout(() => {
      iluminismo.style.display = "none";
    }, 700);
  }
  arcadismo.style.display = "flex";
  setTimeout(() => {
    arcadismo.style.opacity = "1";
    showSlide(currentIndex);
  }, 900);
});

headerFirstDiv.addEventListener("click", () => {
  if (window.getComputedStyle(iluminismo).display != "none") {
    iluminismo.style.opacity = "0";
    setTimeout(() => {
      iluminismo.style.display = "none";
    }, 700);
  } else if (window.getComputedStyle(arcadismo).display != "none") {
    arcadismo.style.opacity = "0";
    setTimeout(() => {
      arcadismo.style.display = "none";
    }, 700);
  }
  home.style.display = "flex";
  setTimeout(() => {
    home.style.opacity = "1";
  }, 900);
});
