import { CiSearch } from 'react-icons/ci';
import nirogo_Logo from '../assets/nirogo.png'
import { RiAccountCircleLine, RiArrowDropDownLine, RiLogoutBoxRLine, RiShoppingBag3Line, RiUser3Line } from 'react-icons/ri';
import { BsCartPlus } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { FaRegHeart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdOutlineFeedback, MdOutlineSpaceDashboard } from 'react-icons/md';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const scrollRef = useRef(null);
    const [showLeftBtn, setShowLeftBtn] = useState(false);
    const [showRightBtn, setShowRightBtn] = useState(true);
    const categories = [
        { name: 'Home', path: '/' },
        { name: 'All Products', path: '/all-products' },
        { name: 'Medicine', path: '/medicine' },
        { name: 'Healthcare', path: '/healthcare' },
        { name: 'Beauty', path: '/beauty' },
        { name: 'Baby & Mom Care', path: '/baby-mom-care' },
        { name: 'Herbal', path: '/herbal' },
        { name: 'Home Care', path: '/home-care' },
        { name: 'Supplement', path: '/supplement' },
        { name: 'Food and Nutrition', path: '/food-nutrition' },
        { name: 'Pet Care', path: '/pet-care' },
        { name: 'Veterinary', path: '/veterinary' },
        { name: 'Sexual Wellness', path: '/sexual-wellness' },
    ];
    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftBtn(scrollLeft > 5);
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const user = true;

    return (
        <nav className="bg-white pt-2 ">
            <div>
                <div className="max-w-[1200px] mx-auto flex justify-between items-center mb-3 md:px-0 px-3.5">
                    <div className="flex items-center gap-5 ">
                        <img src={nirogo_Logo} className="base" width="150" height="52" alt="" />
                        <div className="w-[350px] mx-auto hidden md:block">
                            <div className="text-sm relative flex items-center bg-white rounded-full border border-gray-200   focus-within:border-blue-600 transition-all duration-200 p-1.5">


                                <div className="pl-2 pr-2 text-gray-400 flex items-center justify-center">
                                    <CiSearch className="w-5 h-5 text-gray-500" />
                                </div>


                                <input
                                    type="search"
                                    placeholder="Search medicine..."
                                    className=" w-full bg-transparent text-gray-800 placeholder-gray-400 text-sm md:text-base focus:outline-none pr-3"
                                />


                                <button
                                    type="submit"
                                    className="bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm md:text-base py-1.5 px-3.5 rounded-full transition-colors duration-200 flex items-center justify-center shrink-0 cursor-pointer"
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
                        {
                            user ? (
                                <div className="relative inline-block text-left" ref={dropdownRef}>
                                    {/* Profile Button */}
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="inline-flex items-center justify-center gap-2 p-1.5 pr-3 bg-slate-100 hover:bg-slate-200 text-sm font-medium rounded-full shrink-0 cursor-pointer transition-all duration-200"
                                    >
                                        <img
                                            src="/src/assets/profile.jpg"
                                            className="w-8 h-8 rounded-full object-cover border border-slate-300"
                                            alt="Profile"
                                        />
                                        <span className="hidden sm:inline text-sm font-semibold text-[#1E3A8A]">
                                            Account
                                        </span>
                                        <RiArrowDropDownLine
                                            className={`text-slate-600 text-base transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isOpen && (
                                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg  border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                                            {/* User Brief Info Section */}
                                            <div className="px-4 py-2.5 border-b border-slate-100">
                                                <p className="text-xs text-slate-400 font-medium">Signed in as</p>
                                                <p className="text-sm font-bold text-slate-800 truncate">rakib@gmail.com</p>
                                            </div>

                                            {/* Menu Items */}
                                            <div className="py-1">
                                                <Link
                                                    to="/account/profile"
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#1E3A8A] transition-colors"
                                                >
                                                    <RiUser3Line className="text-lg" />
                                                    <span>My Profile</span>
                                                </Link>

                                                <Link
                                                    to="/dashboard"
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#1E3A8A] transition-colors"
                                                >
                                                    <MdOutlineSpaceDashboard className="text-lg" />
                                                    <span>Admin Dashboard</span>
                                                </Link>
                                                <Link
                                                    to="/account/orders"
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#1E3A8A] transition-colors"
                                                >
                                                    <RiShoppingBag3Line className="text-lg" />
                                                    <span>My Orders</span>
                                                </Link>
                                                <Link
                                                    to="/account/orders"
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#1E3A8A] transition-colors"
                                                >
                                                    <MdOutlineFeedback className="text-lg" />
                                                    <span>Feedback</span>
                                                </Link>
                                            </div>

                                            {/* Logout Section */}
                                            <div className="border-t border-slate-100 pt-1 mt-1">
                                                <button
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        // Handle logout logic here
                                                    }}
                                                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 transition-colors font-medium text-left"
                                                >
                                                    <RiLogoutBoxRLine className="text-lg" />
                                                    <span>Sign Out</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (<Link to="/accounts/sign-in">
                                <button
                                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm font-medium rounded-full transition-colors duration-200 shrink-0 cursor-pointer "
                                >
                                    <RiAccountCircleLine className="text-xl" />
                                    <span className="hidden sm:inline text-sm font-medium">Account</span>

                                </button>
                            </Link>)
                        }

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
                                                `text-gray-900 text-sm relative pb-1 inline-block transition-colors duration-200 ${isActive
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