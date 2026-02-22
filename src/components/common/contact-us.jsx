import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from "@/components/forms/text-input";
import TextArea from "@/components/forms/text-area";

function ContactForm() {
    const recaptchaRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = recaptchaRef.current.getValue();
        recaptchaRef.current.reset();

        // send token with form data to backend
        const res = await fetch("/submit-form", {
            method: "POST",
            body: JSON.stringify({ token }),
            headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        console.log(data);
    };

    return (
        <div className='w-full lg:w-5/12 flex justify-end bg-[#263F43] text-white border border-[#2C4D53] rounded-xl p-5 md:p-10'>
            <form onSubmit={handleSubmit} method="post" className='w-full space-y-3'>
                <TextInput
                    label="Fullname"
                    name="fullname"
                    placeholder='John Doe'
                />
                <TextInput
                    label="Email"
                    name="email"
                    type='email'
                    placeholder='john.doe@example.com'
                />
                <TextInput
                    label="Company name"
                    name="company"
                    placeholder='Figma'
                />
                <TextArea
                    label="Message"
                    name="message"
                />

                <ReCAPTCHA className="w-full" sitekey="YOUR_SITE_KEY" ref={recaptchaRef} />

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
                    <button className="w-full md:w-auto px-6 h-12 flex items-center justify-center gap-2 text-white bg-[var(--primary-color)] border border-gray-500 rounded-full cursor-pointer">
                        Send a message
                    </button>
                    <button type="button" className="w-full md:w-auto px-6 h-12 flex items-center justify-center gap-2 text-[var(--primary-color)] border border-[var(--primary-color)] hover:bg-white rounded-full cursor-pointer">
                        Schedule a Call
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;