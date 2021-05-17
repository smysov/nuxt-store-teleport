<template>
  <li
    class="goods-cart__item"
  >
    <div class="goods-cart__inner-image">
      <img
        :src="product.image"
        :alt="product.title"
        class="goods-cart__image"
      >
    </div>
    <h2 class="goods-cart__title">
      {{ product.title }}
    </h2>
    <span class="goods-cart_price">{{ product.price }}$</span>
    <div class="goods-cart__count">
      <button
        class="goods-cart__button goods-cart__button_decrease"
      />
      <span class="goods-cart__number">1</span>
      <button
        class="
              goods-cart__button goods-cart__button_increase"
      />
    </div>
    <button
      class="goods-cart__remove-button"
      @click="deleteProductFromCart(product)"
    />
  </li>
</template>

<script>
export default {
  name: 'CartProductsItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteProductFromCart(product) {
      this.$store.dispatch('cart/deleteProductFromCart', product);
    },
  },
};
</script>
