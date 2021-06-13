<template>
  <div class="opportunities">
    <search
      :value="search"
      @search="search = $event"
    />
    <select-category />
  </div>
</template>

<script>
import SelectCategory from '~/components/main/SelectCategory.vue';
import Search from '~/components/main/Search.vue';

export default {
  name: 'HeaderProducts',
  components: { SelectCategory, Search },
  computed: {
    search() {
      return this.$store.getters['search/search'];
    },
  },
};
</script>

<style lang="scss">
.opportunities {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  margin-bottom: 50px;

  @media (min-width: 550px) {
    align-items: initial;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
}
</style>
