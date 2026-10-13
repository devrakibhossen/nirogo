import { useState } from "react";
import { FaPlus, FaCloudUploadAlt, FaArrowLeft, FaTimes } from "react-icons/fa";
const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        category: "Medicine",
        price: "",
        rating: "5.0",
        stockStatus: "In Stock",
        description: "",
        images: [""]
    });

    const [imagePreview, setImagePreview] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (index, value) => {
        const updatedImages = [...formData.images];
        updatedImages[index] = value;
        setFormData((prev) => ({
            ...prev,
            images: updatedImages
        }));
        if (index === 0) {
            setImagePreview(value);
        }
    };

    const addImageField = () => {
        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ""]
        }));
    };

    const removeImageField = (index) => {
        const updatedImages = formData.images.filter((_, i) => i !== index);
        setFormData((prev) => ({
            ...prev,
            images: updatedImages.length ? updatedImages : [""]
        }));
        if (index === 0) {
            setImagePreview(updatedImages[0] || "");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting New Product:", formData);
        alert("Product added successfully!");
    };

    return (
        <div className="p-4 min-h-screen">
            {/* Header Section */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Add New Product</h2>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Add new medicine or healthcare item to your store inventory.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-xl transition-colors shadow-2xs cursor-pointer"
                >
                    <FaArrowLeft className="text-xs" />
                    <span>Back to Products</span>
                </button>
            </div>

            {/* Form Card */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Side: Product Information */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-slate-200/80  space-y-5">
                    <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
                        Basic Information
                    </h3>

                    {/* Product Name */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                            Product Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Paracetamol 500mg Extra Strength"
                            className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-full text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                        />
                    </div>

                    {/* Category & Stock Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                Category <span className="text-rose-500">*</span>
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-full text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all cursor-pointer"
                            >
                                <option value="Medicine">Medicine</option>
                                <option value="Supplements">Supplements & Vitamins</option>
                                <option value="Medical Devices">Medical Devices</option>
                                <option value="Personal Care">Personal Care</option>
                                <option value="First Aid">First Aid</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                Stock Status
                            </label>
                            <select
                                name="stockStatus"
                                value={formData.stockStatus}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-full text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all cursor-pointer"
                            >
                                <option value="In Stock">In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </select>
                        </div>
                    </div>

                    {/* Price & Rating */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                Price ($) <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                name="price"
                                required
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="0.00"
                                className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-full text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                                Initial Rating
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                max="5"
                                min="1"
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                placeholder="5.0"
                                className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-full text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Write a brief product description..."
                            className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                        ></textarea>
                    </div>
                </div>

                {/* Right Side: Image Upload & Preview */}
                <div className="space-y-6">
                    
                    {/* Image Links Card */}
                    <div className="bg-white p-6 rounded-lg border border-slate-200/80  space-y-4">
                        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
                            Product Images
                        </h3>

                        {/* Live Image Preview */}
                        <div className="w-full h-48 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center p-3 relative overflow-hidden">
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="Product Preview"
                                    className="w-full h-full object-contain"
                                    onError={() => setImagePreview("")}
                                />
                            ) : (
                                <div className="text-center text-slate-400">
                                    <FaCloudUploadAlt className="text-4xl mx-auto mb-1 text-slate-300" />
                                    <p className="text-xs font-medium">Image Preview</p>
                                </div>
                            )}
                        </div>

                        {/* Image URLs Input */}
                        <div className="space-y-3">
                            {formData.images.map((imgUrl, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        type="url"
                                        placeholder={`Image URL ${index + 1}`}
                                        value={imgUrl}
                                        onChange={(e) => handleImageChange(index, e.target.value)}
                                        className="w-full px-3.5 py-2 bg-slate-50/50 border border-slate-200 rounded-full text-xs text-slate-800 focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-all"
                                    />
                                    {formData.images.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeImageField(index)}
                                            className="p-2 text-slate-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
                                        >
                                            <FaTimes />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={addImageField}
                            className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-full transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                        >
                            <FaPlus className="text-[10px]" /> Add More Image Link
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#1E3A8A] hover:bg-blue-900 text-white font-medium text-sm rounded-full transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                        <FaPlus className="text-xs" />
                        <span>Save Product</span>
                    </button>
                </div>

            </form>
        </div>
    );
};

export default AddProduct;