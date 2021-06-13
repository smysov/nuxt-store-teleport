<template>
  <div class="wrapper__content">
    <about-us />
    <modal-cart v-show="isOpen" />
    <contacts />
  </div>
</template>

<script>
import ModalCart from '~/components/main/ModalCart.vue';
import AboutUs from '~/components/about/AboutUs.vue';
import Contacts from '~/components/about/Contacts.vue';

export default {
  name: 'AboutPage',
  components: {
    ModalCart, AboutUs, Contacts,
  },
  layout: 'main',
  head() {
    return {
      title: 'About page',
      bodyAttrs: {
        class: this.isHidden ? 'hidden' : '',
      },
    };
  },
  computed: {
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
  &_about {
    &::before {
      position: absolute;
      content: "Who are we";
      font-size: 36px;
      top: -16px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(219, 219, 219, 0.2);
      white-space: nowrap;
      z-index: -1;

      @include phone {
        font-size: 50px;
        top: -24px;
      }
    }
  }
}
</style>
