import Image from "next/image";

import {
  Check,
  CircleCheck,
  Clock3,
  Handshake,
  MapPin,
  PiggyBank,
  Smile,
  Wrench,
} from "lucide-react";

import Hero from "@/components/Hero";
import PrimaryBtn from "@/components/PrimaryBtn";
import BrandMarquee from "@/components/BrandMarquee";

const protectionBenefits = [
  "Accidental Damage",
  "Electrical & Mechanical Breakdowns",
  "Failures",
  "Mishaps",
  "The Unexpected in Our Everyday Lives",
];

const diagnosticBenefits = [
  {
    icon: Wrench,
    title: "Higher First-Time Fix Rates",
    description:
      "Help technicians identify issues sooner and arrive better prepared for the repair.",
  },
  {
    icon: MapPin,
    title: "Reach More Customers",
    description:
      "Support customers in remote areas while helping address industry labor shortages.",
  },
  {
    icon: Clock3,
    title: "Faster Service",
    description:
      "Meet customer expectations with quicker and more timely service inspections.",
  },
  {
    icon: PiggyBank,
    title: "Lower Service Costs",
    description:
      "Reduce unnecessary visits and service expenses through smarter diagnostics.",
  },
  {
    icon: CircleCheck,
    title: "Smarter Technology",
    description:
      "Use modern diagnostic technology to better meet the evolving needs of the industry.",
  },
  {
    icon: Smile,
    title: "Better Experiences",
    description:
      "Improve the overall service journey and increase customer satisfaction.",
  },
  {
    icon: Handshake,
    title: "Take Care of Customers",
    description:
      "Deliver dependable support that helps build confidence and long-term customer relationships.",
  },
];

export default function Page() {
  return (
    <>
      <Hero />

      <section className="py-18 px-4">
        <div className="mx-auto grid max-w-360 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

          <div>
            <p className="badge mb-4">
              Peace of Mind Protection
            </p>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Protection designed for the unexpected.
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              TruCare Plans are designed to help protect customers from everyday
              unexpected failures and mishaps. With no surprise costs and expert
              service, customers get dependable protection and greater peace of
              mind.
            </p>

            <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              TruCare Protection was created by a team of protection plan and
              service industry experts, offering coverage for appliances,
              electronics, and furniture.
            </p>

            <div className="mt-8">
              <PrimaryBtn href="/protection-plans">
                Explore Protection Plans
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 px-4">
        <div className="mx-auto grid max-w-360 items-center gap-12 md:grid-cols-2 lg:gap-16">

          <div>
            <p className="badge mb-4">
              Day-One Protection
            </p>

            <h2 className="heading mb-5 max-w-xl">
              TruCare Offers Protection
              <span className="text-primary"> From Day One</span>
            </h2>

            <div className="mb-7 h-3 w-84 bg-[repeating-linear-gradient(-45deg,#ef4444_0,#ef4444_4px,transparent_4px,transparent_8px)]" />

            <p className="mb-8 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Everyday life can be unpredictable. TruCare Protection Plans help
              give customers added confidence with coverage designed for common
              failures, accidents, and unexpected mishaps.
            </p>

            <ul className="grid gap-4 sm:grid-cols-2">
              {protectionBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium leading-6 text-neutral-800 sm:text-base"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-primary">
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-5 -z-10 rounded-3xl bg-red-50"
            />

            <Image
              src="/assets/trucare-day-one-protection.jpg"
              alt="TruCare protection for everyday unexpected failures and mishaps"
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

      <BrandMarquee />

      <section className="overflow-hidden py-18 px-4">
        <div className="mx-auto max-w-360">

          <header className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="badge mb-4">
                Smarter Service
              </p>

              <h2 className="heading">
                Remote Diagnostics.
                <span className="text-primary"> Better Outcomes.</span>
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                From remote diagnostics to in-home service, TruCare gives our
                partners and customers smarter tools to resolve issues faster,
                reduce unnecessary costs, and deliver a better service
                experience.
              </p>
            </div>
          </header>

          {/* Benefits */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diagnosticBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className={`group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--primary-color) hover:bg-(--primary-color) hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-7 ${index === 0 ? "lg:col-span-2" : ""
                    }`}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-red-50 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-(--primary-color)">
                      <Icon
                        size={22}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="text-xs font-semibold tracking-[0.16em] text-neutral-300 transition-colors duration-300 group-hover:text-white/60">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950 transition-colors duration-300 group-hover:text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600 transition-colors duration-300 group-hover:text-white/80 md:text-base md:leading-7">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-18 px-4">
        <div className="mx-auto grid max-w-360 items-center gap-12 md:grid-cols-2 lg:gap-16">

          <div>
            <p className="badge mb-4">
              Diagnostics
            </p>

            <h2 className="heading mb-5 max-w-xl">
              Remote Diagnostics
            </h2>

            <div className="mb-7 h-3 w-84 bg-[repeating-linear-gradient(-45deg,#ef4444_0,#ef4444_4px,transparent_4px,transparent_8px)]" />

            <p className="mb-8 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              With TruCare´s remote diagnostics technology, technicians see precisely what de customer sees to better understand the product´s space and layout in the home without physically being at the service site. Technicians can communicate with customers visually ang help guide customers to the source of the repair needs.

            </p>
          </div>

          <figure className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-5 -z-10 rounded-3xl bg-red-50"
            />

            <Image
              src="/assets/remote-diagnostics.jpg"
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
    </>
  );
}