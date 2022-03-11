<script>
import { apiGetAllProducts } from '@/libs/api';

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      apiGetAllProducts()
        .then((response) => {
          this.products = response.data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<template>
    <div class="container mt-md-5 mt-3 mb-7">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            <div v-for="product in products" :key="product.id">
                <div class="card border-0 mb-4 position-relative position-relative">
                    <img :src="product.imageUrl" class="card-img-top rounded-0" alt="..." />
                    <a href="#" class="text-dark">
                        <i class="far fa-heart position-absolute"
                            style="right: 16px; top: 16px"></i>
                    </a>
                    <div class="card-body p-0">
                        <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                        <p class="card-text text-muted mb-0">Lorem ipsum dolor sit amet</p>
                        <p class="text-muted mt-3">NT$ 1,200</p>
                    </div>
                </div>
            </div>
        </div>
        <nav class="d-flex justify-content-center">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
