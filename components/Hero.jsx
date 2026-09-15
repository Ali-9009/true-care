"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import PrimaryBtn from "@/components/PrimaryBtn";

const slides = [
  {
    id: 1,
    eyebrow: "Service Partners",
    title: "Become a",
    highlight: "Service Partner.",
    description:
      "Join our trusted network of experienced professionals and grow your repair business with dependable opportunities and support.",
    buttonText: "Become a Service Partner",
    buttonLink: "/service",
    image: "/assets/become-partner.jpg",
  },
  {
    id: 2,
    eyebrow: "Reliable Support",
    title: "Build. Grow.",
    highlight: "Succeed.",
    description:
      "Connect with more customers, expand your service coverage and become part of a professional support network built for growth.",
    buttonText: "Explore Opportunities",
    buttonLink: "/services",
    image: "/assets/grow.jpg",
  },
  {
    id: 3,
    eyebrow: "Work With Us",
    title: "Your skills.",
    highlight: "Your Value.",
    description:
      "Bring your experience to a network that values quality workmanship, customer service and long-term partnerships.",
    buttonText: "Get Started Today",
    buttonLink: "/contact-us",
    image: "/assets/your-skill.jpg",
  },
];

const AUTO_PLAY_TIME = 6000;

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, AUTO_PLAY_TIME);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section
      aria-label="Featured services"
      className="relative overflow-hidden bg-[#fdfdfd]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-red-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-170 max-w-360 items-center gap-12 px-4 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16 ">
        <div className="relative z-10 max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-(--primary-color)"
              >
                {slide.eyebrow}
              </motion.p>

              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl xl:text-[68px]">
                {slide.title}

                <span className="mt-2 block text-(--primary-color)">
                  {slide.highlight}
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <PrimaryBtn href={slide.buttonLink}>
                  {slide.buttonText}
                </PrimaryBtn>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-5">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex flex-1 items-center gap-2">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="group h-5 flex-1 py-2"
                >
                  <span className="block h-0.5 overflow-hidden rounded-full bg-neutral-300">
                    {activeSlide === index && (
                      <motion.span
                        key={activeSlide}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: AUTO_PLAY_TIME / 1000,
                          ease: "linear",
                        }}
                        className="block h-full origin-left bg-(--primary-color)"
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-152 lg:mx-0 lg:ml-auto">
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-[42%_58%_48%_52%/55%_42%_58%_45%] bg-red-500/15 blur-3xl"
          />

          <AnimatePresence mode="wait">
            <motion.figure
              key={slide.id}
              initial={{
                opacity: 0,
                scale: 0.94,
                x: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                scale: 1.03,
                x: -30,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="relative aspect-[1.05/1] overflow-hidden rounded-[42%_58%_48%_52%/55%_42%_58%_45%] border-6 border-white shadow-[0_30px_100px_rgba(220,38,38,0.20)] sm:border-12">
                <motion.div
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    priority={activeSlide === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />
              </div>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}