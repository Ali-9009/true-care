import Image from "next/image";
import PrimaryBtn from "@/components/PrimaryBtn";
import {
    BadgeCheck,
    Handshake,
    HeartHandshake,
    ShieldCheck,
    Sparkles,
    UsersRound,
} from "lucide-react";

const values = [
    {
        icon: ShieldCheck,
        title: "Protection You Can Trust",
        description:
            "We build protection solutions designed to give customers confidence when the unexpected happens.",
    },
    {
        icon: HeartHandshake,
        title: "Customer First",
        description:
            "Every decision starts with creating a simpler, more dependable experience for customers.",
    },
    {
        icon: Handshake,
        title: "Strong Partnerships",
        description:
            "We work closely with retailers, service providers, and partners to create long-term value.",
    },
    {
        icon: Sparkles,
        title: "Smarter Service",
        description:
            "Technology and service expertise help us make protection and support more efficient.",
    },
];

const stats = [
    { value: "Day One", label: "Protection" },
    { value: "Expert", label: "Service Network" },
    { value: "Simple", label: "Customer Experience" },
    { value: "Trusted", label: "Partner Support" },
];

export default function AboutUsPage() {
    return (
        <>
            <section className="relative overflow-hidden bg-[#f7f7f5] py-16 md:py-24 lg:py-28">
                <div
                    aria-hidden="true"
                    className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-red-100/70 blur-3xl"
                />

                <div
                    aria-hidden="true"
                    className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl"
                />

                <div className="relative mx-auto max-w-360 px-4">
                    <div className="max-w-4xl">
                        <p className="badge mb-5">About TruCare</p>

                        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl md:text-6xl lg:text-7xl">
                            Protection built around
                            <span className="text-primary"> real life.</span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                            TruCare Protection was created by experienced protection plan and
                            service industry professionals with one goal: make coverage,
                            service, and support easier for customers and partners.
                        </p>

                        <div className="mt-8">
                            <PrimaryBtn href="/contact-us">
                                Work With TruCare
                            </PrimaryBtn>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-18 px-4">
                <div className="mx-auto grid max-w-360 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className="absolute -inset-5 -z-10 rounded-3xl bg-red-50"
                        />

                        <Image
                            src="/assets/about-trucare.jpg"
                            alt="TruCare team and service professionals"
                            width={1200}
                            height={1000}
                            className="w-full rounded-3xl object-cover"
                        />
                    </div>

                    <div>
                        <p className="badge mb-4">Who We Are</p>

                        <h2 className="heading mb-5">
                            Built by industry experts.
                            <span className="text-primary"> Designed for people.</span>
                        </h2>

                        <p className="text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                            TruCare brings together protection plan expertise, service
                            industry knowledge, and modern technology to create dependable
                            protection solutions for appliances, electronics, furniture, and
                            more.
                        </p>

                        <p className="mt-5 text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                            From remote diagnostics to in-home service, we focus on reducing
                            friction, improving service outcomes, and helping customers get
                            back to normal faster.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-18 px-4">
                <div className="mx-auto max-w-360">
                    <div className="grid gap-5 lg:grid-cols-2">
                        <article className="rounded-3xl bg-(--secondary-color) p-7 text-white md:p-10">
                            <div className="mb-10 flex size-12 items-center justify-center rounded-2xl bg-white/10">
                                <BadgeCheck size={22} aria-hidden="true" />
                            </div>

                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
                                Our Mission
                            </p>

                            <h2 className="max-w-xl text-2xl font-semibold leading-tight md:text-4xl">
                                Make protection simple, dependable, and valuable.
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-white/65">
                                We aim to deliver protection experiences that remove surprises,
                                improve service, and give customers greater peace of mind.
                            </p>
                        </article>

                        <article className="rounded-3xl bg-(--primary-color) p-7 text-white md:p-10">
                            <div className="mb-10 flex size-12 items-center justify-center rounded-2xl bg-white/15">
                                <UsersRound size={22} aria-hidden="true" />
                            </div>

                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
                                Our Vision
                            </p>

                            <h2 className="max-w-xl text-2xl font-semibold leading-tight md:text-4xl">
                                A better protection experience for everyone.
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-white/75">
                                We want customers, retailers, and service partners to feel
                                supported by smarter systems and stronger service relationships.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="py-18 px-4">
                <div className="mx-auto max-w-360">
                    <div className="grid overflow-hidden rounded-3xl border border-neutral-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`p-7 md:p-8 ${index !== stats.length - 1
                                    ? "border-b border-neutral-200 sm:border-r lg:border-b-0"
                                    : ""
                                    }`}
                            >
                                <p className="text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl">
                                    {stat.value}
                                </p>

                                <p className="mt-2 text-sm text-neutral-500">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-18 px-4">
                <div className="mx-auto max-w-360">
                    <div className="max-w-2xl">
                        <p className="badge mb-4">What We Believe</p>

                        <h2 className="heading">
                            The values behind
                            <span className="text-primary"> every TruCare experience.</span>
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => {
                            const Icon = value.icon;

                            return (
                                <article
                                    key={value.title}
                                    className="group rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--primary-color) hover:bg-(--primary-color) hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                                >
                                    <span className="flex size-12 items-center justify-center rounded-2xl bg-red-50 text-primary transition-all duration-300 group-hover:bg-white group-hover:text-(--primary-color)">
                                        <Icon size={22} aria-hidden="true" />
                                    </span>

                                    <h3 className="mt-8 text-xl font-semibold tracking-tight text-neutral-950 transition-colors duration-300 group-hover:text-white">
                                        {value.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-neutral-600 transition-colors duration-300 group-hover:text-white/80">
                                        {value.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-18 px-4">
                <div className="mx-auto max-w-360">
                    <div className="relative overflow-hidden rounded-3xl bg-(--secondary-color) px-6 py-12 md:px-10 md:py-16 lg:flex lg:items-center lg:justify-between">
                        <div>
                            <p className="badge mb-4">Let&apos;s Work Together</p>

                            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Better protection starts with better partnerships.
                            </h2>

                            <p className="mt-4 max-w-xl leading-7 text-white/70">
                                Discover how TruCare can support your customers, your business,
                                and your service network.
                            </p>
                        </div>

                        <div className="mt-8 lg:mt-0">
                            <PrimaryBtn href="/contact-us" className="hover:bg-white! hover:text-black!">
                                Contact TruCare
                            </PrimaryBtn>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}