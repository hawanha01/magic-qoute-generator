const userStore = [
  {
    id: 1,
    firstName: "super",
    lastName: "admin",
    profilePicture: "../assets/profile_picture/profile_picture.jpg",
    name: "admin",
    gender: "male",
    email: "admin@gmail.com",
    password: "123456",
    followingIds: [],
    tagIds: [],
    reportIds: [],
  },
];

export const defaultUser = {
  id: null,
  firstName: null,
  lastName: null,
  profilePicture: null,
  name: null,
  gender: null,
  email: null,
  password: null,
  followingIds: [],
  tagIds: [],
  reportIds: [],
};
export default userStore;
