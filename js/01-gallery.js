import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markup = galleryItems.map((el) => {
  return `<div class="gallery__item">
  <a class="gallery__link" onclick="event.preventDefault()" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>
`;
});

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", markup.join(""));

gallery.addEventListener("click", (e) => {
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.sourse}" width="800" height="600">
`);

  instance.show();
});
