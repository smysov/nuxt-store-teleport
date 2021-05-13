export const state = () => ({
  pageNumber: 1,
  productsPerPage: 6,
});

export const getters = {
  pageNumber: (state) => state.pageNumber,
  productsPerPage: (state) => state.productsPerPage,
};
