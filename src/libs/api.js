import axios from 'axios';
// import Qs from 'qs';

const api = process.env.VUE_APP_API;
const path = process.env.VUE_APP_PATH;

/*
|--------------------------------------------------------------------------
| 前台
|--------------------------------------------------------------------------
|
*/

// products
export const apiGetAllProducts = () => axios.get(`${api}/api/${path}/products/all`); // 取得所有產品
export const apiGetSingleProduct = (id) => axios.get(`${api}/api/${path}/product/${id}`); // 取得單一產品

// 購物車
export const apiAddToCart = (data) => axios.post(`${api}/api/${path}/cart`, data); // 加入購物車
