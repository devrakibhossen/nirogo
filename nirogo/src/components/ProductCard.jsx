const ProductCard = ({ product }) => {
    return (
        <div className="group relative bg-white rounded-lg p-3  transition-all duration-300 border border-slate-200 flex flex-col justify-between overflow-hidden">

            <div className="relative w-full h-40 rounded-xl bg-slate-50 overflow-hidden flex items-center justify-center p-4">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />


                <span className="absolute top-1 left-1 bg-emerald-50 text-emerald-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-100">
                    In Stock
                </span>
            </div>


            <div className="mt-4 flex flex-col flex-grow">


                <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex text-amber-400">

                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{product.ratting}</span>
                    <span className="text-xs text-slate-400">(4.8k)</span>
                </div>


                <h3 className="font-semibold text-slate-800 text-base leading-snug line-clamp-2 hover:text-[#1E3A8A] transition-colors cursor-pointer">
                    {product.name}
                </h3>


                <div className="mt-auto pt-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-400 font-medium">Price</p>
                        <p className="text-xl font-bold text-slate-900">${product.price.toFixed(2)}</p>
                    </div>


                    <button
                        type="button"
                        className="group relative py-1.5 pl-3 pr-2.5 rounded-full 
             bg-[#1E3A8A]
             hover:from-blue-600 hover:via-blue-700 hover:to-indigo-800
             active:scale-95 
             text-white text-sm font-medium tracking-wide
             flex items-center gap-1.5
             ring-1 ring-white/10 hover:ring-white/20
             transition-all duration-200 ease-out"
                        title="Add to Cart"
                    >
                        <span>Add</span>
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors">
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;