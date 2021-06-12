<template>
  <ul class="brands__list">
    <brand-item
      v-for="brand of brands"
      :key="brand.id"
      :brand="brand"
    />
  </ul>
</template>

<script>
import BrandItem from '~/components/brands/BrandItem.vue';

export default {
  name: 'BrandsList',
  components: { BrandItem },
  computed: {
    brands() {
      return this.$store.getters['brands/brands'];
    },
  },
};
</script>
