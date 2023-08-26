import React from "react";

import "./layout.styles.scss";
import { SidebarComponent, ContentWrapperComponent } from "..";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      <SidebarComponent />
      <ContentWrapperComponent>{children}</ContentWrapperComponent>
    </div>
  );
};

export default LayoutComponent;
