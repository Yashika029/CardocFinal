import axios from "axios";
export const BASE_URL='http://localhost:8282';

export const myAxios=axios.create({
    baseURL: BASE_URL,
   // headers: {'Access-Control-Allow-Origin': "*"}


});