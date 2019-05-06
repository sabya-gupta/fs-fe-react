import axios from 'axios';

export const axioscustmdm = axios.create({
    baseURL: 'http://localhost:7070/custmdm'
});

export default axioscustmdm;