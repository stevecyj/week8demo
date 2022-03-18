<script>
import emitter from '@/libs/emitter';
import Offcanvas from 'bootstrap/js/dist/offcanvas';

import { apiGetCart } from '@/libs/api';

export default {
  data() {
    return {
      cartData: { carts: [] },
      animationClass: {
        // animate__animated: false,
        // animate__fadeInUp: false,
        // 'animate__delay-0.5s': false,
        wow: false,
        fadeInUp: false,
      },
      offcanvas: '',
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
    toggleAnimation() {
      // console.log('toggleAnimation');
      // this.animationClass.animate__animated = !this.animationClass.animate__animated;
      // this.animationClass.animate__fadeInUp = !this.animationClass.animate__fadeInUp;
      // this.animationClass['animate__delay-0.5s'] = !this.animationClass['animate__delay-0.5s'];
      this.openOffcanvas();
    },

    openOffcanvas() {
      this.offcanvas.show();
      this.animationClass.wow = true;
      this.animationClass.fadeInUp = true;
    },

    hideOffcanvas() {
      this.offcanvas.hide();
    },
  },
  mounted() {
    this.getCart();
    emitter.on('get-cart', () => {
      this.getCart();
    });
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);

    this.$refs.offcanvas.addEventListener('show.bs.offcanvas', () => {
      console.log('show.bs.offcanvas');
    });

    this.$refs.offcanvas.addEventListener('hide.bs.offcanvas', () => {
      console.log('hide.bs.offcanvas');
      // this.animationClass.wow = false;
      // this.animationClass.fadeInUp = false;
    });
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <a
        class="navbar-brand order-lg-first"
        href="#"
      >Navbar</a>
      <!-- <button
        class="navbar-toggler order-first me-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->

      <button
        class="navbar-toggler order-first me-0"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="openOffcanvas"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <button
        type="button"
        class="btn  me-0 me-md-2 position-relative order-lg-last"
      ><i class="bi bi-cart-plus-fill text-primary fs-4"></i></button>

      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
          <li class="nav-item mx-3">
            <a
              class="nav-link"
              aria-current="page"
              href="#"
            >Home</a>
          </li>
          <li class="nav-item mx-3">
            <a
              class="nav-link"
              href="#"
            >Link</a>
          </li>
          <li class="nav-item mx-3">
            <a
              class="nav-link"
              href="#"
            >Link</a>
          </li>
        </ul>

        <!-- <form class="d-flex">
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
        </form> -->
      </div>
    </div>
  </nav>

  <div
    id="offcanvasExample"
    ref="offcanvas"
    class="offcanvas offcanvas-start"
    tabindex="-1"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5
        id="offcanvasExampleLabel"
        class="offcanvas-title"
      >MENU</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center ">
        <li
          class="nav-item mx-3 fs-3"
          data-wow-offset="100"
          data-wow-iteration="1"
          :class="animationClass"
        >
          <a
            class="nav-link"
            aria-current="page"
            href="#"
          >Home</a>
        </li>
        <li class="nav-item mx-3 fs-3">
          <a
            class="nav-link"
            href="#"
          >Link</a>
        </li>
        <li class="nav-item mx-3 fs-3">
          <a
            class="nav-link"
            href="#"
          >Link</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}
</style>
