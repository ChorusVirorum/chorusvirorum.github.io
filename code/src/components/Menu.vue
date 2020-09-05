<template>
  <div class="CvMenu" :class="modifiers">
    <CvRibbon />
    <ul class="CvMenu__list">
      <li
        class="CvMenu__listItem" 
        v-for="(route, index) in routes" 
        :key="index"
      >
        <router-link
          :to="{ name: route.name }"
        >
          {{route.meta.title}}
        </router-link>
      </li>
    </ul>
    <div class="CvMenu__footer">
      <a href="https://www.facebook.com/ChorusVirorum">
        <CvFacebookIcon/>
      </a>
    </div>
    <CvRibbon />
  </div>
</template>

<script>
import CvFacebookIcon from './icons/FacebookIcon';
import CvRibbon from './Ribbon';

export default {
  name: 'CvMenu',
  components: {
    CvFacebookIcon,
    CvRibbon
  },
  computed: {
    modifiers() {
      return {
      };
    },
    routes() {
      return this.$router.options.routes;
    }
  }
}
</script>

<style lang="scss">
.CvMenu {
  background-color: var(--color-white);
  border-radius: .25rem;
  display: grid;
}

.CvMenu__footer {
  font-size: 2rem;
  line-height: 0;
  text-align: center;
  padding: 1rem;
}

.CvMenu__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.CvMenu__listItem {
  padding: 1rem 1rem;
  text-align: center;
  min-width: 12rem;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-cv);

  a {
    font-size: 1.25rem;
    text-decoration: none;
    color: black;
    font-style: italic;
  }
}
</style>
