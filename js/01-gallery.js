import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.dir(galleryEl);

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
  </a>
</li>`;
  })
  .join("");

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", onGalleryClick);

const instance = basicLightbox.create(`
    <img class = "modal__img" src="">
`);

function onGalleryClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) return;

  instance.show();
  const modalImgEl = document.querySelector(".modal__img");
  modalImgEl.src = evt.target.dataset.source;
}

{
  /* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>; */
}
