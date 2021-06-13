<template>
  <ul
    class="menu"
    :class="{menu_active: isActive}"
  >
    <li
      v-for="item of menu"
      :key="item.name"
      class="menu__item"
      @click="closeMenu"
    >
      <nuxt-link
        class="menu__link"
        :to="item.link"
      >
        {{ item.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MainNavigation',
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    menu: {
      type: Array,
      required: true,
    },
  },
  emits: ['closeMenu'],
  methods: {
    closeMenu() {
      this.$emit('closeMenu');
    },
  },
};
</script>

<style lang="scss">
.menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 35px;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  transition: all 0.5s linear 0.3s;
  z-index: 5;

  @include phone {
    row-gap: 45px;
  }

  @include tablets {
    position: initial;
    height: initial;
    flex-direction: row;
    column-gap: 20px;
    row-gap: 0;
    width: initial;
    margin-right: 40px;
  }

  &_active {
    right: 0;
  }

  &__link {
    font-size: 32px;
    font-weight: 500;
    color: #000;
    letter-spacing: 1.5px;

    @include phone {
      font-size: 36px;
    }

    @include tablets {
      text-transform: uppercase;
      font-size: 18px;
    }

    &.nuxt-link-exact-active {
      position: relative;
      color: $dark-grey;

      &::before {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: $dark-grey;
      }
    }
  }
}
</style>
