import Image from "next/image";

export const metadata = {
    title: "Contact Us | TruCare Protection",
    description:
        "Contact TruCare Protection for help with protection plans, partnerships, service, and customer support.",
};

export default function Contact() {
    return (
        <>
            <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/assets/contact-bg.webp"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />
                {/* Center Logo */}
                <div className="relative z-10">
                    <Image
                        src="/assets/TruCareProtection.png"
                        alt="TruCare Protection"
                        width={256}
                        height={100}
                        priority
                        className="h-auto w-48 object-contain md:w-64"
                    />
                </div>
            </section>

            <section className="bg-(--bg-color) px-6 py-14 md:py-20">
                <div className="mx-auto max-w-[1140px]">
                    {/* Heading */}
                    <div className="text-center">
                        <h2 className="text-[40px] font-semibold leading-tight text-(--primary-color)">
                            Contact Us
                        </h2>

                        <p className="mt-7 text-[24px] text-[#333333]">
                            Drop Us A Note and We Will Contact You ASAP
                        </p>
                    </div>

                    <div className="mt-24 grid gap-16 lg:grid-cols-[1.1fr_0.8fr] lg:items-start">
                        {/* Form */}
                        <form className="space-y-11">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    placeholder="Name*"
                                    className="h-[46px] w-full rounded-[10px] border border-[#ededed] bg-transparent px-3 text-[16px] text-[#222] outline-none transition focus:border-(--primary-color) focus:bg-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="E-mail*"
                                    className="h-[46px] w-full rounded-[10px] border border-[#ededed] bg-transparent px-3 text-[16px] text-[#222] outline-none transition focus:border-(--primary-color) focus:bg-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Phone
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                    placeholder="Phone*"
                                    className="h-[46px] w-full rounded-[10px] border border-[#ededed] bg-white px-3 text-[16px] text-[#222] outline-none transition focus:border-(--primary-color)"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    placeholder="Message*"
                                    className="min-h-[145px] w-full resize-y rounded-[10px] border border-[#ededed] bg-transparent px-3 py-3 text-[16px] text-[#222] outline-none transition focus:border-(--primary-color) focus:bg-white"
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="rounded-full bg-(--primary-color) px-7 py-2.5 text-[14px] font-semibold uppercase text-white transition-colors hover:bg-[#d91823]"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

                        {/* Contact Details */}
                        <aside className="space-y-14 lg:pt-0">
                            <div className="flex items-start gap-3">
                                <i
                                    className="ri-map-pin-fill mt-1 text-[25px] leading-none text-(--primary-color)"
                                    aria-hidden="true"
                                />

                                <p className="text-[24px] leading-[1.8] text-[#333333]">
                                    1692 Coastal Highway, Lewes,
                                    <br />
                                    Delaware, 19958
                                </p>
                            </div>

                            <a
                                href="tel:8886992TRU"
                                className="flex items-center gap-4 text-(--primary-color)"
                            >
                                <i
                                    className="ri-phone-fill text-[27px] leading-none"
                                    aria-hidden="true"
                                />

                                <span className="text-[23px]">
                                    888-699-2TRU
                                </span>
                            </a>

                            <a
                                href="mailto:info@trucareprotection.com"
                                className="flex items-center gap-3 text-[#333333]"
                            >
                                <i
                                    className="ri-mail-fill text-[31px] leading-none text-(--primary-color)"
                                    aria-hidden="true"
                                />

                                <span className="text-[23px]">
                                    info@trucareprotection.com
                                </span>
                            </a>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}