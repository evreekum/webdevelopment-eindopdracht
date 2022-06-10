import fetchData from "./fetchDataFromAPI";

// Referenties naar elementen in HTML
const searchFieldIngredients = document.getElementById("search-field");
const selectMealType = document.getElementById("meal-type");
const selectCuisine = document.getElementById("cuisine");
const selectDiet = document.getElementById("diet");
const selectTime = document.getElementById("time");
const submitSearch = document.getElementById("main__search-button");



// Click event die handleClick aanroept
// searchFieldIngredients.addEventListener("keyup", searchFieldFunction);
// selectMealType.addEventListener("click", clickMealType);
// selectCuisine.addEventListener("click", clickCuisine);
// selectDiet.addEventListener("click", clickDiet);
// selectTime.addEventListener("click", clickTime);

submitSearch.addEventListener("click", ()=>{
    const ingredients = searchFieldIngredients.value
    const mealType = selectMealType.value
    const cuisine = selectCuisine.value
    const diet = selectDiet.value
    const time = selectTime.value

    fetchData(ingredients, mealType, cuisine, diet, time);

});
