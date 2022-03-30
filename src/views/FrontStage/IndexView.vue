<script>
import IndexSection from '@/components/Frontend/IndexSection.vue';

export default {
  name: 'FrontView',
  components: {
    IndexSection,
  },
  data() {
    return {
      header: {
        imageUrl:
          'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <!-- <div class="container-fluid vh-100">
  </div> -->
  <header
    class="overflow-hidden header position-relative bg-p-center bg-s-cover p-0 border border-white"
    :style="{backgroundImage: `url(${header.imageUrl})`}"
  >
    <div class="row g-0 h-100">
      <div class="hero_text_wrapper d-flex justify-content-center col">
        <!-- <h2 class="align-self-center fw-bold display-7 text-white vertical-lr ms-0">
          burges堡</h2> -->
        <div
          class="position-absolute d-flex flex-column justify-content-center align-items-center"
          style="top: 20%;"
        >
          <h2 class="font-display text-white mx-0 mb-2">
            我要來點漢堡寶
          </h2>
          <router-link
            class="btn-shop"
            to="/"
          ><span>我要<br />來點</span></router-link>

        </div>
        <!-- <h2
          class="position-absolute align-self-center fw-bold display-7 text-white vertical-rl me-0"
          style="right: 1px;"
        >
          Delicious
        </h2> -->
      </div>
    </div>
  </header>
  <index-section></index-section>

  <div class="container index-introduce-bg">
    <div class="row">
      <div class="col-md-6 p-2">
        <h2 class="display-4 fw-bold pt-4 px-4 text-primary">我們沒有發明漢堡，我們重新定義漢堡</h2>
        <p class="lh-base fs-5 px-4">
          頂級饗宴，品味再升級，嚴選高檔食材帶來極致搭配，講究多一點，美味更絕對！鮮嫩多汁的肉餅配上味道濃香的cheese，再加上新鮮的生菜、蕃茄，一口咬下去，豐富的口感，全心的滿足！
        </p>
        <a
          href="#"
          class="ms-4 mb-4 btn-burger btn-call-to-shop"
        >點我</a>

        <div
          class="bg-s-cover bg-p-center"
          style="background-image: url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'); height: 250px;"
        ></div>
      </div>
      <div class="col-md-6 p-2">
        <h2 class="display-4 fw-bold pt-4 px-4 text-primary">打造更好的漢堡寶</h2>
        <p class="lh-base fs-5 px-4">
          自2099年成立第一家餐以來，持續以無微不至的精神，用心服務每一位顧客，為您打造難以忘懷的美味時光。我們對宇宙的美食責任從無間斷。投入在人才培育、食品安全、在地關懷與環境保護等領域。
        </p>
        <a
          href="#"
          class="ms-4 mb-4 btn-burger btn-call-to-shop"
        >點我</a>

        <div
          class="bg-s-cover bg-p-center"
          style="background-image: url('https://images.unsplash.com/photo-1633636493639-b914de9cb56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); height: 250px;"
        ></div>
      </div>

    </div>
  </div>

  <div class="container parallax">
    <ul class="px-0">
      <li><span class="logo d-block d-inline mx-auto"></span></li>
      <li class="text-center text-light">即刻救援，暖心外送，用美味振奮你</li>
      <li class="text-center text-light">現金付款、線上支付任你選，輕鬆享受美味</li>
      <li class="text-center text-light">和朋友相聚的時候不知道要吃什麼</li>
      <li class="text-center text-light">我們為您提供迅速方便的訂餐服務</li>
    </ul>
  </div>
  <!-- marquee -->
  <div class="container-fluid py-2">
    <div class="row wrap">
      <div class="col text-primary content marquee-text"> BURGERBABY · BURGERBABY · BURGERBABY ·
        BURGERBABY · BURGERBABY
      </div>
    </div>
  </div>

  <!-- section resume -->
  <div class="container py-2">
    <div class="row gy-3 justify-content-center flex-md-row-reverse">
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1632577237955-f73cb2a054ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80"
          class="w-100 object-fit"
          height="600"
          alt=""
        >
      </div>
      <div class="col-md-6 d-flex align-items-center">
        <div>
          <h3 class="fw-bold text-center mb-4">最簡單的東西，我們也要不簡單</h3>
          <ul class="p-0">
            <li
              class="wow fadeInUp d-flex mb-3"
              data-wow-duration="1s"
            >
              <i class="bi bi-house-fill fs-2 text-primary me-3"></i>
              <div>
                <p class="fs-5 fw-bold text-primary lh-base">自已的麵包自已做</p>
                <p class="lh-base">
                  麥香乳香交織揉出入魂麵團，中央廚房現場發酵烘焙烤製，久窖彈牙自培老麵，咱ㄟ小麥，本地小麥責任使用。
                </p>
              </div>
            </li>
            <li
              class="wow fadeInUp d-flex mb-3"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <i class="
                  bi bi-key-fill
                  text-center
                  d-block
                  fs-2
                  text-primary
                  me-3
                "></i>
              <div>
                <p class="fs-5 fw-bold text-primary lh-base">最純粹的靈魂，牛肉</p>
                <p class="lh-base">
                  使用美國 CHOICE
                  等級牛肉，並於中央廚房現場絞製的老饕系列，食材若因產區天候、牲畜狀況、國際貿易或供應商供貨等因素，導致短缺暫時無法使用時，將誠實告知，並提供替代品。
                </p>
              </div>
            </li>
            <li
              class="wow fadeInUp d-flex mb-3"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
            >
              <i class="bi bi-balloon-heart-fill d-block fs-2 text-primary me-3"></i>
              <div>
                <p class="fs-5 fw-bold text-primary lh-base">真誠的食物，帶來正港的幸福</p>
                <p class="lh-base">
                  從不使用還原果汁，全面使用非籠飼雞蛋，本土高山茶葉使用，提供真誠的美味。
                </p>
              </div>
            </li>
            <li
              class="wow fadeInUp d-flex mb-3"
              data-wow-duration="1s"
              data-wow-delay="0.9s"
            >
              <i class="bi bi-cup-fill text-center d-block fs-2 text-primary me-3"></i>
              <div>
                <p class="fs-5 fw-bold text-primary lh-base">堅持新鮮，咖啡是水果</p>
                <p class="lh-base">
                  專業杯測，新鮮烘豆，挑豆選豆，多項國際認證，為了一杯好咖啡，我們真的自已來！
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
  <!-- <div class="container-fluid">
    <div class="row wrap">
      <div class="col content marquee-text fw-bold"> BURGERBABY · BURGERBABY · BURGERBABY ·
        BURGERBABY · BURGERBABY · BURGERBABY · BURGERBABY
      </div>
    </div>
  </div> -->

  <!-- <div class="container">
    <div class="row flex-md-row-reverse flex-column">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1526038335545-4b96864eaee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80
          alt="
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3">
        <h2 class="fw-bold">Lorem ipsum dolor sit</h2>
        <h5 class="font-weight-normal text-muted mt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor
        </h5>
        <div class="input-group mb-0 mt-4">
          <label for="heroHeader"> </label>
          <input
            id="heroHeader"
            type="text"
            class="form-control rounded-0"
            placeholder=""
          />
          <div class="input-group-append">
            <button
              id="search"
              class="btn btn-dark rounded-0"
              type="button"
            >Lorem
              ipsum</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-6 mt-md-4">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img
            src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body p-0">
            <h4 class="mb-0 mt-4">Lorem ipsum</h4>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text text-muted mb-0 w-75">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod.
              </p>
              <button class="btn btn-outline-dark rounded-0 text-nowrap">Lorem
                ipsum</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-md-4">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img
            src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body p-0">
            <h4 class="mb-0 mt-4">Lorem ipsum</h4>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text text-muted mb-0 w-75">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod.
              </p>
              <button class="btn btn-outline-dark rounded-0 text-nowrap">Lorem
                ipsum</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-md-4">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img
            src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body p-0">
            <h4 class="mb-0 mt-4">Lorem ipsum</h4>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text text-muted mb-0 w-75">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod.
              </p>
              <button class="btn btn-outline-dark rounded-0 text-nowrap">Lorem
                ipsum</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-md-4">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img
            src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body p-0">
            <h4 class="mb-0 mt-4">Lorem ipsum</h4>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text text-muted mb-0 w-75">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod.
              </p>
              <button class="btn btn-outline-dark rounded-0 text-nowrap">Lorem
                ipsum</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-light mt-7">
    <div class="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <div class="row">
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor
          invidunt ut labore et dolore magna.
        </p>
      </div>
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor
          invidunt ut labore et dolore magna.
        </p>
      </div>
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor
          invidunt ut labore et dolore magna.
        </p>
      </div>
    </div>
  </div>
  <div class="bg-light py-7">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <h3>Lorem ipsum</h3>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod.
          </p>
          <button class="btn btn-dark mt-4 rounded-0">Lorem ipsum</button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style lang='scss' scoped>
</style>
