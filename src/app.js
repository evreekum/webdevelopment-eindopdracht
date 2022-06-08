import axios from "axios";

// axios.get('https://api.edamam.com/api/recipes/v2');

/*async function getDataRecipes(searchQuery) {
    try {
        const response = await axios.get('https://api.edamam.com/api/recipes/v2'), config: {
            params: {
                type: 'public',
                app_key: '',
                app_id: '',
                q: searchQuery

            }
        }
        console.log(response);
    } catch (e) {
        console.error(e);
    }
}
getDataRecipes();*/


async function getDataFoods() {
    try {
        const response = await axios.get();
        console.log(response);
    } catch (e) {
        console.error(e);
    }
}
