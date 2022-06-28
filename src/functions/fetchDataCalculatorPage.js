import axios from "axios";
import createElementCalculator from "./createElementCalculatorPage";


const fetchDataCalculator = async (ingredient) => {

    const URI = "https://api.edamam.com";
    const endpoint = "/api/food-database/v2/parser";

    try {
        const response = await axios.get(`${URI}${endpoint}`, {
            params: {
                app_key: "92fed8ba89827ac362999074343b60cb",
                app_id: "c388aa1c",
                ingr: ingredient
            }
        })

        createElementCalculator(response);

    } catch (err) {
        console.error(err);
    }

};
export default fetchDataCalculator;