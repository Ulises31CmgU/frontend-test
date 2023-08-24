import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { selectIsUserLoggedIn } from "../redux/user/user.selectors";

import { LoadingComponent } from "../components";

import { publicRoutes } from "./public/public.routes";
import { URL_ROUTES } from "./url.routes";
import PrivateRouter from "./private/private.router";

const MainRouter = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Routes>
        {/* public routes */}
        {publicRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
        {/* private routes */}
        {isUserLoggedIn && <Route path="/*" element={<PrivateRouter />} />}
        <Route
          path="*"
          element={<Navigate to={URL_ROUTES.public.auth.login.fullPath} />}
        />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
