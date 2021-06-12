<template>
  <ul class="pagination">
    <li
      v-for="page in pages"
      :key="page"
      class="pagination__item"
      :class="{pagination__item_active: page === currentPage}"
      @click="goPage(page)"
    >
      <span class="pagination__page">{{ page }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    currentPage() {
      return this.$store.getters['goods/currentPage'];
    },
    productsPerPage() {
      return this.$store.getters['goods/productsPerPage'];
    },
  },
  methods: {
    goPage(page) {
      this.$store.dispatch('goods/setCurrentPage', page);
    },
  },
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  column-gap: 2px;

  &__item {
    font-weight: 700;
    line-height: 38px;
    width: 42px;
    height: 42px;
    text-align: center;
    color: #000;
    border: 2px solid #000;
    cursor: pointer;
    transition: .3s all ease-out;

    &:hover {
      color: $grey;
      border-color: $grey;
    }

    &_active {
      color: #909090;
      border-color: #909090;
    }
  }
}
</style>
