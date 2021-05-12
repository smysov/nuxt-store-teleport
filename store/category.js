export const state = () => ({
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
});

export const actions = {
  setCategory({ dispatch }, category) {
    dispatch('goods/filteredByCategory', category, { root: true });
  },
};

export const getters = {
  category: (state) => state.category,
};
