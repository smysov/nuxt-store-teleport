<template>
  <div
    class="cart"
    :class="{cart_active: activeClassCart}"
    @click="openCart(true)"
  >
    <div
      class="cart__count"
      :class="{cart__count_full: productsInCart.length > 0}"
    >
      <div>{{ productsInCart.length }}</div>
    </div>
    <svg-icon
      name="cart"
      class="cart__icon"
    />
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    activeClassCart() {
      return this.$store.getters['cart/activeClassCart'];
    },
    productsInCart() {
      return this.$store.getters['cart/productsInCart'];
    },
  },
  methods: {
    openCart(boolean) {
      this.$store.dispatch('cart/setActiveClass', boolean);
      this.$store.dispatch('cart/isOpen', boolean);
      this.$store.dispatch('cart/isHidden', boolean);
    },
  },
};
</script>

<style lang="scss">
.cart {
  position: relative;
  cursor: pointer;

  &:hover {
    .cart__icon {
      fill: #92be92;
    }
  }

  &_active {
    .cart__icon {
      fill: #51b651;
    }
  }

  &__icon {
    width: 30px;
    height: 25px;
    fill: $light-pink;
    transition: .3s all ease-out;
  }

  &__count {
    font-size: 12px;
    font-weight: 500;
    position: absolute;
    padding: 2px 7px;
    top: -8px;
    right: -5px;
    color: #fff;
    background: $dark-grey;
    border-radius: 50%;

    &_full {
      background: #000;
    }
  }
}
</style>
