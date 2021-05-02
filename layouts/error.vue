<template>
  <div class="error">
    <div class="error__wrapper">
      <svg-icon
        class="icon-error"
        name="error"
      />
      <h1>Page not found - 404</h1>
      <p>
        This page not found (deleted or never exists)
      </p>
      <nuxt-link
        class="home"
        to="/"
      >
        TAKE ME HOME!
        <svg-icon
          class="back"
          name="arrow-left"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Страница не найдена',
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: #000;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    height: 100vh;
    background-color: $light-grey;
  }
}

h1 {
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;

  @include phone {
    font-size: 24px;
  }

  @include tablets {
    font-size: 26px;
  }
}

p {
  font-size: 16px;
  margin: 0;
  color: $dark-grey;

  @include phone {
    font-size: 18px;
  }
}

.icon-error {
  width: 300px;
  height: auto;
  stroke: $light-pink;
  margin-bottom: 15px;

  @include phone {
    width: 460px;
    height: 220px;
  }

  @include tablets {
    width: 748px;
  }
}

.home {
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: $light-pink;
  letter-spacing: 1px;
  font-weight: 500;
  transition: .4s all ease-in;

  @include phone {
    font-size: 18px;
  }

  &:hover {
    color: #72ce72;

    .back {
      fill: #72ce72;
    }
  }
}

.back {
  width: 6px;
  height: 11px;
  fill: $light-pink;
  transition: .4s all ease-in;
}
</style>
