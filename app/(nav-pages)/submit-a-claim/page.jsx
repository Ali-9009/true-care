import Image from "next/image";
import ClaimForm from "@/components/ClaimForm";

export const metadata = {
    title: "Submit a Claim | TruCare Protection",
    description:
        "Submit a TruCare Protection claim online. Provide your customer, product, and issue information and our claims team will follow up with next steps.",
};

export default function SubmitClaimPage() {
    return (
        <>
            <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/assets/claim.webp"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />
                {/* Center Logo */}
                <div className="relative z-10">
                    <Image
                        src="/assets/TruCareProtection.png"
                        alt="TruCare Protection"
                        width={256}
                        height={100}
                        priority
                        className="h-auto w-48 object-contain md:w-64"
                    />
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <ClaimForm />
                </div>
            </section>
        </>
    );
}