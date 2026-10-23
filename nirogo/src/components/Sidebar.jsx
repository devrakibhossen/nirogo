import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import {
    HiOutlineHome,
    HiOutlineCog6Tooth,
    HiOutlineQuestionMarkCircle,
    HiOutlineSquare3Stack3D,
    HiOutlineUsers,
    HiOutlineShoppingBag,
    HiOutlineChatBubbleLeftRight,
    HiOutlineBars3,
    HiOutlineXMark,
} from "react-icons/hi2";

import nirogo_Logo from '../assets/nirogo.png'
import nirogoFav from '../assets/nirogofav.png'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const DESKTOP_QUERY = "(min-width: 1024px)"; // Tailwind `lg`

const Sidebar = () => {
    // Desktop: collapse / expand
    const [isCollapsed, setIsCollapsed] = useState(false);
    // Mobile: drawer open / close
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(() =>
        typeof window !== "undefined" ? window.matchMedia(DESKTOP_QUERY).matches : true
    );

    // Mobile-এ sidebar সবসময় full (expanded) থাকবে, collapse শুধু desktop-এ
    const collapsed = isCollapsed && isDesktop;

    const closeMobile = () => setMobileOpen(false);

    // Label (text) animate হবে: width + margin + opacity একসাথে
    // তাই text আর হঠাৎ করে উধাও/হাজির হয় না, width-এর সাথে সুন্দরভাবে slide করে
    const labelClasses = `overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${collapsed ? "ml-0 max-w-0 opacity-0" : "ml-3 max-w-[10rem] opacity-100"
        }`;

    // Screen size change হলে desktop/mobile state sync
    useEffect(() => {
        const mql = window.matchMedia(DESKTOP_QUERY);
        const handleChange = (e) => {
            setIsDesktop(e.matches);
            if (e.matches) setMobileOpen(false);
        };
        mql.addEventListener("change", handleChange);
        return () => mql.removeEventListener("change", handleChange);
    }, []);

    // Drawer খোলা থাকলে: Esc দিয়ে বন্ধ + background scroll lock
    useEffect(() => {
        if (!mobileOpen) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const mainNavItems = [
        { name: "Dashboard", path: "/dashboard", icon: MdOutlineDashboardCustomize },
        { name: "All Products", path: "/dashboard/all-medicine", icon: HiOutlineSquare3Stack3D },
        { name: "Add Product", path: "/dashboard/add-product", icon: FaPlus },
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
        <>
            {/* Mobile Top Bar (শুধু lg-এর নিচে দেখাবে) */}
            <header className="fixed top-0 inset-x-0 z-30 h-14 px-4 flex items-center justify-between bg-[#F8F9FA] border-b border-gray-200 lg:hidden">
                <img src={nirogo_Logo} width="100" height="30" alt="Nirogo" />
                <button
                    type="button"
                    onClick={() => setMobileOpen(true)}
                    className="p-2 -mr-2 rounded-full text-slate-800 hover:bg-slate-200/50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-slate-400"
                    aria-label="Open menu"
                    aria-expanded={mobileOpen}
                >
                    <HiOutlineBars3 className="text-2xl" />
                </button>
            </header>

            {/* Mobile Backdrop */}
            <div
                onClick={closeMobile}
                aria-hidden="true"
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* Sidebar wrapper: mobile-এ slide-in drawer, desktop-এ static */}
            <div
                className={`p-4 h-dvh lg:h-screen flex flex-col justify-between fixed inset-y-0 left-0 z-50 transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Sidebar Container */}
                <aside
                    className={`bg-[#F8F9FA] rounded-lg p-3 flex flex-col justify-between h-full border border-gray-200 transition-all duration-300 ease-in-out ${collapsed ? "w-20" : "w-64"
                        }`}
                >
                    {/* Top Section */}
                    <div>
                        {/* Header / Logo */}
                        <div className="mb-6 flex items-center justify-between p-2.5 rounded-2xl cursor-pointer">
                            {/* দুই logo একসাথে থাকে, শুধু crossfade + width animate হয় */}
                            <div
                                className={`relative h-[30px] shrink-0 overflow-hidden transition-[width] duration-300 ease-in-out ${collapsed ? "w-[30px]" : "w-[100px]"
                                    }`}
                            >
                                <img
                                    src={nirogo_Logo}
                                    width="100"
                                    height="30"
                                    alt="Nirogo"
                                    className={`absolute left-0 top-0 max-w-none transition-opacity duration-300 ${collapsed ? "opacity-0" : "opacity-100"
                                        }`}
                                />
                                <img
                                    src={nirogoFav}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className={`absolute left-0 top-0 max-w-none transition-opacity duration-300 ${collapsed ? "opacity-100" : "opacity-0"
                                        }`}
                                />
                            </div>

                            {/* Mobile Close Button */}
                            <button
                                type="button"
                                onClick={closeMobile}
                                className="p-1.5 rounded-full text-slate-800 hover:bg-slate-200/50 transition-colors duration-200 lg:hidden"
                                aria-label="Close menu"
                            >
                                <HiOutlineXMark className="text-2xl" />
                            </button>
                        </div>

                        {/* Main Navigation */}
                        <nav className="space-y-1">
                            {mainNavItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        onClick={closeMobile}
                                        className={({ isActive }) =>
                                            `group relative flex items-center justify-between px-3 py-2.5 rounded-full font-medium text-sm transition-colors duration-200 ${isActive
                                                ? "bg-[#f1f1f1] text-[#0D1512]"
                                                : "text-slate-700 hover:bg-slate-200/50"
                                            }`
                                        }
                                    >
                                        <div className="flex items-center">
                                            <Icon className="text-xl shrink-0 text-slate-800" />
                                            <span className={labelClasses}>{item.name}</span>
                                        </div>

                                        {/* Collapsed Tooltip */}
                                        {collapsed && (
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
                                        onClick={closeMobile}
                                        className={({ isActive }) =>
                                            `group relative flex items-center px-3 py-2.5 rounded-2xl font-medium text-sm transition-colors duration-200 ${isActive
                                                ? "bg-[#E6F9F0] text-[#0D1512]"
                                                : "text-slate-700 hover:bg-slate-200/50"
                                            }`
                                        }
                                    >
                                        <Icon className="text-xl shrink-0 text-slate-800" />
                                        <span className={labelClasses}>{item.name}</span>

                                        {/* Collapsed Tooltip */}
                                        {collapsed && (
                                            <div className="absolute left-full ml-3 px-3 py-1.5 bg-slate-700 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none shadow-md">
                                                {item.name}
                                            </div>
                                        )}
                                    </NavLink>
                                );
                            })}
                        </nav>

                        <hr className="border-slate-200 mb-4" />

                        {/* User Profile (desktop-এ click করলে collapse toggle) */}
                        <div
                            onClick={() => isDesktop && setIsCollapsed(!isCollapsed)}
                            className="flex items-center p-1 rounded-2xl cursor-pointer hover:bg-slate-200/50 transition-colors"
                            title={isDesktop ? "Click to toggle collapse" : undefined}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                                alt="John Doe"
                                className="w-10 h-10 rounded-full object-cover shrink-0"
                            />
                            <div className={labelClasses}>
                                <h4 className="text-sm font-bold text-slate-800 leading-tight truncate">
                                    John Doe
                                </h4>
                                <p className="text-xs text-slate-400 truncate">johndoe@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default Sidebar;