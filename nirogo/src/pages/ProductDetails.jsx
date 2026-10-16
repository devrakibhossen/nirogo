import { useState } from "react";
import {
    FaStar,
    FaTag,
    FaHeart,
    FaRegHeart,
    FaShareAlt,
    FaMinus,
    FaPlus,
    FaShoppingCart,
    FaTruck,
    FaShieldAlt,
    FaUndo,
    FaCheckCircle,
    FaUserCircle,
} from "react-icons/fa";

const ProductDetails = () => {
    const product = {
        _id: "65f1a2b3c4d5e6f7a8b9c0d1",
        name: "Digital Infrared Forehead Thermometer",
        slug: "digital-infrared-forehead-thermometer",
        brand: "Omron",
        manufacturer: "Omron Healthcare Co., Ltd.",
        sku: "OMR-THRM-001",
        model: "MC-720",
        category: "Medical Devices",
        subCategory: "Thermometers",
        rating: 4.6,
        tags: ["thermometer", "infrared", "non-contact", "fever", "digital"],
        images: [
            "https://i.ibb.co.com/N65pd3bF/image.png",
            "https://i.ibb.co.com/0jk4Zmm0/image.png",
            "https://i.ibb.co.com/m5tZtN85/image.png",
            "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600",
        ],
        thumbnail: "https://i.ibb.co.com/N65pd3bF/image.png",
        price: 24.99,
        oldPrice: 34.99,
        discountPercent: 28,
        currency: "BDT",
        stock: 45,
        stockStatus: "in-stock",
        lowStockThreshold: 10,
        unit: "piece",
        shortDescription:
            "Non-contact instant temperature measurement with backlit display and fever alert memory feature. Measures body, surface, and room temperature with ±0.2°C accuracy.",
        description:
        "The Omron MC-720 Digital Infrared Forehead Thermometer delivers fast, accurate, and hygienic temperature readings without any physical contact. Using advanced infrared technology, it measures body, surface, and room temperature in just 1 second with ±0.2°C accuracy. The backlit LCD display ensures clear visibility in low-light conditions, making it ideal for nighttime use. It features a fever alert system with a color-coded indicator and stores up to 32 previous readings for easy tracking. Powered by 2x AAA batteries with approximately 1 year of battery life, this thermometer is perfect for families, clinics, and travel. Its ergonomic ABS plastic body is lightweight, durable, and easy to clean.",
        specifications: {
            measurementRange: "32°C – 42.9°C (89.6°F – 109.2°F)",
            accuracy: "±0.2°C",
            responseTime: "1 second",
            displayType: "LCD Backlit",
            memoryCapacity: "32 readings",
            powerSource: "2x AAA Batteries",
            batteryLife: "~1 year",
            operatingDistance: "3–5 cm",
            weight: "120g",
            dimensions: "15 x 4 x 3 cm",
            material: "ABS Plastic",
            warranty: "2 Years",
        },
        createdAt: "2026-01-01T10:00:00Z",
        updatedAt: "2026-01-15T12:30:00Z",
    };

    const reviews = [
        {
            id: 1,
            name: "Rahim Ahmed",
            rating: 5,
            date: "2026-01-10",
            comment:
                "Excellent product! Very accurate and fast reading. The backlit display is a lifesaver at night.",
            verified: true,
        },
        {
            id: 2,
            name: "Sadia Islam",
            rating: 4,
            date: "2026-01-08",
            comment:
                "Good quality thermometer. Battery life is great. Slightly pricey but worth it.",
            verified: true,
        },
        {
            id: 3,
            name: "Karim Khan",
            rating: 5,
            date: "2026-01-05",
            comment:
                "Non-contact feature is perfect for kids. Highly recommended for every home.",
            verified: false,
        },
    ];

    const [selectedImage, setSelectedImage] = useState(
        product.images[0] || product.thumbnail
    );
    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleQuantityChange = (type) => {
        if (type === "inc" && quantity < product.stock) {
            setQuantity((q) => q + 1);
        } else if (type === "dec" && quantity > 1) {
            setQuantity((q) => q - 1);
        }
    };

    const handleAddToCart = () => {
        console.log("Added to cart:", { id: product._id, quantity });
    };

    return (
        <div className="max-w-[1200px] mx-auto my-5 px-4 md:px-0">
            {/* Breadcrumb */}
            <nav className="text-xs sm:text-sm text-gray-900 mb-8 flex items-center gap-2 flex-wrap">
                <span className="hover:text-[#1E3A8A] transition cursor-pointer">Home</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-[#1E3A8A] transition cursor-pointer">{product.category}</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-[#1E3A8A] transition cursor-pointer">{product.subCategory}</span>
                <span className="text-slate-300">/</span>
                <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
                    {product.name}
                </span>
            </nav>

            {/* Main Grid */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center max-w-[1000px] mx-auto">
                {/* Gallery */}
                <div>
                    <div className="mb-5 relative border border-slate-100 rounded-lg overflow-hidden bg-slate-50 aspect-square flex items-center justify-center p-6 group w-full lg:w-[420px]">
                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        {product.discountPercent > 0 && (
                            <div className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md shadow-rose-200 tracking-wide flex items-center gap-1">
                                <FaTag className="w-3 h-3" />
                                {product.discountPercent}% OFF
                            </div>
                        )}
                        <button
                            onClick={() => setIsWishlisted((w) => !w)}
                            aria-label="Wishlist"
                            className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all ${
                                isWishlisted
                                    ? "bg-rose-500 text-white"
                                    : "bg-white text-slate-600 hover:text-rose-500"
                            }`}
                        >
                            {isWishlisted ? (
                                <FaHeart className="w-4 h-4" />
                            ) : (
                                <FaRegHeart className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin">
                        {product.images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(img)}
                                className={`relative border-2 rounded-xl overflow-hidden w-20 h-20 flex-shrink-0 bg-slate-50 transition-all ${
                                    selectedImage === img
                                        ? "border-blue-600 ring-4 ring-blue-50 scale-95"
                                        : "border-slate-200 hover:border-slate-300"
                                }`}
                            >
                                <img
                                    src={img}
                                    alt={`${product.name} thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="space-y-3 flex-1">
                    <p className="text-xs font-bold tracking-widest text-gray-600">
                        {product.brand}
                    </p>
                    <h1 className="text-2xl flex flex-wrap items-center gap-2 font-medium text-slate-900 leading-snug">
                        {product.name}
                        <span className="text-xs sm:text-sm text-emerald-600 font-semibold flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                            <FaCheckCircle className="w-3 h-3" /> In Stock
                        </span>
                    </h1>

                    <div className="flex items-center gap-2">
                        <div className="flex text-amber-400 gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`w-4 h-4 ${
                                        i < Math.round(product.rating)
                                            ? "text-amber-400"
                                            : "text-slate-200"
                                    }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-800">
                            {product.rating}
                        </span>
                        <span className="text-sm text-gray-400">(245 Reviews)</span>
                    </div>

                    <div className="flex items-end gap-3">
                        <span className="text-2xl font-bold text-slate-900">
                            ${product.price.toFixed(2)}
                        </span>
                        <span className="text-lg text-gray-400 line-through mb-0.5">
                            ${product.oldPrice.toFixed(2)}
                        </span>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed">
                        {product.shortDescription}
                    </p>

                    {/* SKU & Stock */}
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500 pt-1">
                        <span>
                            SKU:{" "}
                            <span className="font-semibold text-slate-700">
                                {product.sku}
                            </span>
                        </span>
                        <span>
                            Model:{" "}
                            <span className="font-semibold text-slate-700">
                                {product.model}
                            </span>
                        </span>
                        <span>
                            Availability:{" "}
                            <span className="font-semibold text-emerald-600">
                                {product.stock} {product.unit}s in stock
                            </span>
                        </span>
                    </div>

                    {/* Quantity + Add to Cart */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                        <div className="flex items-center border border-slate-200 rounded-full overflow-hidden">
                            <button
                                onClick={() => handleQuantityChange("dec")}
                                disabled={quantity <= 1}
                                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                            >
                                <FaMinus className="w-3 h-3" />
                            </button>
                            <span className="w-12 text-center text-sm font-semibold text-slate-800 select-none">
                                {quantity}
                            </span>
                            <button
                                onClick={() => handleQuantityChange("inc")}
                                disabled={quantity >= product.stock}
                                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                            >
                                <FaPlus className="w-3 h-3" />
                            </button>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="flex-1 min-w-[180px] h-11 bg-[#1E3A8A] hover:bg-[#16306e] text-white text-sm font-semibold rounded-full flex items-center justify-center gap-2 transition "
                        >
                            <FaShoppingCart className="w-4 h-4" />
                            Add to Cart
                        </button>

                        <button
                            onClick={() => setIsWishlisted((w) => !w)}
                            aria-label="Wishlist"
                            className={`w-11 h-11 rounded-xl flex items-center justify-center border transition ${
                                isWishlisted
                                    ? "bg-rose-50 border-rose-200 text-rose-500"
                                    : "border-slate-200 text-slate-600 hover:border-rose-200 hover:text-rose-500"
                            }`}
                        >
                            {isWishlisted ? (
                                <FaHeart className="w-4 h-4" />
                            ) : (
                                <FaRegHeart className="w-4 h-4" />
                            )}
                        </button>

                        <button
                            aria-label="Share"
                            className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 text-slate-600 hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition"
                        >
                            <FaShareAlt className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Delivery Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 mt-4">
                        <div className="flex items-start gap-2 text-xs text-gray-600">
                            <FaTruck className="w-4 h-4 text-[#1E3A8A] mt-0.5 shrink-0" />
                            <div>
                                <p className="font-semibold text-slate-800">
                                    Free Delivery
                                </p>
                                <p>On orders over $50</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-gray-600">
                            <FaShieldAlt className="w-4 h-4 text-[#1E3A8A] mt-0.5 shrink-0" />
                            <div>
                                <p className="font-semibold text-slate-800">
                                    {product.specifications.warranty} Warranty
                                </p>
                                <p>Official brand warranty</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-gray-600">
                            <FaUndo className="w-4 h-4 text-[#1E3A8A] mt-0.5 shrink-0" />
                            <div>
                                <p className="font-semibold text-slate-800">
                                    7 Days Return
                                </p>
                                <p>Easy return policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-16">
                <div className="flex border-b border-gray-200 gap-8 overflow-x-auto">
                    <button
                        onClick={() => setActiveTab("description")}
                        className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                            activeTab === "description"
                                ? "border-[#1E3A8A] text-[#1E3A8A]"
                                : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setActiveTab("additional")}
                        className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                            activeTab === "additional"
                                ? "border-[#1E3A8A] text-[#1E3A8A]"
                                : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                    >
                        Additional Information
                    </button>
                    <button
                        onClick={() => setActiveTab("review")}
                        className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                            activeTab === "review"
                                ? "border-[#1E3A8A] text-[#1E3A8A]"
                                : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                    >
                        Review ({reviews.length})
                    </button>
                </div>

                <div className="py-6 text-sm text-gray-600 leading-relaxed">
                    {/* Description */}
                    {activeTab === "description" && (
                        <div className="space-y-4">
                            <p>
                                {product.description}
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                                <li>
                                    100% Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit
                                </li>
                                <li>Ut at nunc vel nisl gravida dictum.</li>
                                <li>Donec non velit sed risus tincidunt suscipit.</li>
                                <li>Cras laoreet lacus in dui posuere fringilla.</li>
                            </ul>
                        </div>
                    )}

                    {/* Additional Information */}
                    {activeTab === "additional" && (
                        <div className="max-w-2xl">
                            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                                <tbody>
                                    {Object.entries(product.specifications).map(
                                        ([key, value], idx) => (
                                            <tr
                                                key={key}
                                                className={
                                                    idx % 2 === 0
                                                        ? "bg-slate-50"
                                                        : "bg-white"
                                                }
                                            >
                                                <td className="px-4 py-3 font-semibold text-slate-800 w-1/3 capitalize border-b border-slate-100">
                                                    {key
                                                        .replace(/([A-Z])/g, " $1")
                                                        .replace(/^./, (s) =>
                                                            s.toUpperCase()
                                                        )}
                                                </td>
                                                <td className="px-4 py-3 text-gray-600 border-b border-slate-100">
                                                    {value}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                    <tr className="bg-slate-50">
                                        <td className="px-4 py-3 font-semibold text-slate-800 capitalize">
                                            Manufacturer
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {product.manufacturer}
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-3 font-semibold text-slate-800 capitalize">
                                            Brand
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {product.brand}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Tags */}
                            <div className="mt-6 flex flex-wrap items-center gap-2">
                                <span className="text-xs font-semibold text-slate-700">
                                    Tags:
                                </span>
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs bg-slate-100 hover:bg-[#1E3A8A] hover:text-white text-slate-600 px-3 py-1 rounded-full transition cursor-pointer"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Review */}
                    {activeTab === "review" && (
                        <div className="space-y-6 max-w-3xl">
                            {/* Summary */}
                            <div className="flex items-center gap-6 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-slate-900">
                                        {product.rating}
                                    </p>
                                    <div className="flex text-amber-400 gap-0.5 mt-1 justify-center">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="w-3 h-3" />
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        245 Reviews
                                    </p>
                                </div>
                                <div className="flex-1 space-y-1.5">
                                    {[5, 4, 3, 2, 1].map((star) => {
                                        const percent =
                                            star === 5
                                                ? 70
                                                : star === 4
                                                ? 20
                                                : star === 3
                                                ? 6
                                                : star === 2
                                                ? 3
                                                : 1;
                                        return (
                                            <div
                                                key={star}
                                                className="flex items-center gap-2 text-xs"
                                            >
                                                <span className="w-3 text-slate-600">
                                                    {star}
                                                </span>
                                                <FaStar className="w-3 h-3 text-amber-400" />
                                                <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-amber-400 rounded-full"
                                                        style={{
                                                            width: `${percent}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="w-8 text-right text-slate-500">
                                                    {percent}%
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Review List */}
                            <div className="space-y-4">
                                {reviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className="p-5 border border-slate-100 rounded-2xl hover:border-slate-200 transition"
                                    >
                                        <div className="flex items-start gap-3">
                                            <FaUserCircle className="w-9 h-9 text-slate-300 shrink-0" />
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="font-semibold text-slate-800 text-sm">
                                                        {review.name}
                                                    </span>
                                                    {review.verified && (
                                                        <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                                            <FaCheckCircle className="w-2.5 h-2.5" />
                                                            Verified
                                                        </span>
                                                    )}
                                                    <span className="text-xs text-gray-400 ml-auto">
                                                        {review.date}
                                                    </span>
                                                </div>
                                                <div className="flex text-amber-400 gap-0.5 mt-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar
                                                            key={i}
                                                            className={`w-3 h-3 ${
                                                                i < review.rating
                                                                    ? "text-amber-400"
                                                                    : "text-slate-200"
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                                    {review.comment}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full sm:w-auto px-6 py-3 border border-[#1E3A8A] text-[#1E3A8A] text-sm font-semibold rounded-xl hover:bg-[#1E3A8A] hover:text-white transition">
                                Write a Review
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;