<template>
  <div class="wrapper__content wrapper__content-fixed">
    <section class="products">
      <div class="container">
        <h2 class="products__title">
          our products
        </h2>
        <ul class="goods">
          <goods-item
            v-for="product of products"
            :key="product.id"
            :product="product"
          />
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import GoodsItem from '~/components/main/GoodsItem.vue';

export default {
  name: 'HomePage',
  components: { GoodsItem },
  layout: 'main',
  head: {
    title: 'Главная страница',
  },
  computed: {
    products() {
      return this.$store.getters['goods/products'];
    },
  },
};
</script>

<style lang="scss">
.products {
  margin-top: 50px;

  &__title {
    position: relative;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    margin-bottom: 30px;
    width: 148px;
    margin: 0 auto 40px;

    @include phone {
      font-size: 18px;
      width: 166px;
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
