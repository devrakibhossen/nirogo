import { useState } from "react";
import { FaPlus, FaSearch, FaFilter } from "react-icons/fa";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

const AllMedicine = () => {
    const products = [
        {
            "_id": "1",
            "name": "Paracetamol 500mg Extra Strength",
            "images": [
                "https://i.ibb.co.com/0jk4Zmm0/image.png",
                "https://example.com/images/paracetamol-back.jpg"
            ],
            "description": "Fast-acting relief for mild-to-moderate fever, headaches, muscle aches...",
            "price": 4.99,
            "ratting": 4.8,
            "stock": "In Stock"
        },
        {
            "_id": "2",
            "name": "Vitamin C 1000mg + Zinc Effervescent Tablets",
            "images": [
                "https://i.ibb.co.com/m5tZtN85/image.png"
            ],
            "description": "Daily immune support supplement. Orange flavor effervescent tablets...",
            "price": 8.50,
            "ratting": 4.7,
            "stock": "In Stock"
        },
        {
            "_id": "3",
            "name": "Digital Infrared Forehead Thermometer",
            "images": [
                "https://i.ibb.co.com/N65pd3bF/image.png"
            ],
            "description": "Non-contact instant temperature measurement with backlit display...",
            "price": 24.99,
            "ratting": 4.6,
            "stock": "Out of Stock"
        },
        {
            "_id": "4",
            "name": "Hydrating Cetaphil Cleanser for Sensitive Skin",
            "images": [
                "https://i.ibb.co.com/ZzCFH7w8/image.png"
            ],
            "description": "Dermatologist-recommended gentle daily skin cleanser for dry to normal...",
            "price": 14.25,
            "ratting": 4.9,
            "stock": "In Stock"
        },
        {
            "_id": "5",
            "name": "Automatic Upper Arm Blood Pressure Monitor",
            "images": [
                "https://i.ibb.co.com/2bXZQR8/image.png"
            ],
            "description": "Clinically validated home blood pressure gauge with large LCD screen...",
            "price": 39.99,
            "ratting": 4.5,
            "stock": "Out of Stock"
        }
    ];

    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedItems(products.map(p => p._id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleSelectOne = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    return (
        <div className="p-4 min-h-screen">
            {/* Top Breadcrumb & Title */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Product List</h2>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Track your store's progress to boost your sales.
                    </p>
                </div>
                <button
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm  rounded-full transition-colors duration-200 shadow-sm cursor-pointer"
                >
                    <FaPlus className="text-sm" />
                    <span>New Product</span>
                </button>
            </div>

            {/* Main Content Container */}
            <div className="bg-white rounded-lg border border-slate-200/80 overflow-hidden">
                
                {/* Search & Filter Bar */}
                <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100">
                    <div className="relative w-full sm:w-80">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <FaSearch className="text-sm" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search medicine..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-full text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                        />
                    </div>
                    <button
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-full transition-colors shadow-2xs cursor-pointer"
                    >
                        <FaFilter className="text-xs text-slate-500" />
                        <span>Filter</span>
                    </button>
                </div>

                {/* Table Section */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100 text-slate-400 text-xs uppercase tracking-wider bg-slate-50/50">
                                <th className="py-3.5 px-4 w-10">
                                    <span className="sr-only">Select All</span>
                                    <input 
                                        type="checkbox" 
                                        onChange={handleSelectAll}
                                        checked={selectedItems.length === products.length && products.length > 0}
                                        className="rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer" 
                                    />
                                </th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Products</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Price</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Rating</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600">Status</th>
                                <th className="py-3.5 px-4 font-semibold text-slate-600 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                            {products?.map((product, index) => {
                                const isChecked = selectedItems.includes(product._id);
                                return (
                                    <tr 
                                        key={product._id || index}
                                        className={`hover:bg-slate-50/80 transition-colors ${isChecked ? 'bg-blue-50/30' : ''}`}
                                    >
                                        {/* Checkbox */}
                                        <td className="py-4 px-4">
                                            <input 
                                                type="checkbox" 
                                                checked={isChecked}
                                                onChange={() => handleSelectOne(product._id)}
                                                className="rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer" 
                                            />
                                        </td>

                                        {/* Product Info & Image */}
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3.5">
                                                <div className="w-12 h-12 rounded-xl bg-slate-50 p-1 flex items-center justify-center shrink-0 border border-slate-200/60 shadow-2xs">
                                                    <img
                                                        src={product.images[0]}
                                                        alt={product.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="min-w-0 max-w-xs sm:max-w-md">
                                                    <h4 className="font-semibold text-slate-800 text-sm truncate hover:text-[#1E3A8A] transition-colors cursor-pointer">
                                                        {product.name}
                                                    </h4>
                                                    <p className="text-xs text-slate-400 truncate mt-0.5">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Price */}
                                        <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                                            ${product.price ? product.price.toFixed(2) : "0.00"}
                                        </td>

                                        {/* Rating */}
                                        <td className="py-4 px-4 whitespace-nowrap font-medium text-slate-700">
                                            <span className="text-amber-500 font-semibold">{product.ratting} ★</span>
                                        </td>

                                        {/* Stock Status */}
                                        <td className="py-4 px-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                                                product.stock === "In Stock" 
                                                    ? "bg-emerald-50 text-emerald-600 border border-emerald-200/40" 
                                                    : "bg-rose-50 text-rose-600 border border-rose-200/40"
                                            }`}>
                                                {product.stock || "In Stock"}
                                            </span>
                                        </td>

                                        {/* Action Buttons */}
                                        <td className="py-4 px-4 text-right whitespace-nowrap">
                                            <div className="inline-flex items-center gap-1">
                                                <button
                                                    // onClick={() => onUpdate && onUpdate(product)}
                                                    className="p-2 rounded-lg text-slate-500 hover:text-[#1E3A8A] hover:bg-blue-50 transition-colors cursor-pointer"
                                                    title="Update Medicine"
                                                >
                                                    <HiOutlinePencilSquare className="text-lg" />
                                                </button>
                                                <button
                                                    // onClick={() => onDelete && onDelete(product._id)}
                                                    className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                                    title="Delete Medicine"
                                                >
                                                    <HiOutlineTrash className="text-lg" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllMedicine;