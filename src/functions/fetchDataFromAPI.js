import axios from "axios";
import createElementSearch from "./createElementHomePage";

// Fetch Data uit API

/*
async function fetchDataRecipes(searchFieldFunction) {
    try {
        const response = await axios.get('https://api.edamam.com/api/recipes/v2',{
            params: {
                type: 'public',
                app_key: 'd8f7fb26122382212dc8fd7bff0570b7',
                app_id: 'eb071f48',
                q: 'searchFieldFunction'

            }
        });
        console.log(response);
    } catch (e) {
        console.error(e);
    }
}
fetchDataRecipes();
*/


/*
async function fetchDataFoods() {
    try {
        const response = await axios.get();
        console.log(response);
    } catch (e) {
        console.error(e);
    }
}
*/


// async function fetchData


// Fetch data functie
const fetchData = async (ingredients, mealType, cuisine, diet, time) => {

    // Opslaan van URI en endpoint
    const URI = "https://api.edamam.com";
    const endpoint = "/api/recipes/v2";
  /*  const keyRecipeAPI = "d8f7fb26122382212dc8fd7bff0570b7";
    const idRecipeAPI = "eb071f48";*/

    // Try block
    try {
        // Response van request opslaan
        const response = await axios.get(`${URI}${endpoint}`, {
            // Create Elements functie aanroepen en parameters toevoegen
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
        console.log(response.data.hits);
        createElementSearch(response.data.hits);


// Catch block
    } catch (err) {
        console.error(err);
    }

};

export default fetchData;