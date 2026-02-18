import Logo from "../assets/icons/logo.svg?react";
import Instagram from "../assets/icons/instagram.svg?react";
import Tiktok from "../assets/icons/tiktok.svg?react";

import { payInvoice } from "../helpers/generic";
import { scrollToSection } from "../utils/generic";

const Footer = ({ servicesRef, whyRef, howRef, contactRef }) => {
    return (
        <div className="px-5 md:px-10 lg:px-24 mt-5 md:mt-10 p-5 md:p-0">
            <div className="flex items-center gap-5 py-5">
                <div className="w-10 md:w-14 h-10 md:h-14 bg-gray-200 rounded-full">
                    <Logo className="w-full h-full object-center rounded-full" />
                </div>
                <p className="text-2xl md:text-4xl font-semibold">
                    <span>Pyroh</span>
                    <span className="text-primary">x</span>
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 py-5 md:py-10 border-y border-[var(--tertiary-color)]">
                <div className="w-full lg:w-1/2 space-y-5">
                    <p className="w-full lg:w-6/12 md:pr-8 text-sm md:text-base text-tertiary">
                        To help businesses grow with smart digital solutions to improve user experience, connect systems, and use AI to work smarter.
                    </p>
                    <div className="flex items-center gap-4">
                        <Instagram className="text-tertiary hover:!text-[var(--primary-color)] cursor-pointer" />
                        <Tiktok className="text-tertiary hover:!text-[var(--primary-color)] cursor-pointer" />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-start justify-between lg:justify-center md:gap-24">
                    <div className="space-y-2">
                        <h3 className="font-semibold">Quick Links</h3>
                        <button type="button" onClick={() => scrollToSection(servicesRef)} className="block text-sm md:text-base text-tertiary hover:underline">Services</button>
                        <button type="button" onClick={() => scrollToSection(whyRef)} className="block text-sm md:text-base text-tertiary hover:underline">Why Pyrohx</button>
                        <button type="button" onClick={() => scrollToSection(howRef)} className="block text-sm md:text-base text-tertiary hover:underline">How we Work</button>
                        <a href="" onClick={payInvoice} className="block text-sm md:text-base text-tertiary hover:underline">Pay Invoice</a>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold">Services</h3>
                        <a href="" className="block text-sm md:text-base text-tertiary hover:underline">Web Development</a>
                        <a href="" className="block text-sm md:text-base text-tertiary hover:underline">System Integration</a>
                        <a href="" className="block text-sm md:text-base text-tertiary hover:underline">AI Integration</a>
                        <a href="" className="block text-sm md:text-base text-tertiary hover:underline">SEO Optimization</a>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold">Company</h3>
                        <button type="button" onClick={() => scrollToSection(howRef)} className="block text-sm md:text-base text-tertiary hover:underline">About</button>
                        <button type="button" onClick={() => scrollToSection(contactRef)} className="block text-sm md:text-base text-tertiary hover:underline">Contact</button>
                        <a href="" className="block text-sm md:text-base text-tertiary hover:underline">Login</a>
                    </div>
                </div>
            </div>

            <p className="my-8 text-sm md:text-base text-tertiary">© 2026 Pyrohx. All rights reserved.</p>
        </div>
    )
};

export default Footer;