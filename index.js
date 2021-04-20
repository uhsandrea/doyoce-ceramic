const toggleBtn = document.querySelector(".fa-bars");
const navBar = document.querySelector("nav");
const snsBar = document.querySelector("aside");
const galleryImages = document.querySelectorAll(".gallery__item-wrapper");
const hearts = document.querySelectorAll(".fa-heart");

toggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
  snsBar.classList.toggle("active");
});

galleryImages.forEach(image => {
  image.addEventListener("mouseover", () => {
    image.querySelector(".gallery__item-image").classList.toggle("image-blur");
    image.querySelector(".fa-heart").classList.toggle("active");
  });
  image.addEventListener("mouseout", () => {
    image.querySelector(".gallery__item-image").classList.toggle("image-blur");
    image.querySelector(".fa-heart").classList.toggle("active");
  });
});

hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("selected-heart");
    heart.classList.toggle("border-heart");
    heart.classList.toggle("far");
    heart.classList.toggle("fas");
  });
});