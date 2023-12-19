import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const currentUser = useSelector((state) => state.current_user.data);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/", { replace: true });
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }
  return (
    <Routes>
      <Route {...rest} element={element} />
    </Routes>
  );
};

export default PrivateRoute;
