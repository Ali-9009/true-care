import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-[#777]">
      <div className="mx-auto grid min-h-[360px] max-w-[1280px] grid-cols-1 gap-12 px-7 py-16 md:grid-cols-2 md:px-10 lg:px-7">
        {/* Logo */}
        <div className="flex items-start">
          <Link
            href="/"
            aria-label="TruCare Protection home"
          >
            <Image
              src="/assets/TruCareProtection.png"
              alt="TruCare Protection"
              width={250}
              height={100}
              className="h-auto w-[245px] object-contain"
            />
          </Link>
        </div>

        {/* Connect */}
        <div className="md:justify-self-end md:min-w-[290px]">
          <h2 className="mb-5 text-[25px] font-semibold text-[#ff1f2d]">
            Connect
          </h2>

          <div className="space-y-3">
            <Link
              href="tel:8886992TRU"
              className="flex items-center gap-5 text-[#ff1f2d]"
            >
              <i
                className="ri-phone-fill text-[21px]"
                aria-hidden="true"
              />

              <span className="text-[31px] font-light leading-none">
                888-699-2TRU
              </span>
            </Link>

            <div className="flex items-start gap-2">
              <i
                className="ri-map-pin-fill mt-1 text-[18px]"
                aria-hidden="true"
              />

              <p className="max-w-[280px] text-[16px] leading-7">
                1692 Coastal Highway, Lewes,
                <br />
                Delaware, 19958
              </p>
            </div>

            <Link
              href="mailto:info@trucareprotection.com"
              className="flex items-center gap-2 text-[16px] text-[#ff1f2d] hover:underline"
            >
              <i
                className="ri-mail-fill text-[18px] text-[#777]"
                aria-hidden="true"
              />

              info@trucareprotection.com
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2 text-[16px] text-[#ff1f2d] hover:underline"
            >
              <i
                className="ri-linkedin-fill text-[18px] text-[#777]"
                aria-hidden="true"
              />

              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#dddddd]">
        <div className="mx-auto max-w-[1280px] px-7 py-[62px] md:px-10 lg:px-7">
          <p className="text-[14px] text-[#333]">
            <Link
              href="/"
              className="text-[#777] underline"
            >
              TruCare Protection
            </Link>{" "}
            © {new Date().getFullYear()}, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}