"use strict";

const images = [
  {
    url: "../images/projects-block-rostov-admiral.png",
    city: "Rostov-on-Don <br> LCD admiral",
    apartArea: "81m<sup>2</sup>",
    repairTime: "3.5 months",
    repairCost: "Upon request",
    link: "Rostov-on-Don, Admiral",
  },
  {
    url: "../images/projects-block-sochi.png",
    city: "Sochi Thieves",
    apartArea: "105m<sup>2</sup>",
    repairTime: "4 months",
    repairCost: "Upon request",
    link: "Sochi Thieves",
  },
  {
    url: "../images/projects-block-rostov-patriotic.png",
    city: "Rostov-on-Don Patriotic",
    apartArea: "93m<sup>2</sup>",
    repairTime: "3 months",
    repairCost: "Upon request",
    link: "Rostov-on-Don Patriotic",
  },
];

function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".projects-block-image-content");
  let sliderArrows = document.querySelectorAll(".projects-block-nav__arrow");
  let sliderDots = document.querySelector(".projects-block-dot");
  let sliderCity = document.querySelector(".projects__city");
  let sliderApart = document.querySelector(".projects__apart");
  let sliderTime = document.querySelector(".projects__time");
  let sliderCost = document.querySelector(".projects__cost");
  let sliderLink = document.querySelector(".projects-block__items");
  let sliderMobileArrows = document.querySelectorAll(".mobile-arrows");

  initInfo();
  initArrows();
  initDots();
  initLink();
  initImages();
  initMobileArrows();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="projects-block__image n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initInfo() {
    images.forEach((elem, index) => {
      sliderCity.innerHTML += createInfoField(elem.city, index);
      sliderApart.innerHTML += createInfoField(elem.apartArea, index);
      sliderTime.innerHTML += createInfoField(elem.repairTime, index);
      sliderCost.innerHTML += createInfoField(elem.repairCost, index);
    });
  }

  function createInfoField(text, index) {
    return `<p class="projects-block-content-info-items__subtitle n${index} ${
      index === 0 ? "active" : ""
    }" data-index='${index}'>${text}</p>`;
  }

  function initLink() {
    images.forEach((image, index) => {
      let link = `<li class="projects-block__item n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${image.link}</li>`;
      sliderLink.innerHTML += link;
    });

    sliderLink.querySelectorAll(".projects-block__item").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        moveSlider(this.dataset.index);
      });
    });
  }

  function initArrows() {
    sliderArrows.forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let indexNum = +sliderImages.querySelector(".active").dataset.index;
        let nextNum;
        if (arrow.classList.contains("left-arrow")) {
          nextNum = indexNum === 0 ? images.length - 1 : indexNum - 1;
        } else {
          nextNum = indexNum === images.length - 1 ? 0 : indexNum + 1;
        }
        moveSlider(nextNum);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dots = `<div class="projects-block__dot n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dots;
    });
    sliderDots.querySelectorAll(".projects-block__dot").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function moveSlider(numb) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + numb).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + numb).classList.add("active");

    sliderCity.querySelector(".active").classList.remove("active");
    sliderCity.querySelector(".n" + numb).classList.add("active");

    sliderApart.querySelector(".active").classList.remove("active");
    sliderApart.querySelector(".n" + numb).classList.add("active");

    sliderTime.querySelector(".active").classList.remove("active");
    sliderTime.querySelector(".n" + numb).classList.add("active");

    sliderCost.querySelector(".active").classList.remove("active");
    sliderCost.querySelector(".n" + numb).classList.add("active");

    sliderLink.querySelector(".active").classList.remove("active");
    sliderLink.querySelector(".n" + numb).classList.add("active");
  }

  function initMobileArrows() {
    sliderMobileArrows.forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let indexNum = +sliderImages.querySelector(".active").dataset.index;
        let nextNum;
        if (arrow.classList.contains("mobile-left-arrow")) {
          nextNum = indexNum === 0 ? images.length - 1 : indexNum - 1;
        } else {
          nextNum = indexNum === images.length - 1 ? 0 : indexNum + 1;
        }
        moveSlider(nextNum);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", initSlider());
