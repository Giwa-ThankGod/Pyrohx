import { useState } from "react";

import Footer from "@/layouts/footer";
import ActionModal from "@/components/common/action-modal";
import SelectInput from "@/components/forms/select-input";
import TextArea from "@/components/forms/text-area";
import TextInput from "@/components/forms/text-input";

import {
    budgetRangeOptions,
    projectStageOptions,
    scheduleServiceOptions,
    timelineOptions,
} from "@/constants/dropdown";

import { Loader } from "lucide-react";
import ScheduleCallImage from "@/assets/images/schedule_call_img.png";

const BASEURL = import.meta.env.VITE_BASE_URL;
const INITIAL_DATA = {
        fullname: "",
        email: "",
        company_name: "",
        website: "",
        service: "",
        project_stage: "",
        budget_range: "",
        timeline: "",
        description: "",
    }

function ScheduleCall() {
    const [formData, setFormData] = useState(INITIAL_DATA);
    const [errors, setErrors] = useState({});
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

        if (!formData.company_name) {
            newErrors.company_name = "Company name is required";
        }
        
        if (!formData.service) {
            newErrors.service = "Select a service";
        }

        if (!formData.project_stage) {
            newErrors.project_stage = "Select a project stage";
        }

        if (!formData.budget_range) {
            newErrors.budget_range = "Select a budget range";
        }

        if (!formData.timeline) {
            newErrors.timeline = "Select a timeline";
        }

        if (!formData.description.trim()) {
            newErrors.description = "Project goals are required";
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

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerMessage("");

        if (!validate()) return;

        try {
            setIsSubmitting(true);

            const res = await fetch(`${BASEURL}/schedule-call`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setFormData(INITIAL_DATA);
            setErrors({});
            setIsOpen(true);
        } catch (err) {
            setServerMessage(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-[#FAFAFA]">
            <section className="relative pb-8">
                <div className="relative w-full min-h-[300px] px-5 md:px-10 lg:px-24 py-16 bg-black overflow-hidden">
                    <img
                        src={ScheduleCallImage}
                        alt="schedule-call-image"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="relative z-10 text-white space-y-2">
                        <h3 className="max-w-md text-4xl md:text-5xl font-semibold leading-none md:leading-tight">
                            Schedule a Discovery Call
                        </h3>

                        <p className="max-w-lg text-sm">
                            Tell us about your project and goals. We review every request carefully
                            and respond within 24 hours with next steps and available times.
                        </p>
                    </div>
                </div>

                <div className="relative z-20 -mt-16 md:-mt-10 w-full px-5 md:px-10 lg:px-24">
                    <form onSubmit={handleSubmit} method="post" className="space-y-4 bg-white rounded-xl" noValidate>
                        <div className="space-y-3 bg-white p-5 md:p-10 rounded-xl">
                            <h4 className="text-[#777777] capitalize">BASIC DETAILS</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <TextInput
                                    label="Fullname"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    placeholder="Jane Smith"
                                    error={errors.fullname}
                                />
                                <TextInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jane@gmail.com"
                                    error={errors.email}
                                />
                                <TextInput
                                    label="Company Name"
                                    name="company_name"
                                    value={formData.company_name}
                                    onChange={handleChange}
                                    placeholder="Figma"
                                    error={errors.company_name}
                                />
                                <TextInput
                                    label="Website (optional)"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="https://example.com"
                                    error={errors.website}
                                />
                            </div>
                        </div>

                        <div className="space-y-3 bg-white p-5 md:p-10 rounded-xl">
                            <h4 className="text-[#777777] capitalize">PROJECT CONTEXT</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <SelectInput
                                    label="Service Interested In"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    options={scheduleServiceOptions}
                                    placeholder="Select service"
                                    error={errors.service}
                                />
                                <SelectInput
                                    label="Project Stage"
                                    name="project_stage"
                                    value={formData.project_stage}
                                    onChange={handleChange}
                                    options={projectStageOptions}
                                    placeholder="Select stage"
                                    error={errors.project_stage}
                                />
                                <SelectInput
                                    label="Budget Range"
                                    name="budget_range"
                                    value={formData.budget_range}
                                    onChange={handleChange}
                                    options={budgetRangeOptions}
                                    placeholder="Select range"
                                    error={errors.budget_range}
                                />
                                <SelectInput
                                    label="Timeline"
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    options={timelineOptions}
                                    placeholder="Select timeline"
                                    error={errors.timeline}
                                />
                            </div>
                        </div>

                        <div className="space-y-3 bg-white p-5 md:p-10 rounded-xl">
                            <h4 className="text-[#777777] capitalize">PROJECT OVERVIEW</h4>
                            <TextArea
                                label="Describe Your Goals"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Tell us about your project, what you're looking to achieve, and any relevant context..."
                                error={errors.description}
                            />
                        </div>

                        {serverMessage && (
                            <p className="text-sm text-red-500">{serverMessage}</p>
                        )}

                        <div className="flex flex-col items-center justify-center gap-2 pb-10">
                            <button
                                type="submit"
                                className="px-12 h-13 min-h-12 flex items-center gap-2 bg-[linear-gradient(to_bottom,#41B883_0%,#41B883_50%,#2EFFA2_100%)] hover:opacity-80 border-2 border-gray-300 text-white rounded-full cursor-pointer"
                            >
                                {isSubmitting ? (
                                    <Loader rotate={360} className="text-xl animate-spin mx-auto" />
                                ) : <span>Request a Call</span>}
                            </button>
                            <p className="text-sm text-[#777777]">We'll respond within 24 hours to confirm a time.</p>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />

            <ActionModal
                isOpen={isOpen}
                onClose={setIsOpen}
                title="Request Received"
                description="We'll respond as soon as we are able."
                buttonCloseText="Close"
            />
        </section>
    );
}

export default ScheduleCall;
