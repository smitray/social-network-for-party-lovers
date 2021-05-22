<template>
  <footer
    class="
      footer
      main-container
      main-container--full
      main-container--wr
      main-container--ovh
      main-container--rel
    "
  >
    <div
      class="
        main-container
        main-container--wr
        main-container--ovh
        main-container--block
        main-container--rel
      "
    >
      <div class="footer__loGO">
        <router-link :to="{ name: 'index' }">
          <img src="~assets/img/logo-top-2.png" alt="Datspot logo" />
        </router-link>
      </div>
      <div class="footer__naviGAtion">
        <nav class="footer__naviGAtion--listItems">
          <ul>
            <li><router-link :to="{ name: 'index' }">Home</router-link></li>
            <li><router-link :to="{ name: 'theapp' }">The App</router-link></li>
            <li>
              <router-link :to="{ name: 'whatson' }">what's on</router-link>
            </li>
            <li><router-link to="/cat/cat/bars">bars</router-link></li>
            <li><router-link to="/cat/party">party</router-link></li>
          </ul>
        </nav>
        <nav class="footer__naviGAtion--listItems">
          <ul>
            <li><router-link to="/cat/food">food</router-link></li>
            <li><router-link to="/cat/shows">shows</router-link></li>
            <li><router-link to="/cat/activities">activities</router-link></li>
            <li>
              <router-link :to="{ name: 'contact' }">contact</router-link>
            </li>
            <li><router-link to="home">promoter</router-link></li>
          </ul>
        </nav>
        <nav class="footer__naviGAtion--listItems">
          <ul>
            <li><router-link to="home">about</router-link></li>
            <li><router-link to="home">news</router-link></li>
            <li><router-link to="home">profile</router-link></li>
            <li><router-link to="home">live chat</router-link></li>
            <li><router-link to="home">join network</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="footer__subCRibe">
        <p>signup to receive new <span>deals</span> & <span>offers</span></p>
        <form action="">
          <input type="email" placeholder="EMAIL HERE" /><input
            type="submit"
            value="SUBCRIBE"
          />
        </form>
        <p class="footer__subCRibe--follow">
          follow us:
          <a href="#" class="icon-facebook-squared"></a>
          <a href="#" class="icon-twitter"></a>
          <a href="#" class="icon-instagram"></a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {}
</script>

<style lang="postcss" scoped>
.footer {
  bg: map(colors, lightBlack);
  p: 5.5rem 0;

  &__loGO,
  &__naviGAtion,
  &__subCRibe {
    float: left;
    m: 0 2%;

    @media only map(breakpoints, phone) {
      float: none;
      width: 100%;
      margin: 0;
    }
  }

  &__loGO {
    w: 15%;
    ml: 0;
    p: 1.2rem 0;

    @media only map(breakpoints, phoneL) {
      width: 25%;
    }
    @media only map(breakpoints, tablet) {
      width: 25%;
    }

    a {
      text-decoration: none;
      display: block;

      @media only map(breakpoints, phoneL) {
        margin-top: 4rem;
      }
      @media only map(breakpoints, tablet) {
        margin-top: 4rem;
      }

      img {
        w: 100%;
        h: auto;
      }
    }
  }

  &__naviGAtion {
    w: 45%;
    border-top: 1px solid map(colors, primary);
    mt: 1.6rem;

    @media only map(breakpoints, phoneL) {
      width: 71%;
      margin-right: 0;
    }
    @media only map(breakpoints, tablet) {
      width: 71%;
      margin-right: 0;
    }

    &--listItems {
      w: 32.26%;
      m: 0 0.8%;
      float: left;
      p: 1.2rem;

      @media only map(breakpoints, phone) {
        width: 100%;
        margin: 1rem 0;
        float: none;
        padding: * 0;
      }

      &:first-child {
        ml: 0;
      }

      &:last-child {
        mr: 0;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          m: 0.6rem 0;

          @media only map(breakpoints, phone) {
            margin: 0.8rem 0;
          }
          @media only map(breakpoints, phoneL) {
            margin: 1rem 0;
          }
          @media only map(breakpoints, tablet) {
            margin: 1rem 0;
          }

          a {
            text-decoration: none;
            text-transform: uppercase;
            c: #fff;
            @map fonts helV;
            display: block;

            @media only map(breakpoints, phone) {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }

  &__subCRibe {
    w: 30%;
    ml: 4%;
    mr: 0;

    @media only map(breakpoints, phoneL) {
      width: 100%;
      margin: * 0;
    }
    @media only map(breakpoints, tablet) {
      width: 100%;
      margin: * 0;
    }

    p {
      @map fonts helV;
      fw: bold;
      c: #fff;
      text-transform: uppercase;
      text-align: right;

      @media only map(breakpoints, phone) {
        text-align: left;
      }
      @media only map(breakpoints, phoneL) {
        text-align: left;
      }
      @media only map(breakpoints, tablet) {
        text-align: left;
      }

      span {
        c: map(colors, primary);
      }
    }

    &--follow {
      a {
        text-decoration: none;
        display: inline-block;
        c: map(colors, primary);
        fz: 2rem;
      }
    }

    form {
      display: block;

      input[type='email'],
      input[type='submit'] {
        display: inline-block;
        @map fonts helV;
        fw: bold;
        p: 1rem;

        @media only map(breakpoints, phone) {
          font-size: 1.2rem;
        }
      }

      input[type='email'] {
        border: none;
        w: 65%;
      }

      input[type='submit'] {
        bg: map(colors, primary);
        border: none;
        w: 34%;
        ml: 1%;
        c: #fff;
      }
    }
  }
}

::-webkit-input-placeholder {
  /* Chrome */
  color: map(colors, black);
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: map(colors, black);
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: map(colors, black);
  opacity: 1;
}
:-moz-placeholder {
  /* Firefox 4 - 18 */
  color: map(colors, black);
  opacity: 1;
}
</style>
