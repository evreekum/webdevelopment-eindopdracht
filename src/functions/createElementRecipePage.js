/*
const selectedRecipe = respons.data.recipe;
const recipeContainer = document.getElementById("recipe-page-main__outer-container");
const recipeTitle = selectedRecipe.label;
const timeImage = new Image();
timeImage.src = require("./assets/icons/time.png");
const totalTime = selectedRecipe.totalTime;
console.log(recipeTitle);


recipeCards.innerHTML = `
                <div class="recipe-description__header-container">
                <h1>${recipeTitle}</h1>
                <img src="${timeImage.src}" alt="time-icon">
                <p>${totalTime} min</p>
                </div>
                `
*/


const createElementRecipeCard = (recipes) => {

    const recipeCards = document.getElementById("main__recipe-page-wrapper");
    const timeImage = new Image();
    timeImage.src = require("../assets/icons/time.png");

    recipeCards.replaceChildren();

    return recipes.map((recipe) => {

        const id = recipe.recipe.uri.split("_")[1];

        return recipeCards.innerHTML += `
        
            <li class="recipe-card">
                <a id= "next-page" href="/recipe-page.html?id=${id}" target="_blank">${recipe.recipe.label}</a>
            </li>  
        `;

    })
};


export default createElementRecipeCard

// const button = document.getElementById("next-page")
//
//     button.addEventListener("click", goToRecipePage);

// function goToRecipePage(e) {
//     e.preventDefault();
//     window.location.replace("/recipe-page.html?id=${recipe.uri}");
// }



/*

        <h3><a id="open__recipe-page" href="/src/recipe-page.html?id=${id}">${recipe.recipe.label}</a><img src="${timeImage.src}" alt="Clock Icon"> <strong>${recipe.recipe.totalTime}</strong> min.</h3>
    <p>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
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
    <img src="<a id="open__recipe-page" href="/src/recipe-page.html?id=${id}">${recipe.recipe.images.REGULAR.url}</a></img>" alt="Recipe Image"/>
        <div>
        <h4>ingredients</h4>
</div>
               */
