const galleryImages = document.querySelectorAll(".gallery__item-wrapper");
const hearts = document.querySelectorAll(".fa-heart");

galleryImages.forEach(image => {
  image.addEventListener("mouseover", () => {
    image.querySelector(".gallery__item-image").classList.add("image-blur");
    image.querySelector(".gallery__item-image").nextElementSibling.classList.add("active");
  });
  image.addEventListener("mouseout", () => {
    image.querySelector(".gallery__item-image").classList.remove("image-blur");
    image.querySelector(".gallery__item-image").nextElementSibling.classList.remove("active");
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