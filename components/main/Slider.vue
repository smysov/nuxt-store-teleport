<template>
  <div>
    <carousel
      class="slider"
      v-bind="options"
    >
      <div
        v-for="slide of slider"
        :key="slide.id"
        class="slider__slide"
      >
        <img
          class="slider__image"
          :src="slide.img"
          alt="slide.title"
        >
      </div>
    </carousel>
  </div>
</template>

<script>
import Carousel from 'vue-slick-carousel';
// import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'MyComponent',
  components: { Carousel },
  data() {
    return {
      options: {
        arrow: true,
        dots: true,
        dotsClass: 'slick-dots',
        speed: 2000,
        slidesToShow: 1,
      },
    };
  },
  computed: {
    slider() {
      return this.$store.getters['slider/slides'];
    },
  },
};
</script>

<style lang="scss">
.slider {
  margin-bottom: 50px;

  &__image {
    width: 100%;
    height: 150px;

    @include phone {
      height: 200px;
    }
    @include tablets {
      height: auto;
    }
  }
}

.slick-arrow {

    &:hover,
    &:focus {
      &::before {
      color: $dark-grey;
    }
  }
}
.slick-prev {
  left: 0;
  z-index: 1;
    @include phone {
      width: 30px;
      height: 30px;
      left: 10px;
    }

    @include desktops {
      left: 30px;
    }

  &:before {
    transition: all .5s ease-out;

    @include tablets {
      font-size: 30px;
    }

    @include desktops {
      font-size: 40px;
    }
  }
}
.slick-next {
  right: 0px;
  z-index: 1;

    @include phone {
      width: 30px;
      height: 30px;
      right: 10px;
    }

    @include desktops {
      right: 30px;
    }

  &:before {
    transition: all .5s ease-out;

    @include tablets {
      font-size: 30px;
    }

    @include desktops {
      font-size: 40px;
    }
  }
}
</style>
