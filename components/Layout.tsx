import Link from "next/link";
import React, { ReactNode } from "react";

import Header from "./Header";

interface LayoutProps {
  pageName?: string;
  children: ReactNode;
}

const Layout = ({ pageName, children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header logoLink="/" serviceName="Temporary accomodation" />
      <main id="main-content" className="lbh-main-wrapper" role="main">
        <div className="lbh-container">{children}</div>
      </main>
    </>
  );
};

export default Layout;
