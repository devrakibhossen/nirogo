import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-[#f1f1f1] overflow-hidden">
      <aside>
        <Sidebar />
      </aside>

      <main className="flex-1 overflow-y-auto py-4 pr-4">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;