"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqs = [
    {
        question: "What is TruCare Protection?",
        answer:
            "TruCare Protection provides protection plans designed to help customers with unexpected product failures, breakdowns, accidental damage, and other covered issues.",
    },
    {
        question: "What products can TruCare plans cover?",
        answer:
            "TruCare protection plans may be available for appliances, electronics, furniture, mattresses, fitness equipment, vacuums, sewing machines, and other eligible products.",
    },
    {
        question: "When does my protection begin?",
        answer:
            "Coverage depends on the specific plan and product. Some TruCare plans are designed to provide protection from day one, while others may begin after the manufacturer warranty or according to the terms of the plan.",
    },
    {
        question: "How do I submit a claim?",
        answer:
            "You can submit a claim through our online claim form. You will be asked to provide your contact details, product information, purchase or delivery date, failure date, and a description of the issue.",
    },
    {
        question: "Can I upload photos or videos with my claim?",
        answer:
            "Yes. You can optionally upload JPG photos or MP4 videos to help our claims specialists better understand the issue and potentially speed up the review process.",
    },
    {
        question: "How long does it take to hear back after submitting a claim?",
        answer:
            "Our claims team typically responds within 48 hours with next steps after receiving your claim submission.",
    },
    {
        question: "What is remote diagnostics?",
        answer:
            "Remote diagnostics allows our team or service partners to evaluate certain product issues before an in-home visit. This can help improve first-time fix rates, reduce unnecessary service visits, and speed up the service process.",
    },
    {
        question: "Does TruCare provide in-home service?",
        answer:
            "Depending on the covered product, issue, and protection plan, TruCare may coordinate in-home service through qualified service professionals.",
    },
    {
        question: "Can I receive text message updates?",
        answer:
            "Yes. If you provide authorization and use your mobile number as your primary phone number, TruCare may send text messages related to your claim or service request.",
    },
    {
        question: "How can I contact TruCare?",
        answer:
            "You can contact TruCare by phone at 888-699-2TRU or by email at info@trucareprotection.com.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <>
            <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/assets/faq.webp"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />
                {/* Center Logo */}
                <div className="relative z-10">
                    <h2 className="heading">
                        FAQ’S
                    </h2>
                </div>
            </section>

            <section className="py-12 md:py-20 px-6 bg-(--bg--color)">
                <div className="mx-auto max-w-7xl">

                    {/* Accordion */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <article
                                    key={faq.question}
                                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                                        ? "border-red-200 bg-red-50/30"
                                        : "border-neutral-200 bg-white"
                                        }`}
                                >
                                    <h2>
                                        <button
                                            type="button"
                                            onClick={() => toggleFAQ(index)}
                                            aria-expanded={isOpen}
                                            className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                                        >
                                            <span className="text-base font-semibold leading-6 text-neutral-950 sm:text-lg">
                                                {faq.question}
                                            </span>

                                            <span
                                                className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                                                    ? "rotate-180 bg-red-600 text-white"
                                                    : "bg-neutral-100 text-neutral-700"
                                                    }`}
                                            >
                                                <ChevronDown
                                                    size={18}
                                                    strokeWidth={2}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </button>
                                    </h2>

                                    <div
                                        className={`grid transition-all duration-300 ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-5 pb-6 pr-14 text-sm leading-7 text-neutral-600 sm:px-6 sm:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}