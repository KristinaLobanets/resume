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
    path: "/skills",
    label: "Skills",
    exact: true,
    component: lazy(() => import("./components/Skills/Skills.js")),
    private: false,
    restricted: false,
  },
  {
    path: "/projects",
    label: "Projects",
    exact: true,
    component: lazy(() => import("./components/Projects/Projects.js")),
    private: false,
    restricted: false,
  },
  {
    path: "/resume",
    label: "Resume",
    exact: true,
    component: lazy(() => import("./components/Resume/Resume.js")),
    private: false,
    restricted: false,
  },
];
