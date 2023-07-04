import { Home, Projects, SignIn, Contact } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

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
    name: "About",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: EnvelopeIcon,
    name: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
