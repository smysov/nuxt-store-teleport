<template>
  <div
    class="modal"
    @click="closeCart(false)"
  >
    <cart-header @closeCart="closeCart" />
    <cart-products-list
      v-bind="{productsInCart}"
      @deleteProductFromCart="deleteProductFromCart"
      @decreaseQuantity="decreaseQuantity"
      @increaseQuantity="increaseQuantity"
    />
    <cart-footer :products-in-cart="productsInCart" />
  </div>
</template>

<script>
import CartHeader from '~/components/cart/CartHeader.vue';
import CartProductsList from '~/components/cart/CartProductsList.vue';
import CartFooter from '~/components/cart/CartFooter.vue';

export default {
  name: 'ModalCart',
  components: {
    CartHeader, CartProductsList, CartFooter,
  },
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
    deleteProductFromCart(index) {
      this.$store.dispatch('cart/deleteProductFromCart', index);
    },
    decreaseQuantity(index) {
      this.$store.dispatch('cart/decreaseQuantity', index);
    },
    increaseQuantity(index) {
      this.$store.dispatch('cart/increaseQuantity', index);
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

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: $grey;
  }

  &::-webkit-scrollbar-thumb {
    background: $light-black;
  }

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
    background-color: $light-black;
    padding: 10px 10px 10px 0;
    text-align: right;

    @include tablets {
      width: 700px;
    }
  }

  &__footer {
    @extend .modal__header;
  }

  &__close {
    width: 12px;
    height: 12px;
    fill: #fff;
    transition: all .3s ease-in-out;
    cursor: pointer;

    @include phone {
      width: 16px;
      height: 16px;
    }

    @include tablets {
      width: 20px;
      height: 20px;
    }

    &:hover {
      fill: #ff4d4d;
    }

    &:active {
      fill: red;
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
    font-size: 13px;
    font-weight: 300;
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

  &__price {
    font-weight: 500;
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
    transition: all .3s ease-in-out;
    background: transparent;

    @include phone {
      width: 22px;
      height: 22px;
    }

    &:hover {
      .goods-cart__icon-increase {
        fill: #528d52;
      }
      .goods-cart__icon-decrease {
        fill: #ce5050;
      }
    }
  }

  &__icon-decrease,
  &__icon-increase {
    width: 20px;
    height: 20px;
    fill: #818181;
  }

  &__remove-button {
    font-size: 12px;
    color: #000;
    background: transparent;
    transition: all .3s ease-in-out;

    &:hover {
      opacity: .7;
      text-decoration: underline;
    }

    &:active {
      color: crimson;
    }
  }

  &__total {
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    margin: 0;

    & span {
      font-size: 20px;
    }
  }
}
.cart-message {
  font-size: 18px;
  color: $dark-grey;
  margin: 20px 0;
}
</style>
