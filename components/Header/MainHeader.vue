<template>
  <header class="header">
    <div class="container">
      <nav class="navigation">
        <logo />
        <cart />
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/header/Logo.vue';
import Cart from '~/components/header/Cart.vue';

export default {
  name: 'MainHeader',
  components: { Logo, Cart },
};
</script>

<style lang="scss">
.header {
  padding: 16px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.6);
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>
