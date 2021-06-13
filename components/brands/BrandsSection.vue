<template>
  <section class="brands">
    <div class="container">
      <h2 class="title title_brands">
        our brands
      </h2>
      <brands-list />
    </div>
  </section>
</template>

<script>
import BrandsList from '~/components/brands/BrandsList.vue';

export default {
  name: 'Brands',
  components: { BrandsList },
};
</script>
