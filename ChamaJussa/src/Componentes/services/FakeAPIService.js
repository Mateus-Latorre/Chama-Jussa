import axios from "axios";

const apiPort = "3000";
const apiUrl = "172.16.36.57"

const localAPI = `http://${apiUrl}:${apiPort}`;

const externaApi = null

const api = axios.create({
    baseURL: localAPI
});


export default api