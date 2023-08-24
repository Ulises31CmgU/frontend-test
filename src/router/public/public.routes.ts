import { lazy } from "react";
import { route } from "../routes.types";

import { URL_ROUTES } from "../url.routes";

const AuthRouter = lazy(() => import("./auth/auth.router"));

export const publicRoutes: route[] = [
  { path: URL_ROUTES.public.auth.path, component: AuthRouter },
];
