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
      name="cart-shop"
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
      opacity: .5;
    }
  }

  &_active {
    .cart__icon {
      stroke: #51b651;
    }
  }

  &__icon {
    width: 30px;
    height: 25px;
    stroke: #000;
    transition: .3s all ease-out;
  }

  &__count {
    font-size: 13px;
    font-weight: 500;
    position: absolute;
    top: -8px;
    right: -9px;
    background: $grey;
    z-index: -1;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
}
</style>
