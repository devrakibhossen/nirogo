import { useState, useEffect } from "react";
import { useSearchParams } from "react-router"; // react-router-dom hole import { useSearchParams } from "react-router-dom" hobe
import { 
  FaSearch, 
  FaBoxOpen, 
  FaRegClock, 
  FaMapMarkerAlt, 
  FaPills,
  FaClipboardList,
  FaBoxes,
  FaTruck,
  FaHome
} from "react-icons/fa";

const TrackOrder = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlOrderId = searchParams.get("orderId") || "";

  const [orderId, setOrderId] = useState(urlOrderId);
  const [trackedOrder, setTrackedOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch or simulate tracking
  const fetchOrderDetails = (id) => {
    if (!id.trim()) return;
    setLoading(true);

    // Simulated API response
    setTimeout(() => {
      setTrackedOrder({
        id: id,
        date: "24 Oct, 2026",
        estimatedDelivery: "26 Oct, 2026",
        statusCode: 3, // 1: Placed, 2: Packed, 3: On The Way, 4: Delivered
        items: [
          { name: "Napa Extra 500mg", qty: 2, price: "৳ 120" },
          { name: "Seclo 20mg Capsule", qty: 1, price: "৳ 210" },
        ],
        deliveryAddress: "House 42, Road 11, Banani, Dhaka",
      });
      setLoading(false);
    }, 600);
  };

  // URL-e orderId thakle automatic track korbe page load hole
  useEffect(() => {
    if (urlOrderId) {
      setOrderId(urlOrderId);
      fetchOrderDetails(urlOrderId);
    }
  }, [urlOrderId]);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    // URL-e query parameter update kore dewa (e.g. ?orderId=NG-xxxx)
    setSearchParams({ orderId: orderId.trim() });
    fetchOrderDetails(orderId.trim());
  };

  // Tree / Vertical Steps definition
  const steps = [
    { 
      title: "Order Placed", 
      desc: "Your order has been successfully placed and verified.",
      date: "24 Oct, 2026 - 10:30 AM", 
      step: 1,
      icon: FaClipboardList
    },
    { 
      title: "Packed & Verified", 
      desc: "Medicines are securely packed by the pharmacist.",
      date: "24 Oct, 2026 - 02:15 PM", 
      step: 2,
      icon: FaBoxes
    },
    { 
      title: "On The Way", 
      desc: "Delivery partner is heading towards your location.",
      date: "25 Oct, 2026 - 09:00 AM", 
      step: 3,
      icon: FaTruck
    },
    { 
      title: "Delivered", 
      desc: "Order has been delivered to your address.",
      date: "Pending", 
      step: 4,
      icon: FaHome
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1E3A8A] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-blue-100">
            <FaPills className="text-[#1E3A8A] text-sm" />
            Pharmacy Express Delivery
          </div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            Track Your Order
          </h1>
          <p className="text-sm text-gray-800 max-w-md mx-auto">
            Enter your Order ID below or check via direct URL link.
          </p>
        </div>

        {/* Search Bar Card */}
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg  border border-slate-200/80">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <FaSearch className="text-slate-400" />
              </div>
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Order ID (e.g. NG-15896564)"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:bg-white transition-all"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="sm:w-auto w-full bg-[#1E3A8A] hover:bg-blue-900 active:scale-[0.98] text-white font-medium px-7 py-3 rounded-full shadow-md shadow-blue-900/10 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70 cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Searching...
                </>
              ) : (
                "Track Order"
              )}
            </button>
          </form>
        </div>

        {/* Tracking Results (Tree Shape / Vertical Timeline) */}
        {trackedOrder && (
          <div className="overflow-hidden rounded-lg">
            
            {/* Top Status Banner */}
            <div className="bg-[#1E3A8A] text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider  font-semibold">
                  Order Number
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-mono">#{trackedOrder.id}</h3>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
                <FaRegClock className="text-blue-300 text-lg" />
                <div>
                  <p className="text-xs text-slate-300">Estimated Delivery</p>
                  <p className="text-sm font-semibold text-white">{trackedOrder.estimatedDelivery}</p>
                </div>
              </div>
            </div>

            {/* Tree / Vertical Status Timeline */}
            <div className="p-6 sm:p-8 border-b border-slate-100">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-8">
                Delivery Progress Tree
              </h4>

              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[15px] sm:before:left-[19px] before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                {steps.map((item, idx) => {
                  const isCompleted = item.step <= trackedOrder.statusCode;
                  const isCurrent = item.step === trackedOrder.statusCode;
                  const StepIcon = item.icon;

                  return (
                    <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
                      
                      {/* Node Icon / Bullet */}
                      <div 
                        className={`absolute -left-[31px] sm:-left-[35px] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all z-10 ${
                          isCompleted 
                            ? "bg-[#1E3A8A] text-white shadow-md shadow-blue-900/20 ring-4 ring-blue-50" 
                            : "bg-white text-slate-400 border-2 border-slate-200"
                        }`}
                      >
                        <StepIcon className="text-sm sm:text-base" />
                      </div>

                      {/* Content Box */}
                      <div className={`flex-1 bg-slate-50/60 p-4 rounded-xl border transition-all ${isCurrent ? "border-blue-200 bg-blue-50/30 shadow-sm" : "border-slate-100"}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <h5 className={`font-semibold text-sm sm:text-base ${isCurrent ? "text-[#1E3A8A]" : "text-slate-800"}`}>
                            {item.title}
                          </h5>
                          <span className="text-xs font-medium text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200/60 w-fit">
                            {item.date}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Details & Summary */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50/30">
              
              {/* Delivery Address */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm">
                  <FaMapMarkerAlt className="text-[#1E3A8A]" /> Delivery Address
                </div>
                <div className="bg-white p-4  text-sm text-slate-600">
                  <p className="font-medium text-slate-800">Customer Location</p>
                  <p className="mt-1">{trackedOrder.deliveryAddress}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm">
                  <FaBoxOpen className="text-[#1E3A8A]" /> Items Ordered
                </div>
                <div className="bg-white p-4  text-sm divide-y divide-slate-100">
                  {trackedOrder.items.map((prod, index) => (
                    <div key={index} className="py-2 flex justify-between items-center first:pt-0 last:pb-0">
                      <div>
                        <p className="font-medium text-slate-800">{prod.name}</p>
                        <p className="text-xs text-slate-400">Qty: {prod.qty}</p>
                      </div>
                      <span className="font-semibold text-slate-700">{prod.price}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default TrackOrder;