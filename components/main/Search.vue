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
    border: 2px solid #000;
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    content: '';
    top: 26px;
    left: 20px;
    width: 10px;
    height: 2px;
    background-color: #000;
    transform: rotate(45deg);
  }

  &__input {
    font-family: 'Mantonico', Arial, serif;
    font-size: 18px;
    font-weight: 500;
    color: $dark-grey;
    padding: 5px 5px 8px 31px;
    min-width: 220px;
    border: 2px solid #000;
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
    fill: #000;
    cursor: pointer;
  }
}
</style>
