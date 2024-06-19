import {About, Contact, Home } from "@/pages";
import {EnvelopeIcon, HomeIcon, InformationCircleIcon, UserCircleIcon,} from "@heroicons/react/24/solid";
import React from "react";
const Projects = React.lazy(() => import('@/pages/projects.jsx'));

export const routes = [
  {
    icon: HomeIcon,
    name: "Accueil",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Expertises",
    path: "/projects",
    element: <Projects />,
  },
  {
    icon: InformationCircleIcon,
    name: "Formations",
    path: "/about",
    element: <About />,
  },
  {
    icon: EnvelopeIcon,
    name: "Actualités",
    path: "/contact",
    element: <Contact />,
  },
  {
    icon: EnvelopeIcon,
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  }
];

export default routes;
