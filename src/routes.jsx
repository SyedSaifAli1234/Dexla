import {About, Contact, Home, Expertises} from "@/pages";
import {EnvelopeIcon, HomeIcon, InformationCircleIcon, UserCircleIcon,} from "@heroicons/react/24/solid";
import React from "react";
import Actualities from "@/pages/actualities"

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
    path: "/expertises",
    element: <Expertises />,
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
    path: "/actualities",
    element: <Actualities />,
  },
  {
    icon: EnvelopeIcon,
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  }
];

export default routes;
