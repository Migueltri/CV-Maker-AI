import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Generator from "../pages/generator/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/generator",
    element: <Generator />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
