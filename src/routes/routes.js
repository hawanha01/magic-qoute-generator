import Dashboard from "../pages/dashboard";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/registration/signin";
import Signup from "../pages/registration/signup";
import AllUsers from "../pages/users/index.jsx";
import AllTags from "../pages/tags/index.jsx";
import UserProfile from "../pages/users/userProfile.jsx";
import UserReported from "../pages/report/userReported.jsx";
import PrivateRoute from "./privateRoute";
import FollowingUser from "../pages/following/followingUser.jsx";
import FollowingTag from "../pages/following/followingTag.jsx";
import FollowingTagQoutes from "../pages/following/followingTagQoutes.jsx";
import FollowingUserQoutes from "../pages/following/followingUserQoutes.jsx";
import Followers from "../pages/followers/index.jsx";

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
    element: <PrivateRoute element={<Followers />} />,
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
    path: "/users/:userId/reports",
    element: <PrivateRoute element={<UserReported />} />,
  },
]);

export default router;
