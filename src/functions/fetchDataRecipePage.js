import axios from "axios";
import createElementRecipeCard from "./createElementRecipePage";



const fetchDataRecipe = async (id) => {
    const URI = "https://api.edamam.com";
    const endpoint = "/api/recipes/v2/";
    /*const keyRecipeAPI = "d8f7fb26122382212dc8fd7bff0570b7";
    const idRecipeAPI = "eb071f48";*/

    try {
        // const apiRecipeResultsHomePage = "https://api.edamam.com/api/recipes/v2/";
        // const apiRecipePage = id;
        const response = await axios.get(`${URI}${endpoint}${id}`, {
            params: {
                type: "public",
                app_key: "d8f7fb26122382212dc8fd7bff0570b7",
                app_id: "eb071f48",

            }
        })
        let uri = response.data.hits[1].recipe.uri;
        const id = uri.split("_")[1];
        console.log(id);

        createElementRecipeCard(response.data);

    } catch (err) {
        console.log(err);
    }
}


export default fetchDataRecipe