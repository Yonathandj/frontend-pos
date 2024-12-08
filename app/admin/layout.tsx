import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import NavigationSidebar from "@/components/custom/navigation-sidebar";
import UserDropdown from "@/components/custom/user-dropdown";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <NavigationSidebar />
        <div className="w-full p-4">
          <header>
            <nav className="flex items-center justify-between">
              <SidebarTrigger />
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
