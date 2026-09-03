import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiPort = "5185";
const apiUri = "172.16.1.125";

const localApi = `http://${apiUri}:${apiPort}/api`;

const externalApi = null;

const api = axios.create({
  baseURL: localApi,
});

api.interceptors.request.use(
  async (config) => {
    // Busca o token salvo no login
    const token = await AsyncStorage.getItem("token");
    
    // Se existir token, adiciona o cabeçalho Authorization: Bearer <token>
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;