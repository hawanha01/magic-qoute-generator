const commentStore = [
  {
    id: 1,
    user_id: 1,
    qoute_id: 1,
    body: "comment 1",
    like_ids: [],
    dislike_ids: [],
    report_ids: [],
  },
  {
    id: 2,
    user_id: 2,
    qoute_id: 2,
    body: "comment 2",
    like_ids: [],
    dislike_ids: [],
    report_ids: [],
  },
  {
    id: 3,
    user_id: 3,
    qoute_id: 3,
    body: "comment 3",
    like_ids: [],
    dislike_ids: [],
    report_ids: [],
  },
];

export const defaultComment = {
  id: null,
  user_id: null,
  qoute_id: null,
  body: null,
  like_ids: [],
  dislike_ids: [],
  report_ids: [],
};

export default commentStore;
