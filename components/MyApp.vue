<template>
  <section class="main-container main-container--full main-container--wr">
    <div
      class="downloadApp main-container main-container--full main-container--wr"
    >
      <div class="downloadApp--container">
        <div class="downloadApp__iPhone">
          <img src="~assets/img/iphone.png" alt="Datspot app download" />
        </div>
        <div class="downloadApp__Details">
          <p class="downloadApp__Details--download">
            download<br /><span>the app now!</span>
          </p>
          <p class="downloadApp__Details--slogan">
            your number one going out app<br /><span
              >bringing people and places together</span
            >
          </p>
          <a href="#" class="downloadApp__Details--link">
            <img src="~assets/img/appstore.png" alt="Datspot appstore link" />
          </a>
          <a href="#" class="downloadApp__Details--link">
            <img src="~assets/img/playstore.png" alt="Datspot playstore link" />
          </a>
        </div>
      </div>
    </div>
    <div class="gap"></div>
  </section>
</template>

<style lang="postcss" scoped>
.downloadApp {
  mt: 8rem;
  bg: map(colors, bgGrey);

  &--container {
    w: 70%;
    m: 0 auto;
    position: relative;

    @media only map(breakpoints, phone) {
      width: 80%;
    }
    @media only map(breakpoints, phoneL) {
      width: 80%;
    }
    @media only map(breakpoints, tablet) {
      width: 80%;
    }
  }

  &__iPhone,
  &__Details {
    img {
      w: 100%;
      h: auto;
    }
  }

  &__iPhone {
    width: 40%;
    position: absolute;
    left: 0;
    mt: -5%;
    z-index: 10;

    @media only map(breakpoints, phone) {
      width: 100%;
      position: relative;
      margin: 2rem *;
    }
    @media only map(breakpoints, phoneL) {
      width: 40%;
      position: relative;
      margin: 10rem * *;
      float: left;
    }
    @media only map(breakpoints, phoneL) and (orientation: landscape) {
      margin: 6rem * *;
    }
    @media only map(breakpoints, tablet) {
      width: 40%;
      position: relative;
      margin: 8rem * *;
      float: left;
    }
    @media only map(breakpoints, tabletLd) {
      margin: 4rem *;
    }

    @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
      margin: 4rem *;
    }
  }

  &__Details {
    w: 50%;
    float: right;
    p: 1.2rem;
    mb: 5rem;

    @media only map(breakpoints, phone) {
      float: none;
      width: 100%;
      padding: 0;
    }

    @media only map(breakpoints, phoneL) {
      width: 60%;
      margin: 2rem *;
      float: left;
    }
    @media only map(breakpoints, tablet) {
      width: 60%;
      margin: 2rem *;
      float: left;
    }

    &--slogan {
      ff: 'HelveticaNeue';
      text-transform: uppercase;
      fz: 2rem;

      span {
        c: map(colors, primary);
      }
    }

    &--download {
      @map fonts alphaL;
      lh: 5rem;
      mb: 1rem;

      @media only map(breakpoints, phone) {
        font-size: 5rem;
      }
      @media only map(breakpoints, phoneL) {
        font-size: 5rem;
      }

      span {
        c: map(colors, primary);
      }
    }

    &--link {
      display: inline-block;
      w: 35%;

      &:last-child {
        ml: 2%;
      }
    }
  }
}
.gap {
  h: 8rem;
  bg: map(colors, black);
}
</style>
