import Dashboard from "../pages/dashboard";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/registration/signin";
import Signup from "../pages/registration/signup";
import AllUsers from "../components/users";
import AllTags from "../components/tags";
import FollowingUser from "../components/following/followingUser";
import FollowingTag from "../components/following/followingTag";
import FollowingUserQoutes from "../components/following/followingUserQoutes";
import FollowingTagQoutes from "../components/following/followingTagQoutes";
import UserProfile from "../components/users/userProfile";
import UserFollowers from "../components/following/userFollowers";
import Search from "../pages/search";
import UserReported from "../components/report/userReported";
import PrivateRoute from "./privateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/registration",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute element={<Dashboard />} />,
  },
  {
    path: "/users",
    element: <PrivateRoute element={<AllUsers />} />,
  },
  {
    path: "/user/:userId/followings",
    element: <PrivateRoute element={<FollowingUser />} />,
  },
  {
    path: "/user/:userId/followers",
    element: <PrivateRoute element={<UserFollowers />} />,
  },
  {
    path: "/tags",
    element: <PrivateRoute element={<AllTags />} />,
  },
  {
    path: "/user/:userId/tags",
    element: <PrivateRoute element={<FollowingTag />} />,
  },
  {
    path: "/user/:userId/followings/qoutes",
    element: <PrivateRoute element={<FollowingUserQoutes />} />,
  },
  {
    path: "/user/:userId/tags/qoutes",
    element: <PrivateRoute element={<FollowingTagQoutes />} />,
  },
  {
    path: "/users/:userId",
    element: <PrivateRoute element={<UserProfile />} />,
  },
  {
    path: "/search",
    element: <PrivateRoute element={<Search />} />,
  },
  {
    path: "/users/:userId/reports",
    element: <PrivateRoute element={<UserReported />} />,
  },
]);

export default router;
