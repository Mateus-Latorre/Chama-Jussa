import axios from "axios";

const apiPort = "7030";
const apiUri = "172.16.1.165";

const localApi = `http://${apiUri}:${apiPort}`;

const externalApi = null;

const api = axios.create({
  baseURL: localApi,
});

export default api;