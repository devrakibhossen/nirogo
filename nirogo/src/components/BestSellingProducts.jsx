import ProductCard from "./ProductCard";

const BestSellingProducts = () => {

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
        <div className="max-w-[1200px] mx-auto my-5 px-4 md:px-0">
            <h3 className="text-2xl font-bold text-slate-800">Best Selling Products</h3>
            <p className="text-sm text-gray-800">Discover our most trusted healthcare essentials and daily wellness favorites.</p>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 mt-5">
                {
                    products.map(product => (<ProductCard product={product} />))
                }
            </div>
        </div>
    );
};

export default BestSellingProducts;