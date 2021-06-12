<template>
  <li
    class="brands__item"
  >
    <div class="brands__inner-image">
      <img
        class="brands__image"
        :src="brand.link"
        :alt="brand.title"
      >
    </div>
  </li>
</template>

<script>
export default {
  name: 'BrandItem',
  props: {
    brand: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.brands {

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 30px;

    @media (min-width: 420px) {
      column-gap: 40px;
    }

    @include phone {
      row-gap: 30px;
    }

    @include tablets {
      column-gap: 50px;
    }
  }

  &__inner-image {
    filter: grayscale(100%);
    transition: all .3s ease-in-out;

    &:hover {
      filter: grayscale(0);
    }
  }

  &__image {
    height: 100px;
    object-fit: contain;
    max-width: 300px;

    @include phone {
      width: 200px;
    }

    @include tablets {
      width: 250px;
    }
  }
}
</style>
