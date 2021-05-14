export const state = () => ({
  activeCart: false,
  productsInCart: [],
});

export const mutations = {
  SET_ACTIVE_CLASS(state) {
    state.activeCart = !state.activeCart;
  },
  ADD_PRODUCT_TO_CART(state, product) {
    state.productsInCart.push(product);
  },
};

export const actions = {
  setActiveClass({ commit }) {
    commit('SET_ACTIVE_CLASS');
  },
  addProductToCart({ commit }, product) {
    commit('ADD_PRODUCT_TO_CART', product);
  },
};

export const getters = {
  activeClassCart: (state) => state.activeCart,
  productsInCart: (state) => state.productsInCart,
};
