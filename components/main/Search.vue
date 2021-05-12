<template>
  <div class="search">
    <input
      v-model="search"
      class="search__input"
      placeholder="Search"
    >
    <svg-icon
      v-if="search"
      class="search__clear"
      name="close"
      @click="clearSearch"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchProduct',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      search: this.value,
    };
  },
  watch: {
    search(value) {
      this.$store.dispatch('search/setSearch', value);
    },
  },
  methods: {
    clearSearch() {
      this.search = '';
      this.$store.dispatch('search/clearSearch');
    },
  },
};
</script>

<style lang="scss">

.search {
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 11px;
    left: 9px;
    width: 15px;
    height: 15px;
    border: 3px solid $light-pink;
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    content: '';
    top: 26px;
    left: 20px;
    width: 10px;
    height: 3px;
    background-color: $light-pink;
    transform: rotate(45deg);
  }

  &__input {
    font-family: 'Mantonico', Arial, serif;
    font-size: 18px;
    font-weight: 500;
    color: $dark-grey;
    padding: 5px 5px 8px 31px;
    min-width: 220px;
    border: 3px solid $light-pink;
    border-radius: 20px;
    outline: none;

    &::placeholder {
      color: $grey;
    }
  }

  &__clear {
    position: absolute;
    top: 13px;
    right: 13px;
    width: 15px;
    height: 15px;
    stroke-width: 1px;
    fill: $light-pink;
    cursor: pointer;
  }
}
</style>
