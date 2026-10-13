import { 
    FaPlus, 
    FaShoppingBag, 
    FaUsers, 
    FaPills, 
    FaDollarSign, 
    FaArrowUp, 
    FaArrowDown, 
    FaExclamationTriangle,
    FaRegCalendarAlt
} from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi2";

const Dashboard = () => {
    // Summary Cards Data
    const stats = [
        {
            title: "Total Revenue",
            value: "$12,845.50",
            change: "+12.5%",
            isPositive: true,
            icon: FaDollarSign,
            color: "bg-blue-500",
            lightBg: "bg-blue-50 text-blue-600"
        },
        {
            title: "Total Orders",
            value: "1,248",
            change: "+8.2%",
            isPositive: true,
            icon: FaShoppingBag,
            color: "bg-emerald-500",
            lightBg: "bg-emerald-50 text-emerald-600"
        },
        {
            title: "Medicines in Stock",
            value: "450",
            change: "-2.4%",
            isPositive: false,
            icon: FaPills,
            color: "bg-purple-500",
            lightBg: "bg-purple-50 text-purple-600"
        },
        {
            title: "Active Users",
            value: "84",
            change: "+5.1%",
            isPositive: true,
            icon: FaUsers,
            color: "bg-amber-500",
            lightBg: "bg-amber-50 text-amber-600"
        }
    ];

    // Recent Orders Data
    const recentOrders = [
        {
            id: "ORD-9082",
            customer: "Sarah Jenkins",
            amount: "$48.24",
            status: "Delivered",
            date: "Today, 02:30 PM"
        },
        {
            id: "ORD-9083",
            customer: "Alex Rivera",
            amount: "$24.99",
            status: "Processing",
            date: "Today, 01:15 PM"
        },
        {
            id: "ORD-9084",
            customer: "Emily Watson",
            amount: "$112.50",
            status: "Pending",
            date: "Today, 11:45 AM"
        },
        {
            id: "ORD-9085",
            customer: "Michael Chen",
            amount: "$19.98",
            status: "Cancelled",
            date: "Yesterday"
        }
    ];

    // Low Stock Alert Items
    const lowStockItems = [
        { name: "Paracetamol 500mg Extra", stock: 12, category: "Pain Relief" },
        { name: "Digital Infrared Thermometer", stock: 3, category: "Equipment" },
        { name: "Omeprazole 20mg Capsules", stock: 8, category: "Digestive Health" }
    ];

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case "delivered":
                return "bg-emerald-50 text-emerald-600 border-emerald-200/50";
            case "processing":
                return "bg-blue-50 text-blue-600 border-blue-200/50";
            case "pending":
                return "bg-amber-50 text-amber-600 border-amber-200/50";
            case "cancelled":
                return "bg-rose-50 text-rose-600 border-rose-200/50";
            default:
                return "bg-slate-50 text-slate-600 border-slate-200/50";
        }
    };

    return (
        <div className="p-4 min-h-screen">
            {/* Header Section */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Pharmacy Overview</h2>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Welcome back! Here is what's happening with your store today.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 ">
                        <FaRegCalendarAlt className="text-slate-400" />
                        <span>Oct 13, 2026</span>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer">
                        <FaPlus className="text-xs" />
                        <span>Add Medicine</span>
                    </button>
                </div>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                {stats.map((stat, idx) => {
                    const IconComponent = stat.icon;
                    return (
                        <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200/80">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    {stat.title}
                                </span>
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.lightBg}`}>
                                    <IconComponent className="text-lg" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-baseline justify-between">
                                <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                                <span className={`inline-flex items-center gap-1 text-xs font-semibold ${
                                    stat.isPositive ? "text-emerald-600" : "text-rose-600"
                                }`}>
                                    {stat.isPositive ? <FaArrowUp className="text-[10px]" /> : <FaArrowDown className="text-[10px]" />}
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Recent Orders Section (2 Columns on large screens) */}
                <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200/80 overflow-hidden">
                    <div className="p-5 flex items-center justify-between border-b border-slate-100">
                        <div>
                            <h3 className="font-bold text-slate-800 text-base">Recent Orders</h3>
                            <p className="text-xs text-slate-400 mt-0.5">Latest sales transactions from your store</p>
                        </div>
                        <button className="text-xs font-semibold text-[#1E3A8A] hover:underline cursor-pointer">
                            View All
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 text-slate-400 text-xs uppercase tracking-wider bg-slate-50/50">
                                    <th className="py-3 px-5 font-semibold">Order ID</th>
                                    <th className="py-3 px-5 font-semibold">Customer</th>
                                    <th className="py-3 px-5 font-semibold">Amount</th>
                                    <th className="py-3 px-5 font-semibold">Status</th>
                                    <th className="py-3 px-5 font-semibold text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-sm">
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="py-3.5 px-5 font-semibold text-[#1E3A8A]">
                                            {order.id}
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <div>
                                                <div className="font-medium text-slate-800">{order.customer}</div>
                                                <div className="text-xs text-slate-400">{order.date}</div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-5 font-bold text-slate-800">
                                            {order.amount}
                                        </td>
                                        <td className="py-3.5 px-5 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusClass(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5 text-right">
                                            <button 
                                                className="p-1.5 rounded-lg text-slate-400 hover:text-[#1E3A8A] hover:bg-blue-50 transition-colors"
                                                title="View Details"
                                            >
                                                <HiOutlineEye className="text-lg" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Side Cards */}
                <div className="flex flex-col gap-6">
                    
                    {/* Low Stock Warning Card */}
                    <div className="bg-white p-5 rounded-lg border border-slate-200/80">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                                <FaExclamationTriangle className="text-base" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 text-base">Low Stock Alert</h3>
                                <p className="text-xs text-slate-400">Products that need restock</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {lowStockItems.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                                    <div>
                                        <h4 className="text-xs font-semibold text-slate-800">{item.name}</h4>
                                        <span className="text-[11px] text-slate-400">{item.category}</span>
                                    </div>
                                    <span className="px-2 py-1 bg-rose-50 text-rose-600 border border-rose-200/40 rounded-lg text-xs font-bold">
                                        {item.stock} left
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats / Info Banner */}
                    <div className="p-5 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-blue-900 text-white">
                        <h3 className="font-bold text-lg">Pharmacy Support</h3>
                        <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                            Need help managing inventory or configuring system settings? Contact admin support.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-colors cursor-pointer">
                            Contact Admin
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;