import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FiMoon, FiSun } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function Navbar({ isDarkMode, onToggleDarkMode }) {

  const navigate = useNavigate();
  const { itemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);  // Scroll to top when navigating to home
  
  }
 

  const  moveToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);  // Scroll to top when navigating to home
  }
  const handleLinkClick = () => {
    window.scrollTo(0, 0);  // Scroll to top whenever any link is clicked
  };

  const themeToggle = (
    <button
      type="button"
      className="theme-toggle flex items-center justify-center gap-2 rounded-full border border-current px-3 py-2 font-semibold transition-colors"
      onClick={onToggleDarkMode}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      aria-pressed={isDarkMode}
    >
      {isDarkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
      <span className="hidden sm:inline">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
    </button>
  )

  return (
    <>
      <nav className="bg-[#F7F5F0] py-2 border-b border-gray-300 overflow-hidden px-1 lg:px-4 sticky top-0 z-10 shadow-lg">
        <div className="lg:px-8 flex justify-between items-center">
          
          <div className=" flex items-center gap-3 cursor-pointer" onClick={()=>moveToHome()}>
            <img src={logo} alt="Logo" className='w-[54px] h-[54px] object-contain ' />
             <h1 className='text-2xl tracking-[3px]'>LYNK</h1>
          </div>

          {/* Hide on small/medium devices, show on large */}
          <div className="hidden lg:flex space-x-14 mx-auto">
            <Link to="" className="text-black hover:text-gray-600 font-semibold" onClick={()=>handleLinkClick()}>Home</Link>
            <Link to="/purchase" className="text-black hover:text-gray-600 font-semibold" onClick={()=>handleLinkClick()}>Purchase</Link>
            <Link to="/demo" className="text-black hover:text-gray-600 font-semibold" onClick={()=>handleLinkClick()}>Demo</Link>
            {/* <Link to="/blogs" className="text-black hover:text-gray-600 font-semibold" onClick={()=>handleLinkClick()}>Blogs</Link> */}
            <Link to="/contact" className="text-black hover:text-gray-600 font-semibold" onClick={()=>handleLinkClick()}>Contact</Link>
            {/* <Link to="/about" className="text-black hover:text-gray-600 font-semibold">About</Link> */}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              onClick={handleLinkClick}
              aria-label={`Shopping cart, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#162032] transition hover:bg-slate-200"
            >
              <FiShoppingCart size={20} aria-hidden="true" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff5a5f] px-1 text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>
            <div className="hidden lg:block">{themeToggle}</div>

            {/* Show on small/medium devices, hide on large */}
            <div className="lg:hidden cursor-pointer pe-2">
              {isOpen ? (
                <IoMdClose size={28} color='grey' onClick={toggleMenu} />
              ) : (
                <GiHamburgerMenu size={28} color='grey' onClick={toggleMenu} />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed  z-20" onClick={closeMenu}></div>
      )}
      <div
        className={`fixed flex flex-col  w-full bg-gray-200 p-5 rounded-xl gap-8 text-center   
          
          transform transition-transform duration-300 ease-in-out z-30 
          lg:hidden
          ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`
      }

        style={{
          opacity : "0.94"
        }}
 
      >
        <div className="flex justify-center">{themeToggle}</div>
        <Link to="/cart" className="text-black hover:text-gray-600 font-semibold block" onClick={closeMenu}>
          Cart{itemCount > 0 ? ` (${itemCount})` : ''}
        </Link>
        <Link to="" className="text-black hover:text-gray-600 font-semibold block" onClick={closeMenu}>Home</Link>
        <Link to="/purchase" className="text-black hover:text-gray-600 font-semibold block" onClick={closeMenu}>Purchase</Link>
        <Link to="/demo" className="text-black hover:text-gray-600 font-semibold block" onClick={closeMenu}>Demo</Link>
        {/* <Link to="/blogs" className="text-black hover:text-gray-600 font-semibold block" onClick={closeMenu}>Blogs</Link> */}
        <Link to="/contact" className="text-black hover:text-gray-600 font-semibold block" onClick={closeMenu}>Contact</Link>
        {/* <Link to="/about" className="text-black hover:text-gray-600 font-semibold block" onClick={closeMenu}>About</Link> */}
      </div>
    </>
  );
}