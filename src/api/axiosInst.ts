import axios from 'axios';

const { VITE_RAPID_API_HOST, VITE_RAPID_API_KEY } = import.meta.env;

const axiosInst = axios.create({
    baseURL: 'https://youtube-v31.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': VITE_RAPID_API_HOST
    }
});

export default axiosInst;