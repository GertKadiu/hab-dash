import { carouselData } from "../data.js";

const carouselItemsContainer = document.getElementById("carousel-items");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

const updateCarousel = () => {
  carouselItemsContainer.innerHTML = carouselData
    .slice(currentIndex, currentIndex + 3)
    .map(
      (item) => `
      <div class="carousel-item">
        <img alt="${item.text}" src="${item.imgSrc}" />
        <div class="carousel-item-text">${item.text}</div>
      </div>
    `
    )
    .join("");

};

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carouselData.length - 3;
  }
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex + 3 < carouselData.length) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

updateCarousel();