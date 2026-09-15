import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Benefits", href: "/benefits" },
  { label: "Submit a Claim", href: "/submit-a-claim" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
];

const planLinks = [
  { label: "All Plans", href: "/plans" },
  { label: "Appliances", href: "/plans/appliances" },
  { label: "Electronics", href: "/plans/electronics" },
  { label: "Furniture", href: "/plans/furniture" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#f8f8f6]">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr] lg:gap-10">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex"
            >
              <Image
                src="/assets/TruCareProtection.png"
                alt="TruCare Protection"
                width={150}
                height={50}
                className="h-auto w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-600">
              Protection plans designed to help customers handle unexpected
              failures, breakdowns, and everyday mishaps with confidence.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/trucare-protection"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:border-red-200 hover:bg-red-50 hover:text-primary"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Company */}
          <nav aria-label="Company links">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-950">
              Company
            </h2>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Plans */}
          <nav aria-label="Protection plans">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-950">
              Plans
            </h2>

            <ul className="mt-5 space-y-3">
              {planLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-950">
              Contact
            </h2>

            <div className="mt-5 space-y-4">
              <a
                href="tel:8886992878"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <Phone size={16} />
                </span>

                <span>
                  <span className="block text-xs text-neutral-400">
                    Call Us
                  </span>

                  <span className="mt-1 block text-sm font-medium text-neutral-700 transition group-hover:text-primary">
                    888-699-2TRU
                  </span>
                </span>
              </a>

              <a
                href="mailto:info@trucareprotection.com"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <Mail size={16} />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-neutral-400">
                    Email Us
                  </span>

                  <span className="mt-1 block break-all text-sm font-medium text-neutral-700 transition group-hover:text-primary">
                    info@trucareprotection.com
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <MapPin size={16} />
                </span>

                <span>
                  <span className="block text-xs text-neutral-400">
                    Office
                  </span>

                  <span className="mt-1 block text-sm leading-6 text-neutral-700">
                    1692 Coastal Highway
                    <br />
                    Lewes, Delaware 19958
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} TruCare Protection. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}