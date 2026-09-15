import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { plans } from "../../data/plans";

export const metadata = {
    title: "Protection Plans | TruCare Protection",
    description:
        "Explore TruCare protection plan options for appliances, electronics, and furniture.",
};

export default function PlansPage() {
    const planList = Object.values(plans);

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
                        <p className="badge mb-5">Plan Options</p>

                        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl md:text-6xl lg:text-7xl">
                            Protection built for everyday life.
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                            Explore TruCare protection plans designed for the products customers use and depend on every day.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto max-w-360 px-4">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {planList.map((plan) => (
                            <Link
                                key={plan.slug}
                                href={`/plans/${plan.slug}`}
                                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                            >
                                <article>
                                    {/* Image */}
                                    <figure className="relative aspect-4/3 overflow-hidden bg-neutral-100">
                                        <Image
                                            src={plan.image}
                                            alt={`${plan.title} protection plan`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                                    </figure>

                                    {/* Content */}
                                    <div className="p-6 md:p-7">
                                        <div className="flex items-start justify-between gap-5">
                                            <div>
                                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                                                    TruCare Plan
                                                </p>

                                                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                                                    {plan.title}
                                                </h2>
                                            </div>

                                            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-primary transition-all duration-300 group-hover:bg-(--primary-color) group-hover:text-white">
                                                <ArrowUpRight
                                                    size={18}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </div>

                                        <p className="mt-4 text-sm leading-6 text-neutral-600 md:text-base">
                                            {plan.description}
                                        </p>

                                        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-neutral-900">
                                            View Plan

                                            <ArrowUpRight
                                                size={16}
                                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}