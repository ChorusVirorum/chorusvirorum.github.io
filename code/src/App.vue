<template>
  <div class="CvApp" :class="modifiers">
    <header class="CvApp__header">
      <CvHeader/>
    </header>
    <div class="CvApp__content">
      <router-view />
    </div>
    <div class="CvApp__menuGroup">
      <div class="CvApp__menuButton">
        <CvMenuButton :onClick="menuButtonClick" :focus="menuOpen"/>
      </div>
      <div class="CvApp__overlay" @click="closeMenu"></div>
      <div class="CvApp__menu">
        <CvMenu />
      </div>
    </div>
    <footer>
      <CvFooter />
    </footer>
  </div>
</template>

<script>
import CvHeader from './components/Header.vue'
import CvFooter from './components/Footer.vue'
import CvMenuButton from './components/MenuButton.vue'
import CvMenu from './components/Menu.vue'

export default {
  name: 'CvApp',
  components: {
    CvHeader,
    CvMenuButton,
    CvMenu,
    CvFooter
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    menuButtonClick() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  },
  computed: {
    modifiers() {
      return {
        'CvApp--menuOpen': this.menuOpen,
      };
    }
  },
  watch: {
    $route() {
      this.closeMenu();
    }
  }
}
</script>

<style lang="scss">
@import 'global.scss';

.CvApp {
  font-family: var(--font-cv);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.CvApp__header {
  position: sticky;
  top: 0;
  z-index: 1;
}

.CvApp__content {
  box-shadow: 0px 1px 2px #e5e5e5;
}

.CvApp__menuGroup {
  display: grid;
  position: fixed;
  right: 0;
  bottom: 0;
  max-height: calc(100vh - var(--header-height));
  align-items: end;
  z-index: 2;
  width: 100vw;
}

.CvApp__menuButton {
  padding: 1rem;
  z-index: 1;
  justify-self: end;
  position: fixed;
  right: 0;
  bottom: 0;
}

.CvApp__menu {
  pointer-events: none;
  transform: translateY(100%);
  transition: transform 250ms ease;
  z-index: 2;
  display: grid;
}

.CvApp__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .3);
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  transition: opacity 250ms ease;
}

.CvApp--menuOpen { 
  .CvApp__overlay {
    pointer-events: auto;
    opacity: 1;
  }

  .CvApp__menu {
    transform: translateY(0%);
    pointer-events: auto;
    box-shadow: 0px -1px 5px rgba(0,0,0,.5);
  }
}


</style>
