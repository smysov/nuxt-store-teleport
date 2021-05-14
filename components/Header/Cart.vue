<template>
  <div
    class="cart"
    :class="{cart_active: activeClassCart}"
    @click="openCart"
  >
    <div class="cart__count">
      {{ productsInCart.length }}
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
    openCart() {
      this.$store.dispatch('cart/setActiveClass');
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
    position: absolute;
    top: -11px;
    right: -9px;
    text-align: center;
    color: #fff;
    background: #a7a7a7;
    width: 17px;
    height: 17px;
    z-index: -1;
    border-radius: 50%;
  }
}
</style>
