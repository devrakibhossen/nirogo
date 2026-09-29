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
                        className="py-1 px-2 rounded-full bg-[#1E3A8A]  active:scale-95 text-white transition-all duration-200 text-sm shadow-emerald-600/20 flex items-center gap-1"
                        title="Add to Cart"
                    >
                        Add
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;