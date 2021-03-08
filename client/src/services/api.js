import sendRequest from "./sendRequest";


const BASE_PATH = 'http://localhost:8080'


export const getRecommendedProducts = () => {
    sendRequest(`${BASE_PATH}/recommendeds`);
}


