import {
  LayoutDashboard,
  UserCog,
  PackageSearch,
  TableRowsSplit,
} from "lucide-react";

export const OVERVIEW_GROUP = "OVERVIEW_GROUP";
export const MANAGE_GROUP = "MANAGE_GROUP";

export const SIDEBAR_GROUPS = [OVERVIEW_GROUP, MANAGE_GROUP];
export const SIDEBAR_ROUTES = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
    group: OVERVIEW_GROUP,
  },
  {
    title: "Users",
    url: "/admin/manage/users",
    icon: UserCog,
    group: MANAGE_GROUP,
  },
  {
    title: "Products",
    url: "/admin/manage/products",
    icon: PackageSearch,
    group: MANAGE_GROUP,
  },
  {
    title: "Tables",
    url: "/admin/manage/tables",
    icon: TableRowsSplit,
    group: MANAGE_GROUP,
  },
];
