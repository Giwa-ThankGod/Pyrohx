import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from "@/components/forms/text-input";
import TextArea from "@/components/forms/text-area";
import ActionModal from "@/components/common/action-modal";
import { Loader } from "lucide-react";

const BASEURL = import.meta.env.VITE_BASE_URL;
const SITEKEY = import.meta.env.VITE_SITE_KEY;

function ContactForm() {
    const recaptchaRef = useRef();
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        company: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [captchaToken, setCaptchaToken] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [serverMessage, setServerMessage] = useState("");

    const validate = () => {
        const newErrors = {};

        if (!formData.fullname.trim()) {
            newErrors.fullname = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message cannot be empty";
        }

        if (!captchaToken) {
            newErrors.captcha = "Please verify you are human";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // clear field error as user types
        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
        setErrors(prev => ({ ...prev, captcha: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerMessage("");

        if (!validate()) return;

        try {
            setIsSubmitting(true);

            const payload = {
                ...formData,
                recaptchaToken: captchaToken
            };

            const res = await fetch(`${BASEURL}/contact-form`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            setFormData({ fullname: "", email: "", company: "", message: "" });
            setCaptchaToken(null);
            if (recaptchaRef.current) {
                recaptchaRef.current.reset(); // <-- resets the Google captcha widget
            };
            
            setIsOpen(true);
        } catch (err) {
            setServerMessage(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const isDisabled = isSubmitting || !captchaToken;

    return (
        <div className='w-full lg:w-5/12 flex justify-end bg-[#263F43] text-white border border-[#2C4D53] rounded-xl p-5 md:p-10'>
            <form onSubmit={handleSubmit} method="post" className='w-full space-y-3' noValidate>
                <TextInput
                    label="Fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder='John Doe'
                    error={errors.fullname}
                />
                <TextInput
                    label="Email"
                    name="email"
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='john.doe@example.com'
                    error={errors.email}
                />
                <TextInput
                    label="Company name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder='Figma'
                    error={errors.company}
                />
                <TextArea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                />

                <ReCAPTCHA size="normal" onChange={handleCaptchaChange} sitekey={SITEKEY} ref={recaptchaRef} />
                {errors.captcha && (
                    <p className="text-red-400 text-sm">{errors.captcha}</p>
                )}

                {serverMessage && (
                    <p className="text-sm text-green-400">{serverMessage}</p>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
                    <button
                        // disabled={isDisabled}
                        className="w-full md:w-auto px-6 h-12 flex items-center justify-center gap-2 text-white bg-[var(--primary-color)] border border-gray-500 rounded-full cursor-pointer"
                    >
                        {isSubmitting ? (
                            <Loader rotate={360} className='text-xl animate-spin mx-auto' />
                        ) : <span>Send a message</span>
                        }

                    </button>
                    <button type="button" className="w-full md:w-auto px-6 h-12 flex items-center justify-center gap-2 text-[var(--primary-color)] border border-[var(--primary-color)] hover:bg-white rounded-full cursor-pointer">
                        Schedule a Call
                    </button>
                </div>
            </form>

            <ActionModal
                isOpen={isOpen}
                onClose={setIsOpen}
                title="Message Sent Successfully"
                description="Thank you for reaching out. We'll get back to you as soon as possible."
                buttonCloseText="Close"
            />
        </div>
    );
}

export default ContactForm;