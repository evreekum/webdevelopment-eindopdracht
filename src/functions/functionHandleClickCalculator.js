import fetchDataCalculator from "./fetchDataCalculatorPage.js";


const submitProductCalculatorSearch = () => {
    const searchProductField = document.getElementById("calculator__field");
    const submitCalculatorSearch = document.getElementById("calculator__submit-search");

    submitCalculatorSearch.addEventListener("submit",(e) => {
        e.preventDefault();
        console.log(searchProductField.value);
        // console.log(searchProductField.value)
        fetchDataCalculator(searchProductField.value);
    })
}



export default submitProductCalculatorSearch;