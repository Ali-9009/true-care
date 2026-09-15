"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
            <section className="relative overflow-hidden bg-[#f7f7f5] py-16 md:py-20">
                <div
                    aria-hidden="true"
                    className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-100/60 blur-3xl"
                />

                <div
                    aria-hidden="true"
                    className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl"
                />

                <div className="relative mx-auto max-w-360 px-4">
                    <div className="max-w-3xl">
                        <p className="badge mb-4">Frequently Asked Questions</p>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
                            Questions?
                            <span className="text-primary"> We&apos;re here to help.</span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                            Find answers to common questions about TruCare protection plans,
                            claims, service, coverage, and customer support.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="mx-auto grid max-w-360 gap-12 px-4 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
                    {/* Left intro */}
                    <aside className="lg:sticky lg:top-28 lg:self-start">
                        <p className="badge mb-4">Need Help?</p>

                        <h2 className="heading">
                            Everything you need to
                            <span className="text-primary"> know.</span>
                        </h2>

                        <p className="mt-5 max-w-md text-base leading-7 text-neutral-600">
                            Browse the most common questions below. If you still need help,
                            our team is available to assist with your protection plan or
                            claim.
                        </p>

                        <div className="mt-7 space-y-2 text-sm text-neutral-600">
                            <p>
                                Call{" "}
                                <a
                                    href="tel:8886992878"
                                    className="font-semibold text-neutral-950 transition hover:text-primary"
                                >
                                    888-699-2TRU
                                </a>
                            </p>

                            <p>
                                Email{" "}
                                <a
                                    href="mailto:info@trucareprotection.com"
                                    className="font-semibold text-neutral-950 transition hover:text-primary"
                                >
                                    info@trucareprotection.com
                                </a>
                            </p>
                        </div>
                    </aside>

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