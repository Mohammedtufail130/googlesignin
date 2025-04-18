import axios from 'axios';

const api = axios.create({
    baseURL: 'https://googlesignin-2xls.onrender.com/auth'
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);