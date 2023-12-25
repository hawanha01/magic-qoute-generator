import React from "react";
import MyNavBar from ".";

const NavLayout = ({ children }) => {
  return (
    <div>
      <MyNavBar />
      {children}
    </div>
  );
};

export default NavLayout;
