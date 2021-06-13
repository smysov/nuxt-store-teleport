<template>
  <div
    class="modal__footer"
    @click.stop=""
  >
    <p class="goods-cart__total">
      <span>Total:</span>  {{ total }}$
    </p>
  </div>
</template>

<script>
export default {
  name: 'CartFooter',
  props: {
    productsInCart: {
      type: Array,
      required: true,
    },
  },
  computed: {
    total() {
      return +this.productsInCart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    },
  },
};
</script>
