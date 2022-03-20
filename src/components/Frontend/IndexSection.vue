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
      <ul class="row row-cols-2 p-4 d-flex justify-content-center align-items-center">
        <li
          class="col bg-primary text-center display-6 text-white py-3 border-end border-bottom border-1"
        >
          <span
            class="wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >服務
          </span>
        </li>
        <li
          class="col bg-primary text-center display-6 text-white py-3 border-start border-bottom border-1"
        >
          <span
            class="wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            品質
          </span>
        </li>
        <li
          class="col bg-primary text-center display-6 text-white py-3 border-end border-top border-1"
        >
          <span
            class="wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            衛生
          </span>
        </li>
        <div
          class="col bg-primary text-center display-6 text-white py-3 border-start border-top border-1"
        >
          <span
            class="wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            超值
          </span>
        </div>
      </ul>
    </div>
  </section>
</template>

<style lang='scss' scoped>
</style>
