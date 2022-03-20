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
      <div class="row row-cols-2 d-flex justify-content-center align-items-center">
        <div
          class="col bg-primary text-center display-6 text-white py-5 border-end border-bottom border-1"
        >
          服務</div>
        <div
          class="col bg-primary text-center display-6 text-white py-5 border-start border-bottom border-1"
        >品質
        </div>
        <div
          class="col bg-primary text-center display-6 text-white py-5 border-end border-top border-1"
        >衛生
        </div>
        <div
          class="col bg-primary text-center display-6 text-white py-5 border-start border-top border-1"
        >超值
        </div>
      </div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
</style>
