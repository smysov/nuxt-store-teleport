/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
export const state = () => ({
  products: [],
});

export const mutations = {
  SET_GOODS(state, goods) {
    state.products = goods;
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
};

export const getters = {
  products: (state) => state.products,
};
