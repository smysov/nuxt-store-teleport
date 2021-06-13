<template>
  <div
    class="modal__content"
    @click.stop=""
  >
    <ul
      v-if="productsInCart.length !== 0"
      class="goods-cart"
      :class="{center: productsInCart.length === 1}"
    >
      <cart-products-item
        v-for="(product, index) of productsInCart"
        :key="product.id"
        v-bind="{product, index}"
        @deleteProductFromCart="deleteProductFromCart"
        @decreaseQuantity="decreaseQuantity"
        @increaseQuantity="increaseQuantity"
      />
    </ul>
    <products-not-found
      :products="productsInCart"
      title="Empty shopping cart!"
      view="cart-message"
    />
  </div>
</template>

<script>
import CartProductsItem from '~/components/cart/CartProductsItem.vue';
import ProductsNotFound from '~/components/products/ProductsNotFound.vue';

export default {
  name: 'CartProductsList',
  components: {
    CartProductsItem,
    ProductsNotFound,
  },
  props: {
    productsInCart: {
      type: Array,
      required: true,
    },
  },
  emits: ['deleteProductFromCart', 'decreaseQuantity', 'increaseQuantity'],
  methods: {
    deleteProductFromCart() {
      this.$emit('deleteProductFromCart');
    },
    decreaseQuantity(index) {
      this.$emit('decreaseQuantity', index);
    },
    increaseQuantity(index) {
      this.$emit('increaseQuantity', index);
    },
  },
};
</script>
