import Vue from 'vue';

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
    Vue.set(product, 'quantity', 1);
    if (state.productsInCart.length) {
      let isProductExists = false;
      state.productsInCart.map((item) => {
        if (item.id === product.id) {
          isProductExists = true;
          item.quantity += 1;
        }
        return state.productsInCart;
      });
      if (!isProductExists) {
        state.productsInCart.push(product);
      }
    } else {
      state.productsInCart.push(product);
    }
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
  DECREASE_QUANTITY(state, index) {
    if (state.productsInCart[index].quantity > 1) {
      state.productsInCart[index].quantity -= 1;
    }
  },
  INCREASE_QUANTITY(state, index) {
    state.productsInCart[index].quantity += 1;
  },
};

export const actions = {
  setActiveClass({ commit }, boolean) {
    commit('SET_ACTIVE_CLASS', boolean);
  },
  addProductToCart({ commit }, product) {
    commit('ADD_PRODUCT_TO_CART', product);
  },
  deleteProductFromCart({ commit }, index) {
    commit('DELETE_PRODUCT_FROM_CART', index);
  },
  isOpen({ commit }, boolean) {
    commit('IS_OPEN', boolean);
  },
  isHidden({ commit }, boolean) {
    commit('IS_HIDDEN', boolean);
  },
  decreaseQuantity({ commit }, index) {
    commit('DECREASE_QUANTITY', index);
  },
  increaseQuantity({ commit }, index) {
    commit('INCREASE_QUANTITY', index);
  },
};

export const getters = {
  activeClassCart: ({ activeCart }) => activeCart,
  productsInCart: ({ productsInCart }) => productsInCart,
  isOpen: ({ isOpen }) => isOpen,
  isHidden: ({ isHidden }) => isHidden,
};
