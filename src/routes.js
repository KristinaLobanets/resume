import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./components/HomePage/HomePage.js")),
    private: false,
    restricted: false,
  },
  {
    path: "/slills",
    label: "Skills",
    exact: true,
    component: lazy(() => import("./components/Skills/Skills.js")),
    private: false,
    restricted: false,
  },
];
