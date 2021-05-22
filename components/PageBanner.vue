<template>
  <section
    class="
      pageBanner
      main-container main-container--full main-container--wr main-container--rel
    "
  >
    <img src="~assets/img/banner-2.png" alt="Datspot intro" />
    <div class="pageBanner__overlay">
      <p>{{ title }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="postcss" scoped>
.pageBanner {
  img {
    w: 100%;
    h: auto;
    display: block;
  }

  @media only map(breakpoints, phone) {
    img {
      width: auto;
      height: 12rem;
    }
  }
  @media only map(breakpoints, phoneL) {
    img {
      width: auto;
      height: 12rem;
    }
  }
  @media only map(breakpoints, tablet) {
    img {
      width: auto;
      height: 12rem;
    }
  }
  @media only map(breakpoints, tabletLd) {
    img {
      height: 14rem;
    }
  }
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    img {
      height: 14rem;
    }
  }

  &__overlay {
    position: absolute 25% * *;
    w: 100%;

    p {
      @map fonts alphaL;
      m: 0;
      text-align: center;
      c: #fff;
      lh: 6rem;

      @media only map(breakpoints, phone) {
        font-size: 3rem;
      }
    }
  }
}
</style>
