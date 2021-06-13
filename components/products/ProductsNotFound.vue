<template>
  <p
    v-if="!products.length"
    :class="view"
  >
    {{ title }}
  </p>
</template>

<script>
export default {
  name: 'ProductsNotFound',
  props: {
    products: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    view: {
      type: String,
      required: true,
    },
  },
};
</script>
