import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-dvh bg-[#f1f1f1] overflow-hidden">
      <aside>
        <Sidebar />
      </aside>

      <main className="flex-1 min-w-0 overflow-y-auto px-4 pb-4 pt-[4.5rem] lg:pl-0 lg:pt-4">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;