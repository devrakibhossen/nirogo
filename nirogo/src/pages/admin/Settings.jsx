import React, { useState } from "react";
import { 
    FaStore, 
    FaUser, 
    FaBell, 
    FaLock, 
    FaSave, 
    FaGlobe, 
    FaEnvelope, 
    FaPhone, 
    FaMapMarkerAlt, 
    FaShieldAlt 
} from "react-icons/fa";

const Settings = () => {
    const [activeTab, setActiveTab] = useState("general");

    // Form States
    const [generalInfo, setGeneralInfo] = useState({
        storeName: "MediCare Pharma",
        email: "contact@medicarepharma.com",
        phone: "+1 (555) 234-5678",
        address: "123 Health Ave, Medical District, NY 10001",
        currency: "USD ($)",
        timezone: "GMT-5 (Eastern Time)"
    });

    const [notifications, setNotifications] = useState({
        emailAlerts: true,
        lowStockAlerts: true,
        orderUpdates: true,
        weeklyReports: false
    });

    const [security, setSecurity] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        twoFactorAuth: true
    });

    const handleGeneralChange = (e) => {
        const { name, value } = e.target;
        setGeneralInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleNotificationToggle = (key) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSecurityChange = (e) => {
        const { name, value } = e.target;
        setSecurity(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        alert("Settings updated successfully!");
    };

    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            {/* Header Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
                <p className="text-sm text-slate-500 mt-0.5">
                    Manage your pharmacy store preferences, security, and notifications.
                </p>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                
                {/* Left Navigation Tabs */}
                <div className="lg:col-span-1 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm h-fit">
                    <nav className="flex flex-col gap-1">
                        <button
                            onClick={() => setActiveTab("general")}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                                activeTab === "general"
                                    ? "bg-[#1E3A8A] text-white shadow-xs"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                        >
                            <FaStore className="text-base" />
                            <span>Store Profile</span>
                        </button>

                        <button
                            onClick={() => setActiveTab("notifications")}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                                activeTab === "notifications"
                                    ? "bg-[#1E3A8A] text-white shadow-xs"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                        >
                            <FaBell className="text-base" />
                            <span>Notifications</span>
                        </button>

                        <button
                            onClick={() => setActiveTab("security")}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                                activeTab === "security"
                                    ? "bg-[#1E3A8A] text-white shadow-xs"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                        >
                            <FaLock className="text-base" />
                            <span>Security & Password</span>
                        </button>
                    </nav>
                </div>

                {/* Right Tab Content */}
                <div className="lg:col-span-3">
                    <form onSubmit={handleSave}>
                        
                        {/* 1. STORE PROFILE TAB */}
                        {activeTab === "general" && (
                            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                                <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
                                    Store Information
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Store Name */}
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                            Pharmacy Store Name
                                        </label>
                                        <input
                                            type="text"
                                            name="storeName"
                                            value={generalInfo.storeName}
                                            onChange={handleGeneralChange}
                                            className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                            Contact Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={generalInfo.email}
                                            onChange={handleGeneralChange}
                                            className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={generalInfo.phone}
                                            onChange={handleGeneralChange}
                                            className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                                        />
                                    </div>

                                    {/* Currency */}
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                            Currency Symbol
                                        </label>
                                        <select
                                            name="currency"
                                            value={generalInfo.currency}
                                            onChange={handleGeneralChange}
                                            className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all cursor-pointer"
                                        >
                                            <option value="USD ($)">USD ($)</option>
                                            <option value="EUR (€)">EUR (€)</option>
                                            <option value="GBP (£)">GBP (£)</option>
                                            <option value="BDT (৳)">BDT (৳)</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                        Store Address
                                    </label>
                                    <textarea
                                        name="address"
                                        rows="3"
                                        value={generalInfo.address}
                                        onChange={handleGeneralChange}
                                        className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                                    ></textarea>
                                </div>
                            </div>
                        )}

                        {/* 2. NOTIFICATIONS TAB */}
                        {activeTab === "notifications" && (
                            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                                <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
                                    Notification Preferences
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-slate-50/60 border border-slate-100 rounded-xl">
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-800">Email Notifications</h4>
                                            <p className="text-xs text-slate-400 mt-0.5">Receive system alerts via email</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.emailAlerts}
                                            onChange={() => handleNotificationToggle("emailAlerts")}
                                            className="w-5 h-5 rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-slate-50/60 border border-slate-100 rounded-xl">
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-800">Low Stock Alerts</h4>
                                            <p className="text-xs text-slate-400 mt-0.5">Get notified when medicine stock is running low</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.lowStockAlerts}
                                            onChange={() => handleNotificationToggle("lowStockAlerts")}
                                            className="w-5 h-5 rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-slate-50/60 border border-slate-100 rounded-xl">
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-800">New Order Notifications</h4>
                                            <p className="text-xs text-slate-400 mt-0.5">Alerts when customers place new orders</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.orderUpdates}
                                            onChange={() => handleNotificationToggle("orderUpdates")}
                                            className="w-5 h-5 rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 3. SECURITY TAB */}
                        {activeTab === "security" && (
                            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                                <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
                                    Security Settings
                                </h3>

                                <div className="space-y-4 max-w-lg">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                            Current Password
                                        </label>
                                        <input
                                            type="password"
                                            name="currentPassword"
                                            value={security.currentPassword}
                                            onChange={handleSecurityChange}
                                            placeholder="••••••••"
                                            className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="newPassword"
                                            value={security.newPassword}
                                            onChange={handleSecurityChange}
                                            placeholder="••••••••"
                                            className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                            Confirm New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={security.confirmPassword}
                                            onChange={handleSecurityChange}
                                            placeholder="••••••••"
                                            className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Save Button Bar */}
                        <div className="mt-6 flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm font-medium rounded-xl transition-colors shadow-sm cursor-pointer"
                            >
                                <FaSave className="text-xs" />
                                <span>Save Changes</span>
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Settings;