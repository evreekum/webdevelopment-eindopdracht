import axios from "axios";
import createElement from "./createElementFunction";

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
const fetchData = async (ingredients, mealType) => {

    // Opslaan van URI en endpoint
    const URI = "https://api.edamam.com"
    const endpoint = "/api/recipes/v2"
    // Try block
    try {
        // Response van request opslaan
        const response = await axios.get(`${URI}${endpoint}`, {
            // Create Elements functie aanroepen en parameters toevoegen
            params: {
                type: 'public',
                app_key: 'd8f7fb26122382212dc8fd7bff0570b7',
                app_id: 'eb071f48',
                q: ingredients,
                mealType: mealType

            }


        } )
        console.log(response.data.hits)
        createElement(response.data.hits);

    } catch (err) {
        console.error(err);
    }


}




// Catch block


export default fetchData;