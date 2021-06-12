<template>
  <button
    class="button-buy"
    @click="addToCart(product)"
  >
    Add cart
  </button>
</template>

<script>
export default {
  name: 'ButtonAddToCart',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addProductToCart', product);
    },
  },
};
</script>

<style lang="scss" scoped>
.button-buy {
  color: #494949;
  min-width: 120px;
  font-weight: 700;
  border: 2px solid #494949;
  text-transform: uppercase;
  padding: 5px 20px;
  background: none;
  transition: 0.3s all ease-out;

  &:hover {
    opacity: .6;
  }

  &:focus {
    border-color: #56a553;
    color: #56a553;
  }
}
</style>
