<template>
  <li class="goods__item">
    <div class="goods__inner-image">
      <img
        :src="product.image"
        alt="Image of product"
        class="goods__picture"
      >
    </div>
    <div class="goods__info">
      <h3 class="goods__title">
        {{ slicedTitle }}
      </h3>
      <span class="goods__price">${{ product.price }}</span>
    </div>
    <div class="goods__buttons">
      <button-add-to-cart
        :product="product"
      />
      <button-more-about-product :product="product" />
    </div>
  </li>
</template>

<script>
import ButtonAddToCart from '@/components/ui/ButtonAddToCart.vue';
import ButtonMoreAboutProduct from '@/components/ui/ButtonMoreAboutProduct.vue';

export default {
  name: 'ProductsItem',
  components: { ButtonAddToCart, ButtonMoreAboutProduct },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    slicedTitle() {
      return this.product.title.split(' ').slice(0, 5).join(' ');
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addProductToCart', product);
    },
  },
};
</script>

<style lang="scss">
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;

    @include phone {
      column-gap: 10px;
      row-gap: 25px;
    }

    @include tablets {
      column-gap: 35px;
      row-gap: 40px;
    }

    &__item {
      display: flex;
      flex-direction: column;
      min-width: 300px;
      row-gap: 10px;

      @include phone {
        width: 46%;
      }

      @include tablets {
        width: 30%;
      }

      &:hover {
        .goods__inner-image {
          transform: scale(1.05);
        }
      }
    }

    &__info {
      padding: 0 10px;
    }

    &__price {
      font-size: 18px;
      font-weight: 500;

      @include phone {
        font-size: 20px;
      }
    }
  }

  .goods {
    &__inner-image {
      height: 200px;
      overflow: hidden;
      transition: all .3s linear;
      margin: 0 auto 5px;

      @include phone {
        height: 300px;
      }
    }

    &__picture {
      height: 100%;
    }

    &__title {
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 5px;

      @include phone {
        font-size: 18px;
      }
    }
  }

  .goods {
    &__buttons {
      display: flex;
      justify-content: space-around;
      column-gap: 20px;
      margin-top: auto;
      width: 100%;
    }

    &__button {

      &_more {
        text-align: center;
        background: none;
        border: 2px solid #494949;
        outline: none;

        &:hover {
          opacity: .6;
        }

        &:focus {
          border-color: #cf8c5f;
          color: #cf8c5f;
        }
      }
    }
  }
</style>
