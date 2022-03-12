<script>
// eslint-disable-next-line no-unused-vars
import { apiGetSingleProduct, apiAddToCart } from '@/libs/api';

export default {
  data() {
    return {
      product: [],
      id: '',
      qty: 1,
    };
  },
  methods: {
    // 單一產品
    getSingleProduct(id) {
      apiGetSingleProduct(id)
        .then((response) => {
          this.product = response.data.product;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // 加入購物車
    addToCart(qty = 1) {
      const data = {
        product_id: this.id,
        qty,
      };

      apiAddToCart({ data })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getSingleProduct(this.id);
  },
};
</script>

<template>
  <div class="container">
    <div style="min-height: 400px;
            background-position: center center; background-size: cover;"
      :style="{backgroundImage: `url(${product.imageUrl})`}">
    </div>
    <div class="row justify-content-between mt-4 mb-7">
      <div class="col-md-7">
        <h2 class="mb-0">{{ product.title }}</h2>
        <p class="fw-bold">NT$ {{ product.price }}</p>
        <p>{{ product.content }}</p>
        <div class="my-4">
          <img v-for="image in product.imagesUrl"
            :key="image"
            :src="image"
            :alt="product.title"
            class="img-fluid mt-4">
        </div>
        <div id="accordionExample"
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3">
          <div class="card border-0">
            <div id="headingOne"
              class="card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne">
              <div class="d-flex justify-content-between align-items-center pe-1">
                <h4 class="mb-0">
                  Lorem ipsum
                </h4>
                <i class="fas fa-minus"></i>
              </div>
            </div>
            <div id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="card-body pb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div id="headingTwo"
              class="card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo">
              <div class="d-flex justify-content-between align-items-center pe-1">
                <h4 class="mb-0">
                  Lorem ipsum
                </h4>
                <i class="fas fa-plus"></i>
              </div>
            </div>
            <div id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="card-body pb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div id="headingThree"
              class="card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree">
              <div class="d-flex justify-content-between align-items-center pe-1">
                <h4 class="mb-0">
                  Lorem ipsum
                </h4>
                <i class="fas fa-plus"></i>
              </div>
            </div>
            <div id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="card-body pb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="input-group mb-3 border mt-3">
          <div class="input-group-prepend">
            <button id="button-addon1"
              class="btn btn-outline-dark rounded-0 border-0 py-3"
              type="button">
              <i class="fas fa-minus"></i>
            </button>
          </div>
          <input type="text"
            class="form-control border-0 text-center my-auto shadow-none"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            value="1">
          <div class="input-group-append">
            <button id="button-addon2"
              class="btn btn-outline-dark rounded-0 border-0 py-3"
              type="button">

              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <button class="btn btn-dark btn-block rounded-0 py-3"
          @click.prevent="addToCart()">Lorem
          ipsum</button>
      </div>
    </div>
  </div>
</template>
