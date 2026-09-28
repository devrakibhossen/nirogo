import { CiSearch } from 'react-icons/ci';
import nirogo_Logo from '../assets/nirogo.png'
import { RiAccountCircleLine } from 'react-icons/ri';
import { BsCartPlus } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { FaRegHeart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Navbar = () => {

    const scrollRef = useRef(null);
    const [showLeftBtn, setShowLeftBtn] = useState(false);
    const [showRightBtn, setShowRightBtn] = useState(true);
    const categories = [
        { name: 'Home', path: '/' },
        { name: 'Medicine', path: '/medicine' },
        { name: 'Healthcare', path: '/healthcare' },
        { name: 'Beauty', path: '/beauty' },
        { name: 'Sexual Wellness', path: '/sexual-wellness' },
        { name: 'Baby & Mom Care', path: '/baby-mom-care' },
        { name: 'Herbal', path: '/herbal' },
        { name: 'Home Care', path: '/home-care' },
        { name: 'Supplement', path: '/supplement' },
        { name: 'Food and Nutrition', path: '/food-nutrition' },
        { name: 'Pet Care', path: '/pet-care' },
        { name: 'Veterinary', path: '/veterinary' },
    ];

    // Scroll position check function
    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

            // Left button show korbe jodi scroll > 5px hoy
            setShowLeftBtn(scrollLeft > 5);

            // Right button hide hoye jabe jodi ekebare shesh-e chole jay
            setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            checkScrollPosition();
            scrollContainer.addEventListener('scroll', checkScrollPosition);
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, []);

    // Smooth Scroll Handler
    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth / 2;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="bg-white pt-2 ">
            <div>
                <div className="max-w-[1200px] mx-auto flex justify-between items-center mb-3 md:px-0 px-3.5">
                    <div className="flex items-center gap-5 ">
                        <img src={nirogo_Logo} className="base" width="150" height="52" alt="" />
                        <div className="w-[350px] mx-auto hidden md:block">
                            <div className="relative flex items-center bg-white rounded-full border border-gray-200  focus-within:shadow-md focus-within:border-blue-600 transition-all duration-200 p-1.5">


                                <div className="pl-2 pr-2 text-gray-400 flex items-center justify-center">
                                    <CiSearch className="w-5 h-5 text-gray-500" />
                                </div>


                                <input
                                    type="search"
                                    placeholder="Search medicine..."
                                    className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-sm md:text-base focus:outline-none pr-3"
                                />


                                <button
                                    type="submit"
                                    className="bg-[#1E3A8A] hover:bg-blue-900 text-white font-medium text-sm md:text-base py-1.5 px-3.5 rounded-full transition-colors duration-200 flex items-center justify-center shrink-0 cursor-pointer"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <Link to="/">
                            <button className="relative flex items-center gap-2 text-gray-700 hover:text-[#1E3A8A] transition-colors duration-200 group cursor-pointer">
                                <div className="relative p-2 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors">
                                    <FaRegHeart className="text-xl text-gray-600 group-hover:text-[#1E3A8A]" />

                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                        0
                                    </span>
                                </div>
                                <span className="hidden sm:inline text-sm font-medium">Wishlist</span>
                            </button>
                        </Link>

                        <Link to="/">
                            <button className="flex items-center gap-2 text-gray-700 hover:text-[#1E3A8A] transition-colors duration-200 group cursor-pointer">
                                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors">
                                    <SlLocationPin className="text-xl text-gray-600 group-hover:text-[#1E3A8A]" />
                                </div>
                                <span className="hidden sm:inline text-sm font-medium">Tracking Order</span>
                            </button>
                        </Link>

                        <Link to="/">
                            <button className="relative flex items-center gap-2 text-gray-700 hover:text-[#1E3A8A] transition-colors duration-200 group cursor-pointer">
                                <div className="relative p-2 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors">
                                    <BsCartPlus className="text-xl text-gray-600 group-hover:text-[#1E3A8A]" />

                                    <span className="absolute -top-1 -right-1 bg-[#1E3A8A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                        2
                                    </span>
                                </div>
                                <span className="hidden sm:inline text-sm font-medium">Cart</span>
                            </button>
                        </Link>
                        <Link to="/accounts/signin">
                            <button
                                className="bg-[#1E3A8A] hover:bg-blue-900 text-white font-medium text-sm md:text-base py-1.5 px-3.5 rounded-full transition-colors duration-200 flex items-center gap-1.5 justify-center shrink-0 cursor-pointer"
                            >
                                <RiAccountCircleLine className="text-lg" />
                                Account
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="relative border-y border-gray-200 bg-white">
                    <div className="max-w-[1200px] mx-auto md:px-0 px-4">
                        <div className="container mx-auto flex items-center ">

                            {/* Left Scroll Button (Conditionally Rendered) */}
                            {showLeftBtn && (
                                <button
                                    onClick={() => handleScroll('left')}
                                    className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-black transition-all shrink-0 mr-2 cursor-pointer z-10"
                                    aria-label="Scroll left"
                                >
                                    <FiChevronLeft className="w-5 h-5" />
                                </button>
                            )}


                            <ul
                                ref={scrollRef}
                                className="flex items-center gap-7 overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-none text-sm md:text-base font-normal w-full py-3"
                            >
                                {categories.map((category, index) => (
                                    <li key={index} className="relative">
                                        <NavLink
                                            to={category.path}
                                            end={category.path === '/'}
                                            className={({ isActive }) =>
                                                `text-gray-900 relative pb-1 inline-block transition-colors duration-200 ${isActive
                                                    ? 'text-[#1E3A8A] font-medium'
                                                    : 'text-gray-800 hover:text-[#1E3A8A]'
                                                }`
                                            }
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    {category.name}
                                                    {isActive && (
                                                        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1E3A8A] rounded-full" />
                                                    )}
                                                </>
                                            )}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>


                            {showRightBtn && (
                                <button
                                    onClick={() => handleScroll('right')}
                                    className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-black transition-all shrink-0 ml-2 cursor-pointer z-10"
                                    aria-label="Scroll right"
                                >
                                    <FiChevronRight className="w-5 h-5" />
                                </button>
                            )}

                        </div>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;