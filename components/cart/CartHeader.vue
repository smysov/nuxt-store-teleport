<template>
  <div
    class="modal__header"
    @click.stop=""
  >
    <svg-icon
      class="modal__close"
      name="close"
      @click="closeCart(false)"
    />
  </div>
</template>

<script>
export default {
  name: 'CartHeader',
  emits: ['closeCart'],
  methods: {
    closeCart() {
      this.$emit('closeCart');
    },
  },
};
</script>
