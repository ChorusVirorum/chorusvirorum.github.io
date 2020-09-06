<template>
  <div class="CvMenuItem" :class="modifiers">
    <router-link
      v-if="!routeHasChildren"
      :to="{ name: route.name }"
    >
      {{route.meta.title}}
    </router-link>
    <template v-else>
      <button 
        class="CvMenuItem__button"
        @click="toggleSubMenu"
      >{{route.meta.title}}</button>
      <template v-if="isOpen">
        <div class="CvMenuItem__sublistContainer">
          <ul class="CvMenuItem__sublist">
            <li 
              class="CvMenuItem__sublistItem"
              v-for="(r, index) in children" 
              :key="index"
            >
              <CvMenuItem :route="r" />
            </li>
          </ul>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CvMenuItem',
  props: {
    route: Object
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleSubMenu() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    modifiers() {
      return {
        'CvMenuItem--isOpen': this.isOpen,
        'CvMenuItem--link': !this.routeHasChildren
      };
    },
    routeHasChildren() {
      return this.children && this.children.length > 0;
    },
    children() {
      return this.route.children;
    }
  }
}
</script>

<style lang="scss">

.CvMenuItem {
  display: grid;

  &--link {
    padding: 1rem 1rem;
    text-align: center;
    // background-color: var(--color-white);
    border-bottom: 1px solid var(--color-cv);

    a {
      font-size: 1.25rem;
      text-decoration: none;
      color: black;
      font-style: italic;
    }
  }
}

.CvMenuItem__button {
  border: none;
  outline: none;
  text-align: center;
  font-size: 1.25rem;
  text-decoration: none;
  color: black;
  background-color: transparent;
  font-family: var(--font-cv);
  padding: 1rem;
  border-bottom: 1px solid var(--color-cv);
}

.CvMenuItem__sublist {
  list-style: none;
  padding: 0;
  position: relative;
  background-color: #f2f2f2;
}

.CvMenuItem__sublistContainer {
  box-shadow: 0 0 10px #000000;
}
</style>
