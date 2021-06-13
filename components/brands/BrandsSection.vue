<template>
  <section class="brands">
    <div class="container">
      <name-heading
        title="brands"
        view="title title_brands"
      />
      <brands-list />
    </div>
  </section>
</template>

<script>
import NameHeading from '~/components/ui/NameHending.vue';
import BrandsList from '~/components/brands/BrandsList.vue';

export default {
  name: 'BrandsSection',
  components: { NameHeading, BrandsList },
};
</script>
