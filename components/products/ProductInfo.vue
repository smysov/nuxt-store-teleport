<template>
  <article class="product">
    <div class="product__image">
      <img
        :src="product.image"
        alt="Picture of product"
        class="product__picture"
      >
    </div>
    <div class="product__info">
      <h2 class="product__title">
        {{ product.title }}
      </h2>
      <p class="product__description">
        {{ product.description }}
      </p>
      <span class="product__category">
        #{{ product.category }}
      </span>
      <span class="product__price">
        {{ product.price }}$
      </span>
      <button-add-to-cart :product="product" />
    </div>
  </article>
</template>

<script>
import ButtonAddToCart from '@/components/ui/ButtonAddToCart.vue';

export default {
  name: 'ProductInfo',
  components: { ButtonAddToCart },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  head: {
    title: 'Информация о товаре',
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addProductToCart', product);
    },
  },
};
</script>

<style lang="scss">
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;

  @include tablets {
    justify-content: center;
    flex-direction: initial;
    max-width: 100%;
    column-gap: 25px;
  }

  &__image {
    height: 200px;
    overflow: hidden;
    transition: all .3s linear;
    margin-bottom: 5px;
    flex-shrink: 0;

    @include phone {
      height: 300px;
    }
  }

  &__picture {
    height: 100%;
  }
}

.product {

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;

    @include tablets {
      width: 60%;
    }
  }

  &__title {
    font-size: 18px;
    text-align: center;

    @include phone {
      font-size: 20px;
    }

    @include tablets {
      font-size: 22px;
    }
  }

  &__description {
    font-size: 16px;
    text-align: center;

    @include phone {
      font-size: 18px;
    }

    @include tablets {
      font-size: 20px;
    }
  }

  &__category {
    font-size: 16px;
    font-weight: 500;
    padding: 5px;

    @include phone {
      font-size: 18px;
    }
  }

  &__price {
    font-size: 20px;
    font-weight: 700;

    @include phone {
      font-size: 21px;
    }

    @include tablets {
      font-size: 22px;
    }
  }
}
</style>
