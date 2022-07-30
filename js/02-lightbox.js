import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markup = galleryItems.map((el) => {
  return `<a class="gallery__item" href="${el.original}">
      <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
    </a>`;
});

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("afterbegin", markup.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
