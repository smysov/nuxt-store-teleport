<template>
  <ul class="social-list">
    <li
      v-for="link of socialLinks"
      :key="link.name"
      class="`social-list__item"
    >
      <a
        class="social-list__link"
        :href="link.href"
        target="_blank"
      >
        <svg-icon
          :class="`social-list__icon social-list__icon_${link.class}`"
          :name="link.name"
        />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialList',
  data: () => ({
    socialLinks: [
      {
        name: 'facebook',
        class: 'facebook',
        href: 'https://ru-ru.facebook.com/',
      },
      {
        name: 'github',
        class: 'github',
        href: 'https://github.com/smysov',
      },
      {
        name: 'in',
        class: 'in',
        href: 'https://ru.linkedin.com/',
      },
    ],
  }),
};
</script>

<style lang="scss">
.social-list {
  display: flex;
  column-gap: 24px;

  &__link {
    display: block;
    width: 25px;
    height: 25px;
    text-align: center;

    &:hover {
      .social-list__icon_facebook {
        fill: #1717ff;
      }
      .social-list__icon_github {
        fill: #4e4e4e;
      }
      .social-list__icon_in {
        fill: #5454ff;
      }
    }
  }

  &__icon {
  transition: all .3s ease-in;

    &_facebook {
      width: 10px;
      height: 18px;
      fill: black;
      @include phone {
        width: 14px;
        height: 22px;
      }

      @include tablets {
        width: 18px;
        height: 26px;
      }
    }

    &_github {
      width: 20px;
      height: 20px;
      fill: #000;
      @include phone {
        width: 24px;
        height: 24px;
      }

      @include tablets {
        width: 28px;
        height: 28px;
      }
    }

    &_in {
      width: 17px;
      height: 17px;
      fill: #000;
      @include phone {
        width: 21px;
        height: 21px;
      }

      @include phone {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>
