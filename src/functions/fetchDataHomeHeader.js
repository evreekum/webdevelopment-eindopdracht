import axios from "axios";
import createElementRandomRecipe from "./createElementHomePageHeader";


const fetchDataHomeHeader = async (searchQuery) => {
    const URI = "https://api.edamam.com";
    const endpoint = "/api/recipes/v2";

    try {
        const response = await axios.get(`${URI}${endpoint}`, {
            params: {
                type: "public",
                app_key: "d8f7fb26122382212dc8fd7bff0570b7",
                app_id: "eb071f48",
                q: searchQuery
            }
        });

        const randomRecipeHits = response.data.hits;
        createElementRandomRecipe(randomRecipeHits.slice(0, 3));

    } catch (err) {
        console.error(err);
    }
};

export default fetchDataHomeHeader;
