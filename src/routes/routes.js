import Dashboard from "../pages/dashboard";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/registration/signin";
import Signup from "../pages/registration/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "registration",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

export default router;
