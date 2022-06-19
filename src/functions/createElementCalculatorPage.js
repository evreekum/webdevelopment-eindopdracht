const createElementCalculator = (response) => {

    const productData = response.data;
    const selectedProduct = productData.parsed[0].food;
    const nameProduct = selectedProduct.label;
    const calories = selectedProduct.nutrients.ENERC_KCAL;
    const fat = Math.round(selectedProduct.nutrients.FAT);
    const carbs = Math.round(selectedProduct.nutrients.CHOCDF);
    const weight = productData.hints[0].measures[0].weight;

    const calculatorSearchData = document.getElementById("calculator__search-data");
    calculatorSearchData.replaceChildren();


    calculatorSearchData.innerHTML += `
            <td>${nameProduct}</td>
            <td>${Math.round(weight)}</td>
            <td>gram</td>
            `;

    const calculatorAmountField = document.getElementById("calculator__amount-field");

    const submitCalculatorAmountForm = document.getElementById("calculator__amount-submit-form");


    submitCalculatorAmountForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const totalCalories = Math.round(calculatorAmountField.value * calories * 100) / 100;
        const totalFat = Math.round(calculatorAmountField.value * fat * 100) / 100;
        const totalCarbs = Math.round(calculatorAmountField.value * carbs * 100) / 100;

        const calculatorTable = document.getElementById("calculator__amount-results-table");
        const row = calculatorTable.insertRow(1);
        row.className = "calculator__data";
        const cellForName = row.insertCell(0);
        const cellForCalories = row.insertCell(1);
        const cellForFat = row.insertCell(2);
        const cellForCarbs = row.insertCell(3);
        cellForName.innerHTML = nameProduct;
        cellForCalories.innerHTML = totalCalories;
        cellForCalories.className = "calculator__calories-data";
        cellForFat.innerHTML = totalFat;
        cellForFat.className = "calculator__fat-data";
        cellForCarbs.innerHTML = totalCarbs;
        cellForCarbs.className = "calculator__carbs-data";


        //-------------Total Calories-------------//
        const caloriesData = document.getElementsByClassName("calculator__calories-data");
        const caloriesArray = [];


        for (let i = 0; i < caloriesData.length; i++) {
            caloriesArray.push(caloriesData[i].innerText);
        }
        const caloriesArrayInteger = caloriesArray.map(str => {
            return Number(str);
        });

        const initialCaloriesAmount = 0;
        const sumCalories = caloriesArrayInteger.reduce(
            (previousAmount, currentAmount) => previousAmount + currentAmount, initialCaloriesAmount
        );

        let totalCaloriesCell = document.getElementById("calculator__total-calories");
        totalCaloriesCell.innerHTML = sumCalories;

        //---------------Total Fat------------------//
        const fatData = document.getElementsByClassName("calculator__fat-data");
        const fatArray = [];

        for (let i = 0; i < fatData.length; i++) {
            fatArray.push(fatData[i].innerText);
        }
        const fatArrayInteger = fatArray.map(str => {
            return Number(str);
        });

        const initialFatAmount = 0;
        const sumFat = fatArrayInteger.reduce(
            (previousAmount, currentAmount) => previousAmount + currentAmount, initialFatAmount
        );

        let totalFatCell = document.getElementById("calculator__total-fat")
        totalFatCell.innerHTML = sumFat;


        //-------------Total Carbs------------------//
        const carbsData = document.getElementsByClassName("calculator__carbs-data");
        const carbsArray = [];

        for (let i = 0; i < carbsData.length; i++) {
            carbsArray.push(carbsData[i].innerText);
        }
        const carbsArrayInteger = carbsArray.map(str => {
            return Number(str);
        });

        const initialCarbsAmount = 0;
        const sumCarbs = carbsArrayInteger.reduce(
            (previousAmount, currentAmount) => previousAmount + currentAmount, initialCarbsAmount
        );

        let totalCarbsCell = document.getElementById("calculator__total-carbs")
        totalCarbsCell.innerHTML = sumCarbs;
    });

};

export default createElementCalculator

