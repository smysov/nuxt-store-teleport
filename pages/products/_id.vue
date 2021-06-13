<template>
  <div class="wrapper__content wrapper__content_fixed">
    <information-about-product :product="product" />
    <modal-cart v-show="isOpen" />
  </div>
</template>

<script>
import InformationAboutProduct from '~/components/products/InformationAboutProduct.vue';
import ModalCart from '~/components/cart/ModalCart.vue';

export default {
  name: 'FullInfoProduct',
  components: {
    InformationAboutProduct, ModalCart,
  },
  layout: 'main',
  async asyncData({ store, params }) {
    await store.dispatch('goods/requestProduct', params.id);
  },
  head() {
    return {
      title: 'Главная страница',
      bodyAttrs: {
        class: this.isHidden ? 'hidden' : '',
      },
    };
  },
  computed: {
    product() {
      return this.$store.getters['goods/product'];
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
.info {
  padding: 30px 0;

  @include phone {
    padding: 35px 0;
  }

  @include tablets {
    padding: 40px 0;
  }
}
</style>
