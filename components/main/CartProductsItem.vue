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
    <span class="goods-cart__price">{{ product.price * product.quantity }}$</span>
    <div class="goods-cart__count">
      <button
        class="goods-cart__button"
        @click="decreaseQuantity"
      >
        <svg-icon
          name="minus"
          class="goods-cart__icon-decrease"
        />
      </button>
      <span class="goods-cart__number">{{ product.quantity }}</span>
      <button
        class="goods-cart__button"
        @click="increaseQuantity"
      >
        <svg-icon
          name="plus"
          class="goods-cart__icon-increase"
        />
      </button>
    </div>
    <button
      class="goods-cart__remove-button"
      @click="deleteProductFromCart"
    >
      Remove
    </button>
  </li>
</template>

<script>
export default {
  name: 'CartProductsItem',
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ['deleteProductFromCart', 'decreaseQuantity', 'increaseQuantity'],
  methods: {
    deleteProductFromCart() {
      this.$emit('deleteProductFromCart');
    },
    decreaseQuantity() {
      this.$emit('decreaseQuantity');
    },
    increaseQuantity() {
      this.$emit('increaseQuantity');
    },
  },
};
</script>
