<template>
  <section
    class="
      gigs
      main-container
      main-container--wr
      main-container--ovh
      main-container--block
      main-container--rel
      mtb-40
    "
  >
    <div v-for="content in contents" :key="content.id" class="gigs__5x">
      <div class="gigs__thumb">
        <img :src="`/public/dummy/${content.thumb}`" :alt="content.title" />
        <div class="gigs__thumb--badge">
          <p class="gigs__thumb--badge__title">{{ badge }}</p>
        </div>
      </div>
      <h4>{{ content.title | trim }}</h4>
      <p>{{ content.date }}</p>
      <p>{{ content.venue }}</p>
    </div>
  </section>
</template>

<script>
export default {
  filters: {
    trim: (string) => `${string.slice(0, 18)}...`,
  },
  props: {
    theme: {
      default: 'light',
    },
    badge: {
      default: "what's on",
    },
  },
  data: () => ({
    contents: [
      {
        id: 1,
        title: 'Amagansett Go',
        date: '10.02.18',
        venue: 'Empire lounge London',
        thumb: 'pexels-photo-196652.jpeg',
      },
      {
        id: 2,
        title: 'Aria Safari',
        date: '10.03.18',
        venue: 'The Codename',
        thumb: 'pexels-photo-274192.jpeg',
      },
      {
        id: 3,
        title: 'Bébé Boom',
        date: '18.03.18',
        venue: 'The Jungle',
        thumb: 'pexels-photo-341858.jpeg',
      },
      {
        id: 4,
        title: 'Belfast United in Song',
        date: '18.04.18',
        venue: 'Embargo',
        thumb: 'pexels-photo-342521.jpeg',
      },
      {
        id: 5,
        title: 'Blueberry Jam',
        date: '16.05.18',
        venue: 'The Codename',
        thumb: 'pexels-photo-529930.jpeg',
      },
      {
        id: 6,
        title: 'Boston Fantastic',
        date: '10.06.18',
        venue: 'The Codename',
        thumb: 'pexels-photo-545058.jpeg',
      },
      {
        id: 7,
        title: 'Deep Blue See',
        date: '10.06.18',
        venue: 'Club Obelisk',
        thumb: 'pexels-photo-587741.jpeg',
      },
      {
        id: 8,
        title: 'Elderdrama',
        date: '14.06.18',
        venue: 'The Codename',
        thumb: 'pexels-photo-613037.jpeg',
      },
      {
        id: 9,
        title: 'Existential Boy’s Night Out',
        date: '10.03.18',
        venue: 'Arcane',
        thumb: 'pexels-photo-889545.jpeg',
      },
      {
        id: 10,
        title: 'Exoblue',
        date: '10.03.18',
        venue: 'The Codename',
        thumb: 'pexels-photo-948199.jpeg',
      },
    ],
  }),
}
</script>

<style lang="postcss" scoped>
.gigs {
  &__5x {
    float: left;
    mih: 1px;
    m: 0.9rem 0.8%;
    w: 18.72%;

    @media only map(breakpoints, phone) {
      float: none;
      width: 100%;
      margin: 1rem 0;
    }
    @media only map(breakpoints, phoneL) {
      width: 49.2%;
      margin: 1rem *;

      &:nth-child(5n + 1) {
        ml: 0.8%;
      }

      &:nth-child(5n) {
        mr: 0.8%;
      }

      &:nth-child(odd) {
        margin-left: 0;
      }

      &:nth-child(even) {
        margin-right: 0;
      }
    }
    @media only map(breakpoints, tablet) {
      width: 49.2%;
      margin: 1rem *;

      &:nth-child(5n + 1) {
        ml: 0.8%;
      }

      &:nth-child(5n) {
        mr: 0.8%;
      }

      &:nth-child(odd) {
        margin-left: 0;
      }

      &:nth-child(even) {
        margin-right: 0;
      }
    }

    &:nth-child(5n + 1) {
      ml: 0;
    }

    &:nth-child(5n) {
      mr: 0;
    }
  }

  h4 {
    m: 1rem 0;
    @map fonts helV;
    text-transform: uppercase;
  }

  p {
    m: 0.5rem 0;
    @map fonts helV;
    text-transform: uppercase;
    fz: 1.4rem;
    c: color(map(colors, bgGrey) blackness(65%));
  }

  &__thumb {
    position: relative;

    img {
      display: block;
      w: 100%;
      h: auto;
    }

    &--badge {
      position: absolute 10% * *;
      color: #fff map(colors, primary);
      text-transform: uppercase;
      p: 0.4rem 0.8rem;

      &__title {
        m: 0 !important;
        @map fonts helV;
        c: #fff !important;
      }
    }
  }
}
.mtb-40 {
  m: 4rem *;
}
</style>
