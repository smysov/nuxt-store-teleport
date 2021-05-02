<template>
  <header class="header">
    <div class="container">
      <logo />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Header/Logo.vue';

export default {
  name: 'MainHeader',
  components: { Logo },
};
</script>

<style lang="scss">
.header {
  padding: 16px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.6);
}
</style>
