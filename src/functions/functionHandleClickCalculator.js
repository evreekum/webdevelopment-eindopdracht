import fetchDataCalculator from "./fetchDataCalculatorPage.js";


const submitProductCalculatorSearch = () => {
    const searchProductField = document.getElementById("calculator__field");
    const submitCalculatorSearch = document.getElementById("calculator__search-submit-form");

    submitCalculatorSearch.addEventListener("submit",(event) => {
        event.preventDefault();

        fetchDataCalculator(searchProductField.value);
    });
};
export default submitProductCalculatorSearch;