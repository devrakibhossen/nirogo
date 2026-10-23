import { useState } from "react";
import { FaPlus, FaSearch, FaFilter, FaShoppingBag, FaCreditCard } from "react-icons/fa";
import { HiOutlinePencilSquare, HiOutlineTrash, HiOutlineEye } from "react-icons/hi2";

const OrderManagement = () => {
    const orders= [
        {
            _id: "NG-9082",
            customerName: "Sarah Jenkins",
            customerEmail: "sarah.j@example.com",
            itemsCount: 3,
            totalPrice: 48.24,
            paymentMethod: "Credit Card",
            paymentStatus: "Paid",
            orderStatus: "Delivered",
            orderDate: "12 Oct, 2026"
        },
        {
            _id: "NG-9083",
            customerName: "Alex Rivera",
            customerEmail: "alex.r@example.com",
            itemsCount: 1,
            totalPrice: 24.99,
            paymentMethod: "PayPal",
            paymentStatus: "Paid",
            orderStatus: "Processing",
            orderDate: "13 Oct, 2026"
        },
        {
            _id: "NG-9084",
            customerName: "Emily Watson",
            customerEmail: "emily.w@example.com",
            itemsCount: 5,
            totalPrice: 112.50,
            paymentMethod: "Cash on Delivery",
            paymentStatus: "Pending",
            orderStatus: "Pending",
            orderDate: "13 Oct, 2026"
        },
        {
            _id: "NG-9085",
            customerName: "Michael Chen",
            customerEmail: "m.chen@example.com",
            itemsCount: 2,
            totalPrice: 19.98,
            paymentMethod: "Credit Card",
            paymentStatus: "Refunded",
            orderStatus: "Cancelled",
            orderDate: "10 Oct, 2026"
        },
        {
            _id: "NG-9086",
            customerName: "Jessica Taylor",
            customerEmail: "j.taylor@example.com",
            itemsCount: 4,
            totalPrice: 65.40,
            paymentMethod: "Credit Card",
            paymentStatus: "Paid",
            orderStatus: "Shipped",
            orderDate: "11 Oct, 2026"
        }
    ];

    const [selectedOrders, setSelectedOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedOrders(orders.map(o => o._id));
        } else {
            setSelectedOrders([]);
        }
    };

    const handleSelectOne = (id) => {
        if (selectedOrders.includes(id)) {
            setSelectedOrders(selectedOrders.filter(item => item !== id));
        } else {
            setSelectedOrders([...selectedOrders, id]);
        }
    };

    const getOrderStatusBadge = (status) => {
        switch (status.toLowerCase()) {
            case "delivered":
                return "bg-emerald-50 text-emerald-600 border-emerald-200/50";
            case "processing":
                return "bg-blue-50 text-blue-600 border-blue-200/50";
            case "shipped":
                return "bg-indigo-50 text-indigo-600 border-indigo-200/50";
            case "pending":
                return "bg-amber-50 text-amber-600 border-amber-200/50";
            case "cancelled":
                return "bg-rose-50 text-rose-600 border-rose-200/50";
            default:
                return "bg-slate-50 text-slate-600 border-slate-200/50";
        }
    };

    const getPaymentStatusBadge = (status) => {
        switch (status.toLowerCase()) {
            case "paid":
                return "text-emerald-600 bg-emerald-50/60";
            case "pending":
                return "text-amber-600 bg-amber-50/60";
            case "refunded":
                return "text-slate-500 bg-slate-100";
            default:
                return "text-slate-600 bg-slate-50";
        }
    };

    const filteredOrders = orders.filter(order =>
        order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.orderStatus.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 min-h-screen">
            {/* Top Header */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Order Management</h2>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Monitor customer orders, payment status, and fulfillment.
                    </p>
                </div>
                <button
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm font-medium rounded-xl transition-colors duration-200 shadow-sm cursor-pointer"
                >
                    <FaPlus className="text-sm" />
                    <span>Create Order</span>
                </button>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-lg border border-slate-200/80 overflow-hidden">
                
                {/* Search & Filter Bar */}
                <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100">
                    <div className="relative w-full sm:w-80">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <FaSearch className="text-sm" />
                        </span>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by Order ID, Customer..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-full text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-full transition-colors shadow-2xs cursor-pointer"
                        >
                            <FaFilter className="text-xs text-slate-500" />
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100 text-slate-400 text-xs uppercase tracking-wider bg-slate-50/50">
                                <th className="py-3.5 px-4 w-10">
                                    <input 
                                        type="checkbox" 
                                        onChange={handleSelectAll}
                                        checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                                        className="rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer" 
                                    />
                                </th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Order ID</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Customer</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Items</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Total Price</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Payment</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Order Status</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Date</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((order) => {
                                    const isChecked = selectedOrders.includes(order._id);
                                    return (
                                        <tr 
                                            key={order._id}
                                            className={`hover:bg-slate-50/80 transition-colors ${isChecked ? 'bg-blue-50/30' : ''}`}
                                        >
                                            {/* Checkbox */}
                                            <td className="py-4 px-4">
                                                <input 
                                                    type="checkbox" 
                                                    checked={isChecked}
                                                    onChange={() => handleSelectOne(order._id)}
                                                    className="rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer" 
                                                />
                                            </td>

                                            {/* Order ID */}
                                            <td className="py-4 px-4 font-semibold text-[#1E3A8A] whitespace-nowrap">
                                                {order._id}
                                            </td>

                                            {/* Customer Info */}
                                            <td className="py-4 px-4">
                                                <div className="min-w-0">
                                                    <h4 className="font-semibold text-slate-800 text-sm">
                                                        {order.customerName}
                                                    </h4>
                                                    <p className="text-xs text-slate-400 mt-0.5">
                                                        {order.customerEmail}
                                                    </p>
                                                </div>
                                            </td>

                                            {/* Items Count */}
                                            <td className="py-4 px-4 whitespace-nowrap text-slate-600 font-medium">
                                                <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-lg text-xs">
                                                    <FaShoppingBag className="text-slate-400 text-[10px]" />
                                                    {order.itemsCount} {order.itemsCount === 1 ? 'item' : 'items'}
                                                </span>
                                            </td>

                                            {/* Total Price */}
                                            <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                                                ${order.totalPrice.toFixed(2)}
                                            </td>

                                            {/* Payment */}
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-xs font-medium text-slate-700 flex items-center gap-1">
                                                        <FaCreditCard className="text-[11px] text-slate-400" />
                                                        {order.paymentMethod}
                                                    </span>
                                                    <span className={`inline-block w-max px-2 py-0.5 rounded text-[11px] font-semibold ${getPaymentStatusBadge(order.paymentStatus)}`}>
                                                        {order.paymentStatus}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Order Status */}
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${getOrderStatusBadge(order.orderStatus)}`}>
                                                    {order.orderStatus}
                                                </span>
                                            </td>

                                            {/* Order Date */}
                                            <td className="py-4 px-4 whitespace-nowrap text-slate-500 text-xs font-medium">
                                                {order.orderDate}
                                            </td>

                                            {/* Actions */}
                                            <td className="py-4 px-4 text-right whitespace-nowrap">
                                                <div className="inline-flex items-center gap-1">
                                                    <button
                                                        className="p-2 rounded-lg text-slate-500 hover:text-[#1E3A8A] hover:bg-blue-50 transition-colors cursor-pointer"
                                                        title="View Order Details"
                                                    >
                                                        <HiOutlineEye className="text-lg" />
                                                    </button>
                                                    <button
                                                        className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                                                        title="Edit Order"
                                                    >
                                                        <HiOutlinePencilSquare className="text-lg" />
                                                    </button>
                                                    <button
                                                        className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                                        title="Cancel Order"
                                                    >
                                                        <HiOutlineTrash className="text-lg" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="9" className="text-center py-8 text-slate-400 text-sm">
                                        No orders found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default OrderManagement;