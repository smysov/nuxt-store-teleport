export const state = () => ({
  brands: [
    {
      id: 1,
      title: 'Bbk',
      link: 'logotips/bbk.jpg',
    },
    {
      id: 2,
      title: 'Columbia',
      link: 'logotips/columbia.png',
    },
    {
      id: 3,
      title: 'Geforce',
      link: 'logotips/geforce.png',
    },
    {
      id: 4,
      title: 'Kingston',
      link: 'logotips/kingston.jpg',
    },
    {
      id: 5,
      title: 'Quiksilver',
      link: 'logotips/quiksilver.jpg',
    },
    {
      id: 6,
      title: 'Xbox-one',
      link: 'logotips/xbox-one.png',
    },
  ],
});

export const getters = {
  brands: ({ brands }) => brands,
};
