import { Outlet } from "react-router-dom";

import DashboardSidebar from "../../pages/Dashboard/components/Sidebar";

export default function DashboardLayout() {
  return (
    <DashboardSidebar>
      {/* Replace children prop with Outlet */}
      <Outlet />
    </DashboardSidebar>
  );
}