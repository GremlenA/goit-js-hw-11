import axios from "axios";

const API_KEY = "51834340-f9825b8542abb10365afbcb9e";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: PER_PAGE,
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Pixabay API error:", error);
    throw error;
  }
}
