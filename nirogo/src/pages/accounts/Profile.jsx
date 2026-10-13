import { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [formData, setFormData] = useState({
    firstName: "Emma",
    lastName: "Watson",
    email: "bocouse@example.com",
    phone: "+91 98124 56525",
    dob: "",
    altMobile: "",
  });

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "password", label: "Password Change" },
    { id: "delete", label: "Delete Account" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg border border-[#f1f1f1]   p-6 sm:p-8">

        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-3 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute left-0 -bottom-px h-0.5 w-full bg-blue-700 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Profile Picture Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover ring-2 ring-gray-100"
          />
          <div>
            <h2 className="text-sm font-semibold text-gray-800 mb-0.5">
              Profile picture
            </h2>
            <p className="text-xs text-gray-500 mb-3">
              PNG or JPG no bigger than 1000px wide and tall.
            </p>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all duration-200">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 7.5 7.5 12M12 7.5V16.5" />
                </svg>
                Upload New Photo
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-200 bg-red-50 text-xs font-medium text-red-600 hover:bg-red-100 active:scale-95 transition-all duration-200">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                Delete Photo
              </button>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
          <Field label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
          <Field label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
          <Field label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" />
          <Field label="Phone" name="phone" value={formData.phone} onChange={handleChange} type="tel" />
          <Field label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} placeholder="Birthday (dd/mm/yyyy)" />
          <Field label="Alternate mobile details" name="altMobile" value={formData.altMobile} onChange={handleChange} placeholder="Mobile details" />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-8">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-700 text-white text-sm font-medium shadow-md shadow-blue-800/25 hover:bg-blue-800 hover:shadow-lg active:scale-95 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Save Details
          </button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

/* Reusable input field */
const Field = ({ label, name, value, onChange, type = "text", placeholder }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200"
    />
  </div>
);

export default Profile;