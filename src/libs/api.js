import axios from 'axios';

const api = process.env.VUE_APP_API;
const path = process.env.VUE_APP_PATH;

/*
|--------------------------------------------------------------------------
| 前台
|--------------------------------------------------------------------------
|
*/

// products
export const apiGetAllProducts = () => axios.get(`${api}/api/${path}/products/all`);
export const apiGetSingleProduct = (id) => axios.get(`${api}/api/${path}/product/${id}`);
