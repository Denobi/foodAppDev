import axios from "axios";

const api = axios.create({
    baseURL:"http://10.135.224.23:6001",
    // baseURL:"http://192.168.1.90:6001",
    timeout:10000
});



export default api;