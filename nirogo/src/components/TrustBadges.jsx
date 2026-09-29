const TrustBadges = () => {
   const badges = [
    {
      id: 1,
      title: "Fast Express Delivery",
      subtitle: "Guaranteed doorstep delivery within 24 to 48 hours across the city.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: "bg-emerald-50",
    },
    {
      id: 2,
      title: "100% Genuine Medicines",
      subtitle: "Sourced directly from certified pharmaceutical manufacturers & distributors.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      title: "Secure Payment",
      subtitle: "Encrypted transactions via mobile banking, credit cards, or cash on delivery.",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      bgColor: "bg-purple-50",
    },
    {
      id: 4,
      title: "Prescription Upload",
      subtitle: "Upload your doctor's note for quick review and verification by certified pharmacists.",
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bgColor: "bg-teal-50",
    },
    {
      id: 5,
      title: "Free Delivery",
      subtitle: "Enjoy free shipping on all orders totaling ৳500 or more nationwide.",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm-7 4h14M5 12a2 2 0 110-4 2 2 0 010 4zm14 0a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      ),
      bgColor: "bg-amber-50",
    },
    {
      id: 6,
      title: "7 Days Easy Return",
      subtitle: "Hassle-free replacement or full refund policy if packaging is intact.",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      bgColor: "bg-indigo-50",
    },
  ];
    return (
        <section className="py-8">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {badges.map((badge) => (
                        <div
                            key={badge.id}
                            className=" p-4 rounded-lg bg-white border border-slate-200 "
                        >
                            {/* Icon Container */}
                            <div
                                className={`w-12 h-12 flex-shrink-0 rounded-xl ${badge.bgColor} flex items-center justify-center mb-3`}
                            >
                                {badge.icon}
                            </div>

                            {/* Text Info */}
                            <div>
                                <h4 className="text-md font-bold text-slate-800 leading-tight">
                                    {badge.title}
                                </h4>
                                <p className="text-xs text-slate-500 mt-1 font-medium">
                                    {badge.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;