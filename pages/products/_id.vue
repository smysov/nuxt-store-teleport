<template>
  <div class="wrapper__content wrapper__content_fixed">
    <section class="info">
      <div class="container">
        <button-back />
        <h1 class="info__title">
          Info about product
        </h1>
        <product-info :product="product" />
      </div>
    </section>
    <modal-cart v-show="isOpen" />
  </div>
</template>

<script>
import ProductInfo from '~/components/product/ProductInfo.vue';
import ButtonBack from '~/components/ui/ButtonBack.vue';
import ModalCart from '~/components/main/ModalCart.vue';

export default {
  name: 'FullInfoProduct',
  components: { ProductInfo, ButtonBack, ModalCart },
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

    &__title {
    position: relative;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    margin-bottom: 30px;
    width: 213px;
    margin: 0 auto 40px;

    @include phone {
      font-size: 18px;
      width: 237px;
      margin-bottom: 50px;
    }

    &::before {
      position: absolute;
      content: "";
      bottom: -1px;
      width: 100%;
      height: 1px;
      background: #000;
    }
  }
}
</style>
