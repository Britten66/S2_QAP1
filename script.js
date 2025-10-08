const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;

const slides2 = document.querySelectorAll(".slides2 img");
let slideIndex2 = 0;
let intervalid2 = null;

const slides3 = document.querySelectorAll(".slides3 img");
let slideIndex3 = 0;
let intervalid3 = null;

const slides4 = document.querySelectorAll(".slides4 img");
let slideIndex4 = 0;
let intervalid4 = null;

document.addEventListener("DOMContentLoaded", initSlider);

function initSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");

    intervalid = setInterval(nextSlide, 5000);
  }
  //===== Slide 2 =====
  if (slides2.length > 0) {
    slides2[slideIndex2].classList.add("displaySlide");

    intervalid2 = setInterval(nextSlide2, 5000);
  }
  //===== Slide 3 =====
  if (slides3.length > 0) {
    slides3[slideIndex3].classList.add("displaySlide");

    intervalid3 = setInterval(nextSlide3, 5000);
  }
  //===== Slide 4 =====
  if (slides4.length > 0) {
    slides4[slideIndex4].classList.add("displaySlide");

    intervalid4 = setInterval(nextSlide4, 5000);
  }
}

// slide 1
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}
//===== Slide 2 =====
function showSlide2(index) {
  if (index >= slides2.length) {
    slideIndex2 = 0;
  } else if (index < 0) {
    slideIndex2 = slides2.length - 1;
  }
  slides2.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides2[slideIndex2].classList.add("displaySlide");
}

//===== Slide 3 =====
function showSlide3(index) {
  if (index >= slides3.length) {
    slideIndex3 = 0;
  } else if (index < 0) {
    slideIndex3 = slides3.length - 1;
  }
  slides3.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides3[slideIndex3].classList.add("displaySlide");
}
//===== Slide 4 =====
function showSlide4(index) {
  if (index >= slides4.length) {
    slideIndex4 = 0;
  } else if (index < 0) {
    slideIndex4 = slides4.length - 1;
  }
  slides4.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides4[slideIndex4].classList.add("displaySlide");
}
// slide 1

function prevSlide() {
  clearInterval(intervalid);
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

//===== Slide 2 =====

function prevSlide2() {
  clearInterval(intervalid2);
  slideIndex2--;
  showSlide2(slideIndex2);
}
function nextSlide2() {
  slideIndex2++;
  showSlide2(slideIndex2);
}
//===== Slide 3 =====

function prevSlide3() {
  clearInterval(intervalid3);
  slideIndex3--;
  showSlide3(slideIndex3);
}
function nextSlide3() {
  slideIndex3++;
  showSlide3(slideIndex3);
}
//===== Slide 4 =====

function prevSlide4() {
  clearInterval(intervalid4);
  slideIndex4--;
  showSlide4(slideIndex4);
}
function nextSlide4() {
  slideIndex4++;
  showSlide4(slideIndex4);
}
