import ClaimForm from "@/components/ClaimForm";

export const metadata = {
    title: "Submit a Claim | TruCare Protection",
    description:
        "Submit a TruCare Protection claim online. Provide your customer, product, and issue information and our claims team will follow up with next steps.",
};

export default function SubmitClaimPage() {
    return (
        <>
            <section className="relative overflow-hidden bg-[#f7f7f5] py-14 md:py-20">
                <div
                    aria-hidden="true"
                    className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-100/60 blur-3xl"
                />

                <div
                    aria-hidden="true"
                    className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl"
                />

                <div className="relative mx-auto max-w-360 px-4">
                    <div className="max-w-3xl">
                        <p className="badge mb-4">
                            Claims Support
                        </p>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
                            Submit a
                            <span className="text-primary"> Claim</span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                            Fill out the information below and one of our claims specialists
                            will respond within the next 48 hours with next steps.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <ClaimForm />
                </div>
            </section>
        </>
    );
}