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
    element: <Dashboard />,
  },
  {
    path: "/users",
    element: <AllUsers />,
  },
  {
    path: "/user/:userId/followings",
    element: <FollowingUser />,
  },
  {
    path: "/user/:userId/followers",
    element: <UserFollowers />,
  },
  {
    path: "/tags",
    element: <AllTags />,
  },
  {
    path: "/user/:userId/tags",
    element: <FollowingTag />,
  },
  {
    path: "/user/:userId/followings/qoutes",
    element: <FollowingUserQoutes />,
  },
  {
    path: "/user/:userId/tags/qoutes",
    element: <FollowingTagQoutes />,
  },
  {
    path: "/users/:userId",
    element: <UserProfile />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export default router;
