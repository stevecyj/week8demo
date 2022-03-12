<script>
import emitter from '@/libs/emitter';

import { apiGetCart } from '@/libs/api';

export default {
  data() {
    return {
      cartData: { carts: [] },
    };
  },
  methods: {
    getCart() {
      apiGetCart()
        .then((response) => {
          console.log('getCart', response);
          this.cartData = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCart();
    emitter.on('get-cart', () => {
      this.getCart();
    });
  },
};
</script>

<template>
  <div class="bg-white sticky-top">
    <div class="container">
      <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
        <router-link to="/"
          class="navbar-brand position-absolute"
          style="left: 50%; transform: translate(-50%, -50%); top: 50%">Navbar</router-link>

        <button class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav"
          class="collapse navbar-collapse bg-white custom-header-md-open">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link"
                to="/products">產品頁面</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                href="./detail.html">Lorem ipsum</a>
            </li>
          </ul>
        </div>
        <div class="d-flex position-relative btn btn-sm">
          <!-- <a href="#"><i class="fas fa-heart me-5"></i></a> -->
          <a href="#"><i class="bi bi-bag"></i><span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{ cartData.carts?.length }}
              <span class="visually-hidden">unread messages</span>
            </span></a>
        </div>
      </nav>
    </div>
  </div>
</template>
