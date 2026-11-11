import { IoGridOutline, IoAddCircleOutline, IoPersonOutline } from "react-icons/io5";
import type { IconType } from "react-icons";

export interface INavLinks {
  name: string;
  to: string;
  icon: IconType;
}

export const navLinks: INavLinks[] = [
  { name: "Dashboard", to: "/user/dashboard", icon: IoGridOutline },
  { name: "Create Link", to: "/user/link", icon: IoAddCircleOutline },
  { name: "Profile", to: "/user/profile", icon: IoPersonOutline },
];