const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;

const slides2 = document.querySelectorAll(".slides2 img");
let slideIndex2 = 0;
let intervalid2 = null;

// const slides3 = document.querySelectorAll(".slides img");
// let slideIndex3 = 0;
// let intervalid3= null;

// const slides4 = document.querySelectorAll(".slides img");
// let slideIndex4 = 0;
// let intervalid4= null;

document.addEventListener("DOMContentLoaded", initSlider);

function initSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");

    intervalid = setInterval(nextSlide, 5000);
  }

  if (slides2.length > 0) {
    slides2[slideIndex2].classList.add("displaySlide");

    intervalid2 = setInterval(nextSlide2, 5000);
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
