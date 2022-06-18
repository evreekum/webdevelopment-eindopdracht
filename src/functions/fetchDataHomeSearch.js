import axios from "axios";
import createElementSearch from "./createElementHomePageMain";
// import createElementRandomRecipe from "./createElementHomePageHeader";

const fetchData = async (ingredients, mealType, cuisine, diet, time) => {

    const URI = "https://api.edamam.com";
    const endpoint = "/api/recipes/v2";

    try {
        const response = await axios.get(`${URI}${endpoint}`, {
            params: {
                type: "public",
                app_key: "d8f7fb26122382212dc8fd7bff0570b7",
                app_id: "eb071f48",
                q: ingredients,
                mealType: mealType ? mealType : null,
                cuisineType: cuisine ? cuisine : null,
                diet: diet ? diet : null,
                time: time ? time : null

            }
        })

        createElementSearch(response.data.hits.slice(0,18));

    } catch (err) {
        console.error(err);
    }

};

export default fetchData