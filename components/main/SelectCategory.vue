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
  text-transform: capitalize;
  flex: 1;
  padding: 8px 8px;
  border: 2px solid #000;
  background: none;
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
    padding: 13px 10px;
    background: none;
    cursor: pointer;
    pointer-events: none;
  }
}

option {
  text-transform: capitalize;
}

</style>
