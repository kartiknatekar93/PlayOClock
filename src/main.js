import "./index.scss";
import { activateEnquiry } from "./enquiry";

const images = [
  "slideimg2.png",
  "slideimg3.png",
  "slideimg4.png",
  "slideimg5.png",
  "slideimg6.png",
  "slideimg7.png",
  "slideimg8.png",
  "slideimg9.png",
  "slideimg10.png",
];
let currentIndex = 0;
const slideElement = document.querySelector(".slide");
const dotsContainer = document.querySelector(".dots-container");
const alllinks = document.querySelectorAll("a:link");
const sectionnavmob = document.querySelector(".section-navmob");
const open = document.querySelector(".bar"); //close-btn
const close = document.querySelector(".close-btn");

const alllink = document.querySelectorAll(".nav-link");

let contact_name = null;
let contact_mobile = null;
let contact_email = null;
contact_name = document.getElementById("name");
contact_mobile = document.getElementById("mobile");
contact_email = document.getElementById("email");
window.addEventListener("click", function (e) {
  document.querySelectorAll(".warning-box").forEach((box) => box.remove());
});
// smooth scrolling
alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

alllink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    sectionnavmob.classList.toggle("nav-open");
  });
});

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
}
function updateSlide() {
  slideElement.style.opacity = 0;
  setTimeout(() => {
    slideElement.src = `Images/${images[currentIndex]}`;
    slideElement.style.opacity = 1;
    updateDots();
  }, 100);
}
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}
function createDots() {
  images.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlide();
    });
    dotsContainer.appendChild(dot);
  });
}
setInterval(nextSlide, 3000);
createDots();
updateDots();

//mobile-navigation
open.addEventListener("click", function (e) {
  e.preventDefault();
  sectionnavmob.classList.toggle("nav-open");
});
close.addEventListener("click", function (e) {
  e.preventDefault();
  sectionnavmob.classList.toggle("nav-open");
});

activateEnquiry("PlayOClock");

function mymap() {
  window.open("https://maps.app.goo.gl/2ykojmsBRgwoF7pn8");
}
function myrrs() {
  window.open("https://www.w3schools.com");
}
function myccc() {
  window.open("https://www.w3schools.com");
}
