"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
    {
        name: "Samsung",
        logo: "/assets/partner-1.webp",
    },
    {
        name: "LG",
        logo: "/assets/partner-2.webp",
    },
    {
        name: "Sony",
        logo: "/assets/partner-3.webp",
    },
    {
        name: "Whirlpool",
        logo: "/assets/partner-4.webp",
    },
    {
        name: "GE",
        logo: "/assets/partner-5.webp",
    },
    {
        name: "Frigidaire",
        logo: "/assets/partner-6.webp",
    },
    {
        name: "Frigidaire",
        logo: "/assets/partner-7.webp",
    },
];

export default function BrandMarquee() {
    const marqueeBrands = [...brands, ...brands];

    return (
        <section className="overflow-hidden border-y border-neutral-200 py-10 md:py-14">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-8 text-center">
                    <h2 className="heading">
                        TruCare Protection Partners
                    </h2>
                </div>
            </div>

            <div className="relative overflow-hidden">
                {/* edge fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white to-transparent md:w-32" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white to-transparent md:w-32" />

                <motion.div
                    className="flex w-max items-center"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 24,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {marqueeBrands.map((brand, index) => (
                        <div
                            key={`${brand.name}-${index}`}
                            className="group flex h-36 w-56 shrink-0 items-center justify-center px-3 sm:h-40 sm:w-64 md:h-44 md:w-72"
                        >
                            <Image
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                width={280}
                                height={200}
                                className="max-h-28 w-auto object-contain opacity-60 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}