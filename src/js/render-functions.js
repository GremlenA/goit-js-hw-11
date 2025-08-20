import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const gallery = document.querySelector(".gallery");
  if (!gallery) {
    console.error("Gallery container not found!");
    return;
  }

  gallery.innerHTML = '';

  const cards = images.map(img => `
    <li class="gallery-item">
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}">
      </a>
      <div class="info">
        <p>Likes: ${img.likes}</p>
        <p>Views: ${img.views}</p>
        <p>Comments: ${img.comments}</p>
        <p>Downloads: ${img.downloads}</p>
      </div>
    </li>
  `).join('');

  gallery.innerHTML = cards;

  lightbox.refresh();
}

export function clearGallery() {
  const gallery = document.querySelector(".gallery");
  if (gallery) {
    gallery.innerHTML = '';
  }
}

export function showLoader() {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.add("visible");
  }
}

export function hideLoader() {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.remove("visible");
  }
}
