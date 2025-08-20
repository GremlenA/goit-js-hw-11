import axios from "axios";

const API_KEY = "51834340-f9825b8542abb10365afbcb9e";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });

    
    return response.data.hits;

  } catch (error) {
    console.error("Pixabay API error:", error);
    throw error;
  }
}
