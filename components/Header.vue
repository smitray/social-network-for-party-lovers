<template>
  <header
    class="
      main-container main-container--full main-container--wr main-container--rel
      header
    "
  >
    <div
      class="
        main-container
        main-container--wr
        main-container--block
        main-container--rel
      "
    >
      <div class="header__signUP">
        <a href="https://app.datspot.com">
          login /
          <span>signup now</span>
        </a>
      </div>
      <div class="header__naviGAtion__responsive">
        <div class="header__naviGAtion--logo">
          <router-link :to="{ name: 'index' }">
            <img src="~assets/img/logo-top-2.png" alt="Datspot logo" />
          </router-link>
        </div>
        <a
          href="#"
          class="header__naviGAtion__responsive--toggle"
          @click.prevent="showDropDown = !showDropDown"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div v-if="showDropDown" class="header__naviGAtion">
        <nav class="header__naviGAtion--left">
          <ul>
            <li><router-link :to="{ name: 'index' }">Home</router-link></li>
            <li><router-link :to="{ name: 'theapp' }">The App</router-link></li>
            <li>
              <router-link :to="{ name: 'whatson' }">what's on</router-link>
            </li>
            <li><router-link to="/cat/bars">bars</router-link></li>
            <li><router-link to="/cat/party">party</router-link></li>
          </ul>
        </nav>
        <div class="header__naviGAtion--logo">
          <router-link :to="{ name: 'index' }">
            <img
              src="~assets/img/logo-top-2.png"
              alt="Datspot logo"
              class="hack"
            />
          </router-link>
        </div>
        <nav class="header__naviGAtion--right">
          <ul>
            <li><router-link to="/cat/food">food</router-link></li>
            <li><router-link to="/cat/shows">shows</router-link></li>
            <li><router-link to="/cat/activities">activities</router-link></li>
            <li>
              <router-link :to="{ name: 'contact' }">contact</router-link>
            </li>
            <li class="spcl"><router-link to="home">promoter?</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data: () => ({
    showDropDown: true,
  }),
  mounted() {
    if (process.browser) {
      this.showDropDown = !(document.body.clientWidth < 1281)
    }
  },
}
</script>

<style lang="postcss" scoped>
.header {
  bg: map(colors, black);

  &__signUP {
    position: absolute;
    right: 0;
    top: 0;
    background: #ee4185;
    background: -moz-linear-gradient(
      top,
      #ee4185 0%,
      #f1619a 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #ee4185 0%,
      #f1619a 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #ee4185 0%,
      #f1619a 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ee4185', endColorstr='#f1619a',GradientType=0 );
    /* IE6-9 */
    padding: 0.8rem 1.8rem;
    -webkit-border-bottom-right-radius: 20px;
    -webkit-border-bottom-left-radius: 20px;
    -moz-border-radius-bottomright: 20px;
    -moz-border-radius-bottomleft: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    a {
      text-decoration: none;
      @map fonts helNeS;
      text-transform: uppercase;
      c: #fff;
      span {
        fw: bold;
        c: #000;
      }
      &:after {
        font-family: 'fontello';
        font-style: normal;
        font-weight: normal;
        speak: none;
        display: inline-block;
        text-decoration: inherit;
        width: 1em;
        margin-right: 0.2em;
        text-align: center;
        font-variant: normal;
        text-transform: none;
        line-height: 1em;
        margin-left: 0.2em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        content: '\e800';
        c: #000;
        fz: 1.5rem;
      }
    }
  }
  &__naviGAtion {
    mt: 2rem;
    nav {
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          float: left;
          &.spcl {
            a {
              c: map(colors, primary);
            }
          }
          a {
            text-decoration: none;
            display: block;
            @map fonts alphaXS;
            p: 4.5rem 0;
            c: #fff;

            @media only map(breakpoints, phone) {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
    &--left,
    &--right,
    &--logo {
      float: left;
    }
    &--left,
    &--right {
      width: 42%;
    }
    &--left {
      ul {
        li {
          m: 0 1rem;
        }
      }
    }
    &--right {
      ul {
        li {
          m: 0 0.65rem;
        }
      }
    }
    &--logo {
      width: 16%;
      margin-top: 3.6rem;
      a {
        text-decoration: none;
        m: 4rem 0;
        img {
          width: 100%;
          display: block;
          height: auto;
        }
      }
    }
    &__responsive {
      w: 100%;
      overflow: hidden;
      margin: 6rem 0 4rem;
      display: none;
      position: relative;
      .header__naviGAtion--logo {
        float: left;
        margin-top: 0;
        w: 40%;
      }
      &--toggle {
        display: inline-block;
        text-decoration: none;
        float: right;
        h: 22px;
        transform: translateY(-50%);
        position: absolute 50% 0 * *;
        span {
          display: block;

          width: 33px;
          height: 3px;
          margin-bottom: 4px;
          position: relative;
          background: #cdcdcd;
          border-radius: 3px;
          z-index: 1;
        }
      }
    }
    @media only screen and (width <= 1280px) {
      position: absolute 100% * *;
      background: map(colors, black);
      width: 100%;
      z-index: 99;
      margin-top: -3px;
      border-top: 2px solid map(colors, primary);
      padding: 2rem 0;
      .header__naviGAtion--logo {
        display: none;
      }
      &--left,
      &--right {
        width: 100%;
        float: none;
      }
      nav {
        ul {
          li {
            float: none;
            a {
              padding: 1rem *;
            }
          }
        }
      }

      &__responsive {
        display: block;
      }
    }
  }
}
.hack {
  ml: -13%;
}
</style>
