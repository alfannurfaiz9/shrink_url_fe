import type { IconType } from "react-icons";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

interface IFeatureList {
  icon: IconType;
  iconBg: string;
  title: string;
  description: string;
  barColor: string;
  iconColor: string
}

export const featureList: IFeatureList[] = [
  {
    icon: BsLightningChargeFill,
    iconBg: "bg-primary/10",
    title: "Easy Create",
    description:
      "Instantly generate high-performance short links with a single click or through our surgical API endpoints.",
    barColor: "bg-primary/70",
    iconColor: "text-primary",
  },
  {
    icon: FaPen,
    iconBg: "bg-primary/10",
    title: "Custom Slugs",
    description:
      "Maintain brand authority with readable, custom link endings that resonate with your digital audience.",
    barColor: "bg-primary/70",
    iconColor: "text-primary",
  },
  {
    icon: HiUsers,
    iconBg: "bg-accent-1/40",
    title: "Team Ready",
    description:
      "Collaborate across departments with shared workspaces, permissions, and unified analytics dashboards.",
    barColor: "bg-accent-1/90",
    iconColor: "text-accent-1",
  },
];
