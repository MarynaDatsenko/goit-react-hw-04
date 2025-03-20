import axios from "axios";

export const fetchImages = async ({ searchQuery, page }) => {
  const ACCESS_KEY = "DSeHR_SLD_keIvJidmyQK6ni_oJCTMPMlqG4OO9Q8BI";
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchQuery,
        page: page,
        per_page: 10,
        client_id: ACCESS_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default fetchImages;
