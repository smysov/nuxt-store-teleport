<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <p class="footer__description">
          Copyright &copy; 2021 <span class="footer__author">smysov</span>
        </p>
        <social-list />
      </div>
    </div>
  </footer>
</template>

<script>
import SocialList from '~/components/footer/SocialList.vue';

export default {
  name: 'MainFooter',
  components: { SocialList },
};
</script>

<style lang="scss">
.footer {
  box-shadow: 0px 0 8px 1px rgba(0, 0, 0, 0.8);

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    row-gap: 20px;

    @include phone {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-start;
      padding: 20px 0;
    }

    @include tablets {
      justify-content: space-between;
    }
  }

  &__description {
    font-size: 18px;
    margin: 0;

    @include phone {
      font-size: 20px;
    }
  }

  &__author {
    font-size: 18px;
    letter-spacing: 1.2px;

    @include phone {
      font-size: 20px;
    }
  }
}
</style>
