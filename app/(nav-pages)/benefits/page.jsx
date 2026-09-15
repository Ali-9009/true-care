import PrimaryBtn from "@/components/PrimaryBtn";
import {
    BadgeCheck,
    CircleDollarSign,
    Clock3,
    Handshake,
    HeartHandshake,
    MapPin,
    ShieldCheck,
    Smile,
    Sparkles,
    Wrench,
} from "lucide-react";

const mainBenefits = [
    {
        icon: ShieldCheck,
        title: "Day-One Protection",
        description:
            "Protection designed to help customers from the moment their plan begins.",
    },
    {
        icon: CircleDollarSign,
        title: "No Surprise Costs",
        description:
            "Clear protection plans designed to reduce unexpected service expenses.",
    },
    {
        icon: Wrench,
        title: "Expert Service",
        description:
            "Access dependable service solutions backed by experienced professionals.",
    },
    {
        icon: Smile,
        title: "Peace of Mind",
        description:
            "Give customers greater confidence when everyday failures and mishaps happen.",
    },
];

const serviceBenefits = [
    {
        icon: BadgeCheck,
        title: "Higher First-Time Fix Rates",
        description:
            "Better diagnostics help technicians arrive prepared and resolve issues faster.",
    },
    {
        icon: MapPin,
        title: "Reach More Customers",
        description:
            "Remote diagnostics help support customers in underserved and remote areas.",
    },
    {
        icon: Clock3,
        title: "Faster Inspections",
        description:
            "Help meet customer expectations with quicker and more efficient service.",
    },
    {
        icon: CircleDollarSign,
        title: "Lower Service Costs",
        description:
            "Reduce unnecessary visits and improve service efficiency with smarter diagnostics.",
    },
    {
        icon: Sparkles,
        title: "Modern Technology",
        description:
            "Use technology to create better service experiences and improve operational efficiency.",
    },
    {
        icon: HeartHandshake,
        title: "Better Customer Care",
        description:
            "Create stronger relationships by giving customers dependable support when they need it.",
    },
];

const coverage = [
    "Accidental Damage",
    "Electrical & Mechanical Breakdowns",
    "Failures",
    "Mishaps",
    "Everyday Unexpected Events",
];

export default function Benefits() {
    return (
        <>
            <section className="relative overflow-hidden bg-[#f7f7f5] py-16 md:py-24 lg:py-28">
                <div
                    aria-hidden="true"
                    className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-100/70 blur-3xl"
                />

                <div
                    aria-hidden="true"
                    className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl"
                />

                <div className="relative mx-auto max-w-360 px-4">
                    <div className="max-w-4xl">
                        <p className="badge mb-5">
                            TruCare Benefits
                        </p>

                        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl md:text-6xl lg:text-7xl">
                            More protection.
                            <span className="text-primary"> Better service.</span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                            TruCare combines smart protection plans, experienced service,
                            and modern technology to create better outcomes for customers,
                            retailers, and service partners.
                        </p>

                        <div className="mt-8">
                            <PrimaryBtn href="/contact-us">
                                Talk With TruCare
                            </PrimaryBtn>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-18 px-4">
                <div className="mx-auto max-w-360">
                    <header className="max-w-2xl">
                        <p className="badge mb-4">
                            Why TruCare
                        </p>

                        <h2 className="heading">
                            Protection that creates
                            <span className="text-primary"> real value.</span>
                        </h2>

                        <p className="mt-5 text-base leading-7 text-neutral-600 md:text-lg">
                            Our protection plans are designed around the situations customers
                            experience every day.
                        </p>
                    </header>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {mainBenefits.map((benefit) => {
                            const Icon = benefit.icon;

                            return (
                                <article
                                    key={benefit.title}
                                    className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--primary-color) hover:bg-(--primary-color) hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-7"
                                >
                                    <span className="flex size-12 items-center justify-center rounded-2xl bg-red-50 text-primary transition-all duration-300 group-hover:bg-white group-hover:text-(--primary-color)">
                                        <Icon
                                            size={22}
                                            strokeWidth={2}
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <h3 className="mt-8 text-xl font-semibold tracking-tight text-neutral-950 transition-colors duration-300 group-hover:text-white">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-neutral-600 transition-colors duration-300 group-hover:text-white/80 md:text-base">
                                        {benefit.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-18 px-4">
                <div className="mx-auto max-w-360">
                    <div className="overflow-hidden rounded-3xl bg-neutral-950 p-7 text-white md:p-10 lg:p-12">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
                                    Day-One Protection
                                </p>

                                <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                                    Ready for the unexpected from day one.
                                </h2>

                                <p className="mt-5 max-w-lg leading-7 text-white/65">
                                    TruCare protection helps customers deal with common failures,
                                    damage, and mishaps without adding unnecessary stress.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {coverage.map((item, index) => (
                                    <div
                                        key={item}
                                        className={`flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 ${index === coverage.length - 1
                                            ? "sm:col-span-2"
                                            : ""
                                            }`}
                                    >
                                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-(--primary-color) text-sm font-semibold">
                                            {index + 1}
                                        </span>

                                        <p className="font-medium text-white/90">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-18 px-4">
                <div className="mx-auto max-w-360">
                    <header className="grid gap-6 lg:grid-cols-2 lg:items-end">
                        <div>
                            <p className="badge mb-4">
                                Smarter Service
                            </p>

                            <h2 className="heading">
                                Remote diagnostics.
                                <span className="text-primary"> Better outcomes.</span>
                            </h2>
                        </div>

                        <p className="max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                            From remote diagnostics to in-home service, TruCare helps improve
                            repair efficiency, reduce unnecessary costs, and deliver a better
                            customer experience.
                        </p>
                    </header>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {serviceBenefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <article
                                    key={benefit.title}
                                    className={`group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--primary-color) hover:bg-(--primary-color) hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-7 ${index === 0 ? "lg:col-span-2" : ""
                                        }`}
                                >
                                    <div className="mb-8 flex items-center justify-between">
                                        <span className="flex size-12 items-center justify-center rounded-2xl bg-red-50 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-(--primary-color)">
                                            <Icon
                                                size={22}
                                                strokeWidth={2}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <span className="text-xs font-semibold tracking-[0.16em] text-neutral-300 transition-colors duration-300 group-hover:text-white/60">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold tracking-tight text-neutral-950 transition-colors duration-300 group-hover:text-white">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600 transition-colors duration-300 group-hover:text-white/80 md:text-base md:leading-7">
                                        {benefit.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-18 px-4">
                <div className="mx-auto max-w-360">
                    <div className="grid gap-5 lg:grid-cols-2">
                        <article className="rounded-3xl bg-(--primary-color) p-7 text-white md:p-10">
                            <span className="flex size-12 items-center justify-center rounded-2xl bg-white/15">
                                <Handshake
                                    size={22}
                                    aria-hidden="true"
                                />
                            </span>

                            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
                                For Our Partners
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                                Better tools for better service.
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-white/80">
                                TruCare helps partners improve service efficiency, control
                                costs, reach more customers, and create stronger long-term
                                relationships.
                            </p>
                        </article>

                        <article className="rounded-3xl bg-[#f7f7f5] p-7 md:p-10">
                            <span className="flex size-12 items-center justify-center rounded-2xl bg-red-100 text-primary">
                                <HeartHandshake
                                    size={22}
                                    aria-hidden="true"
                                />
                            </span>

                            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-400">
                                For Customers
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 md:text-4xl">
                                Confidence when things go wrong.
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-neutral-600">
                                Customers get easier access to support, dependable protection,
                                faster service, and greater peace of mind when unexpected
                                problems happen.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="py-18 px-4">
                <div className="mx-auto max-w-360">
                    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-(--secondary-color) px-6 py-12 md:px-10 md:py-16 lg:flex lg:items-center lg:justify-between">
                        <div>
                            <p className="badge mb-4">
                                Better Protection Starts Here
                            </p>

                            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Give your customers more confidence with TruCare.
                            </h2>

                            <p className="mt-4 max-w-xl leading-7 text-white/70">
                                Discover how TruCare protection and service solutions can
                                support your customers and your business.
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