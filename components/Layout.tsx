import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <main>
      <div className="container">{children}</div>
    </main>
  );
};

export default Layout;
