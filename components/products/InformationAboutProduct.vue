<template>
  <section class="info">
    <div class="container">
      <button-back />
      <name-heading
        title="info about product"
        view="title title_info"
      />
      <product-info :product="product" />
    </div>
  </section>
</template>

<script>
import NameHeading from '~/components/ui/NameHending.vue';
import ProductInfo from '~/components/products/ProductInfo.vue';
import ButtonBack from '~/components/ui/ButtonBack.vue';

export default {
  name: 'InformationAboutProduct',
  components: { NameHeading, ProductInfo, ButtonBack },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
