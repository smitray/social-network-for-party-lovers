<template>
  <div
    class="
      main-container
      main-container--full
      main-container--wr
      main-container--ovh
      main-container--rel
    "
  >
    <Header />
    <section
      class="
        index__treNDing
        main-container
        main-container--full
        main-container--wr
        main-container--ovh
        main-container--rel
      "
    >
      <p>whats trending now here......</p>
    </section>
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="postcss">
.index__treNDing {
  bg: map(colors, primary);
  p {
    text-align: center;
    c: #fff;
    @map fonts alphaS;
    letter-spacing: 1.6rem;
    m: 1rem 0;

    @media only map(breakpoints, phone) {
      font-size: 1.5rem;
      letter-spacing: 0;
    }
    @media only map(breakpoints, phoneL) {
      letter-spacing: 0;
    }
    @media only map(breakpoints, tablet) {
      letter-spacing: 0;
    }
  }
}
</style>
