import Logo from "../assets/icons/logo.svg?react";
import ArrowRightUp from "../assets/icons/arrow-right-up.svg?react";
import ArrowRight from "../assets/icons/arrow-right.svg?react";

const Header = () => {
    return (
        <nav className="relative inset-x-0 z-[50] px-5 md:px-24 mt-5">
            <div className="flex items-center justify-between p-2 bg-[var(--tertiary-color)] rounded-full">
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gray-200 rounded-full">
                        <Logo className="w-full h-full object-cover rounded-full"/>
                    </div>
                    <div className="hidden md:flex items-center justify-between">
                        <p className="px-6">Services</p>
                        <p className="px-6">Why Pyrohx</p>
                        <p className="px-6">Contact</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-5">
                    <button className="px-6 h-12 flex items-center gap-2 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full cursor-pointer">
                        Pay Invoice
                        <ArrowRightUp />
                    </button>
                    <button className="px-6 h-12 flex items-center gap-2 glow-button text-white rounded-full cursor-pointer">
                        Schedule a Call
                        <span className="flex items-center justify-center p-1 bg-white rounded-full">
                            <ArrowRight />
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
};

export default Header;