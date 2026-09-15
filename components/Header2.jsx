"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Logs, X } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },

    {
        name: "Plan Options",
        path: "/plans",
        dropdown: [
            { name: "Appliances", path: "/plans/appliances" },
            { name: "Electronics", path: "/plans/electronics" },
            { name: "Furniture", path: "/plans/furniture" },
            { name: "All Plans", path: "/plans" },
        ],
    },
    { name: "Benefits", path: "/benefits" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Submit a Claim", path: "/submit-a-claim" },
];

export default function Header2() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/70">
                {/* Main Navbar */}
                <div className="border-b border-gray-200 bg-white/70 ">
                    <div className="mx-auto flex max-w-360 items-center justify-between px-4 py-3">
                        {/* Logo */}
                        <Link href="/" aria-label="Home">
                            <Image
                                src="/assets/TruCareProtection.png"
                                alt="TruCareProtection"
                                width={160}
                                height={60}
                                priority
                                className="h-11 w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav
                            aria-label="Main navigation"
                            className="hidden items-center gap-8 font-medium text-(--secondary-color) lg:flex"
                        >
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="group relative"
                                >
                                    <Link
                                        href={link.path}
                                        className="flex items-center gap-1 transition-colors hover:text-(--primary-color)"
                                    >
                                        {link.name}

                                        {link.dropdown && (
                                            <ChevronDown
                                                size={15}
                                                className="transition-transform duration-200 group-hover:rotate-180"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Link>

                                    {link.dropdown && (
                                        <div className="invisible absolute left-0 top-full z-50 min-w-48 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                            <div className="overflow-hidden rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.path}
                                                        className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-(--primary-color)"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            aria-label="Open navigation menu"
                            aria-expanded={open}
                            className="lg:hidden"
                        >
                            <Logs size={27} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay */}
            {open && (
                <button
                    type="button"
                    aria-label="Close navigation menu"
                    className="fixed inset-0 z-50 bg-black/40 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <aside
                aria-label="Mobile navigation"
                className={`fixed right-0 top-0 z-60 h-dvh w-[85%] max-w-80 bg-white shadow-xl transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between border-b border-gray-200 p-4">
                    <Link href="/" onClick={() => setOpen(false)}>
                        <Image
                            src="/assets/TruCareProtection.png"
                            alt="TruCareProtection"
                            width={120}
                            height={50}
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Close navigation menu"
                        className="flex size-9 items-center justify-center rounded-full hover:bg-gray-100"
                    >
                        <X size={22} />
                    </button>
                </div>

                <nav
                    aria-label="Mobile navigation links"
                    className="flex flex-col p-4"
                >
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="border-b border-gray-100"
                        >
                            <Link
                                href={link.path}
                                onClick={() => setOpen(false)}
                                className="block py-3 font-medium text-gray-900"
                            >
                                {link.name}
                            </Link>

                            {link.dropdown && (
                                <div className="mb-3 ml-2 flex flex-col border-l border-gray-200">
                                    {link.dropdown.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.path}
                                            onClick={() => setOpen(false)}
                                            className="px-4 py-2 text-sm text-gray-500 transition-colors hover:text-(--primary-color)"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
}