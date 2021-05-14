export const state = () => ({
  slides: [
    {
      id: 1,
      img: 'slider/credit.jpg',
      title: 'Credit',
    },
    {
      id: 2,
      img: 'slider/sale.jpg',
      title: 'Sale',
    },
    {
      id: 3,
      img: 'slider/new-collection.jpg',
      title: 'New collection',
    },
  ],
});

export const getters = {
  slides: (state) => state.slides,
};
