<template>
  <div
    class="wrapper__content"
  >
    <slider />
    <section class="products">
      <div class="container">
        <h2 class="products__title">
          our products
        </h2>
        <header-products />
        <ul class="goods">
          <goods-item
            v-for="product of paginatedProducts"
            :key="product.id"
            :product="product"
          />
        </ul>
        <p
          v-if="!products.length"
          class="result"
        >
          Product(s) not found!
        </p>
        <pagination
          :pages="pages"
        />
      </div>
    </section>
    <modal-cart v-show="isOpen" />
  </div>
</template>

<script>
import HeaderProducts from '~/components/main/HeaderProducts.vue';
import GoodsItem from '~/components/main/GoodsItem.vue';
import Pagination from '~/components/main/Pagination.vue';
import Slider from '~/components/main/Slider.vue';
import ModalCart from '~/components/main/ModalCart.vue';

export default {
  name: 'HomePage',
  components: {
    GoodsItem, HeaderProducts, Pagination, Slider, ModalCart,
  },
  layout: 'main',
  head() {
    return {
      title: 'Главная страница',
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
.products {

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
      content: "Products";
      font-size: 43px;
      top: -21px;
      left: -50px;
      color: rgba(219, 219, 219, 0.2);

      @include phone {
        font-size: 50px;
        top: -24px;
        left: -60px;
      }
    }
  }
}

.result {
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
}
</style>
