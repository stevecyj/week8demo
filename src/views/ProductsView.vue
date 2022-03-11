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
        <!-- rwd 由外層控制 -->
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            <div v-for="product in products" :key="product.id">
                <div class="card border-0 mb-4 position-relative position-relative">
                    <!-- 圖片等高，改背景圖 -->
                    <!-- <img :src="product.imageUrl" class="card-img-top rounded-0" alt="..." /> -->
                    <div style="height: 250px; background-size: cover; background-position: center center;"
                        :style="{backgroundImage: `url(${product.imageUrl})`}"></div>
                    <a href="#" class="text-dark">
                        <i class="far fa-heart position-absolute"
                            style="right: 16px; top: 16px"></i>
                    </a>
                    <div class="card-body p-0">
                        <h4 class="mb-0 mt-3"><a href="#">{{ product.title }}</a></h4>
                        <p class="card-text text-muted mb-0">{{ product.description }}</p>
                        <p class="text-muted mt-3">NT$ {{ product.price }}</p>
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
