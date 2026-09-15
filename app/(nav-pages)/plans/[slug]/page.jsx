import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";

import PrimaryBtn from "@/components/PrimaryBtn";
import { plans } from "../../../data/plans";

export function generateStaticParams() {
    return Object.keys(plans).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const plan = plans[slug];

    if (!plan) {
        return {
            title: "Plan Not Found | TruCare Protection",
        };
    }

    return {
        title: `${plan.title} Protection Plan | TruCare Protection`,
        description: plan.description,
    };
}

export default async function PlanDetailsPage({ params }) {
    const { slug } = await params;

    const plan = plans[slug];

    if (!plan) {
        notFound();
    }

    return (
        <>
            <section className="bg-[#f7f7f5] py-14 md:py-20">
                <div className="mx-auto grid max-w-360 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="badge mb-4">
                            {plan.title} Protection
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
                            Protection for your
                            <span className="text-primary">
                                {" "} {plan.title.toLowerCase()}.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
                            {plan.description}
                        </p>

                        <div className="mt-8">
                            <PrimaryBtn href="/submit-a-claim">
                                Submit a Claim
                            </PrimaryBtn>
                        </div>
                    </div>

                    <figure className="relative aspect-4/3 overflow-hidden rounded-3xl">
                        <Image
                            src={plan.image}
                            alt={`${plan.title} protection`}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </figure>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto max-w-360 px-4">
                    <div className="max-w-2xl">
                        <p className="badge mb-4">
                            Products
                        </p>

                        <h2 className="heading">
                            Products available under
                            <span className="text-primary">
                                {" "}
                                {plan.title}
                            </span>
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {plan.products.map((product) => (
                            <article
                                key={product}
                                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-(--primary-color) hover:bg-(--primary-color)"
                            >
                                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-primary transition-all duration-300 group-hover:bg-white group-hover:text-(--primary-color)">
                                    <Check
                                        size={17}
                                        strokeWidth={2.5}
                                        aria-hidden="true"
                                    />
                                </span>

                                <h3 className="font-semibold text-neutral-950 transition-colors duration-300 group-hover:text-white">
                                    {product}
                                </h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}