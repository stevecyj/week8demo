import { createApp } from 'vue';

import 'bootstrap-icons/font/bootstrap-icons.css'; // bootstrap icons

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router).mount('#app');
