import { useState, useMemo } from "react";
import {
    FaSearch,
    FaTimes,
    FaStar,
    FaChevronDown,
    FaFilter,
    FaTh,
    FaList,
} from "react-icons/fa";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
    const products = [
    {
        "name": "Paracetamol 500mg Extra Strength",
        "images": [
            "https://i.ibb.co.com/0jk4Zmm0/image.png",
            "https://example.com/images/paracetamol-back.jpg"
        ],
        "description": "Fast-acting relief for mild-to-moderate fever, headaches, muscle aches, and general body pains. Package contains 24 tablets.",
        "price": 4.99,
        "ratting": 4.8,
        "brand": "Square",
        "category": "Medicine"
    },
    {
        "name": "Vitamin C 1000mg + Zinc Effervescent Tablets",
        "images": [
            "https://i.ibb.co.com/m5tZtN85/image.png"
        ],
        "description": "Daily immune support supplement. Orange flavor effervescent tablets for fast absorption. Tube of 20 tablets.",
        "price": 8.50,
        "ratting": 4.7,
        "brand": "Ceevit",
        "category": "Supplement"
    },
    {
        "name": "Digital Infrared Forehead Thermometer",
        "images": [
            "https://i.ibb.co.com/N65pd3bF/image.png",
            "https://example.com/images/thermometer-display.jpg"
        ],
        "description": "Non-contact instant temperature measurement with backlit display and fever alert memory feature.",
        "price": 24.99,
        "ratting": 4.6,
        "brand": "Omron",
        "category": "Device"
    },
    {
        "name": "Hydrating Cetaphil Cleanser for Sensitive Skin",
        "images": [
            "https://i.ibb.co.com/ZzCFH7w8/image.png"
        ],
        "description": "Dermatologist-recommended gentle daily skin cleanser for dry to normal sensitive skin. 250ml bottle.",
        "price": 14.25,
        "ratting": 4.9,
        "brand": "Cetaphil",
        "category": "Skin Care"
    },
    {
        "name": "Automatic Upper Arm Blood Pressure Monitor",
        "images": [
            "https://i.ibb.co.com/2bXZQR8/image.png"
        ],
        "description": "Clinically validated home blood pressure gauge with large LCD screen and cuff size fitting 22-42cm.",
        "price": 39.99,
        "ratting": 4.5,
        "brand": "Omron",
        "category": "Device"
    },
    {
        "name": "First Aid Waterproof Adhesive Bandages (100-Pack)",
        "images": [
            "https://i.ibb.co.com/nMX2fLXH/image.png"
        ],
        "description": "Sterile, breathable, and water-resistant flexible fabric bandages for minor cuts, scrapes, and wounds.",
        "price": 6.75,
        "ratting": 4.4,
        "brand": "Band-Aid",
        "category": "First Aid"
    },
    {
        "name": "Omeprazole 20mg Acid Reducer Capsules",
        "images": [
            "https://i.ibb.co.com/VYm6qm3w/image.png"
        ],
        "description": "24-hour treatment for frequent heartburn and acid reflux. Pack of 14 delayed-release capsules.",
        "price": 11.20,
        "ratting": 4.8,
        "brand": "Square",
        "category": "Medicine"
    },
    {
        "name": "Omega-3 Fish Oil 1000mg Softgels",
        "images": [
            "https://i.ibb.co.com/M5VrQCrb/image.png"
        ],
        "description": "High-potency heart and brain health supplement enriched with EPA and DHA. 60 easy-to-swallow softgels.",
        "price": 15.99,
        "ratting": 4.6,
        "brand": "Seven Seas",
        "category": "Supplement"
    },
    {
        "name": "Antiseptic Hand Sanitizer Gel (70% Alcohol)",
        "images": [
            "https://i.ibb.co.com/x8wgNt9n/image.png"
        ],
        "description": "Kills 99.9% of germs instantly without water. Infused with Aloe Vera for skin moisturization. 500ml pump bottle.",
        "price": 5.49,
        "ratting": 4.3,
        "brand": "Dettol",
        "category": "Hygiene"
    },
    {
        "name": "Sore Throat Antiseptic Lozenges (Honey & Lemon)",
        "images": [
            "https://i.ibb.co.com/237Vd4Zd/image.png"
        ],
        "description": "Dual-action antibacterial relief for sore throats and dry coughs. Pack of 24 soothing lozenges.",
        "price": 3.99,
        "ratting": 4.7,
        "brand": "Strepsils",
        "category": "Medicine"
    },
]

    const allCategories = [
        "Medicine",
        "Supplement",
        "Medical Device",
        "Skin Care",
        "First Aid",
        "Personal Care",
    ];
    const allBrands = [...new Set(products.map((p) => p.brand))];
    const maxPrice = Math.ceil(Math.max(...products.map((p) => p.price)));

    // ---------- State ----------
    const [search, setSearch] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [priceRange, setPriceRange] = useState([0, maxPrice]);
    const [sortBy, setSortBy] = useState("default");
    const [view, setView] = useState("grid");
    const [showMobileFilter, setShowMobileFilter] = useState(false);
    const [openSections, setOpenSections] = useState({
        category: true,
        brand: true,
        price: true,
        rating: true,
    });

    const toggleSection = (key) =>
        setOpenSections((s) => ({ ...s, [key]: !s[key] }));

    const toggleArrayValue = (value, setter) => {
        setter((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    const clearAll = () => {
        setSearch("");
        setSelectedCategories([]);
        setSelectedBrands([]);
        setMinRating(0);
        setPriceRange([0, maxPrice]);
        setSortBy("default");
    };

    const hasActiveFilter =
        search ||
        selectedCategories.length ||
        selectedBrands.length ||
        minRating > 0 ||
        priceRange[0] > 0 ||
        priceRange[1] < maxPrice;

    // ---------- Filtered Products ----------
    const filteredProducts = useMemo(() => {
        let result = [...products];

        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q)
            );
        }
        if (selectedCategories.length) {
            result = result.filter((p) =>
                selectedCategories.includes(p.category)
            );
        }
        if (selectedBrands.length) {
            result = result.filter((p) => selectedBrands.includes(p.brand));
        }
        if (minRating > 0) {
            result = result.filter((p) => p.ratting >= minRating);
        }
        result = result.filter(
            (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
        );

        if (sortBy === "low-high") result.sort((a, b) => a.price - b.price);
        else if (sortBy === "high-low")
            result.sort((a, b) => b.price - a.price);
        else if (sortBy === "rating")
            result.sort((a, b) => b.ratting - a.ratting);
        else if (sortBy === "name")
            result.sort((a, b) => a.name.localeCompare(b.name));

        return result;
    }, [
        products,
        search,
        selectedCategories,
        selectedBrands,
        minRating,
        priceRange,
        sortBy,
    ]);

    // ---------- Filter Sidebar (reusable) ----------
    const FilterSidebar = () => (
        <div className="space-y-5">
            {/* Search */}
            <div>
                <p className="text-xs font-bold tracking-widest text-gray-600 mb-2">
                    SEARCH
                </p>
                <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3 h-3" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="w-full h-10 pl-9 pr-8 text-xs border border-slate-200 rounded-full outline-none focus:border-[#1E3A8A] focus:ring-4 focus:ring-blue-50 transition"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 transition"
                        >
                            <FaTimes className="w-2.5 h-2.5" />
                        </button>
                    )}
                </div>
            </div>

            {/* Category */}
            <div className="border-t border-slate-100 pt-4">
                <button
                    onClick={() => toggleSection("category")}
                    className="flex items-center justify-between w-full mb-2"
                >
                    <p className="text-xs font-bold tracking-widest text-gray-600">
                        CATEGORY
                    </p>
                    <FaChevronDown
                        className={`w-3 h-3 text-slate-400 transition-transform ${
                            openSections.category ? "rotate-180" : ""
                        }`}
                    />
                </button>
                {openSections.category && (
                    <div className="space-y-2">
                        {allCategories.map((cat) => {
                            const count = products.filter(
                                (p) => p.category === cat
                            ).length;
                            return (
                                <label
                                    key={cat}
                                    className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 hover:text-[#1E3A8A] transition"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(
                                            cat
                                        )}
                                        onChange={() =>
                                            toggleArrayValue(
                                                cat,
                                                setSelectedCategories
                                            )
                                        }
                                        className="accent-[#1E3A8A] w-3.5 h-3.5"
                                    />
                                    <span className="flex-1">{cat}</span>
                                    <span className="text-slate-400">
                                        ({count})
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Brand */}
            <div className="border-t border-slate-100 pt-4">
                <button
                    onClick={() => toggleSection("brand")}
                    className="flex items-center justify-between w-full mb-2"
                >
                    <p className="text-xs font-bold tracking-widest text-gray-600">
                        BRAND
                    </p>
                    <FaChevronDown
                        className={`w-3 h-3 text-slate-400 transition-transform ${
                            openSections.brand ? "rotate-180" : ""
                        }`}
                    />
                </button>
                {openSections.brand && (
                    <div className="space-y-2">
                        {allBrands.map((brand) => {
                            const count = products.filter(
                                (p) => p.brand === brand
                            ).length;
                            return (
                                <label
                                    key={brand}
                                    className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 hover:text-[#1E3A8A] transition"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedBrands.includes(
                                            brand
                                        )}
                                        onChange={() =>
                                            toggleArrayValue(
                                                brand,
                                                setSelectedBrands
                                            )
                                        }
                                        className="accent-[#1E3A8A] w-3.5 h-3.5"
                                    />
                                    <span className="flex-1">{brand}</span>
                                    <span className="text-slate-400">
                                        ({count})
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Price */}
            <div className="border-t border-slate-100 pt-4">
                <button
                    onClick={() => toggleSection("price")}
                    className="flex items-center justify-between w-full mb-2"
                >
                    <p className="text-xs font-bold tracking-widest text-gray-600">
                        PRICE
                    </p>
                    <FaChevronDown
                        className={`w-3 h-3 text-slate-400 transition-transform ${
                            openSections.price ? "rotate-180" : ""
                        }`}
                    />
                </button>
                {openSections.price && (
                    <div className="space-y-3">
                        <input
                            type="range"
                            min={0}
                            max={maxPrice}
                            value={priceRange[1]}
                            onChange={(e) =>
                                setPriceRange([
                                    priceRange[0],
                                    Number(e.target.value),
                                ])
                            }
                            className="w-full accent-[#1E3A8A]"
                        />
                        <div className="flex items-center gap-2">
                            <div className="flex-1">
                                <label className="text-[10px] text-slate-500">
                                    Min
                                </label>
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={(e) =>
                                        setPriceRange([
                                            Number(e.target.value),
                                            priceRange[1],
                                        ])
                                    }
                                    className="w-full h-8 px-2 text-xs border border-slate-200 rounded-lg outline-none focus:border-[#1E3A8A]"
                                />
                            </div>
                            <span className="text-slate-300 mt-4">—</span>
                            <div className="flex-1">
                                <label className="text-[10px] text-slate-500">
                                    Max
                                </label>
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={(e) =>
                                        setPriceRange([
                                            priceRange[0],
                                            Number(e.target.value),
                                        ])
                                    }
                                    className="w-full h-8 px-2 text-xs border border-slate-200 rounded-lg outline-none focus:border-[#1E3A8A]"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-slate-500">
                            Price:{" "}
                            <span className="font-semibold text-slate-800">
                                ${priceRange[0]} – ${priceRange[1]}
                            </span>
                        </p>
                    </div>
                )}
            </div>

            {/* Rating */}
            <div className="border-t border-slate-100 pt-4">
                <button
                    onClick={() => toggleSection("rating")}
                    className="flex items-center justify-between w-full mb-2"
                >
                    <p className="text-xs font-bold tracking-widest text-gray-600">
                        RATING
                    </p>
                    <FaChevronDown
                        className={`w-3 h-3 text-slate-400 transition-transform ${
                            openSections.rating ? "rotate-180" : ""
                        }`}
                    />
                </button>
                {openSections.rating && (
                    <div className="space-y-2">
                        {[4.5, 4, 3.5, 3].map((r) => (
                            <label
                                key={r}
                                className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 hover:text-[#1E3A8A] transition"
                            >
                                <input
                                    type="radio"
                                    name="rating"
                                    checked={minRating === r}
                                    onChange={() => setMinRating(r)}
                                    className="accent-[#1E3A8A] w-3.5 h-3.5"
                                />
                                <div className="flex text-amber-400 gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`w-3 h-3 ${
                                                i < Math.floor(r)
                                                    ? "text-amber-400"
                                                    : "text-slate-200"
                                            }`}
                                        />
                                    ))}
                                </div>
                                <span>& up</span>
                            </label>
                        ))}
                        <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 hover:text-[#1E3A8A] transition">
                            <input
                                type="radio"
                                name="rating"
                                checked={minRating === 0}
                                onChange={() => setMinRating(0)}
                                className="accent-[#1E3A8A] w-3.5 h-3.5"
                            />
                            <span>All ratings</span>
                        </label>
                    </div>
                )}
            </div>

            {/* Clear */}
            {hasActiveFilter && (
                <button
                    onClick={clearAll}
                    className="w-full h-10 text-xs font-semibold text-rose-500 border border-rose-200 rounded-xl hover:bg-rose-50 transition"
                >
                    Clear All Filters
                </button>
            )}
        </div>
    );

    return (
        <div className="max-w-[1200px] mx-auto my-5 px-4 md:px-0">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                    All Products
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Browse our complete collection of healthcare essentials
                </p>
            </div>

            {/* Layout */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar (desktop) */}
                <aside className="hidden lg:block w-[240px] flex-shrink-0">
                    <div className="sticky top-5 border border-slate-100 rounded-2xl p-5 bg-white">
                        <FilterSidebar />
                    </div>
                </aside>

                {/* Right Side */}
                <div className="flex-1 min-w-0">
                    {/* Top Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 p-3 border border-slate-100 rounded-xl bg-slate-50">
                        <p className="text-xs text-gray-500">
                            Showing{" "}
                            <span className="font-semibold text-slate-800">
                                {filteredProducts.length}
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold text-slate-800">
                                {products.length}
                            </span>{" "}
                            products
                        </p>

                        <div className="flex items-center gap-2">
                            {/* Mobile Filter */}
                            <button
                                onClick={() =>
                                    setShowMobileFilter((s) => !s)
                                }
                                className="lg:hidden h-9 px-3 border border-slate-200 bg-white rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-1.5 hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition"
                            >
                                <FaFilter className="w-3 h-3" />
                                Filter
                            </button>

                            {/* Sort */}
                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) =>
                                        setSortBy(e.target.value)
                                    }
                                    className="h-9 pl-3 pr-8 text-xs border border-slate-200 bg-white rounded-lg outline-none focus:border-[#1E3A8A] cursor-pointer appearance-none"
                                >
                                    <option value="default">
                                        Sort: Default
                                    </option>
                                    <option value="low-high">
                                        Price: Low to High
                                    </option>
                                    <option value="high-low">
                                        Price: High to Low
                                    </option>
                                    <option value="rating">
                                        Top Rated
                                    </option>
                                    <option value="name">Name: A-Z</option>
                                </select>
                                <FaChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 w-3 h-3 pointer-events-none" />
                            </div>

                            {/* View Toggle */}
                            <div className="hidden md:flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                                <button
                                    onClick={() => setView("grid")}
                                    aria-label="Grid"
                                    className={`w-9 h-9 flex items-center justify-center transition ${
                                        view === "grid"
                                            ? "bg-[#1E3A8A] text-white"
                                            : "text-slate-500 hover:bg-slate-50"
                                    }`}
                                >
                                    <FaTh className="w-3 h-3" />
                                </button>
                                <button
                                    onClick={() => setView("list")}
                                    aria-label="List"
                                    className={`w-9 h-9 flex items-center justify-center transition ${
                                        view === "list"
                                            ? "bg-[#1E3A8A] text-white"
                                            : "text-slate-500 hover:bg-slate-50"
                                    }`}
                                >
                                    <FaList className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Filter Drawer */}
                    {showMobileFilter && (
                        <div className="lg:hidden mb-4 border border-slate-100 rounded-2xl p-5 bg-white">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-sm font-bold text-slate-800">
                                    Filters
                                </p>
                                <button
                                    onClick={() =>
                                        setShowMobileFilter(false)
                                    }
                                    className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition"
                                >
                                    <FaTimes className="w-3 h-3" />
                                </button>
                            </div>
                            <FilterSidebar />
                        </div>
                    )}

                    {/* Products */}
                    {filteredProducts.length > 0 ? (
                        <div
                            className={
                                view === "grid"
                                    ? "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5"
                                    : "flex flex-col gap-4"
                            }
                        >
                            {filteredProducts.map((product, idx) => (
                                <ProductCard
                                    key={product.name || idx}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                                <FaSearch className="w-6 h-6 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800">
                                No products found
                            </h3>
                            <p className="text-sm text-gray-500 mt-1 max-w-sm">
                                Try adjusting your filters to find what you're
                                looking for.
                            </p>
                            <button
                                onClick={clearAll}
                                className="mt-5 px-6 py-2.5 bg-[#1E3A8A] hover:bg-[#16306e] text-white text-sm font-semibold rounded-xl transition"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;