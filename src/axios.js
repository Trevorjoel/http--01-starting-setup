import axios from 'axios';

// creating instances
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
export default instance;