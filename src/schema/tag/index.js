const tagStore = [
  {
    id: 1,
    title: "title1",
    follow_ids: [1, 2, 3],
    qoute_ids: [1],
  },
  {
    id: 2,
    title: "title2",
    follow_ids: [1, 2, 3],
    qoute_ids: [1, 2, 3],
  },
  {
    id: 3,
    title: "title3",
    follow_ids: [3],
    qoute_ids: [3],
  },
];

export const defaultTag = {
  id: null,
  title: null,
  follow_ids: null,
  qoute_ids: null,
};

export default tagStore;
