"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
    buttonLink: "#",
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
    buttonLink: "#",
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
    buttonLink: "#",
    image: "/assets/your-skill.jpg",
  },
];

const AUTO_PLAY_TIME = 8000;

const transition = {
  duration: 1.5,
  ease: [0.16, 1, 0.3, 1],
};

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1);
      setActiveSlide((current) => (current + 1) % slides.length);
    }, AUTO_PLAY_TIME);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  const slide = slides[activeSlide];

  return (
    <section
      aria-label="Featured services"
      className="relative overflow-hidden bg-(--bg-color)"
    >
      {/* TOP PROGRESS BAR */}
      <div className="absolute left-0 top-0 z-50 h-1 w-full bg-neutral-200">
        <motion.div
          key={`progress-${activeSlide}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: AUTO_PLAY_TIME / 1000,
            ease: "linear",
          }}
          className="h-full w-full origin-left bg-neutral-400"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div
          className="
            relative
            flex min-h-screen flex-col
            justify-center"
        >
          <div
            className="
              grid items-center
              gap-12
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-16
            "
          >
            {/* TEXT */}
            <div
              className="
                relative z-20
                min-h-105
                sm:min-h-110
                lg:min-h-120
              "
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={slide.id}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 100 : -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -80 : 80,
                  }}
                  transition={transition}
                  className="
                    absolute inset-x-0
                    top-1/2
                    -translate-y-1/2
                    lg:max-w-xl
                  "
                >
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 16,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.35,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      mb-4
                      text-xs font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-(--primary-color)
                      sm:mb-5 sm:text-sm
                    "
                  >
                    {slide.eyebrow}
                  </motion.p>

                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 24,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.45,
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      text-[40px]
                      font-bold
                      leading-[1.05]
                      tracking-[-0.04em]
                      text-neutral-950
                      sm:text-5xl
                      lg:text-6xl
                      xl:text-[68px]
                    "
                  >
                    {slide.title}

                    <span className="mt-1 block text-(--primary-color)">
                      {slide.highlight}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 24,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.58,
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      mt-5
                      max-w-lg
                      text-[15px]
                      leading-7
                      text-neutral-600
                      sm:mt-6
                      sm:text-lg
                      sm:leading-8
                    "
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.7,
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mt-7 sm:mt-8"
                  >
                    <PrimaryBtn href={slide.buttonLink}>
                      {slide.buttonText}
                    </PrimaryBtn>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* IMAGE */}
            <div
              className="
                relative
                mx-auto
                aspect-square
                w-full
                max-w-100
                sm:max-w-125
                lg:ml-auto
                lg:max-w-145
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-[7%]
                  rounded-full
                  bg-(--primary-color)/20
                  blur-3xl
                "
              />

              <AnimatePresence initial={false} custom={direction}>
                <motion.figure
                  key={slide.id}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 70 : -70,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -50 : 50,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 1.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full w-full rounded-full p-2 sm:p-3">
                    <div
                      className="
                        absolute inset-2
                        rounded-full
                        shadow-[0_0_25px_rgba(220,38,38,0.4),0_0_70px_rgba(220,38,38,0.2)]
                      "
                    />

                    <div
                      className="
                        relative h-full w-full
                        overflow-hidden
                        rounded-full
                        border-5 border-white
                        sm:border-8
                      "
                    >
                      <motion.div
                        initial={{ scale: 1.08 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={slide.image}
                          alt=""
                          fill
                          priority={activeSlide === 0}
                          sizes="
                            (max-width: 640px) 90vw,
                            (max-width: 1024px) 70vw,
                            45vw
                          "
                          className="object-cover"
                        />
                      </motion.div>

                      <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          {/* BOTTOM CONTROLS */}
          <div
            className="
              mt-10
              flex items-center
              justify-between
              lg:absolute
              lg:bottom-10
              lg:left-0
              lg:mt-0
            "
          >
          </div>
        </div>
      </div>
    </section>
  );
}