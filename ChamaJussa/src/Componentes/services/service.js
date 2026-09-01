import axios from "axios";

const apiPort = "5185";
const apiUri = "172.16.0.115";

const localApi = `http://${apiUri}:${apiPort}/api`;

const externalApi = null;

const api = axios.create({
  baseURL: localApi,
});

export default api;