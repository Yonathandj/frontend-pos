"use client";

import React from "react";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";

import { Slash } from "lucide-react";

const NavigationBreadcrumb = () => {
  const pathname = usePathname() ?? "";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>Admin</BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        {pathname.includes("/overview") ? (
          <BreadcrumbItem>
            <BreadcrumbPage>
              {pathname.split("/overview/")[1].charAt(0).toUpperCase() +
                pathname.split("/overview/")[1].substring(1)}
            </BreadcrumbPage>
          </BreadcrumbItem>
        ) : pathname.includes("/manage") ? (
          <BreadcrumbItem>
            <BreadcrumbPage>
              {pathname.split("/manage/")[1].charAt(0).toUpperCase() +
                pathname.split("/manage/")[1].substring(1)}
            </BreadcrumbPage>
          </BreadcrumbItem>
        ) : (
          <></>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavigationBreadcrumb;
