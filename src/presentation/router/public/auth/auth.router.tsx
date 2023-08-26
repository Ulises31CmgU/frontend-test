import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { selectIsLoggedIn } from "../../../redux/auth/auth.selectors";

import { routes } from "./auth.routes";
import { URL_ROUTES } from "../../url.routes";

const AuthRouter = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Routes>
      {!isUserLoggedIn ? (
        routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))
      ) : (
        <Route
          path="/*"
          element={<Navigate to={URL_ROUTES.private.chat.fullPath} />}
        />
      )}
    </Routes>
  );
};

export default AuthRouter;
