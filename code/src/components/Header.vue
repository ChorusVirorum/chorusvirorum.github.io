<template>
  <div class="CvHeader" :class="modifiers" @click="toggleSmall">
    <div class="CvHeader__inner">
      <CvIcon />
    </div>
    <CvRibbon />
  </div>
</template>

<script>
import CvIcon from './icons/CvIcon.vue'
import CvRibbon from './Ribbon.vue'

export default {
  name: 'CvHeader',
  components: {
    CvIcon,
    CvRibbon
  },
  data() {
    return {
      isSmall: false,
      lastScrollTop: window.pageYOffset || document.documentElement.scrollTop
    };
  },
  methods: {
    toggleSmall() {
      if (this.lastScrollTop > 100) {
        this.isSmall = !this.isSmall;
      }
    }
  },
  computed: {
    modifiers() {
      return {
        'CvHeader--isSmall': this.isSmall
      };
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (newScrollTop > this.lastScrollTop && newScrollTop > 100) {
        this.isSmall = true;
      } else if (newScrollTop < this.lastScrollTop) {
        this.isSmall = false;
      }
      this.lastScrollTop = newScrollTop <= 0 ? 0 : newScrollTop;
    });
  }
}
</script>

<style lang="scss">
.CvHeader {
  transition: transform 250ms ease;

  &--isSmall {
    @media (max-width: 768px) {
      transform: translateY(calc(0px - var(--header-height)));
    }
  }

  &__inner {
    background-color: black;
    color: var(--color-cv);
    height: var(--header-height);
    font-size: calc(var(--header-height) - 1rem);

    display: grid;
    align-items: center;
    justify-items: center;
  }
}
</style>
