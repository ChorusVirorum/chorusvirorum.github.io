<template>
  <div class="CvMenu" :class="modifiers">
    <CvRibbon />
    <ul class="CvMenu__list">
      <li
        class="CvMenu__listItem" 
        v-for="(route, index) in routes" 
        :key="index"
      >
        <CvMenuItem :route="route" />
      </li>
    </ul>
    <div class="CvMenu__footer">
      <a href="https://www.facebook.com/ChorusVirorum">
        <CvFacebookIcon/>
      </a>
    </div>
  </div>
</template>

<script>
import CvFacebookIcon from './icons/FacebookIcon';
import CvRibbon from './Ribbon';
import CvMenuItem from './MenuItem';

export default {
  name: 'CvMenu',
  components: {
    CvFacebookIcon,
    CvRibbon,
    CvMenuItem
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
  overflow-y: auto;
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
</style>
