"use client";

import { useState } from "react";
import {
    CheckCircle2,
    FileImage,
    Loader2,
    Upload,
    X,
} from "lucide-react";

const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
];

const productTypes = [
    "Appliance",
    "Electronics",
    "Fitness Equipment",
    "Furniture",
    "Mattress",
    "Vacuum / Sewing Machine",
];

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const inputClass =
    "h-12 w-full border-2 border-[#cfcfcf] bg-[#f8f8f8] px-2 text-md text-black rounded-xl  ";

const requiredInputClass =
    "h-12 w-full border-2 border-[#cfcfcf] bg-[#f8f8f8] px-2 text-md text-black rounded-xl  ";

export default function ClaimForm() {
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");

    const handleFiles = (event) => {
        const selectedFiles = Array.from(event.target.files || []);

        const invalidFile = selectedFiles.find(
            (file) =>
                !["image/jpeg", "video/mp4"].includes(file.type) ||
                file.size > MAX_FILE_SIZE,
        );

        if (invalidFile) {
            setMessage(
                "Only JPG and MP4 files up to 2 MB each are allowed.",
            );

            event.target.value = "";
            return;
        }

        setMessage("");
        setFiles((current) => [...current, ...selectedFiles]);

        event.target.value = "";
    };

    const removeFile = (index) => {
        setFiles((current) =>
            current.filter((_, fileIndex) => fileIndex !== index),
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setStatus("sending");
        setMessage("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        files.forEach((file) => {
            formData.append("attachments", file);
        });

        try {
            const response = await fetch("/api/claim", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Unable to submit your claim.",
                );
            }

            setStatus("success");
            setMessage(
                "Your claim has been submitted successfully. Our claims team will contact you with next steps.",
            );

            form.reset();
            setFiles([]);
        } catch (error) {
            setStatus("error");
            setMessage(
                error.message ||
                "Something went wrong. Please try again.",
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-5xl mx-auto bg-white text-black"
        >
            {/* Customer Information */}
            <fieldset>
                <legend className="mb-5 text-xl font-semibold text-red-600">
                    Customer Information
                </legend>

                <div className="space-y-3">
                    <div>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className={inputClass}
                            placeholder="First Name"
                        />
                    </div>

                    <div>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className={inputClass}
                            placeholder="Last Name"
                        />
                    </div>

                    <div>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            required
                            className={inputClass}
                            placeholder="Address"
                        />
                    </div>

                    <div>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            required
                            className={inputClass}
                            placeholder="City"
                        />
                    </div>

                    <div>
                        <select
                            id="state"
                            name="state"
                            required
                            defaultValue=""
                            className={requiredInputClass}
                        >
                            <option value="" disabled>
                                Select State/Province
                            </option>

                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <input
                            id="zip"
                            name="zip"
                            type="text"
                            required
                            className={requiredInputClass}
                            placeholder="Zip/Postal Code"
                        />
                    </div>

                    <div>
                        <input
                            id="country"
                            name="country"
                            type="text"
                            required
                            className={inputClass}
                            placeholder="Country"
                        />
                    </div>

                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className={inputClass}
                            placeholder="E-mail"
                        />
                    </div>

                    <div>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            className={requiredInputClass}
                            placeholder="Phone Number"
                        />
                    </div>

                    <div>
                        <input
                            id="secondaryPhone"
                            name="secondaryPhone"
                            type="tel"
                            className={requiredInputClass}
                            placeholder="Phone Secondary"
                        />
                    </div>
                </div>

                <div className="mt-5 text-md">
                    <p className="font-medium">
                        I authorize us to send me a text message*
                    </p>

                    <p className="mt-2">
                        If you select Yes, please indicate your mobile number as
                        the primary phone number
                    </p>

                    <div className="mt-2 space-y-1">
                        <label className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="smsAuthorization"
                                value="Yes"
                                required
                            />
                            Yes
                        </label>

                        <label className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="smsAuthorization"
                                value="No"
                                required
                            />
                            No
                        </label>
                    </div>
                </div>
            </fieldset>

            {/* Product Information */}
            <fieldset className="mt-8">
                <legend className="mb-5 text-xl font-semibold text-red-600">
                    Product Information
                </legend>

                <div className="space-y-3">
                    <div>
                        <input
                            id="purchaseLocation"
                            name="purchaseLocation"
                            type="text"
                            required
                            className={inputClass}
                            placeholder="What store was product purchased?"
                        />
                    </div>

                    <div>
                        <select
                            id="productType"
                            name="productType"
                            required
                            defaultValue=""
                            className={requiredInputClass}
                        >
                            <option value="" disabled>
                                Select Product Type*
                            </option>

                            {productTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <input
                            id="brand"
                            name="brand"
                            type="text"
                            required
                            className={inputClass}
                            placeholder="Brand"
                        />
                    </div>

                    <div>
                        <input
                            id="serial"
                            name="serial"
                            type="text"
                            className={inputClass}
                            placeholder="Serial"
                        />
                    </div>

                    <div>
                        <input
                            id="model"
                            name="model"
                            type="text"
                            className={inputClass}
                            placeholder="Model"
                        />
                    </div>

                    <div className="w-[260px]">
                        <label htmlFor="purchaseDate">
                            Date of Delivery / Date of Purchase*
                        </label>
                        <input
                            id="purchaseDate"
                            name="purchaseDate"
                            type="date"
                            required
                            className={requiredInputClass}
                        />
                    </div>

                    <div className="w-[260px]">
                        <label htmlFor="failureDate">
                            Failure Report Date*
                        </label>
                        <input
                            id="failureDate"
                            name="failureDate"
                            type="date"
                            required
                            className={requiredInputClass}
                        />
                    </div>
                </div>
            </fieldset>

            {/* Product Issue */}
            <fieldset className="mt-8">
                <legend className="mb-5 text-xl font-semibold text-red-600">
                    Product Issue
                </legend>

                <textarea
                    id="productIssue"
                    name="productIssue"
                    rows={4}
                    required
                    className="w-full resize-y border-2 border-[#cfcfcf] bg-[#f8f8f8] p-2 text-md rounded-xl text-black outline-none focus:border-[#999]"
                    placeholder="Product Issue & Cause - please provide a short description of
                    the issue"
                />
            </fieldset>

            {/* Uploads */}
            <div className="mt-5 text-md">
                <p>
                    UPLOAD PHOTOS/VIDEOS (jpg or MP4 format, maximum file size 2MB)
                    - Adding photos of the covered product and issue will assist in
                    expediting your claim. (OPTIONAL)
                </p>

                <div className="mt-3 rounded-xl w-65 py-3 px-6 border-2 border-(--primary-color)">
                    <input
                        id="claimFiles"
                        type="file"
                        multiple
                        accept=".jpg,.jpeg,.mp4,image/jpeg,video/mp4"
                        onChange={handleFiles}
                        className="block text-md file:mr-2 file:border file:border-red-500 file:bg-white file:px-2 file:py-[2px] file:text-md"
                    />
                </div>

                {files.length > 0 && (
                    <div className="mt-2 space-y-1">
                        {files.map((file, index) => (
                            <div
                                key={`${file.name}-${index}`}
                                className="flex items-center gap-2"
                            >
                                <span>{file.name}</span>

                                <button
                                    type="button"
                                    onClick={() => removeFile(index)}
                                    className="text-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {message && (
                <p
                    className={`mt-4 text-[10px] ${status === "success"
                        ? "text-green-600"
                        : "text-red-600"
                        }`}
                >
                    {message}
                </p>
            )}

            <div className="mt-6 text-center">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-[#ff1f2d] px-4 py-3 rounded-xl text-md font-semibold uppercase text-white hover:bg-[#db1723] disabled:opacity-60"
                >
                    {status === "sending" ? "Submitting..." : "Submit Claim"}
                </button>
            </div>
        </form>
    );
}