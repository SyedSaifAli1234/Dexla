// routes.jsx
import { EnvelopeIcon, HomeIcon, InformationCircleIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Actualities from './pages/actualities';
import About from "./pages/about";
import Expertises from "./pages/expertises";
import Home from "./pages/home";
import Contact from "./pages/contact";

export const routes = [
  {
    icon: HomeIcon,
    name: 'Accueil',
    path: '/',
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: 'Expertises',
    path: '/expertises',
    element: <Expertises />,
  },
  {
    icon: InformationCircleIcon,
    name: 'Formations',
    path: '/about',
    element: <About />,
  },
  {
    icon: EnvelopeIcon,
    name: 'Actualités',
    path: '/actualities',
    element: <Actualities />,
  },
  {
    icon: EnvelopeIcon,
    name: 'Contact',
    path: '/contact',
    element: <Contact />,
  },
];

export default routes;
