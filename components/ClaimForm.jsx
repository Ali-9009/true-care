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
    "h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-6 text-sm text-neutral-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10";

const labelClass =
    "mb-2 block text-sm font-medium text-neutral-800";

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
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
            <div className="border-b border-neutral-200 px-6 py-7 sm:px-8 md:px-10">
                <p className="text-sm font-semibold text-primary">
                    Claim Information
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
                    Tell us about your claim
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
                    Fields marked with an asterisk are required.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-10 p-6 sm:p-8 md:p-10"
            >
                {/* Customer Information */}
                <fieldset>
                    <legend className="mb-6 text-xl font-semibold tracking-tight text-neutral-950">
                        Customer Information
                    </legend>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className={labelClass}
                            >
                                Full Name *
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                placeholder="Your full name"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className={labelClass}
                            >
                                Email Address *
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="you@example.com"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="phone"
                                className={labelClass}
                            >
                                Primary Phone Number *
                            </label>

                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                placeholder="(555) 000-0000"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="state"
                                className={labelClass}
                            >
                                State / Province *
                            </label>

                            <select
                                id="state"
                                name="state"
                                required
                                defaultValue=""
                                className={inputClass}
                            >
                                <option
                                    value=""
                                    disabled
                                >
                                    Select State / Province
                                </option>

                                {states.map((state) => (
                                    <option
                                        key={state}
                                        value={state}
                                    >
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* SMS */}
                    <div className="mt-6 rounded-2xl bg-neutral-50 p-5">
                        <p className="text-sm font-medium text-neutral-900">
                            I authorize TruCare to send me a text message *
                        </p>

                        <p className="mt-1 text-xs leading-5 text-neutral-500">
                            If you select Yes, please provide your mobile number as
                            the primary phone number.
                        </p>

                        <div className="mt-4 flex gap-6">
                            <label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-700">
                                <input
                                    type="radio"
                                    name="smsAuthorization"
                                    value="Yes"
                                    required
                                    className="size-4 accent-red-600"
                                />
                                Yes
                            </label>

                            <label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-700">
                                <input
                                    type="radio"
                                    name="smsAuthorization"
                                    value="No"
                                    required
                                    className="size-4 accent-red-600"
                                />
                                No
                            </label>
                        </div>
                    </div>
                </fieldset>

                <div className="border-t border-neutral-200" />

                {/* Product Information */}
                <fieldset>
                    <legend className="mb-6 text-xl font-semibold tracking-tight text-neutral-950">
                        Product Information
                    </legend>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="productType"
                                className={labelClass}
                            >
                                Product Type *
                            </label>

                            <select
                                id="productType"
                                name="productType"
                                required
                                defaultValue=""
                                className={inputClass}
                            >
                                <option
                                    value=""
                                    disabled
                                >
                                    Select Product Type
                                </option>

                                {productTypes.map((type) => (
                                    <option
                                        key={type}
                                        value={type}
                                    >
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="purchaseDate"
                                className={labelClass}
                            >
                                Date of Delivery / Purchase *
                            </label>

                            <input
                                id="purchaseDate"
                                name="purchaseDate"
                                type="date"
                                required
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="failureDate"
                                className={labelClass}
                            >
                                Failure Report Date *
                            </label>

                            <input
                                id="failureDate"
                                name="failureDate"
                                type="date"
                                required
                                className={inputClass}
                            />
                        </div>
                    </div>
                </fieldset>

                <div className="border-t border-neutral-200" />

                {/* Product Issue */}
                <fieldset>
                    <legend className="mb-6 text-xl font-semibold tracking-tight text-neutral-950">
                        Product Issue
                    </legend>

                    <div>
                        <label
                            htmlFor="productIssue"
                            className={labelClass}
                        >
                            Describe the issue *
                        </label>

                        <textarea
                            id="productIssue"
                            name="productIssue"
                            rows={6}
                            required
                            placeholder="Please describe what happened and the issue you are experiencing..."
                            className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-3 text-sm leading-6 text-neutral-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                        />
                    </div>
                </fieldset>

                {/* Upload */}
                <div>
                    <div className="mb-3">
                        <p className="text-sm font-medium text-neutral-800">
                            Upload Photos / Videos
                            <span className="ml-1 font-normal text-neutral-400">
                                Optional
                            </span>
                        </p>

                        <p className="mt-1 text-xs leading-5 text-neutral-500">
                            Upload JPG or MP4 files. Maximum file size is 2 MB per
                            file. Adding photos or videos of the product and issue
                            may help expedite your claim.
                        </p>
                    </div>

                    <label
                        htmlFor="claimFiles"
                        className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-10 text-center transition hover:border-red-400 hover:bg-red-50/40"
                    >
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                            <Upload
                                size={21}
                                aria-hidden="true"
                            />
                        </span>

                        <span className="mt-4 text-sm font-semibold text-neutral-900">
                            Choose photos or videos
                        </span>

                        <span className="mt-1 text-xs text-neutral-500">
                            JPG or MP4 · Maximum 2 MB each
                        </span>

                        <input
                            id="claimFiles"
                            type="file"
                            multiple
                            accept=".jpg,.jpeg,.mp4,image/jpeg,video/mp4"
                            onChange={handleFiles}
                            className="sr-only"
                        />
                    </label>

                    {files.length > 0 && (
                        <ul className="mt-4 space-y-2">
                            {files.map((file, index) => (
                                <li
                                    key={`${file.name}-${index}`}
                                    className="flex items-center justify-between gap-4 rounded-xl border border-neutral-200 bg-white px-6 py-3"
                                >
                                    <div className="flex min-w-0 items-center gap-3">
                                        <FileImage
                                            size={18}
                                            className="shrink-0 text-primary"
                                            aria-hidden="true"
                                        />

                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-medium text-neutral-800">
                                                {file.name}
                                            </p>

                                            <p className="text-xs text-neutral-400">
                                                {(file.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => removeFile(index)}
                                        aria-label={`Remove ${file.name}`}
                                        className="flex size-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition hover:bg-red-50 hover:text-red-600"
                                    >
                                        <X
                                            size={16}
                                            aria-hidden="true"
                                        />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Response message */}
                {message && (
                    <div
                        role="status"
                        className={`rounded-xl px-6 py-3 text-sm leading-6 ${status === "success"
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                            }`}
                    >
                        {status === "success" && (
                            <CheckCircle2
                                size={18}
                                className="mr-2 inline-block"
                                aria-hidden="true"
                            />
                        )}

                        {message}
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 disabled:pointer-events-none disabled:opacity-60 md:text-base"
                >
                    {status === "sending" ? (
                        <>
                            <Loader2
                                size={18}
                                className="animate-spin"
                                aria-hidden="true"
                            />
                            Submitting Claim...
                        </>
                    ) : (
                        "Submit Claim"
                    )}
                </button>
            </form>
        </div>
    );
}