import React from "react";
import Header from "../Header/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <div>footer</div>
    </div>
  );
};

export default Layout;
