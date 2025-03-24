const home = document.querySelector(".home");
const header = document.querySelector("header");
const headerFirstDiv = document.querySelector("header > div:first-of-type");
const mainNav = document.querySelector(".mainNav");
const mainNavP = mainNav.querySelectorAll("p");
const iluminismoButton = document.querySelector(".mainNav > p:first-of-type");
const arcadismoButton = document.querySelector(".mainNav > p:nth-of-type(2)");
const ideasContainer = document.querySelectorAll(".ideasContainer");
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
        slideCounter.innerHTML = `1 / ${totalSlides - 2}`;
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
  mainNavP.forEach((p) => {
    p.style.color = "white";
  });
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

document.querySelector("#johnLocke").addEventListener("mouseenter", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.innerHTML = '<p class="winky-sans">John Locke</p><p>John Locke acreditava que a mente era como uma "tabula rasa". Rejeitava qualquer concepção embasada no argumento das "ideias inatas".</p><p>Locke procurava demonstrar que a origem de nossas ideias deriva dos sentidos do corpo e da reflexão sobre o que o corpo informa.</p><p>Em suas reflexões acerca da origem da sociedade, Locke combate os teóricos que defendiam o direito divino dos reis governarem.</p><p style="font-weight: bold;">"A liberdade do homem na sociedade não deve estar edificada sob qualquer poder legislativo exceto aquele estabelecido por consentimento na comunidade civil."</p>';
    ideaContainer.style.visibility = "visible";
    ideaContainer.style.opacity = "1"; 
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(50px)";
    });
  });
});

document.querySelector("#johnLocke").addEventListener("mouseleave", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.style.visibility = "hidden";
    ideaContainer.style.opacity = "0";
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(0)";
    });
  });
});

document.querySelector("#voltaire").addEventListener("mouseenter", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.innerHTML = '<p class="winky-sans">François-Marie Arouet - Voltaire</p><p>Voltaire defendia a ideia de uma <span style="font-weight: bold;">monarquia centralizada</span>, cujo monarca deveria ser culto e assessorado por filósofos.</p><p>Foi um crítico severo das instituições religiosas, bem como dos hábitos feudais que ainda vigoravam na Europa. Mas, também foi opositor do ateísmo. Assim sendo, afirmava que apenas aqueles dotados de razão e liberdade poderiam conhecer as vontades e desígnios divinos.</p><p style="font-weight: bold;">"A mesma força de nosso entendimento que nos fez conhecer a aritmética, a geometria, a astronomia, que nos fez inventar as leis, também nos fez, portanto, conhecer Deus (...)"</p>';
    ideaContainer.style.visibility = "visible";
    ideaContainer.style.opacity = "1"; 
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(50px)";
    });
  });
});

document.querySelector("#voltaire").addEventListener("mouseleave", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.style.visibility = "hidden";
    ideaContainer.style.opacity = "0";
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(0)";
    });
  });
});

document.querySelector("#rousseau").addEventListener("mouseenter", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.innerHTML = '<p class="winky-sans">Jean-Jacques Rousseau</p><p>Rousseau defendia que o homem natural, embora necessitasse se preservar em virtude do “amor de si mesmo”, era dotado de uma “piedade natural”. Essa piedade levava os homens, em certa medida, a uma ajuda mútua, a fim de evitarem o sofrimento.</p><p>Rousseau dizia que a propriedade privada gerava a desigualdade entre os homens e, com ela, a luta pelo poder e a exploração dos demais homens.</p><p>O filósofo era a favor do estabelecimento de uma nova forma de “<span style="font-weight: bold;">contrato social</span>” baseado na “vontade geral”.</p><p style="font-weight: bold;">"O homem nasceu livre, e em toda parte se encontra acorrentado."</p>';
    ideaContainer.style.visibility = "visible";
    ideaContainer.style.opacity = "1"; 
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(50px)";
    });
  });
});

document.querySelector("#rousseau").addEventListener("mouseleave", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.style.visibility = "hidden";
    ideaContainer.style.opacity = "0";
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(0)";
    });
  });
});

document.querySelector("#montesquieu").addEventListener("mouseenter", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.innerHTML = '<p class="winky-sans">Charles-Louis de Secondat - Montesquieu</p><p>Montesquieu criticou, de forma sistemática, o autoritarismo político, além de condenar a escravidão dos negros.</p><p>Em seu pensamento, há a necessidade da existência de algo igualmente poderoso que seja capaz de impedir os abusos de poder de outros.</p><p>Para ele, a monarquia inglesa é um governo que exemplifica esse ideal político, pois apresenta um equilíbrio tanto entre suas classes, como entre os poderes de seu sistema de governo.</p><p style="font-weight: bold;">"A liberdade é o direito de fazer aquilo que as leis permitem (...)"</p>';
    ideaContainer.style.visibility = "visible";
    ideaContainer.style.opacity = "1";
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(50px)";
    });
  });
});

document.querySelector("#montesquieu").addEventListener("mouseleave", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.style.visibility = "hidden";
    ideaContainer.style.opacity = "0";
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(0)";
    });
  });
});

document.querySelector("#clmaco").addEventListener("mouseenter", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.innerHTML = '<p class="winky-sans">Glauceste Satúrnio - Principais obras</p><ul><li>Culto Métrico (1749)</li><li>Munúsculo Métrico (1751)</li><li>Labirinto de Amor (1753)</li><li>Epicédio (1753)</li><li>Lírica Ressonância (1753)</li><li>Obras Poéticas (1768)</li><li>Vila Rica (1773)</li><li>Poesias Manuscritas (1779)</li></ul>';
    ideaContainer.style.visibility = "visible";
    ideaContainer.style.opacity = "1"; 
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(50px)";
    });
  });
});

document.querySelector("#clmaco").addEventListener("mouseleave", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.style.visibility = "hidden";
    ideaContainer.style.opacity = "0";
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(0)";
    });
  });
});

document.querySelector("#durao").addEventListener("mouseenter", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.innerHTML = '<p class="winky-sans">Santa Rita Durão - Principais obras</p><p>As obras de Santa Rita Durão são caracterizadas pela valorização da natureza, pela presença de figuras mitológicas e pelo racionalismo.</p><ul><li>Pro anmia studiorum instauratione oratio (1778)</li><li>Caramuru - Poema Épico do Descobrimento da Bahia (1781)</li></ul>';
    ideaContainer.style.visibility = "visible";
    ideaContainer.style.opacity = "1"; 
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(50px)";
    });
  });
});

document.querySelector("#durao").addEventListener("mouseleave", () => {
  ideasContainer.forEach((ideaContainer) => {
    ideaContainer.style.visibility = "hidden";
    ideaContainer.style.opacity = "0";
  });
  slide.forEach((slideItem) => {
    slideItem.style.backdropFilter = "blur(50px)";
    document.querySelectorAll(".slide > p, .slide > span, .slide > ul, .leftArrow, .rightArrow, .slideCounter").forEach((item) => {
      item.style.filter = "blur(0)";
    });
  });
});