import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5184'
})

export default api;
