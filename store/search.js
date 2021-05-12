export const state = () => ({
  searchQuery: '',
});

export const mutations = {
  SET_SEARCH(state, value) {
    state.searchQuery = value;
  },
  CLEAR_SEARCH(state) {
    state.searchQuery = '';
  },
};

export const actions = {
  setSearch({ commit, dispatch }, value) {
    commit('SET_SEARCH', value);
    dispatch('goods/searchProducts', value, { root: true });
  },
  clearSearch({ commit }) {
    commit('CLEAR_SEARCH');
  },
};

export const getters = {
  search: (state) => state.searchQuery,
};
