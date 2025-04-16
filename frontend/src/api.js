import axios from 'axios';

const api = axios.create({
    baseURL: 'https://googlesignin-two.vercel.app'
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);