import axios from 'axios';

const api = axios.create({
    baseURL: 'https://googlesignin-2xls.onrender.com'
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);