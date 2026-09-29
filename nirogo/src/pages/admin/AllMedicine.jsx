import { FaPlus } from "react-icons/fa";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

const AllMedicine = () => {
    const products = [
        {
            "name": "Paracetamol 500mg Extra Strength",
            "images": [
                "https://i.ibb.co.com/0jk4Zmm0/image.png",
                "https://example.com/images/paracetamol-back.jpg"
            ],
            "description": "Fast-acting relief for mild-to-moderate fever, headaches, muscle aches, and general body pains. Package contains 24 tablets.",
            "price": 4.99,
            "ratting": 4.8
        },
        {
            "name": "Vitamin C 1000mg + Zinc Effervescent Tablets",
            "images": [
                "https://i.ibb.co.com/m5tZtN85/image.png"
            ],
            "description": "Daily immune support supplement. Orange flavor effervescent tablets for fast absorption. Tube of 20 tablets.",
            "price": 8.50,
            "ratting": 4.7
        },
        {
            "name": "Digital Infrared Forehead Thermometer",
            "images": [
                "https://i.ibb.co.com/N65pd3bF/image.png",
                "https://example.com/images/thermometer-display.jpg"
            ],
            "description": "Non-contact instant temperature measurement with backlit display and fever alert memory feature.",
            "price": 24.99,
            "ratting": 4.6
        },
        {
            "name": "Hydrating Cetaphil Cleanser for Sensitive Skin",
            "images": [
                "https://i.ibb.co.com/ZzCFH7w8/image.png"
            ],
            "description": "Dermatologist-recommended gentle daily skin cleanser for dry to normal sensitive skin. 250ml bottle.",
            "price": 14.25,
            "ratting": 4.9
        },
        {
            "name": "Automatic Upper Arm Blood Pressure Monitor",
            "images": [
                "https://i.ibb.co.com/2bXZQR8/image.png"
            ],
            "description": "Clinically validated home blood pressure gauge with large LCD screen and cuff size fitting 22-42cm.",
            "price": 39.99,
            "ratting": 4.5
        },
        {
            "name": "First Aid Waterproof Adhesive Bandages (100-Pack)",
            "images": [
                "https://i.ibb.co.com/nMX2fLXH/image.png"
            ],
            "description": "Sterile, breathable, and water-resistant flexible fabric bandages for minor cuts, scrapes, and wounds.",
            "price": 6.75,
            "ratting": 4.4
        },
        {
            "name": "Omeprazole 20mg Acid Reducer Capsules",
            "images": [
                "https://i.ibb.co.com/VYm6qm3w/image.png"
            ],
            "description": "24-hour treatment for frequent heartburn and acid reflux. Pack of 14 delayed-release capsules.",
            "price": 11.20,
            "ratting": 4.8
        },
        {
            "name": "Omega-3 Fish Oil 1000mg Softgels",
            "images": [
                "https://i.ibb.co.com/M5VrQCrb/image.png"
            ],
            "description": "High-potency heart and brain health supplement enriched with EPA and DHA. 60 easy-to-swallow softgels.",
            "price": 15.99,
            "ratting": 4.6
        },
        {
            "name": "Antiseptic Hand Sanitizer Gel (70% Alcohol)",
            "images": [
                "https://i.ibb.co.com/x8wgNt9n/image.png"
            ],
            "description": "Kills 99.9% of germs instantly without water. Infused with Aloe Vera for skin moisturization. 500ml pump bottle.",
            "price": 5.49,
            "ratting": 4.3
        },
        {
            "name": "Sore Throat Antiseptic Lozenges (Honey & Lemon)",
            "images": [
                "https://i.ibb.co.com/237Vd4Zd/image.png"
            ],
            "description": "Dual-action antibacterial relief for sore throats and dry coughs. Pack of 24 soothing lozenges.",
            "price": 3.99,
            "ratting": 4.7
        }
    ]
    return (
        <div >
            {/* Header Section */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-slate-800">All Products</h3>
                    <p className="text-sm text-slate-500 mt-1">
                        Discover and manage your pharmacy healthcare essentials.
                    </p>
                </div>
                <button
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm font-medium rounded-full transition-colors duration-200 shrink-0 cursor-pointer "
                >
                    <FaPlus className="text-lg" />
                    <span className="hidden sm:inline text-sm font-medium">New Product</span>

                </button>
            </div>

            {/* Medicine Items List */}
            <div className="flex flex-col gap-3">
                {products?.map((product, index) => (
                    <div
                        key={product._id || product.id || index}
                        className="group flex items-center justify-between gap-4 p-3.5 rounded-lg bg-white hover:border-gray-200 border border-gray-100 transition-all duration-200"
                    >
                        {/* Image & Product Info */}
                        <div className="flex items-center gap-4 min-w-0">
                            <div className="w-14 h-14 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 border border-slate-200/60 ">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="min-w-0">
                                <h4 className="font-semibold text-slate-800 text-base leading-snug truncate hover:text-[#1E3A8A] transition-colors cursor-pointer">
                                    {product.name}
                                </h4>
                                <p className="text-xs text-slate-400 mt-0.5 font-medium">
                                    Rating: <span className="text-amber-500 font-semibold">{product.ratting} ★</span>
                                </p>
                            </div>
                        </div>

                        {/* Price & Action Buttons */}
                        <div className="flex items-center gap-4 shrink-0">
                            <span className="text-lg font-bold text-slate-900">
                                ${product.price ? product.price.toFixed(2) : "0.00"}
                            </span>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-1.5 border-l border-slate-200 pl-4">
                                {/* Update Button */}
                                <button
                                    //   onClick={() => onUpdate && onUpdate(product)}
                                    className="p-2 rounded-xl text-slate-600 hover:text-[#1E3A8A] hover:bg-blue-50 transition-colors"
                                    title="Update Medicine"
                                >
                                    <HiOutlinePencilSquare className="text-xl" />
                                </button>

                                {/* Delete Button */}
                                <button
                                    //   onClick={() => onDelete && onDelete(product._id || product.id)}
                                    className="p-2 rounded-xl text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                                    title="Delete Medicine"
                                >
                                    <HiOutlineTrash className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllMedicine;