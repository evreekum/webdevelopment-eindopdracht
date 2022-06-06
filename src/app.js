import axios from "axios";

// axios.get('https://api.edamam.com/api/recipes/v2');

async function getDataRecipes() {
    try {
        const response = await axios.get('https://api.edamam.com/api/recipes/v2');
        console.log(response);
    } catch (e) {
        console.error(e);
    }
}
getDataRecipes();


async function getFoods() {
    try {
        const response = await axios.get();
        console.log(response);
    } catch (e) {
        console.error(e);
    }
}
