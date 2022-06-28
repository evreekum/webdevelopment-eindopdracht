const createElementRandomRecipe = (recipeArray) => {

    const recipeRandomList = document.getElementById("header__random-recipes-list");
    const timeImage = new Image();
    timeImage.src = require("../assets/icons/time.png");
    recipeRandomList.replaceChildren();

    return recipeArray.map((recipe) => {

        const caloriesRound = Math.round(recipe.recipe.calories);
        const id = recipe.recipe.uri.split("_")[1];

        recipeRandomList.innerHTML += `
            <li class="random-recipe-result-item">
                <a href="/recipe-page.html?id=${id}" target="_blank">
                    <img class="random-recipe-result-img"
                           src="${recipe.recipe.images.REGULAR.url}" alt="Meal Image"/>              
                    <div class="random-recipe-result-card">
                        <p>${recipe.recipe.label}</p>
                        <div class="random-recipe-info-text">
                            <p><strong>${caloriesRound}</strong> Calories | <strong>${recipe.recipe.ingredientLines.length}</strong> Ingredients</p>
                            <p><img class="time-icon" src="${timeImage.src}" alt="Clock Icon"> <strong>${recipe.recipe.totalTime}</strong> min.</p>
                        </div>
                    </div>
                </a>
            </li>
        `
    });
};
export default createElementRandomRecipe;