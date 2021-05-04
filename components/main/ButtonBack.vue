<template>
  <nuxt-link
    class="button-back"
    to="/"
  >
    <svg-icon
      class="button-back__icon"
      name="arrow-left"
    />
    Back
  </nuxt-link>
</template>

<script>
export default {
  name: 'ButtonBack',
};
</script>

<style lang="scss">
.button-back {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all .3s ease-out;
  margin-bottom: 20px;
  width: 90px;

  &:hover {
    color: $light-pink;
    transform: scale(1.1);

    .button-back__icon {
      fill: $light-pink;
    }
  }

  &__icon {
    height: 25px;
    width: 30px;
    transition: all .3s ease-out;
  }
}
</style>
