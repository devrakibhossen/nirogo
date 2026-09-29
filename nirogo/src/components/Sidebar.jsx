import { useState } from "react";
import { NavLink } from "react-router";
import {
    HiOutlineHome,
    HiOutlineCog6Tooth,
    HiOutlineQuestionMarkCircle,
    HiOutlineSquare3Stack3D,
    HiOutlineUsers,
    HiOutlineShoppingBag,
    HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

import nirogo_Logo from '../assets/nirogo.png'
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);


    const mainNavItems = [
        { name: "Dashboard", path: "/dashboard", icon: MdOutlineDashboardCustomize },
        { name: "All Products", path: "/dashboard/all-medicine", icon: HiOutlineSquare3Stack3D },
        { name: "User Management", path: "/dashboard/user-management", icon: HiOutlineUsers },
        { name: "Order Management", path: "/dashboard/order-management", icon: HiOutlineShoppingBag },
        { name: "Feedbacks", path: "/dashboard/feedbacks", icon: HiOutlineChatBubbleLeftRight },
        { name: "Home", path: "/", icon: HiOutlineHome },
    ];

    const bottomNavItems = [
        { name: "Settings", path: "/dashboard/settings", icon: HiOutlineCog6Tooth },
        { name: "Support", path: "/dashboard/support", icon: HiOutlineQuestionMarkCircle },
    ];

    return (
        <div className="p-4 h-screen flex flex-col justify-between">
            {/* Sidebar Container */}
            <aside
                className={`bg-[#F8F9FA] rounded-lg p-3 flex flex-col justify-between h-full border border-gray-200 transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"
                    }`}
            >
                {/* Top Section */}
                <div>
                    {/* Header / Workspace Selector */}
                    <div className="mb-6 flex items-center justify-between  p-2.5 rounded-2xl cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                            {
                                isCollapsed && (<img src="/src/assets/nirogofav.png" className="base" width="30" height="30" alt="" />)
                            }

                            {!isCollapsed && (
                                <img src={nirogo_Logo} className="base" width="100" height="30" alt="" />
                            )}
                        </div>

                    </div>

                    {/* Main Navigation */}
                    <nav className="space-y-1">
                        {mainNavItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `group relative flex items-center justify-between px-3 py-2.5 rounded-full font-medium text-sm transition-colors duration-200 ${isActive
                                            ? "bg-[#f1f1f1] text-[#0D1512]"
                                            : "text-slate-700 hover:bg-slate-200/50"
                                        }`
                                    }
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="text-xl shrink-0 text-slate-800" />
                                        {!isCollapsed && <span>{item.name}</span>}
                                    </div>



                                    {/* Collapsed Tooltip */}
                                    {isCollapsed && (
                                        <div className="absolute left-full ml-3 px-3 py-1.5 bg-white text-gray-900 text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                                            {item.name}
                                        </div>
                                    )}
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>

                {/* Bottom Section */}
                <div>
                    {/* Settings & Support */}
                    <nav className="space-y-1 mb-4">
                        {bottomNavItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `group relative flex items-center gap-3 px-3 py-2.5 rounded-2xl font-medium text-sm transition-colors duration-200 ${isActive
                                            ? "bg-[#E6F9F0] text-[#0D1512]"
                                            : "text-slate-700 hover:bg-slate-200/50"
                                        }`
                                    }
                                >
                                    <Icon className="text-xl shrink-0 text-slate-800" />
                                    {!isCollapsed && <span>{item.name}</span>}

                                    {/* Collapsed Tooltip */}
                                    {isCollapsed && (
                                        <div className="absolute left-full ml-3 px-3 py-1.5 bg-slate-700 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none shadow-md">
                                            {item.name}
                                        </div>
                                    )}
                                </NavLink>
                            );
                        })}
                    </nav>

                    <hr className="border-slate-200 mb-4" />

                    {/* User Profile */}
                    <div
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="flex items-center gap-3 p-1 rounded-2xl cursor-pointer hover:bg-slate-200/50 transition-colors"
                        title="Click to toggle collapse"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                            alt="John Doe"
                            className="w-10 h-10 rounded-full object-cover shrink-0"
                        />
                        {!isCollapsed && (
                            <div className="overflow-hidden">
                                <h4 className="text-sm font-bold text-slate-800 leading-tight truncate">
                                    John Doe
                                </h4>
                                <p className="text-xs text-slate-400 truncate">johndoe@gmail.com</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;