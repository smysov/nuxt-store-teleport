export const state = () => {};

export const mutations = {};

export const actions = {
  async  nuxtServerInit({ dispatch }) {
    await dispatch('goods/requestProducts');
  },
};
