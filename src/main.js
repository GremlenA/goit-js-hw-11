import { createGallery, clearGallery } from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const loader = document.querySelector(".loader"); // вже існуючий span

function showLoader() {
  loader.classList.add("visible"); // показати
}

function hideLoader() {
  loader.classList.remove("visible"); // сховати
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = form.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({ title: "Error", message: "Enter a search term!" });
    return;
  }

  clearGallery();     
  showLoader();

  try {
    const images = await getImagesByQuery(query);

    if (!images.hits || images.hits.length === 0) {
      iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!"
      });
      return; 
    }

    createGallery(images.hits);

  } catch (error) {
    iziToast.error({ title: "Error", message: "Failed to fetch images. Try later!" });
    console.error("API Error:", error);
  } finally {
    hideLoader();
  }
});
