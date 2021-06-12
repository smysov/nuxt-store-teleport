<template>
  <nuxt-link
    class="button-more"
    :to="`/products/${product.id}`"
  >
    More
  </nuxt-link>
</template>

<script>
export default {
  name: 'ButtonMoreAboutProduct',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.button-more {
  color: #494949;
  min-width: 120px;
  font-weight: 700;
  border: 2px solid #494949;
  text-transform: uppercase;
  padding: 5px 20px;
  text-align: center;
  background: none;
  outline: none;
  transition: 0.3s all ease-out;

  &:hover {
    opacity: .6;
  }

  &:focus {
    border-color: #cf8c5f;
    color: #cf8c5f;
  }
}
</style>
