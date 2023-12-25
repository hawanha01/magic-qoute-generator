import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavLayout from "../components/navbar/navLayout";

const PrivateRoute = ({ element }) => {
  const currentUser = useSelector((state) => state.currentUser.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return currentUser ? <NavLayout> {element} </NavLayout> : null;
};

export default PrivateRoute;
