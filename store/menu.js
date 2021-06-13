export const state = () => ({
  isActive: false,
  menu: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
  ],
});

export const mutations = {
  SET_IS_ACTIVE(state) {
    state.isActive = !state.isActive;
  },
  CLOSE_MENU(state) {
    state.isActive = false;
  },
};

export const actions = {
  setIsActive({ commit }) {
    commit('SET_IS_ACTIVE');
  },
  closeMenu({ commit }) {
    commit('CLOSE_MENU');
  },
};

export const getters = {
  isActive: ({ isActive }) => isActive,
  menu: ({ menu }) => menu,
};
