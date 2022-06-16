import axios from "axios";


document.addEventListener("DOMContentLoaded", (event) => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");
    console.log(id);
    event.preventDefault();


    const fetchDataRecipe = async () => {

        /*const keyRecipeAPI = "d8f7fb26122382212dc8fd7bff0570b7";
        const idRecipeAPI = "eb071f48";*/

        try {
            const URI = "https://api.edamam.com";
            const endpoint = "/api/recipes/v2/";
            const response = await axios.get(`${URI}${endpoint}${id}`, {
                params: {
                    type: "public",
                    app_key: "d8f7fb26122382212dc8fd7bff0570b7",
                    app_id: "eb071f48",

                }
            })

            const selectedRecipe = response.data.recipe;
            console.log(selectedRecipe);

            createRecipePageTabTitle(selectedRecipe);
            createRecipeNameDescription(selectedRecipe);
            createRecipeImage(selectedRecipe);
            createRecipeIngredientsList(selectedRecipe);


        } catch (err) {
            console.log(err);
        }
}
    fetchDataRecipe();
});



const createRecipePageTabTitle = (selectedRecipe) => {
    const recipePageTabTitle = document.getElementById("tab-recipe-title");
    const tabTitle = selectedRecipe.label;

    recipePageTabTitle.innerHTML = `
        <title>${tabTitle}</title>   
    `;
};

const createRecipeNameDescription = (selectedRecipe) => {
    const recipeNameDescriptionCard = document.getElementById("main__recipe-description-card");
    const recipeName = selectedRecipe.label;
    const timeIcon = new Image();
    timeIcon.src = require("./assets/icons/time.png");
    const cookingTime = selectedRecipe.totalTime;

    recipeNameDescriptionCard.innerHTML = `
        <h3>${recipeName}</h3>
        <img src="${timeIcon.src}" alt="Clock Icon">
        <p>${cookingTime} min.</p>
        <p>         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                    Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                    pede.

                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                    dignissim pellentesque felis.

                    Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                    diam. Sed arcu. Cras consequat.

                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu
                    erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
                    metus.

        </p>
    
    `;
    console.log(createRecipeNameDescription);
};

const createRecipeImage = (selectedRecipe) => {
    const recipeImageCard = document.getElementById("recipe-page-img-card");
    const recipeImage = selectedRecipe.image;

    recipeImageCard.innerHTML = `
        <img src="${recipeImage}" alt="Recipe Image">
    
    `;
    console.log(createRecipeImage);
};

const createRecipeIngredientsList = (selectedRecipe) => {
    const ingredientsForMap = selectedRecipe.ingredientLines;
    ingredientsForMap.map((ingredient) => {
    const recipeIngredientsList = document.getElementById("ingredients-list");
    recipeIngredientsList.innerHTML += `
        <li>${ingredient}</li>
    
    `;
    });
    console.log(createRecipeIngredientsList);
};

const createRecipeNutrientsTable = (selectedRecipe) => {
    const recipeNutrientsCard = document.getElementById("nutrients-table");
    const recipeNutrients = selectedRecipe.totalNutrients;
    const carbsQuantity = Math.round(totalNutrients.CHOCDF.quantity);
    const sugarQuantity = Math.round(totalNutrients.SUGAR.quantity);
    const proteinQuantity = Math.round(totalNutrients.PROCNT.quantity);
    const sodiumQuantity = Math.round(totalNutrients.NA.quantity);

    recipeNutrientsCard.innerHTML = `
    
    
    
    
    `;
};






