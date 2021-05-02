<template>
  <nuxt-link
    class="logo"
    to="/"
  >
    <svg-icon
      class="logo__icon"
      name="heart"
    />
    Teleport
  </nuxt-link>
</template>

<script>
export default {
  name: 'HeaderLogo',
};
</script>

<style lang="scss" scoped>
 .logo {
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  color: $dark-grey;
  transition: all .3s ease-out;

  @include tablets {
    font-size: 18px;
  }

  &:hover {
    opacity: .7;
    .logo__icon {
      fill: #ff7676;
    }
  }

  &__icon {
    fill: $light-pink;
    width: 23px;
    height: 21px;
    transition: all .3s ease-out;

    @include phone {
      width: 27px;
      height: 25px;
    }

    @include tablets {
      width: 31px;
      height: 29px;
    }
  }
}
</style>
