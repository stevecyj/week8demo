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
          // console.log('getCart', response);
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
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a
        class="navbar-brand order-lg-first"
        href="#"
      >Navbar</a>
      <button
        class="navbar-toggler order-lg-last me-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              href="#"
            >Home</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >Link</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >Link</a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <button
            class="btn btn-outline-success"
            type="submit"
          >Search</button>
        </form>
      </div>
      <button
        type="button"
        class="btn btn-primary me-0 me-md-2 position-relative order-last order-lg-last"
      >12</button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}
</style>
