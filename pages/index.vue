<template>
  <div class="wrapper__content">
    <slider />
    <products-section v-bind="{products, pages, paginatedProducts}" />
    <brands />
    <modal-cart v-show="isOpen" />
  </div>
</template>

<script>
import ProductsSection from '~/components/products/ProductsSection.vue';
import Slider from '~/components/main/Slider.vue';
import ModalCart from '~/components/cart/ModalCart.vue';
import Brands from '~/components/brands/BrandsSection.vue';

export default {
  name: 'HomePage',
  components: {
    ProductsSection,
    Slider,
    ModalCart,
    Brands,
  },
  layout: 'main',
  head() {
    return {
      title: 'Home page',
      bodyAttrs: {
        class: this.isHidden ? 'hidden' : '',
      },
    };
  },
  computed: {
    products() {
      return this.$store.getters['goods/products'];
    },
    pages() {
      return Math.ceil(this.products.length / 6);
    },
    paginatedProducts() {
      return this.$store.getters['goods/slicedProducts'];
    },
    isOpen() {
      return this.$store.getters['cart/isOpen'];
    },
    isHidden() {
      return this.$store.getters['cart/isHidden'];
    },
  },
};
</script>

<style lang="scss">
.result {
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
}
</style>
