export const state = () => ({
  products: [],
  product: {},
  paginatedProducts: [],
  currentPage: 1,
  productsPerPage: 6,
});

export const mutations = {
  SET_GOODS(state, goods) {
    state.products = goods;
  },
  SET_PRODUCT(state, id) {
    state.product = id;
  },
  FILTER_PRODUCTS_BY_CATEGORY(state, category) {
    state.products = state.products.filter((product) => {
      if (category === 'all') {
        return state.products;
      }

      return product.category === category;
    });
  },
  SEARCH_PRODUCTS(state, title) {
    const value = title.trim().toLowerCase();
    state.products = state.products.filter((product) => product.title.trim().toLowerCase().includes(value));
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },
};

export const actions = {
  async requestProducts({ commit }) {
    try {
      const response = await this.$axios.get(
        'https://fakestoreapi.com/products/',
      );
      commit('SET_GOODS', response);
    } catch (e) {
      Error(e);
    }
  },
  async requestProduct({ commit }, id) {
    try {
      const response = await this.$axios.get(
        `https://fakestoreapi.com/products/${id}`,
      );
      commit('SET_PRODUCT', response);
    } catch (e) {
      Error(e);
    }
  },
  async filteredByCategory({ commit, dispatch }, category) {
    await dispatch('requestProducts');
    await dispatch('setCurrentPage', 1);
    commit('FILTER_PRODUCTS_BY_CATEGORY', category);
  },
  async searchProducts({ commit, dispatch }, title) {
    await dispatch('requestProducts');
    await dispatch('setCurrentPage', 1);
    commit('SEARCH_PRODUCTS', title);
  },
  setCurrentPage({ commit }, page) {
    commit('SET_CURRENT_PAGE', page);
  },
};

export const getters = {
  products: (state) => state.products,
  slicedProducts: ({ currentPage, productsPerPage, products }) => {
    const from = currentPage * productsPerPage - productsPerPage;
    const to = currentPage * productsPerPage;
    return products.slice(from, to);
  },
  product: (state) => state.product,
  currentPage: (state) => state.currentPage,
  productsPerPage: (state) => state.searchResult,
};
