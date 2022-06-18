import fetchData from "./fetchDataHomeSearch";

const searchFieldIngredients = document.getElementById("search-field");
const selectMealType = document.getElementById("meal-type");
const selectCuisine = document.getElementById("cuisine");
const selectDiet = document.getElementById("diet");
const selectTime = document.getElementById("time");
const submitSearch = document.getElementById("main__search-button");


submitSearch.addEventListener("click", (e)=>{
    e.preventDefault();
    const ingredients = searchFieldIngredients.value;
    const mealType = selectMealType.value;
    const cuisine = selectCuisine.value;
    const diet = selectDiet.value;
    const time = selectTime.value;

    fetchData(ingredients, mealType, cuisine, diet, time);
});


// Looking for addEventListener that also starts function on 'ENTER'
document.querySelector('#search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const ingredients = searchFieldIngredients.value;
        const mealType = selectMealType.value;
        const cuisine = selectCuisine.value;
        const diet = selectDiet.value;
        const time = selectTime.value;

        fetchData(ingredients, mealType, cuisine, diet, time);
    }
});


/*const submitProductCalorieDataForm = () => {

const searchFieldCalculator = document.getElementById("calculator-field");
const submitCalculatorSearch = document.getElementById("calculator__search-button");

submitCalculatorSearch.addEventListener("click", ()=>{
    // const product = searchFieldCalculator.value;

    // console.log(fetchDataCalculator(product));
    fetchDataCalculator(searchFieldCalculator.value);
});
}

export default submitProductCalorieDataForm*/


//
// submitSearch.addEventListener("keyup", ()=>{
//     const ingredients = searchFieldIngredients.value;
//     const mealType = selectMealType.value;
//     const cuisine = selectCuisine.value;
//     const diet = selectDiet.value;
//     const time = selectTime.value;
//
//     console.log(fetchData(ingredients, mealType, cuisine, diet, time))
//     fetchData(ingredients, mealType, cuisine, diet, time);
//
// });

