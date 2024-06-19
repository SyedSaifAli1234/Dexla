import {
  StarIcon,
  UserGroupIcon,
  CircleStackIcon,
  ChartBarIcon
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "blue",
    title: "Personal Injury",
    icon: StarIcon,
    description:
      "Providing compassionate and effective representation for those injured due to accidents or negligence, ensuring you receive the compensation you deserve.",
  },
  {
    color: "red",
    title: "Family Law",
    icon: UserGroupIcon,
    description:
      "Offering expert legal services in divorce, child custody, and family disputes, dedicated to protecting your family's best interests.",
  },
  {
    color: "teal",
    title: "Criminal Defense",
    icon: CircleStackIcon,
    description:
      "Defending your rights with a robust strategy, from minor offenses to serious charges, committed to achieving the best possible outcome.",
  },
  {
    color: "purple",
    title: "Estate Planning",
    icon: ChartBarIcon,
    description:
        "Helping you plan for the future with comprehensive estate planning, including wills, trusts, and probate services to secure your legacy.",
  }
];

export default featuresData;
