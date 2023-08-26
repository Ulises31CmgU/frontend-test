import { lazy } from "react";

import { route } from "../routes.types";
import { URL_ROUTES } from "../url.routes";

const chat = lazy(() => import("../../views/chat/chat.view.component"));

export const privateRoutes: route[] = [
  { path: URL_ROUTES.private.chat.path, component: chat },
];
