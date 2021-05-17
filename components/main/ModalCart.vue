<template>
  <div
    class="modal"
    @click="closeCart(false)"
  >
    <div
      class="modal__header"
      @click.stop=""
    >
      <svg-icon
        class="modal__close"
        name="close"
        @click="closeCart(false)"
      />
    </div>
    <div
      class="modal__content"
      @click.stop=""
    >
      <ul
        v-if="productsInCart.length !== 0"
        class="goods-cart"
        :class="{center: productsInCart.length === 1}"
      >
        <cart-products-item
          v-for="product of productsInCart"
          :key="product.id"
          :product="product"
        />
      </ul>
      <p
        v-show="!productsInCart.length"
        class="cart-message"
      >
        Empty shopping cart!
      </p>
    </div>
  </div>
</template>

<script>
import CartProductsItem from '~/components/main/CartProductsItem.vue';

export default {
  name: 'ModalCart',
  components: { CartProductsItem },
  computed: {
    productsInCart() {
      return this.$store.getters['cart/productsInCart'];
    },
  },
  methods: {
    closeCart(boolean) {
      this.$store.dispatch('cart/isOpen', boolean);
      this.$store.dispatch('cart/setActiveClass', boolean);
      this.$store.dispatch('cart/isOpen', boolean);
      this.$store.dispatch('cart/isHidden', boolean);
    },
  },
};
</script>

<style lang="scss">
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: .5);
  z-index: 100;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 90%;
    max-height: 400px;
    overflow-y: auto;

    @include phone {
      max-height: 550px;
    }
    @include tablets {
      width: 700px;
      max-height: 700px;
    }
  }

  &__header {
    width: 90%;
    background-color: $light-pink;
    padding: 10px 10px 10px 0;
    text-align: right;

    @include tablets {
      width: 700px;
    }
  }

  &__close {
    width: 12px;
    height: 12px;
    fill: #fff;
    cursor: pointer;

    @include phone {
      width: 16px;
      height: 16px;
    }

    @include tablets {
      width: 20px;
      height: 20px;
    }
  }
}

.goods-cart {
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  width: 100%;
  justify-content: space-between;
  padding: 20px 5px;

  &.center {
    justify-content: center;
  }

  @include phone {
    padding: 20px 15px;
    row-gap: 30px;
  }

  @include tablets {
    padding: 20px 40px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    width: 46%;

    @include phone {
      width: 50%;
    }

    @include tablets {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__inner-image {
    height: 50px;
    width: 100px;

    @include phone {
      height: 120px;
      width: 120px;
    }

    @media (min-width: 660px) {
      height: 150px;
    }
  }

  &__image {
    height: 100%;
    margin: auto;
  }

  &__title {
    font-size: 12px;
    text-align: center;
    width: 120px;
    margin-bottom: auto;

    @include phone {
      font-size: 15px;
      width: 150px;
    }

    @media (min-width: 660px) {
      font-size: 16px;
    }

    @include tablets {
      margin-bottom: 0;
    }
  }

  &__count {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  &__number {
    font-size: 16px;
    font-weight: 500;

    @include phone {
      font-size: 18px;
    }
  }

  &__button {
    width: 20px;
    height: 20px;
    padding: 0;
    background: transparent;

    @include phone {
      width: 22px;
      height: 22px;
    }

    &_increase {
      background: url("~/assets/images/svg/plus.svg") center center no-repeat;
    }
    &_decrease {
      background: url("~/assets/images/svg/minus.svg") center center no-repeat;
    }
  }

  &__remove-button {
    width: 25px;
    height: 25px;
    padding: 0;
    border-radius: 5px;
    background: url(./assets/images/svg/close.svg) center center / 15px 15px no-repeat;
    background-color: red;
    transition: all .3s ease-out;

    &:hover {
      opacity: .7;
      transform: scale(.9);
    }
  }
}
.cart-message {
  font-size: 18px;
  color: $dark-grey;
  margin: 20px 0;
}
</style>
