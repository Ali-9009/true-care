"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Benefits", href: "/benefits" },
  { label: "Submit a Claim", href: "/submit-a-claim" },
  { label: "Policy", href: "/privacy-policy" },
  { label: "FAQs", href: "/faqs" },

  {
    label: "Plans",
    href: "/plans",
    children: [
      {
        label: "Appliances",
        href: "/plans/appliances",
      },
      {
        label: "Electronics",
        href: "/plans/electronics",
      },
      {
        label: "Furniture",
        href: "/plans/furniture",
      },
    ],
  },

  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePlansOpen, setMobilePlansOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  const plansRef = useRef(null);

  /* Hide top bar on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Lock body when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* Close desktop Plans when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        plansRef.current &&
        !plansRef.current.contains(event.target)
      ) {
        setPlansOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setPlansOpen(false);
        setMobileOpen(false);
        setMobilePlansOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );

      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobilePlansOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 h-20">
        {/* ================= TOP BAR ================= */}
        <div
          className={`absolute left-0 top-0 h-10 w-full bg-neutral-950 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${hideTopBar
            ? "-translate-y-full"
            : "translate-y-0"
            }`}
        >
          <div className="mx-auto flex h-full max-w-360 items-center justify-between gap-4 px-4">
            {/* Left */}
            <div className="flex min-w-0 items-center gap-5 text-white/70">
              {/* Phone */}
              <a
                href="tel:8886992878"
                className="flex shrink-0 items-center gap-2 text-xs font-medium tracking-wide transition-colors hover:text-white"
              >
                <Phone
                  size={14}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <span>888-699-2TRU</span>
              </a>

              {/* Address */}
              <div className="hidden min-w-0 items-center gap-2 sm:flex">
                <MapPin
                  size={14}
                  strokeWidth={1.8}
                  className="shrink-0"
                  aria-hidden="true"
                />

                <span className="truncate text-xs font-medium tracking-wide">
                  1692 Coastal Highway, Lewes, Delaware, 19958
                </span>
              </div>
            </div>

            {/* Socials */}
            <nav
              aria-label="Social media"
              className="flex shrink-0 items-center gap-1"
            >
              <a
                href="https://www.linkedin.com/company/trucare-protection"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-7 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FaLinkedinIn size={15} />
              </a>
            </nav>
          </div>
        </div>

        {/* ================= MAIN HEADER ================= */}
        <div
          className={`absolute left-0 top-0 w-full border-b border-neutral-200/80 bg-white/95 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${hideTopBar
            ? "translate-y-0"
            : "translate-y-10"
            }`}
        >
          <nav
            aria-label="Main navigation"
            className="mx-auto flex h-20 max-w-360 items-center justify-between gap-8 px-4"
          >
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex shrink-0 items-center"
            >
              <Image
                src="/assets/TruCareProtection.png"
                alt="TruCare Protection"
                width={120}
                height={40}
                className="h-auto w-auto object-contain"
                priority
              />
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="group relative"
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 py-7 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
                    >
                      {link.label}

                      <ChevronDown
                        size={15}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:rotate-180"
                        aria-hidden="true"
                      />
                    </Link>

                    {/* Dropdown */}
                    <div className="invisible absolute left-1/2 top-[calc(100%-8px)] z-50 w-56 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.10)]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-red-50 hover:text-primary"
                          >
                            {child.label}

                            <span className="-translate-x-1 text-primary opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100">
                              →
                            </span>
                          </Link>
                        ))}

                        <div className="mt-1 border-t border-neutral-100 pt-1">
                          <Link
                            href="/plans"
                            className="block rounded-xl px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-red-50"
                          >
                            View All Plans
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-7 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="flex size-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 transition hover:bg-neutral-100 lg:hidden"
            >
              <Menu size={20} />
            </button>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        aria-hidden="true"
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${mobileOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
          }`}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        aria-label="Mobile menu"
        className={`fixed right-0 top-0 z-70 flex h-dvh w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${mobileOpen
          ? "translate-x-0"
          : "translate-x-full"
          }`}
      >
        {/* Mobile Header */}
        <header className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="inline-flex items-center"
          >
            <Image
              src="/assets/TruCareProtection.png"
              alt="TruCare Protection"
              width={120}
              height={40}
              className="h-auto w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
            className="flex size-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 transition hover:bg-neutral-100"
          >
            <X size={20} />
          </button>
        </header>

        {/* Mobile Nav */}
        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col overflow-y-auto px-6 py-6"
        >
          <div className="space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                /* ================= MOBILE PLANS ================= */
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobilePlansOpen(
                        (current) => !current,
                      )
                    }
                    aria-expanded={mobilePlansOpen}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${mobilePlansOpen
                      ? "bg-red-50 text-primary"
                      : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                      }`}
                  >
                    <span>{link.label}</span>

                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className={`transition-transform duration-300 ${mobilePlansOpen
                        ? "rotate-180"
                        : ""
                        }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Mobile dropdown */}
                  <div
                    className={`grid transition-all duration-300 ${mobilePlansOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="ml-4 mt-1 space-y-1 border-l border-neutral-200 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-500 transition-colors hover:bg-red-50 hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}

                        <Link
                          href="/plans"
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-red-50"
                        >
                          View All Plans
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Normal Mobile Link */
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Bottom */}
          <div className="mt-auto border-t border-neutral-200 pt-6">
            <a
              href="tel:8886992878"
              className="flex items-center gap-3 text-sm font-medium text-neutral-600"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-neutral-100">
                <Phone
                  size={16}
                  aria-hidden="true"
                />
              </span>

              888-699-2TRU
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}