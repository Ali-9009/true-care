import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-[#777]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-7 py-16 md:grid-cols-2 md:px-8 lg:px-7">
        {/* Logo */}
        <div className="flex items-start">
          <Link href="/" aria-label="TruCare Protection home">
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
        <div className="md:justify-self-end">
          <div className="space-y-3">
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
          </div>
        </div>
      </div>

      <div className="border-t border-[#dddddd]">
        <div className="mx-auto max-w-[1280px] px-7 py-[62px] md:px-10 lg:px-7">
          <p className="text-[14px] text-[#333]">
            <Link href="/" className="text-[#777] underline">
              TruCare Protection
            </Link>{" "}
            © {new Date().getFullYear()}, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
