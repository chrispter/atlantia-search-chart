import axios from "axios";

export const atlantiaApi = axios.create({
    baseURL: 'https://atlantia-dev-test.herokuapp.com/api'
});