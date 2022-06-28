import axios from "axios";
import {
    createRecipeHealthLabels, createRecipeImage, createRecipeIngredientsList,
    createRecipeName, createRecipeNutrientsTable,
    createRecipePageTabTitle
} from "./createElementRecipePage";


document.addEventListener("DOMContentLoaded", (event) => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");
    event.preventDefault();

    const fetchDataRecipe = async () => {

        try {
            const URI = "https://api.edamam.com";
            const endpoint = "/api/recipes/v2/";
            const response = await axios.get(`${URI}${endpoint}${id}`, {
                params: {
                    type: "public",
                    app_key: "d8f7fb26122382212dc8fd7bff0570b7",
                    app_id: "eb071f48",
                }
            });

            const selectedRecipe = response.data.recipe;
            createRecipePageTabTitle(selectedRecipe);
            createRecipeName(selectedRecipe);
            createRecipeImage(selectedRecipe);
            createRecipeIngredientsList(selectedRecipe);
            createRecipeNutrientsTable(selectedRecipe);
            createRecipeHealthLabels(selectedRecipe);

        } catch (err) {
            console.error(err);
        }
    };
    fetchDataRecipe();
});