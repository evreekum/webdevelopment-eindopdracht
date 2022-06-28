
const createElementSearch = (recipeArray) => {

    const recipeList = document.getElementById("main__recipes-results-list");
    const timeImage = new Image();
    timeImage.src = require("../assets/icons/time.png");

    recipeList.replaceChildren();



    return recipeArray.map((recipe) => {

        const caloriesRound = Math.round(recipe.recipe.calories);
        const id = recipe.recipe.uri.split("_")[1];

        recipeList.innerHTML += `
            <li class="recipe-result-item">
                <a id="next-page" href="/recipe-page.html?id=${id}" target="_blank">
                    <img class="recipe-result-img"
                           src="${recipe.recipe.images.REGULAR.url}" alt="Meal Image"/>              
                    <div class="recipe-result-card">
                        <p class="recipe-name">${recipe.recipe.label}</p>
                        <div class="recipe-info-text">
                            <p class="recipe-calories-ingredients"><strong>${caloriesRound}</strong> Calories | <strong>${recipe.recipe.ingredientLines.length}</strong> Ingredients</p>
                            <p><img class="time-icon" src="${timeImage.src}" alt="Clock Icon"> <strong>${recipe.recipe.totalTime}</strong> min.</p>
                        </div>
                    </div>
                </a>
            </li>
        `
    })
};

export default createElementSearch;
