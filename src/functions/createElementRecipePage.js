export const createRecipePageTabTitle = (selectedRecipe) => {
    const recipePageTabTitle = document.getElementById("tab-recipe-title");
    const tabTitle = selectedRecipe.label;

    recipePageTabTitle.innerHTML = `
        ${tabTitle}   
    `;
};

export const createRecipeName = (selectedRecipe) => {
    const recipeNameCard = document.getElementById("recipe-name-description-card");
    const recipeName = selectedRecipe.label;
    const timeIcon = new Image();
    timeIcon.src = require("/src/assets/icons/time.png");
    const cookingTime = selectedRecipe.totalTime;

    recipeNameCard.innerHTML = `
        <div id="recipe-page-name">
            <h3>${recipeName}</h3>
            <p><img class="recipe-page-icon" src="${timeIcon.src}" alt="Clock Icon">${cookingTime} min.</p>
        </div>
        <p class="recipe-page-description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                    Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                    pede.

                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                    dignissim pellentesque felis.

                    Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                    diam. Sed arcu. Cras consequat.

                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu
                    erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
                    metus.
                    
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                    dignissim pellentesque felis.

                    Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                    diam. Sed arcu. Cras consequat.

        </p>
    
    `;
    // console.log(createRecipeName);
};

export const createRecipeImage = (selectedRecipe) => {
    const recipeImageCard = document.getElementById("recipe-page-img-card");
    const recipeImage = selectedRecipe.images.REGULAR.url;

    recipeImageCard.innerHTML = `
        <img class="recipe-image" src="${recipeImage}" alt="Recipe Image">
    
    `;
    // console.log(createRecipeImage);
};

export const createRecipeIngredientsList = (selectedRecipe) => {
    const ingredientsForMap = selectedRecipe.ingredientLines;

    ingredientsForMap.map((ingredient) => {
        const recipeIngredientsList = document.getElementById("ingredients-list");

        recipeIngredientsList.innerHTML += `
        <li>${ingredient}</li>
    
    `;
    });
    // console.log(createRecipeIngredientsList);
};

export const createRecipeNutrientsTable = (selectedRecipe) => {
    const recipeNutrientsCard = document.getElementById("nutrients-table");
    const recipeNutrients = selectedRecipe.totalNutrients;
    const caloriesQuantity = Math.round(recipeNutrients.ENERC_KCAL.quantity);
    const fatQuantity = Math.round(recipeNutrients.FAT.quantity);
    const carbsQuantity = Math.round(recipeNutrients.CHOCDF.quantity);
    const sugarQuantity = Math.round(recipeNutrients.SUGAR.quantity);
    const proteinQuantity = Math.round(recipeNutrients.PROCNT.quantity);
    const naQuantity = Math.round(recipeNutrients.NA.quantity);

    recipeNutrientsCard.innerHTML = `
    <tr>
       <td>${caloriesQuantity}</td>
       <td>${recipeNutrients.ENERC_KCAL.unit}</td>
    </tr>
    <tr>
        <td>${fatQuantity}</td>
        <td>${recipeNutrients.FAT.unit}</td>
    </tr>
    <tr>
        <td>${carbsQuantity}</td>
        <td>${recipeNutrients.CHOCDF.unit}</td>
    </tr>
    <tr>
        <td>${sugarQuantity}</td>
        <td>${recipeNutrients.SUGAR.unit}</td>
    </tr>
    <tr>
        <td>${proteinQuantity}</td>
        <td>${recipeNutrients.PROCNT.unit}</td>
    </tr>
    <tr>
        <td>${naQuantity}</td>
        <td>${recipeNutrients.NA.unit}</td>
    </tr>
           
    `;
};


export const createRecipeHealthLabels = (selectedRecipe) => {
    const recipeHealthLabels = selectedRecipe.healthLabels;

    recipeHealthLabels.map((healthLabel) => {
        const recipeHealthLabelsCard = document.getElementById("health-label-list");

        recipeHealthLabelsCard.innerHTML = `
        <li class="health-background-shape">${healthLabel}</li>  
    
    `;
    });

};


