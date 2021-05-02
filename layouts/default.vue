<template>
  <div class="wrapper">
    <main-header />
    <Nuxt />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from '~/components/Header/MainHeader.vue';
import MainFooter from '~/components/Footer/MainFooter.vue';

export default {
  components: { MainHeader, MainFooter },
};
</script>

<style>
</style>
