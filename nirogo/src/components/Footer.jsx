import { Link } from 'react-router';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  // FaShieldAlt, 
  // FaTruck, 
  // FaUserNurse 
} from 'react-icons/fa';
import nirogo_Logo from '../assets/nirogo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-4 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4"> 
        
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 border-b border-gray-100 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl bg-slate-50 border border-gray-100">
            <div className="p-3 bg-[#1E3A8A]/10 rounded-full text-[#1E3A8A]">
              <FaTruck className="text-2xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Fast Home Delivery</h4>
              <p className="text-xs text-gray-500">Get medicines delivered to your doorstep</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl bg-slate-50 border border-gray-100">
            <div className="p-3 bg-[#1E3A8A]/10 rounded-full text-[#1E3A8A]">
              <FaShieldAlt className="text-2xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">100% Genuine Medicines</h4>
              <p className="text-xs text-gray-500">Directly sourced from trusted manufacturers</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl bg-slate-50 border border-gray-100">
            <div className="p-3 bg-[#1E3A8A]/10 rounded-full text-[#1E3A8A]">
              <FaUserNurse className="text-2xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">24/7 Pharmacist Support</h4>
              <p className="text-xs text-gray-500">Consult with certified healthcare experts</p>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-10 border-b border-gray-100 max-w-[1200px] mx-auto">
          
          <div className="lg:col-span-2 space-y-4 ">
            <Link to="/" className="inline-block">
              <img src={nirogo_Logo} alt="Nirogo Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              Your trusted digital pharmacy delivering authentic prescription medicines, health supplements, and personal care products directly to your doorstep safely.
            </p>
            
            <div className="space-y-2 pt-2 text-sm text-gray-700">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#1E3A8A]" /> <span>Emergency Hotline: +880 1234-567890</span>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#1E3A8A]" /> <span>support@nirogo.com</span>
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#1E3A8A]" /> <span>Dhaka, Bangladesh</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4 border-l-2 border-[#1E3A8A] pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-[#1E3A8A] transition-colors">About Us</Link></li>
              <li><Link to="/medicine" className="hover:text-[#1E3A8A] transition-colors">Prescription Medicines</Link></li>
              <li><Link to="/upload-prescription" className="hover:text-[#1E3A8A] transition-colors">Upload Prescription</Link></li>
              <li><Link to="/healthcare" className="hover:text-[#1E3A8A] transition-colors">Healthcare Products</Link></li>
              <li><Link to="/blogs" className="hover:text-[#1E3A8A] transition-colors">Health Tips & Articles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4 border-l-2 border-[#1E3A8A] pl-2">
              Customer Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/faq" className="hover:text-[#1E3A8A] transition-colors">FAQs</Link></li>
              <li><Link to="/tracking-order" className="hover:text-[#1E3A8A] transition-colors">Track Order</Link></li>
              <li><Link to="/return-policy" className="hover:text-[#1E3A8A] transition-colors">Return & Refund Policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#1E3A8A] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#1E3A8A] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4 border-l-2 border-[#1E3A8A] pl-2">
              Follow & Mobile App
            </h3>
            <p className="text-xs text-gray-500 mb-4">Download our app for easy ordering and exclusive discounts.</p>
            
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-gray-600 hover:bg-[#1E3A8A] hover:text-white transition-colors border border-gray-200">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-gray-600 hover:bg-[#1E3A8A] hover:text-white transition-colors border border-gray-200">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-gray-600 hover:bg-[#1E3A8A] hover:text-white transition-colors border border-gray-200">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-gray-600 hover:bg-[#1E3A8A] hover:text-white transition-colors border border-gray-200">
                <FaLinkedinIn size={14} />
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors">
                <span>Download on Google Play</span>
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors">
                <span>Download on App Store</span>
              </button>
            </div>
          </div>

        </div>

      
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4 max-w-[1200px] mx-auto">
          <p>© {new Date().getFullYear()} Nirogo. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
            <Link to="/sitemap" className="hover:underline">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;