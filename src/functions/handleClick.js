import fetchData from "./fetchDataHomeSearch";


const searchRequestSubmit = () => {

    const searchFieldIngredients = document.getElementById("search-field");
    const selectMealType = document.getElementById("meal-type");
    const selectCuisine = document.getElementById("cuisine");
    const selectDiet = document.getElementById("diet");
    const selectTime = document.getElementById("time");
    const submitSearch = document.getElementById("main__search-button");


    submitSearch.addEventListener("click", (e) => {
        e.preventDefault();
        const ingredients = searchFieldIngredients.value;
        const mealType = selectMealType.value;
        const cuisine = selectCuisine.value;
        const diet = selectDiet.value;
        const time = selectTime.value;

        fetchData(ingredients, mealType, cuisine, diet, time);
    });

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
};
export default searchRequestSubmit;