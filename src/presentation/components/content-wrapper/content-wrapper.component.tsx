import React from "react";

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapperComponent = ({ children }: ContentWrapperProps) => {
  return <div>{children}</div>;
};

export default ContentWrapperComponent;
