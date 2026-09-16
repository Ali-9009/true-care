import Image from "next/image";

const leftBenefits = [
    "No Lemon Guarantee",
    "Power Surge Protection",
    "Covers wear & tear from normal use",
    "Fully Insured Program with an, A.M. Best Rated ``A`` Carrier",
    "Replacement and Repair Programs",
];

const rightBenefits = [
    "100% Covered Parts and Labor Coverage",
    "No Surprise Costs or Deductibles",
    "Toll-Free Customer Service Support",
    "If the product can't be fixed, we'll replace it — it's that simple!",
];

export default function Benefits() {
    return (
        <>
            <section className="px-6 py-12 bg-(--bg-color)">
                <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">

                    <div>
                        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl xl:text-[68px]">
                            TruCare
                            <span className="mt-2 block text-(--primary-color)">
                                Benefits
                            </span>
                        </h1>

                        <p className="mb-8 text-base leading-7 text-neutral-600 md:text-lg">
                            Own better coverage on purchases! TruCare Plans protect your newly purchased products from the unexpected mishaps of everyday use, allowing YOU to extend your product life while giving you the protection you deserve.
                        </p>
                    </div>

                    <figure className="relative">
                        <div aria-hidden="true" />

                        <Image
                            src="/assets/benefits-1.png"
                            alt="Remote Diagnostics"
                            width={1200}
                            height={1000}
                            className="h-auto w-full rounded-3xl object-cover"
                        />

                        <figcaption className="sr-only">
                            TruCare day-one protection coverage
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className="bg-(--bg-color) px-6 py-12">
                <div className="mx-auto max-w-6xl">
                    {/* Heading */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl xl:text-[68px]">
                            Why TruCare
                            <span className="mt-2 block text-(--primary-color)">
                                Protection?
                            </span>
                        </h1>
                    </div>

                    {/* Benefits */}
                    <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-20">
                        <ul className="space-y-5">
                            {leftBenefits.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-[17px] leading-7 text-neutral-950"
                                >
                                    <i
                                        className="ri-arrow-right-s-line mt-[2px] text-xl text-(--primary-color)"
                                        aria-hidden="true"
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <ul className="space-y-5">
                            {rightBenefits.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-[17px] leading-7 text-neutral-950"
                                >
                                    <i
                                        className="ri-arrow-right-s-line mt-[2px] text-xl text-(--primary-color)"
                                        aria-hidden="true"
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-(--bg-color) px-6 py-14 md:py-16">
                <div className="mx-auto max-w-[1200px]">
                    <div className="grid gap-14 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                        {/* Experience */}
                        <article className="flex flex-col items-center">
                            <i
                                className="ri-award-fill mb-6 text-[68px] leading-none text-(--primary-color)"
                                aria-hidden="true"
                            />

                            <h3 className="mb-7 text-[18px] font-semibold text-(--primary-color)">
                                Experience
                            </h3>

                            <p className="max-w-[260px] text-[18px] leading-[1.5] text-black">
                                TruCare has over 40 years of service plan Warranty experience
                                serving the industry.
                            </p>
                        </article>

                        {/* Trusted */}
                        <article className="flex flex-col items-center">
                            <i
                                className="ri-chat-3-fill mb-6 text-[68px] leading-none text-(--primary-color)"
                                aria-hidden="true"
                            />

                            <h3 className="mb-7 text-[18px] font-semibold text-(--primary-color)">
                                Trusted
                            </h3>

                            <p className="max-w-[270px] text-[18px] leading-[1.5] text-black">
                                Service warranty professionals founded TruCare to provide our
                                retail partners and customers with the level of service they
                                expect as part of their brand.
                            </p>
                        </article>

                        {/* Compliance / Risk */}
                        <article className="flex flex-col items-center">
                            <i
                                className="ri-shake-hands-fill mb-6 text-[68px] leading-none text-(--primary-color)"
                                aria-hidden="true"
                            />

                            <h3 className="mb-7 text-[18px] font-semibold text-(--primary-color)">
                                Compliance/Risk
                            </h3>

                            <p className="max-w-[270px] text-[18px] leading-[1.5] text-black">
                                TruCare Protection Plans are fully underwritten, and compliant
                                protection plans.
                            </p>
                        </article>

                        {/* Nationwide */}
                        <article className="flex flex-col items-center">
                            <i
                                className="ri-map-2-fill mb-6 text-[68px] leading-none text-(--primary-color)"
                                aria-hidden="true"
                            />

                            <h3 className="mb-7 text-[18px] font-semibold text-(--primary-color)">
                                Nationwide
                            </h3>

                            <p className="max-w-[270px] text-[18px] leading-[1.5] text-black">
                                TruCare offers nationwide service for various products. We provide
                                coverage in more than 85% of zip codes within available areas,
                                including all metro.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}