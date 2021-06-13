<template>
  <button
    class="burger-menu"
    :class="{active: isActive}"
    @click="isOpenMenu"
  >
    <span class="burger-menu__icon" />
  </button>
</template>

<script>
export default {
  name: 'BurgerMenu',
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['isOpenMenu'],
  methods: {
    isOpenMenu() {
      this.$emit('isOpenMenu');
    },
  },
};
</script>

<style lang="scss">
.background {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: $light-pink;
}

.burger-menu {
  position: relative;
  display: flex;
  align-items: center;
  width: 30px;
  height: 28px;
  padding: 0;
  display: flex;
  background: 0 0;
  z-index: 6;

  @include tablets {
    display: none;
  }

  &__icon {
    width: 30px;
    height: 2px;
    background-color: $dark-grey;

    &::before,
    &::after {
      position: absolute;
      content: '';
      left: 0;
      width: 30px;
      height: 2px;
      background-color: $dark-grey;
      transform-origin: 50% 50%;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      top: 6px;
    }

    &::after {
      bottom: 6px;
    }
  }

    &.active {
    .burger-menu__icon {
      background: 0 0;
    }

    .burger-menu__icon::before {
      top: 10px;
      transition: all .3s, transform .3s .3s;
      transform: rotate3d(0, 0, 1, 45deg);
    }

    .burger-menu__icon::after {
      top: 10px;
      transition: all .3s, transform .3s .3s;
      transform: rotate3d(0, 0, 1, -45deg);
    }
  }
}
</style>
