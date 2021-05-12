export const state = () => ({
  products: [],
  product: {},
  category: [
    {
      name: 'jewelery',
    },
    {
      name: 'electronics',
    },
    {
      name: "men's clothing",
    },
    {
      name: "women's clothing",
    },
  ],
  searchResult: [],
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
    state.searchResult = state.products.filter((product) => product.title.trim().toLowerCase().includes(value));
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
    commit('FILTER_PRODUCTS_BY_CATEGORY', category);
  },
  searchProducts({ commit }, title) {
    commit('SEARCH_PRODUCTS', title);
  },
};

export const getters = {
  products: (state) => state.products,
  product: (state) => state.product,
  category: (state) => state.category,
  searchResult: (state) => state.searchResult,
};
