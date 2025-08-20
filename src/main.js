import { createGallery, clearGallery } from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");


const loader = document.createElement("p");
loader.classList.add("loader");
loader.textContent = "Loading images, please wait...";
loader.style.display = "none";
form.insertAdjacentElement("afterend", loader);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = form.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({ title: "Error", message: "Enter a search term!" });
    return;
  }

  clearGallery();     
  loader.style.display = "block";

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
    loader.style.display = "none";  
  }
});
