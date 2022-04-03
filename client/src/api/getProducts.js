import axios from 'axios';

export const getProducts = () =>
    axios.get('/api/products')
    .then(res => res.data)
    // .then(data => console.log(data));

