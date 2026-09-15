import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PrimaryBtn({
    href = "#",
    children,
    className = "",
    showIcon = true,
}) {
    return (
        <Link
            href={href}
            className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-(--primary-color) px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-(--secondary-color) hover:shadow-lg hover:shadow-(--primary-color)/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-color) focus-visible:ring-offset-2 sm:text-base ${className}`}
        >
            <span>{children}</span>

            {showIcon && (
                <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
            )}
        </Link>
    );
}


{/* <PrimaryBtn href="/contact-us">
    Contact Us
</PrimaryBtn>

// without icon
<PrimaryBtn href="/about-us" showIcon={false}>
  Learn More
</PrimaryBtn> */}