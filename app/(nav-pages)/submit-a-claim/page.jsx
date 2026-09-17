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

            <section className="py-12">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-10 text-center md:mb-14">
                        <h1 className="text-3xl font-bold tracking-tight text-(--primary-color) md:text-5xl">
                            Submit a Claim
                        </h1>

                        <p className="mx-auto mt-3 max-w-5xl text-md font-semibold text-neutral-700 md:text-2xl">
                            Welcome to the TruCare claims submission form. Please, fill out the information below and one of our claims specialist will respond within the next 48hrs with next steps.
                        </p>
                    </div>

                    <ClaimForm />
                </div>
            </section>
        </>
    );
}