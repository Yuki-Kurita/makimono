import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div>header</div>
      {children}
      <div>footer</div>
    </div>
  );
};

export default Layout;
