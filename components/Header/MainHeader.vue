<template>
  <header class="header">
    <div class="container">
      <nav class="navigation">
        <logo />
        <main-navigation
          v-bind="{menu, isActive}"
          @closeMenu="closeMenu"
        />
        <cart />
        <burger-menu
          :is-active="isActive"
          @isOpenMenu="isOpenMenu"
        />
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/ui/Logo.vue';
import Cart from '~/components/ui/Cart.vue';
import BurgerMenu from '~/components/ui/BurgerMenu.vue';
import MainNavigation from '~/components/header/MainNavigation.vue';

export default {
  name: 'MainHeader',
  components: {
    Logo, Cart, BurgerMenu, MainNavigation,
  },
  computed: {
    menu() {
      return this.$store.getters['menu/menu'];
    },
    isActive() {
      return this.$store.getters['menu/isActive'];
    },
  },
  methods: {
    isOpenMenu() {
      this.$store.dispatch('menu/setIsActive');
    },
    closeMenu() {
      this.$store.dispatch('menu/closeMenu');
    },
  },
};
</script>

<style lang="scss">
.header {
  padding: 16px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.6);
}

.navigation {
  display: flex;
  align-items: center;
}
</style>
