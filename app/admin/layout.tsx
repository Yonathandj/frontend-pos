import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import NavigationSidebar from "@/components/custom/navigation-sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <NavigationSidebar />
        <main className="w-full p-4">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default AdminLayout;
