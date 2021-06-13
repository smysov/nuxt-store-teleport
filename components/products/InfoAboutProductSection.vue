<template>
  <section class="info">
    <div class="container">
      <button-back />
      <name-heading
        title="info about product"
        view="title title_info"
      />
      <info-About-product :product="product" />
    </div>
  </section>
</template>

<script>
import NameHeading from '~/components/ui/NameHending.vue';
import InfoAboutProduct from '~/components/products/InfoAboutProduct.vue';
import ButtonBack from '~/components/ui/ButtonBack.vue';

export default {
  name: 'InformationAboutProduct',
  components: { NameHeading, InfoAboutProduct, ButtonBack },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
