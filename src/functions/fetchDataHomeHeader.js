import axios from "axios";
import createElementRandomRecipe from "./createElementHomePageHeader";
import createElementSearch from "./createElementHomePageMain";

const fetchDataHomeHeader = async (searchQuery) => {
    const URI = "https://api.edamam.com";
    const endpoint = "/api/recipes/v2";
    try {
        // Response van request opslaan
        const response = await axios.get(`${URI}${endpoint}`, {
            // Create Elements functie aanroepen en parameters toevoegen
            params: {
                type: "public",
                app_key: "d8f7fb26122382212dc8fd7bff0570b7",
                app_id: "eb071f48",
                q: searchQuery

            }
        })
        console.log(response.data.hits);
        // const randomRecipeHits = response.data.hits;
        // const randomRecipe = randomRecipeHits.slice(0,3);
        // createElementRandomRecipe(randomRecipe);
        // // createElementRandomRecipe(response.data.hits);
        createElementRandomRecipe(response.data.hits.slice(0,3));

// Catch block
    } catch (err) {
        console.error(err);
    }
    fetchDataHomeHeader();
};

export default fetchDataHomeHeader
