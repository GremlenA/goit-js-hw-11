import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

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

    if (!images || images.length === 0) {
      iziToast.show({
        message: "Sorry, there are no images matching your search query.<br>Please try again!",
        position: "topRight",
        timeout: 4000,
        close: true,
        progressBar: false,
        backgroundColor: "#f44336",   
        messageColor: "#fff",
        layout: 2,                   
        maxWidth: 420,
        class: "custom-toast",
        icon: "fa fa-times-circle"    
      });
      return; 
    }

    createGallery(images);

  } catch (error) {
    iziToast.error({ title: "Error", message: "Failed to fetch images. Try later!" });
    console.error("API Error:", error);
  } finally {
    hideLoader();
  }
});
