// import fetchDataRecipe from "./fetchDataRecipePage";

//Create element recipe search
const createElementSearch = (recipeArray) => {

    const recipeList = document.getElementById("main__recipes-results-list");
    const timeImage = new Image();
    timeImage.src = require("../assets/icons/time.png");

    // replaceChildren volgens mij niet nodig in een <form> die cleared na elke submit zichzelf
    recipeList.replaceChildren();

    return recipeArray.map((recipe) => {

        const calories = (`${recipe.recipe.calories}`);
        console.log(calories);
        const caloriesRound = Math.round((calories));
        const id = recipe.recipe.uri.split("_")[1];

        recipeList.innerHTML += `
            <li id="to-recipe-result-item" class="recipe-result-item">
                <a id="next-page" href="recipe-page.html">
                    <img class="recipe-result-img"
                           src="${recipe.recipe.images.REGULAR.url}" alt="Meal Image"/>              
                    <div class="recipe-result-card">
                        <p class="recipe-name">${recipe.recipe.label}</p>
                        <div class="recipe-info-text">
                            <p class="recipe-calories-ingredients"><strong>${caloriesRound}</strong> calories | <strong>${recipe.recipe.ingredientLines.length}</strong> ingredients</p>
                            <p class="cooking-time"><img src="${timeImage.src}" alt="Clock Icon"> <strong>${recipe.recipe.totalTime}</strong> min.</p>
                        </div>
                    </div>
                </a>
            </li>
        `
    })
};


export default createElementSearch;

/*link: /src/recipe-page.html?id=${id}*/
