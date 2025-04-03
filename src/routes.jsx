import {About, Contact, Home, Solutions} from "@/pages";
import {EnvelopeIcon, HomeIcon, InformationCircleIcon, UserCircleIcon,} from "@heroicons/react/24/solid";
import React from "react";
const Projects = React.lazy(() => import('@/pages/projects.jsx'));

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "projects",
    path: "/projects",
    element: <Projects />,
  },
  {
    icon: InformationCircleIcon,
    name: "About us",
    path: "/about",
    element: <About />,
  },
  {
    icon: InformationCircleIcon,
    name: "Our Solutions",
    path: "/solutions",
    element: <Solutions />,
  },
  {
    icon: EnvelopeIcon,
    name: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
