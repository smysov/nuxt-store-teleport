<template>
  <section class="about-us">
    <div class="container">
      <h1 class="title title_about">
        who are we?
      </h1>
      <ul class="about-list">
        <li class="about-list__item">
          <h2 class="about-list__title">
            who are we?
          </h2>
          <p class="about-list__text">
            Teleport online store — we value every customer.
            For 10 years of work, we have sold more than a million products,
            We strive to develop and please every customer
          </p>
        </li>
        <li class="about-list__item">
          <h2 class="about-list__title">
            what we do?
          </h2>
          <p class="about-list__text">
            Our main goal is that each of our customers would be satisfied with their purchase.
            We offer a high range of products of excellent quality at reasonable prices
          </p>
        </li>
        <li class="about-list__item">
          <h2 class="about-list__title">
            how we work?
          </h2>
          <p class="about-list__text">
            We strive to provide you with access to a large selection of products,
            no matter where you are in the world. We take care of logistics processes,
            customs clearance, so that you can focus exclusively on choosing the product you like!
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style lang="scss">

.about-list {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  max-width: 768px;
  margin: 0 auto;

    @include phone {
      row-gap: 35px;
    }

  &__item {
    position: relative;
    padding-left: 15px;
    max-width: 300px;

    @include phone {
      max-width: 350px;
    }

    &:first-child {
      align-self: flex-start;
    }

    &:nth-child(2) {
      align-self: flex-end;
    }

    &:last-child {
      align-self: flex-start;
    }

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0px;
      height: 100%;
      width: 1px;
      background-color: $dark-grey;
    }
  }

  &__title {
    text-transform: uppercase;
  }

  &__text {
    font-size: 16px;
    margin: 0;

    @include phone {
      font-size: 18px;
    }
  }
}
</style>
