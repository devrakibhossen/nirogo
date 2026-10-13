import { useState } from "react";
import { FaSearch, FaFilter, FaUserShield, FaEnvelope, } from "react-icons/fa";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

const UserManagement = () => {
    const users = [
        {
            _id: "1",
            name: "Dr. Sarah Jenkins",
            email: "sarah.jenkins@pharmacy.com",
            phone: "+1 (555) 019-2834",
            role: "Admin",
            status: "Active",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
            joinedDate: "12 Jan, 2024"
        },
        {
            _id: "2",
            name: "Alex Rivera",
            email: "alex.rivera@pharmacy.com",
            phone: "+1 (555) 018-9921",
            role: "Pharmacist",
            status: "Active",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
            joinedDate: "05 Mar, 2024"
        },
        {
            _id: "3",
            name: "Emily Watson",
            email: "emily.w@pharmacy.com",
            phone: "+1 (555) 017-3342",
            role: "Manager",
            status: "Inactive",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
            joinedDate: "18 Nov, 2023"
        },
        {
            _id: "4",
            name: "Michael Chen",
            email: "m.chen@pharmacy.com",
            phone: "+1 (555) 012-7788",
            role: "Pharmacist",
            status: "Active",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
            joinedDate: "02 Feb, 2024"
        },
        {
            _id: "5",
            name: "Jessica Taylor",
            email: "j.taylor@pharmacy.com",
            phone: "+1 (555) 014-5511",
            role: "Cashier",
            status: "Suspended",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
            joinedDate: "20 May, 2024"
        }
    ];

    const [selectedUsers, setSelectedUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedUsers(users.map(u => u._id));
        } else {
            setSelectedUsers([]);
        }
    };

    const handleSelectOne = (id) => {
        if (selectedUsers.includes(id)) {
            setSelectedUsers(selectedUsers.filter(item => item !== id));
        } else {
            setSelectedUsers([...selectedUsers, id]);
        }
    };

    const getRoleBadgeClass = (role) => {
        switch (role.toLowerCase()) {
            case "admin":
                return "bg-purple-50 text-purple-700 border-purple-200/50";
            case "manager":
                return "bg-blue-50 text-blue-700 border-blue-200/50";
            case "pharmacist":
                return "bg-teal-50 text-teal-700 border-teal-200/50";
            default:
                return "bg-slate-50 text-slate-600 border-slate-200/50";
        }
    };

    const getStatusBadgeClass = (status) => {
        switch (status.toLowerCase()) {
            case "active":
                return "bg-emerald-50 text-emerald-600 border-emerald-200/40";
            case "inactive":
                return "bg-amber-50 text-amber-600 border-amber-200/40";
            case "suspended":
                return "bg-rose-50 text-rose-600 border-rose-200/40";
            default:
                return "bg-slate-50 text-slate-600 border-slate-200/40";
        }
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 min-h-screen">
            {/* Top Breadcrumb & Title */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">User Management</h2>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Manage user roles, permissions, and staff accounts.
                    </p>
                </div>
                <button
                    className="text-xs text-gray-600"
                >
                   Dashboard
                    <span>{` >`}  User Management</span>
                </button>
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
                            placeholder="Search by name, email or role..."
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
                                        checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                                        className="rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer" 
                                    />
                                </th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">User Details</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Role</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Status</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Joined Date</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => {
                                    const isChecked = selectedUsers.includes(user._id);
                                    return (
                                        <tr 
                                            key={user._id}
                                            className={`hover:bg-slate-50/80 transition-colors ${isChecked ? 'bg-blue-50/30' : ''}`}
                                        >
                                            {/* Checkbox */}
                                            <td className="py-4 px-4">
                                                <input 
                                                    type="checkbox" 
                                                    checked={isChecked}
                                                    onChange={() => handleSelectOne(user._id)}
                                                    className="rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer" 
                                                />
                                            </td>

                                            {/* User Details */}
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3.5">
                                                    <img
                                                        src={user.avatar}
                                                        alt={user.name}
                                                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                                                    />
                                                    <div>
                                                        <h4 className="font-semibold text-slate-800 text-sm hover:text-[#1E3A8A] transition-colors cursor-pointer">
                                                            {user.name}
                                                        </h4>
                                                        <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
                                                            <span className="flex items-center gap-1">
                                                                <FaEnvelope className="text-[10px]" />
                                                                {user.email}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Role */}
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${getRoleBadgeClass(user.role)}`}>
                                                    <FaUserShield className="text-[11px]" />
                                                    {user.role}
                                                </span>
                                            </td>

                                            {/* Status */}
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadgeClass(user.status)}`}>
                                                    {user.status}
                                                </span>
                                            </td>

                                            {/* Joined Date */}
                                            <td className="py-4 px-4 whitespace-nowrap text-slate-500 text-xs font-medium">
                                                {user.joinedDate}
                                            </td>

                                            {/* Actions */}
                                            <td className="py-4 px-4 text-right whitespace-nowrap">
                                                <div className="inline-flex items-center gap-1">
                                                    <button
                                                        className="p-2 rounded-lg text-slate-500 hover:text-[#1E3A8A] hover:bg-blue-50 transition-colors cursor-pointer"
                                                        title="Edit User"
                                                    >
                                                        <HiOutlinePencilSquare className="text-lg" />
                                                    </button>
                                                    <button
                                                        className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                                        title="Delete User"
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
                                    <td colSpan="6" className="text-center py-8 text-slate-400 text-sm">
                                        No users found matching your search.
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

export default UserManagement;