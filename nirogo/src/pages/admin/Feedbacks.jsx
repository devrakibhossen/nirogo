import { useState } from "react";
import { FaSearch, FaFilter, FaStar, FaRegStar, FaReply, FaCheckCircle } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi2";

const Feedbacks = () => {
    const feedbacks= [
        {
            _id: "FB-101",
            userName: "Sarah Jenkins",
            userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
            productName: "Paracetamol 500mg Extra Strength",
            rating: 5,
            comment: "Fast delivery and genuine product! Highly recommended for quick relief.",
            date: "12 Oct, 2026",
            status: "Approved"
        },
        {
            _id: "FB-102",
            userName: "Alex Rivera",
            userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
            productName: "Digital Infrared Forehead Thermometer",
            rating: 4,
            comment: "Works well and gives accurate readings. The display light is very useful at night.",
            date: "11 Oct, 2026",
            status: "Approved"
        },
        {
            _id: "FB-103",
            userName: "Emily Watson",
            userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
            productName: "Vitamin C 1000mg + Zinc",
            rating: 2,
            comment: "Packaging was slightly damaged during shipping, though the product inside was fine.",
            date: "10 Oct, 2026",
            status: "Pending"
        },
        {
            _id: "FB-104",
            userName: "Michael Chen",
            userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
            productName: "Hydrating Cetaphil Cleanser",
            rating: 5,
            comment: "Great for sensitive skin. Doesn't cause any irritation. Will buy again!",
            date: "09 Oct, 2026",
            status: "Approved"
        },
        {
            _id: "FB-105",
            userName: "Jessica Taylor",
            userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
            productName: "Automatic Upper Arm BP Monitor",
            rating: 1,
            comment: "Received the wrong item initially. Customer support resolved it, but it took a few days.",
            date: "08 Oct, 2026",
            status: "Flagged"
        }
    ];

    const [selectedFeedbacks, setSelectedFeedbacks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedFeedbacks(feedbacks.map(f => f._id));
        } else {
            setSelectedFeedbacks([]);
        }
    };

    const handleSelectOne = (id) => {
        if (selectedFeedbacks.includes(id)) {
            setSelectedFeedbacks(selectedFeedbacks.filter(item => item !== id));
        } else {
            setSelectedFeedbacks([...selectedFeedbacks, id]);
        }
    };

    const getStatusBadge = (status) => {
        switch (status.toLowerCase()) {
            case "approved":
                return "bg-emerald-50 text-emerald-600 border-emerald-200/50";
            case "pending":
                return "bg-amber-50 text-amber-600 border-amber-200/50";
            case "flagged":
                return "bg-rose-50 text-rose-600 border-rose-200/50";
            default:
                return "bg-slate-50 text-slate-600 border-slate-200/50";
        }
    };

    const renderStars = (rating) => {
        return (
            <div className="flex items-center gap-1 text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                    i < rating ? <FaStar key={i} /> : <FaRegStar key={i} className="text-slate-300" />
                ))}
            </div>
        );
    };

    const filteredFeedbacks = feedbacks.filter(fb =>
        fb.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fb.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fb.comment.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 min-h-screen">
            {/* Header Section */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Customer Feedbacks</h2>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Manage customer reviews, ratings, and pharmacy service feedback.
                    </p>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-lg border border-slate-200/80  overflow-hidden">
                
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
                            placeholder="Search by customer, product, comment..."
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
                                        checked={selectedFeedbacks.length === filteredFeedbacks.length && filteredFeedbacks.length > 0}
                                        className="rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer" 
                                    />
                                </th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Customer</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Product</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Rating & Comment</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Status</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Date</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                            {filteredFeedbacks.length > 0 ? (
                                filteredFeedbacks.map((item) => {
                                    const isChecked = selectedFeedbacks.includes(item._id);
                                    return (
                                        <tr 
                                            key={item._id}
                                            className={`hover:bg-slate-50/80 transition-colors ${isChecked ? 'bg-blue-50/30' : ''}`}
                                        >
                                            {/* Checkbox */}
                                            <td className="py-4 px-4">
                                                <input 
                                                    type="checkbox" 
                                                    checked={isChecked}
                                                    onChange={() => handleSelectOne(item._id)}
                                                    className="rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer" 
                                                />
                                            </td>

                                            {/* Customer */}
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={item.userAvatar}
                                                        alt={item.userName}
                                                        className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0"
                                                    />
                                                    <span className="font-semibold text-slate-800 text-sm whitespace-nowrap">
                                                        {item.userName}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Product */}
                                            <td className="py-4 px-4 whitespace-nowrap font-medium text-slate-700 max-w-[180px] truncate">
                                                {item.productName}
                                            </td>

                                            {/* Rating & Comment */}
                                            <td className="py-4 px-4 max-w-xs sm:max-w-md">
                                                <div className="flex flex-col gap-1">
                                                    {renderStars(item.rating)}
                                                    <p className="text-xs text-slate-600 line-clamp-2">
                                                        "{item.comment}"
                                                    </p>
                                                </div>
                                            </td>

                                            {/* Status */}
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(item.status)}`}>
                                                    {item.status}
                                                </span>
                                            </td>

                                            {/* Date */}
                                            <td className="py-4 px-4 whitespace-nowrap text-slate-500 text-xs font-medium">
                                                {item.date}
                                            </td>

                                            {/* Actions */}
                                            <td className="py-4 px-4 text-right whitespace-nowrap">
                                                <div className="inline-flex items-center gap-1">
                                                    <button
                                                        className="p-2 rounded-lg text-slate-500 hover:text-[#1E3A8A] hover:bg-blue-50 transition-colors cursor-pointer"
                                                        title="Reply"
                                                    >
                                                        <FaReply className="text-sm" />
                                                    </button>
                                                    <button
                                                        className="p-2 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer"
                                                        title="Approve Review"
                                                    >
                                                        <FaCheckCircle className="text-sm" />
                                                    </button>
                                                    <button
                                                        className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                                        title="Delete Feedback"
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
                                    <td colSpan="7" className="text-center py-8 text-slate-400 text-sm">
                                        No feedbacks found.
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

export default Feedbacks;