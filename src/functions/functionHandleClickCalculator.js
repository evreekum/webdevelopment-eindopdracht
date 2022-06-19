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



// Functie voor userwarning
// const noInputWarning = document.getElementById("no-input-warning");
//
// export function checkProductInput(e) {
//     if (e.target.value.includes("")) {
//         noInputWarning.textContent = "No product found. Type product name and try again"
//     } else {
//         noInputWarning.textContent = " "
//     }
// };