import React from "react";
import { Route, Routes } from "react-router-dom";

import { LayoutComponent } from "../../components";

import { privateRoutes } from "./private.routes";

const PrivateRouter = () => {
  return (
    <LayoutComponent>
      <Routes>
        {privateRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </LayoutComponent>
  );
};

export default PrivateRouter;
