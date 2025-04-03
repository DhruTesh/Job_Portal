"use client";

import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    phone: string;
    email: string;
    organization: string;
    roles: string;
    additionalInfo?: string;
};

export default function HiringForm() {
    const {
        register,
        handleSubmit,
        reset, // <-- Added reset function
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", data);
        alert("Form submitted successfully!");
        reset(); // <-- Clears the form after submission
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-semibold text-center mb-4">
                Hire Top Talent from Airtribe
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block font-medium">Name *</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        className="w-full p-2 border rounded"
                        placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Phone Number *</label>
                    <input
                        {...register("phone", { required: "Phone number is required" })}
                        type="tel"
                        className="w-full p-2 border rounded"
                        placeholder="Your phone number"
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Work Email *</label>
                    <input
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        className="w-full p-2 border rounded"
                        placeholder="Your work email"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Organization Name *</label>
                    <input
                        {...register("organization", { required: "Organization name is required" })}
                        className="w-full p-2 border rounded"
                        placeholder="Your organization"
                    />
                    {errors.organization && <p className="text-red-500">{errors.organization.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Roles You Are Looking to Hire *</label>
                    <input
                        {...register("roles", { required: "Roles are required" })}
                        className="w-full p-2 border rounded"
                        placeholder="Roles you are hiring for"
                    />
                    {errors.roles && <p className="text-red-500">{errors.roles.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Additional Information</label>
                    <textarea
                        {...register("additionalInfo")}
                        className="w-full p-2 border rounded"
                        placeholder="Anything else you'd like to share"
                    />
                </div>

                {/* Buttons Section */}
                <div className="flex justify-between">
                    <button type="submit" className="bg-[#683FBE] text-white p-2 rounded w-1/2 mr-2 cursor-pointer">
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={() => reset()} // <-- Clears the form
                        className="bg-gray-300 text-black p-2 rounded w-1/2 cursor-pointer"
                    >
                        Clear Form
                    </button>
                </div>
            </form>
        </div>
    );
}
