const API_KEY = "51834340-f9825b8542abb10365afbcb9e";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Pixabay API error: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
