import { lazy } from "react";
import { route } from "../../routes.types";

import { URL_ROUTES } from "../../url.routes";

const loginView = lazy(
  () => import("../../../views/login/login.view.component")
);

export const routes: route[] = [
  { path: URL_ROUTES.public.auth.login.path, component: loginView },
];
