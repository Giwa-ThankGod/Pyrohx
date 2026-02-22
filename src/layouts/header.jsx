import Logo from "../assets/icons/logo.svg?react";
import ArrowRightUp from "../assets/icons/arrow-right-up.svg?react";
import ArrowRight from "../assets/icons/arrow-right.svg?react";
import { FiMenu } from "react-icons/fi";

import { payInvoice } from "../helpers/generic";
import { scrollToSection } from "../utils/generic";

const Header = ({ servicesRef, whyRef, contactRef, toggleSidebar }) => {
    return (
        <nav className="fixed inset-x-0 z-40 px-3 lg:px-24 mt-5">
            <div className="flex items-center justify-between p-2 bg-[var(--tertiary-color)] rounded-full">
                <div className="flex items-center gap-5">
                    <div className="w-10 md:w-14 h-10 md:h-14 bg-white rounded-full">
                        <Logo className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="hidden lg:flex items-center justify-between">
                        <p onClick={() => scrollToSection(servicesRef)} className="px-6 hover:text-[var(--primary-color)] cursor-pointer">Services</p>
                        <p onClick={() => scrollToSection(whyRef)} className="px-6 hover:text-[var(--primary-color)] cursor-pointer">Why Pyrohx</p>
                        <p onClick={() => scrollToSection(contactRef)} className="px-6 hover:text-[var(--primary-color)] cursor-pointer">Contact</p>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-3">
                    <button
                        onClick={payInvoice}
                        className="px-6 h-13 flex items-center gap-2 hover:bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full cursor-pointer"
                    >
                        Pay Invoice
                        <ArrowRightUp />
                    </button>
                    <button className="px-6 h-13 flex items-center gap-2 bg-[linear-gradient(to_bottom,#41B883_0%,#41B883_50%,#2EFFA2_100%)] hover:opacity-80 border-2 border-gray-300 text-white rounded-full cursor-pointer">
                        Schedule a Call
                        <span className="flex items-center justify-center p-1 bg-white rounded-full">
                            <ArrowRight />
                        </span>
                    </button>
                </div>
                <div onClick={toggleSidebar} className="lg:hidden px-3">
                    <FiMenu className="text-2xl text-primary" />
                </div>
            </div>
        </nav>
    )
};

export default Header;