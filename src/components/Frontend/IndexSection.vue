<script>
export default {
  name: 'IndexSection',
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <section class="overflow-hidden index-section bg-primary">
    <div class="container">
      <ul class="row row-cols-2 row-cols-md-4 p-4 d-flex justify-content-center align-items-center">
        <li
          class="col bg-primary text-center display-6 text-white py-3 border-end border-bottom border-bottom-md-0 border-1 slogan-item-1"
        >
          <div
            class=" wow fadeInDown"
            data-wow-duration="2s"
          >服務
          </div>
        </li>
        <li
          class="col bg-primary text-center display-6 text-white py-3 border-start border-bottom border-bottom-md-0 border-end-md border-1 slogan-item-2"
        >
          <div
            class="wow fadeInDown"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            品質
          </div>
        </li>
        <li
          class="col bg-primary text-center display-6 text-white py-3 border-end border-top border-top-md-0 border-start-md border-1 slogan-item-3"
        >
          <div
            class="wow fadeInDown"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            衛生
          </div>
        </li>
        <li
          class="col bg-primary text-center display-6 text-white py-3 border-start border-top border-top-md-0 border-1 slogan-item-4"
        >
          <div
            class="wow fadeInDown"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            超值
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang='scss' scoped>
</style>
