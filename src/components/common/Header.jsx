import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { cartIcon, notificationIcon, userImg } from "../../assets/index"

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="px-5 md:px-10 lg:px-14 xl:px-20 py-5 flex justify-between items-center bg-white shadow-sm">
            {/* Left Section: Logo + Navbar */}
            <div className="flex items-center gap-[60px] flex-grow">
                {/* Logo */}
                <Link to="/" className='font-[800] italic text-[#0D3356] text-[22px] md:text-[25px] lg:text-[32.8px]'>
                    FashionHub
                </Link>

                {/* Desktop & Tablet Navigation */}
                <nav className={`hidden md:flex gap-8 lg:gap-[50px] items-center`}>
                    <Link to="#" className="text-text-blue">Category</Link>
                    <Link to="#" className="text-text-blue">Brand</Link>
                    <Link to="#" className="text-text-blue">Contact</Link>
                    <Link to="#" className="text-text-blue">FAQ's</Link>
                </nav>
            </div>

            {/* Right Section: Icons & Mobile Menu */}
            <div className="flex items-center gap-2 md:gap-[17px]">
                {/* Cart Icon */}
                <div className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-[#F5F1EE] flex justify-center items-center rounded-full">
                    <img src={cartIcon} alt="Cart" />
                </div>

                {/* Notifications Icon */}
                <div className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-[#EEEFF8] flex justify-center items-center rounded-full">
                    <img src={notificationIcon} alt="Notifications" />
                </div>

                {/* Mobile Menu Button */}
                <button className="text-[#0D3356] text-2xl flex md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* User Profile (Visible only on MD and larger screens) */}
                <div className="hidden md:flex items-center gap-2">
                    <img src={userImg} alt="User" className="w-[40px] md:w-[50px] h-[40px] md:h-[50px]" />
                    <div className="hidden lg:flex flex-col">
                        <span className="text-[#C0C3C6] text-sm">Good Morning</span>
                        <span className="text-text-blue font-semibold">Scarlet Johnson</span>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation (Overlay) */}
            {
                menuOpen && (
                    <nav className="flex flex-col justify-center items-center absolute top-16 left-0 w-full bg-white shadow-lg py-5 gap-4 md:hidden">
                        <Link to="#" className="text-text-blue" onClick={() => setMenuOpen(false)}>Category</Link>
                        <Link to="#" className="text-text-blue" onClick={() => setMenuOpen(false)}>Brand</Link>
                        <Link to="#" className="text-text-blue" onClick={() => setMenuOpen(false)}>Contact</Link>
                        <Link to="#" className="text-text-blue" onClick={() => setMenuOpen(false)}>FAQ's</Link>
                        {/* User Profile in Mobile View */}
                        <div className="flex flex-col items-center md:hidden">
                            <img src={userImg} alt="User" className="w-8 h-8" />
                            <span className="text-[#C0C3C6] text-sm">Good Morning</span>
                            <span className="text-text-blue font-semibold">Scarlet Johnson</span>
                        </div>
                    </nav>
                )
            }
        </header >

    );
};