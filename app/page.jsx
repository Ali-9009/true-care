import Image from "next/image";

import { Check } from "lucide-react";

import Hero from "@/components/Hero";
import Banner from "@/components/Banner";

const protectionBenefits = [
  "Accidental Damage",
  "Electrical & Mechanical Breakdowns",
  "Failures",
  "Mishaps",
  "The Unexpected in Our Everyday Lives",
];

const protectionBenefits2 = [
  "Increase first-time fix rates.",
  "Address industry labor shortages and remote areas",
  "Meet customer demands for quick and timely service inspections.",
  "Reduce unnecessary service costs.",
  "Utilize technology to meet the industry’s needs.",
  "Increase customer satisfaction.",
  "Take care of your customers",
];

const protectionBenefits3 = [
  "Appliances",
  "Furniture",
  "Electronic",
  "And More",
];

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

export default function Page() {
  return (
    <>
      <div className="hidden md:block">
        <Banner />
      </div>

      <div className="block md:hidden">
        <Hero />
      </div>

      <section className="px-6 py-18 bg-(--bg-color)">
        <div className="mx-auto max-w-7xl">
          <p className="text-xl font-semibold leading-7 text-neutral-600">
            Designed to cover customers from daily unexpected failures and mishaps. TruCare Plans come with no Surprise Cost and expert service that provides your customer with Peace of Mind Protection!
          </p>

          <p className="mt-5 text-xl font-semibold leading-7 text-neutral-600">
            TruCare Protection was created by a team of protection plan & service industry experts! Protection Plans for Appliances, Electronics & Furnitures
          </p>
        </div>
      </section>

    

      <section className="px-6 bg-(--bg-color)">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 lg:gap-16">

          <figure className="relative">
            <div aria-hidden="true" />

            <Image
              src="/assets/trucare-day-one-protection.png"
              alt="TruCare protection for everyday unexpected failures and mishaps"
              width={1200}
              height={1000}
              className="h-auto w-full object-cover"
            />

            <figcaption className="sr-only">
              TruCare day-one protection coverage
            </figcaption>
          </figure>

          <div>
            <h2 className="heading mb-5 max-w-xl">
              Trucare Offers Day-One Protection On:
            </h2>

            <ul className="space-y-2">
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
        </div>
      </section>

      <section className="px-6 bg-(--bg-color)">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 lg:gap-16">

          <div>
            <h2 className="heading mb-5 max-w-xl">
              Remote Diagnostics
            </h2>

            <p className="mb-8 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              With TruCare´s remote diagnostics technology, technicians see precisely what de customer sees to better understand the product´s space and layout in the home without physically being at the service site. Technicians can communicate with customers visually ang help guide customers to the source of the repair needs.

            </p>
          </div>

          <figure className="relative">
            <div aria-hidden="true" />

            <Image
              src="/assets/remote-diagnostics.png"
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

      <section className="pb-16 px-6 pt-8 bg-(--bg-color)">
        <div className="mx-auto max-w-7xl">

          <div>
            <h2 className="heading mb-5">
              Our Remote Diagnostics to our in-home service capabilities provide our partners and customers with the following:
            </h2>

            <ul className="space-y-2">
              {protectionBenefits2.map((item) => (
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
        </div>
      </section>

      <section className="px-6 bg-(--bg-color)">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 lg:gap-16">

          <figure className="relative">
            <div aria-hidden="true" />

            <Image
              src="/assets/home-2.webp"
              alt="TruCare protection for everyday unexpected failures and mishaps"
              width={1200}
              height={1000}
              className="h-auto w-full object-cover"
            />

            <figcaption className="sr-only">
              TruCare day-one protection coverage
            </figcaption>
          </figure>

          <div className="flex justify-center">
            <ul className="space-y-2">
              {protectionBenefits3.map((item) => (
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
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading mb-5 text-center">
            TruCare Protection Partners
          </h2>

          <div className="grid grid-cols-2 items-center gap-x-10 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((partner) => (
              <div
                key={partner.name}
                className="flex min-h-[120px] items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={260}
                  height={160}
                  className="max-h-[200px] w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}