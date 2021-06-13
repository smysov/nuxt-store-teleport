<template>
  <div class="wrapper__contact">
    <section class="contacts">
      <name-heading
        title="contacts"
        view="title title_contacts"
      />
      <div class="connection">
        <div class="container">
          <h3 class="connection__title">
            Los Angeles
          </h3>
          <p class="connection__address">
            <a
              class="connection__link"
              href="https://goo.gl/maps/XoVijKDf9z97zywp9"
              target="_blank"
            >1448 15th St, Santa Monica, CA 90404</a>
          </p>
          <p class="connection__phone">
            <a
              class="connection__link"
              href="tel:3106539154"
            >p.310.653.9154</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NameHeading from '~/components/ui/NameHending.vue';

export default {
  name: 'Contacts',
  components: {
    NameHeading,
  },
};
</script>

<style lang="scss">
.connection {
  padding: 30px 10px;

  &__title {
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  &__link {
    position: relative;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
    word-wrap: break-word;
    background-repeat: repeat-x;
    background-image: linear-gradient(to right,#ff1753 100%,#ff1753 0);
    background-size: 1px 2px;
    background-position: 0 calc(97.5%);
    transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);

    @include phone {
      font-size: 20px;
    }

    @include tablets {
      font-size: 22px;
    }

    &:hover {
      opacity: .7;
    }

    &::before {
      position: absolute;
      content: '';
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #000;
    }
  }
}
</style>
