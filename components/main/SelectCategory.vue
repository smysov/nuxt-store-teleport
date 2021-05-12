<template>
  <div class="select">
    <select
      id="category"
      v-model="selectedCategory"
      name="category"
      @change="ChangedCategory"
    >
      <option
        selected
        disabled
      >
        Choice Category
      </option>
      <option value="all">
        all products
      </option>
      <option
        v-for="item of category"
        :key="item.name"
        :value="item.name"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectCategory',
  data: () => ({
    selectedCategory: 'Choice Category',
  }),
  computed: {
    category() {
      return this.$store.getters['category/category'];
    },
  },
  methods: {
    ChangedCategory() {
      this.$store.dispatch('category/setCategory', this.selectedCategory);
    },
  },
};
</script>

<style lang="scss">
select {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-transform: capitalize;
  flex: 1;
  box-shadow: none;
  padding: 12px 12px;
  border: 0 !important;
  background: #FFBA9D;
  outline: 0;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::-ms-expand {
   display: none;
  }
}

.select {
  position: relative;
  display: flex;
  min-width: 220px;
  overflow: hidden;

    &::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px 12px;
    background: $light-pink;
    color: #fff;
    cursor: pointer;
    pointer-events: none;
    transition:.25s all ease;
  }
}

option {
  text-transform: capitalize;
}

</style>
