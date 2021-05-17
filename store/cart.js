export const state = () => ({
  activeCart: false,
  productsInCart: [],
  isOpen: false,
  isHidden: false,
});

export const mutations = {
  SET_ACTIVE_CLASS(state, boolean) {
    state.activeCart = boolean;
  },
  ADD_PRODUCT_TO_CART(state, product) {
    state.productsInCart.push(product);
  },
  DELETE_PRODUCT_FROM_CART(state, index) {
    state.productsInCart.splice(index, 1);
  },
  IS_OPEN(state, boolean) {
    state.isOpen = boolean;
  },
  IS_HIDDEN(state, boolean) {
    state.isHidden = boolean;
  },
};

export const actions = {
  setActiveClass({ commit }, boolean) {
    commit('SET_ACTIVE_CLASS', boolean);
  },
  addProductToCart({ commit }, product) {
    commit('ADD_PRODUCT_TO_CART', product);
  },
  deleteProductFromCart({ state, commit }, value) {
    const findIndex = state.productsInCart.findIndex(
      (product) => product === value,
    );
    commit('DELETE_PRODUCT_FROM_CART', findIndex);
  },
  isOpen({ commit }, boolean) {
    commit('IS_OPEN', boolean);
  },
  isHidden({ commit }, boolean) {
    commit('IS_HIDDEN', boolean);
  },
};

export const getters = {
  activeClassCart: (state) => state.activeCart,
  productsInCart: (state) => state.productsInCart,
  isOpen: (state) => state.isOpen,
  isHidden: (state) => state.isHidden,
};
