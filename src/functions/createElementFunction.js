const createElement = (recipeArray) => {

    const recipeList = document.getElementById("main__recipes-results-list");

    // replaceChildren volgens mij niet nodig in een <form> die cleared na elke submit zichzelf
    recipeList.replaceChildren();

    return recipeArray.map((recipe) => {
        recipeList.innerHTML += `
            <li class="recipe">
                <img class="recipe-img"
                     src="${recipe.recipe.images.THUMBNAIL.url}" alt="Meal Image"/>
                <div class="recipe-container">
                    <strong class="recipe-name">${recipe.recipe.label}</strong>
                    <p class="recipe-calories">${recipe.recipe.calories}</p>
                    <p class="amount-of-ingredients">${recipe.recipe.ingredientLines.length}</p>
                    <p class="cooking-time">${recipe.recipe.totalTime}</p>
                </div>
                

            </li>
        `
    })
}


export default createElement;
