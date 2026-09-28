import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
    return (
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-5 grid-cols-1 gap-5 mb-10 h-[500px] md:px-0 px-4">
            <div className="lg:col-span-3 ">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative bg-[url('https://i.ibb.co.com/Tx52RqjQ/image.png')] bg-cover bg-center h-[500px] rounded-md flex items-center justify-start px-10">

                            <div className="absolute inset-0 bg-black/40 rounded-md"></div>


                            <div className="relative z-10 max-w-md">
                                <h2 className="text-white text-4xl font-bold mb-4">
                                    Trusted Medicines
                                </h2>
                                <p className="text-gray-200 text-sm mb-3">
                                    Genuine & certified medicines delivered to your doorstep.
                                    Stay healthy with our trusted healthcare essentials.
                                </p>
                                <p className="mb-6 text-white text-3xl">From $5.99</p>
                                <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-primary/80 transition">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative bg-[url('https://i.ibb.co.com/PsjcvJ5J/image.png')] bg-cover bg-center h-[500px] rounded-md flex items-center justify-start px-10">

                            <div className="absolute inset-0 bg-black/40 rounded-md"></div>


                            <div className="relative z-10 max-w-md">
                                <h2 className="text-white text-4xl font-bold mb-4">
                                    Baby & Mom Care
                                </h2>
                                <p className="text-gray-200 text-sm mb-3">
                                    Gentle, safe & dermatologist-approved products for your little one
                                    and every mom. Because care begins at home.
                                </p>
                                <p className="mb-6 text-white text-3xl">From $10.99</p>
                                <button className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-5 py-2 rounded-full font-medium hover:bg-white/30 hover:border-white/50 transition-all duration-300 shadow-lg">
                                    Shop Collection
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="lg:col-span-2 lg:flex flex-col gap-5 hidden ">
                <div className="relative  bg-[url('https://i.ibb.co.com/Swpb12MW/image.png')] bg-cover bg-center flex-1 rounded-md">
                    <div className="absolute inset-0 bg-black/40 rounded-md flex flex-col justify-center items-start p-6">
                        <h2 className="text-white text-3xl font-bold mb-2">
                            Medical Devices
                        </h2>
                        <p className="text-gray-200 text-sm mb-4 max-w-xs">
                            Accurate & reliable health monitoring devices —
                            thermometers, BP monitors, glucose meters & more.
                        </p>
                        <button className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-5 py-2 rounded-full font-medium hover:bg-white/30 hover:border-white/50 transition-all duration-300 shadow-lg">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className="relative bg-[url('https://i.ibb.co.com/237DpmfG/image.png')] bg-cover bg-center flex-1 rounded-md">
                    <div className="absolute inset-0 bg-black/40 rounded-md flex flex-col justify-center items-start p-6">
                        <h2 className="text-white text-3xl font-bold mb-2">
                            Beauty & Care
                        </h2>
                        <p className="text-gray-200 text-sm mb-4 max-w-xs">
                            Premium skincare, wellness & personal care products
                            to keep you glowing and confident every day.
                        </p>
                        <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-green-700 transition">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;