/*
const createElementRandomRecipe = (recipeArray) => {

    const recipeRandomList = document.getElementById("header__random-recipes-list");
    const timeImage = new Image();
    timeImage.src = require("../assets/icons/time.png");

    // replaceChildren volgens mij niet nodig in een <form> die cleared na elke submit zichzelf
    recipeList.replaceChildren();

    return recipeArray.map((recipe) => {

        const caloriesRound = Math.round(recipe.recipe.calories);
        const id = recipe.recipe.uri.split("_")[1];

        recipeRandomList.innerHTML += `
            <li class="recipe-result-item">
                <a id="next-page" href="/recipe-page.html?id=${id}" target="_blank">
                    <img class="recipe-result-img"
                           src="${recipe.recipe.images.REGULAR.url}" alt="Meal Image"/>              
                    <div class="recipe-result-card">
                        <p class="recipe-name">${recipe.recipe.label}</p>
                        <div class="recipe-info-text">
                            <p class="recipe-calories-ingredients"><strong>${caloriesRound}</strong> calories | <strong>${recipe.recipe.ingredientLines.length}</strong> ingredients</p>
                            <p class="cooking-time"><img class="time-icon" src="${timeImage.src}" alt="Clock Icon"> <strong>${recipe.recipe.totalTime}</strong> min.</p>
                        </div>
                    </div>
                </a>
            </li>
        `
    })
};


export default createElementRandomRecipe;*/
