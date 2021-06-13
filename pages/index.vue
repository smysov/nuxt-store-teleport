<template>
  <div class="wrapper__content">
    <slider />
    <section class="products">
      <div class="container">
        <h2 class="title title_products">
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
    <brands />
    <modal-cart v-show="isOpen" />
  </div>
</template>

<script>
import HeaderProducts from '~/components/main/HeaderProducts.vue';
import GoodsItem from '~/components/main/GoodsItem.vue';
import Pagination from '~/components/main/Pagination.vue';
import Slider from '~/components/main/Slider.vue';
import ModalCart from '~/components/main/ModalCart.vue';
import Brands from '~/components/brands/BrandsSection.vue';

export default {
  name: 'HomePage',
  components: {
    GoodsItem,
    HeaderProducts,
    Pagination,
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
.title {
  &_products {
    &::before {
      position: absolute;
      content: "Products";
      font-size: 43px;
      top: -21px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(219, 219, 219, 0.2);
      z-index: -1;

      @include phone {
        font-size: 50px;
        top: -24px;
      }
    }
  }

  &_brands {
    &::before {
      position: absolute;
      content: "Brands";
      font-size: 43px;
      top: -21px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(219, 219, 219, 0.2);
      z-index: -1;

      @include phone {
        font-size: 50px;
        top: -24px;
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
