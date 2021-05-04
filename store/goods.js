export const state = () => ({
  products: [],
  product: {},
});

export const mutations = {
  SET_GOODS(state, goods) {
    state.products = goods;
  },
  SET_PRODUCT(state, id) {
    state.product = id;
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
      console.error(e);
    }
  },
  async requestProduct({ commit }, id) {
    try {
      const response = await this.$axios.get(
        `https://fakestoreapi.com/products/${id}`,
      );
      commit('SET_PRODUCT', response);
    } catch (e) {
      console.error(e);
    }
  },
};

export const getters = {
  products: (state) => state.products,
  product: (state) => state.product,
};
