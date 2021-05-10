<template>
  <div class="opportunities">
    <select-category />
  </div>
</template>

<script>
import SelectCategory from '~/components/main/SelectCategory.vue';

export default {
  name: 'HeaderProducts',
  components: { SelectCategory },
};
</script>

<style lang="scss">
.opportunities {
  display: flex;
  margin-bottom: 50px;
}
</style>
