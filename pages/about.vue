<template>
  <div class="wrapper__content">
    <about-us />
    <modal-cart v-show="isOpen" />
    <contacts />
  </div>
</template>

<script>
import ModalCart from '~/components/cart/ModalCart.vue';
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
