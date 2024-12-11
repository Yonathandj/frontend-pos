import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import NavigationSidebar from "@/components/custom/navigation-sidebar";
import UserDropdown from "@/components/custom/user-dropdown";
import NavigationBreadcrumb from "@/components/custom/navigation-breadcrumb";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <NavigationSidebar />
        <div className="w-full p-6">
          <header>
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <SidebarTrigger />
                <NavigationBreadcrumb />
              </div>
              <UserDropdown />
            </nav>
          </header>
          <main className="mt-4">{children}</main>
        </div>
      </SidebarProvider>
    </>
  );
};

export default AdminLayout;
