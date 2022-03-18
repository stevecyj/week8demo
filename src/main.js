import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // bootstrap icons
import 'animate.css'; // Animate.css
import 'aos/dist/aos.css';
import AOS from 'aos';
import Wow from 'wow.js';
import 'wow.js/css/libs/animate.css';

import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

AOS.init({
  once: true,
});
new Wow().init();

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router).mount('#app');
