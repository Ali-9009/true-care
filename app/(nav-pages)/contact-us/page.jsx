import {
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

export const metadata = {
    title: "Contact Us | TruCare Protection",
    description:
        "Contact TruCare Protection for help with protection plans, partnerships, service, and customer support.",
};

const contactDetails = [
    {
        icon: MapPin,
        label: "Visit Us",
        value: "1692 Coastal Highway, Lewes, Delaware, 19958",
    },
    {
        icon: Phone,
        label: "Call Us",
        value: "888-699-2TRU",
        href: "tel:8886992878",
    },
    {
        icon: Mail,
        label: "Email Us",
        value: "info@trucareprotection.com",
        href: "mailto:info@trucareprotection.com",
    },
];

export default function Contact() {
    return (
        <>
            <section className="relative overflow-hidden bg-[#f7f7f5] py-16 md:py-20">
                <div
                    aria-hidden="true"
                    className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-100/60 blur-3xl"
                />

                <div
                    aria-hidden="true"
                    className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl"
                />

                <div className="relative mx-auto max-w-360 px-4">
                    <div className="max-w-3xl">
                        <p className="badge mb-4">
                            Contact TruCare
                        </p>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
                            How can we
                            <span className="text-primary"> help?</span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                            Have a question about TruCare Protection, service, or becoming a
                            partner? Send us a message and our team will be happy to help.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto grid max-w-360 gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    {/* Left */}
                    <aside>
                        <p className="badge mb-4">
                            Get In Touch
                        </p>

                        <h2 className="heading max-w-lg">
                            We&apos;re here when
                            <span className="text-primary"> you need us.</span>
                        </h2>

                        <p className="mt-5 max-w-lg text-base leading-7 text-neutral-600">
                            Reach out to our team for questions about protection plans,
                            service support, partnerships, or general inquiries.
                        </p>

                        <div className="mt-9 space-y-3">
                            {contactDetails.map((item) => {
                                const Icon = item.icon;

                                const content = (
                                    <>
                                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-primary">
                                            <Icon
                                                size={19}
                                                strokeWidth={2}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <span>
                                            <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
                                                {item.label}
                                            </span>

                                            <span className="mt-1 block text-sm font-medium leading-6 text-neutral-900 sm:text-base">
                                                {item.value}
                                            </span>
                                        </span>
                                    </>
                                );

                                return item.href ? (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="group flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition-colors duration-300 hover:border-red-200"
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div
                                        key={item.label}
                                        className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-4"
                                    >
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    </aside>

                    {/* Form */}
                    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:p-8 md:p-10">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
                                Send us a message
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-neutral-500 md:text-base">
                                Fill out the form below and a member of our team will get back
                                to you.
                            </p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-neutral-800"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    placeholder="Your name"
                                    className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                                />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-neutral-800"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="you@example.com"
                                        className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-medium text-neutral-800"
                                    >
                                        Phone
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        required
                                        placeholder="(555) 000-0000"
                                        className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-neutral-800"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    placeholder="Tell us how we can help..."
                                    className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm leading-6 text-neutral-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 md:text-base"
                            >
                                Send Message
                            </button>

                            <p className="text-xs leading-5 text-neutral-400">
                                By submitting this form, you agree to be contacted regarding your inquiry.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}