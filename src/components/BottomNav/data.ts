import {
  LayoutDashboard,
  Users,
  Plus,
  UserRound,
  Settings,
} from "lucide-react";

export const mobileNavItems = [
  {
    label: "Home",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Leads",
    path: "/leads",
    icon: Users,
  },
  {
    label: "Add",
    path: "/leads/createLeadPage",
    icon: Plus,
    primary: true,
  },
  {
    label: "Staff",
    path: "#",
    icon: UserRound,
  },
  {
    label: "Settings",
    path: "#",
    icon: Settings,
  },
];