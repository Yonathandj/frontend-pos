"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDEBAR_GROUPS, SIDEBAR_ROUTES } from "@/constants/routes";

const NavigationSidebar = () => {
  const { open } = useSidebar();
  const pathname = usePathname() ?? "";

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        {SIDEBAR_GROUPS.map((group) => (
          <SidebarGroup key={group}>
            <SidebarGroupLabel>
              {group.split("_")[0].charAt(0).toUpperCase() +
                group.split("_")[0].substring(1).toLowerCase()}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {SIDEBAR_ROUTES.map(
                  (route) =>
                    route.group === group && (
                      <SidebarMenuItem
                        key={route.title}
                        className={open ? `ml-4` : ``}
                      >
                        <SidebarMenuButton
                          tooltip={route.title}
                          isActive={pathname.includes(route.url)}
                          asChild
                        >
                          <Link href={route.url}>
                            <route.icon />
                            <span>{route.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ),
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default NavigationSidebar;
