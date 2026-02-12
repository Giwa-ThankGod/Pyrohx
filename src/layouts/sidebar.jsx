import React from "react";

import Logo from "../assets/icons/logo.svg?react";
import ArrowRightUp from "../assets/icons/arrow-right-up.svg?react";
import ArrowRight from "../assets/icons/arrow-right.svg?react";
import { scrollToSection } from "../utils/generic";

import { MdClose } from "react-icons/md";

const Sidebar = ({ isOpen, closeSidebar, servicesRef, whyRef, contactRef }) => {
    if (!isOpen) return null;

    const navRoute = (ref) => {
        scrollToSection(ref);
        closeSidebar();
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={`lg:hidden fixed inset-y-0 right-0 w-full bg-white text-black z-50 shadow-2xl
                transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
            </div>

            {/* Sidebar */}
            <div
                className={`lg:hidden fixed inset-y-0 right-0 w-full bg-white text-black z-50 shadow-2xl
                transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >

                <div className="h-full overflow-y-auto space-y-8">
                    <div className="p-5 flex items-center justify-between">
                        <div className="w-10 md:w-14 h-10 md:h-14 bg-gray-200 rounded-full">
                            <Logo className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="w-9 h-9 bg-[var(--tertiary-color)] rounded-full text-center flex items-center justify-center">
                            <MdClose onClick={closeSidebar} className="text-2xl" />
                        </div>
                    </div>
                    <div className="space-y-2 px-5">
                        <div className="sidebar-item" onClick={() => navRoute(servicesRef)}>
                            <p className="hover-lift w-full bg-[var(--tertiary-color)] px-6 py-3 rounded-full">Services</p>
                        </div>

                        <div className="sidebar-item" onClick={() => navRoute(whyRef)}>
                            <p className="hover-lift w-full bg-[var(--tertiary-color)] px-6 py-3 rounded-full">Why Pyrohx</p>
                        </div>

                        <div className="sidebar-item" onClick={() => navRoute(contactRef)}>
                            <p className="hover-lift w-full bg-[var(--tertiary-color)] px-6 py-3 rounded-full">Contact</p>
                        </div>

                        <div className="sidebar-item space-y-3">
                            <button className="sidebar-button w-full px-6 h-12 flex items-center justify-center gap-2 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full cursor-pointer">
                                Pay Invoice
                                <ArrowRightUp />
                            </button>
                            <button className="sidebar-button w-full px-6 h-12 flex items-center justify-center gap-2 glow-button text-white rounded-full cursor-pointer">
                                Schedule a Call
                                <span className="flex items-center justify-center p-1 bg-white rounded-full">
                                    <ArrowRight />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;